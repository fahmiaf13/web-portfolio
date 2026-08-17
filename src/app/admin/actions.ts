"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getPrisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const text = (data: FormData, key: string, required = true) => {
  const value = String(data.get(key) ?? "").trim();
  if (required && !value) throw new Error(`${key} wajib diisi.`);
  return value;
};

const number = (data: FormData, key: string) => {
  const value = Number(text(data, key));
  if (!Number.isInteger(value)) throw new Error(`${key} tidak valid.`);
  return value;
};

function storagePathFromUrl(value: string) {
  const marker = "/storage/v1/object/public/portfolio/";
  const index = value.indexOf(marker);
  if (index === -1) return null;
  return decodeURIComponent(value.slice(index + marker.length).split("?")[0]);
}

async function uploadAsset(data: FormData, field: string, fallback: string, path: string) {
  const file = data.get(field);
  if (!(file instanceof File) || file.size === 0) return fallback;
  if (!file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) throw new Error("Gambar harus berformat image dan maksimal 5 MB.");

  await requireAdmin();
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.storage.from("portfolio").upload(path, file, {
    contentType: file.type,
    cacheControl: "0",
    upsert: true,
  });
  if (error) throw new Error(`Upload gagal: ${error.message}`);

  const previousPath = storagePathFromUrl(fallback);
  if (previousPath && previousPath !== path) await supabase.storage.from("portfolio").remove([previousPath]);

  const publicUrl = supabase.storage.from("portfolio").getPublicUrl(path).data.publicUrl;
  return `${publicUrl}?v=${Date.now()}`;
}

async function removeStoredAssets(values: string[]) {
  const paths = values.map(storagePathFromUrl).filter((path): path is string => Boolean(path));
  if (!paths.length) return;
  const supabase = await createSupabaseServerClient();
  await supabase.storage.from("portfolio").remove(paths);
}

function refreshCms() {
  revalidatePath("/");
  revalidatePath("/admin");
}

export async function logout() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function saveCv(data: FormData) {
  await requireAdmin();
  const file = data.get("cv");
  if (!(file instanceof File) || file.size === 0) throw new Error("File CV wajib dipilih.");
  if (file.type !== "application/pdf" || file.size > 5 * 1024 * 1024) throw new Error("CV harus berupa PDF dan maksimal 5 MB.");

  const supabase = await createSupabaseServerClient();
  const path = "documents/cv";
  const { error } = await supabase.storage.from("portfolio").upload(path, file, {
    contentType: "application/pdf",
    cacheControl: "0",
    upsert: true,
  });
  if (error) throw new Error(`Upload CV gagal: ${error.message}`);

  const publicUrl = supabase.storage.from("portfolio").getPublicUrl(path).data.publicUrl;
  await getPrisma().siteSetting.upsert({
    where: { key: "cv_url" },
    update: { value: `${publicUrl}?v=${Date.now()}` },
    create: { key: "cv_url", value: `${publicUrl}?v=${Date.now()}` },
  });
  refreshCms();
}

export async function saveProject(data: FormData) {
  await requireAdmin();
  const prisma = getPrisma();
  const rawId = text(data, "id", false);
  const existing = rawId ? await prisma.project.findUniqueOrThrow({ where: { id: Number(rawId) } }) : null;
  const last = existing ? null : await prisma.project.aggregate({ _max: { id: true, sortOrder: true } });
  const id = existing?.id ?? (last?._max.id ?? -1) + 1;
  const imageKey = await uploadAsset(data, "image", existing?.imageKey ?? "", `projects/${id}/preview`);
  const iconKey = await uploadAsset(data, "icon", existing?.iconKey ?? "", `projects/${id}/logo`);
  if (!imageKey || !iconKey) throw new Error("Gambar project dan logo wajib diisi.");
  const values = { name: text(data, "name"), description: text(data, "description"), color: text(data, "color"), link: text(data, "link"), imageKey, iconKey };

  if (existing) await prisma.project.update({ where: { id: existing.id }, data: values });
  else await prisma.project.create({ data: { ...values, id, sortOrder: (last?._max.sortOrder ?? -1) + 1 } });
  refreshCms();
}

export async function deleteProject(data: FormData) {
  await requireAdmin();
  const prisma = getPrisma();
  const project = await prisma.project.delete({ where: { id: number(data, "id") } });
  await removeStoredAssets([project.imageKey, project.iconKey]);
  refreshCms();
}

export async function saveExperience(data: FormData) {
  await requireAdmin();
  const prisma = getPrisma();
  const rawId = text(data, "id", false);
  const existing = rawId ? await prisma.experience.findUniqueOrThrow({ where: { id: Number(rawId) } }) : null;
  const last = existing ? null : await prisma.experience.aggregate({ _max: { id: true, sortOrder: true } });
  const id = existing?.id ?? (last?._max.id ?? -1) + 1;
  const iconKey = await uploadAsset(data, "icon", existing?.iconKey ?? "", `experiences/${id}/logo`);
  if (!iconKey) throw new Error("Logo perusahaan wajib diisi.");
  const values = { company: text(data, "company"), role: text(data, "role"), period: text(data, "period"), status: text(data, "status"), iconKey, description: text(data, "description").split("\n").map((item) => item.trim()).filter(Boolean) };

  if (existing) await prisma.experience.update({ where: { id: existing.id }, data: values });
  else await prisma.experience.create({ data: { ...values, id, sortOrder: (last?._max.sortOrder ?? -1) + 1 } });
  refreshCms();
}

export async function deleteExperience(data: FormData) {
  await requireAdmin();
  const experience = await getPrisma().experience.delete({ where: { id: number(data, "id") } });
  await removeStoredAssets([experience.iconKey]);
  refreshCms();
}

export async function saveSkill(data: FormData) {
  await requireAdmin();
  const prisma = getPrisma();
  const rawId = text(data, "id", false);
  const values = { name: text(data, "name"), icon: text(data, "icon"), link: text(data, "link"), description: text(data, "description", false) || null, color: text(data, "color", false) || null, category: text(data, "category") };
  if (rawId) await prisma.skill.update({ where: { id: Number(rawId) }, data: values });
  else {
    const last = await prisma.skill.aggregate({ where: { category: values.category }, _max: { sortOrder: true } });
    await prisma.skill.create({ data: { ...values, sortOrder: (last._max.sortOrder ?? -1) + 1 } });
  }
  refreshCms();
}

export async function deleteSkill(data: FormData) {
  await requireAdmin();
  await getPrisma().skill.delete({ where: { id: number(data, "id") } });
  refreshCms();
}

export async function saveLink(data: FormData) {
  await requireAdmin();
  const prisma = getPrisma();
  const rawId = text(data, "id", false);
  const values = { key: text(data, "key").toLowerCase(), icon: text(data, "icon"), url: text(data, "url"), category: text(data, "category") };
  if (rawId) await prisma.link.update({ where: { id: Number(rawId) }, data: values });
  else {
    const last = await prisma.link.aggregate({ where: { category: values.category }, _max: { sortOrder: true } });
    await prisma.link.create({ data: { ...values, sortOrder: (last._max.sortOrder ?? -1) + 1 } });
  }
  refreshCms();
}

export async function deleteLink(data: FormData) {
  await requireAdmin();
  await getPrisma().link.delete({ where: { id: number(data, "id") } });
  refreshCms();
}
