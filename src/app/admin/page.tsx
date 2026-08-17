import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { getPrisma } from "@/lib/prisma";
import { deleteExperience, deleteLink, deleteProject, deleteSkill, logout, saveCv, saveExperience, saveLink, saveProject, saveSkill } from "./actions";

const input = "mt-1 block w-full border border-ink bg-white px-3 py-2 text-sm outline-none focus:shadow-[3px_3px_0_var(--color-yellow)]";
const label = "block text-xs font-bold";
const save = "border border-ink bg-green px-4 py-2 font-mono text-[10px] font-bold text-white hover:bg-ink";
const remove = "border border-red px-3 py-2 font-mono text-[10px] font-bold text-red hover:bg-red hover:text-white";

function FormHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return <div className="mb-5"><h3 className="font-display text-4xl leading-none">{title}</h3><p className="mt-1 text-xs text-ink/60">{subtitle}</p></div>;
}

export default async function AdminPage() {
  const user = await requireAdmin();
  const prisma = getPrisma();
  const [projects, experiences, skills, links, cvSetting] = await Promise.all([
    prisma.project.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.experience.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.skill.findMany({ orderBy: [{ category: "asc" }, { sortOrder: "asc" }] }),
    prisma.link.findMany({ orderBy: [{ category: "asc" }, { sortOrder: "asc" }] }),
    prisma.siteSetting.findUnique({ where: { key: "cv_url" } }),
  ]);

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-ink bg-paper px-[3vw] py-4">
        <div><p className="font-mono text-[9px] font-bold text-green">PORTFOLIO CMS</p><h1 className="font-display text-4xl leading-none">CONTENT ADMIN</h1></div>
        <nav className="flex items-center gap-3"><Link href="/" target="_blank" className="border border-ink px-3 py-2 font-mono text-[10px] font-bold">LIHAT WEB ↗</Link><form action={logout}><button className={remove}>KELUAR</button></form></nav>
      </header>

      <div className="mx-auto max-w-6xl px-[3vw] py-10">
        <p className="mb-8 font-mono text-[10px]">LOGIN: {user.email}</p>

        <section className="mb-12" id="cv">
          <FormHeader title="CURRICULUM VITAE" subtitle="PDF maksimal 5 MB · upload baru akan menimpa CV sebelumnya" />
          <form action={saveCv} className="flex items-end gap-4 border border-ink bg-white p-4 max-[650px]:flex-col max-[650px]:items-stretch">
            <label className={`${label} grow`}>File CV<input className={input} name="cv" type="file" accept="application/pdf,.pdf" required /></label>
            {cvSetting?.value ? <a href={cvSetting.value} target="_blank" rel="noreferrer" className="border border-ink px-4 py-2 font-mono text-[10px] font-bold">LIHAT CV ↗</a> : null}
            <button className={save}>UPLOAD CV</button>
          </form>
        </section>

        <section className="mb-12" id="projects">
          <FormHeader title="PROJECTS" subtitle={`${projects.length} project · edit teks dan upload gambar baru bila diperlukan`} />
          <div className="space-y-3">
            {projects.map((project) => <details key={project.id} className="border border-ink bg-white"><summary className="cursor-pointer px-4 py-3 font-bold">{String(project.sortOrder + 1).padStart(2, "0")} — {project.name}</summary><ProjectForm project={project} /></details>)}
            <details className="border border-dashed border-green bg-green/5"><summary className="cursor-pointer px-4 py-3 font-bold text-green">＋ TAMBAH PROJECT</summary><ProjectForm /></details>
          </div>
        </section>

        <section className="mb-12" id="experiences">
          <FormHeader title="EXPERIENCE" subtitle={`${experiences.length} pengalaman kerja · satu poin deskripsi per baris`} />
          <div className="space-y-3">
            {experiences.map((item) => <details key={item.id} className="border border-ink bg-white"><summary className="cursor-pointer px-4 py-3 font-bold">{String(item.sortOrder + 1).padStart(2, "0")} — {item.company}</summary><ExperienceForm item={item} /></details>)}
            <details className="border border-dashed border-green bg-green/5"><summary className="cursor-pointer px-4 py-3 font-bold text-green">＋ TAMBAH EXPERIENCE</summary><ExperienceForm /></details>
          </div>
        </section>

        <section className="mb-12" id="skills">
          <FormHeader title="SKILLS" subtitle={`${skills.length} skill · icon menggunakan nama Iconify`} />
          <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
            {skills.map((item) => <details key={item.id} className="border border-ink bg-white"><summary className="cursor-pointer px-4 py-3 font-bold">{item.name} <small className="font-normal text-ink/50">/{item.category}</small></summary><SkillForm item={item} /></details>)}
            <details className="border border-dashed border-green bg-green/5"><summary className="cursor-pointer px-4 py-3 font-bold text-green">＋ TAMBAH SKILL</summary><SkillForm /></details>
          </div>
        </section>

        <section id="links">
          <FormHeader title="LINKS" subtitle={`${links.length} social dan support link`} />
          <div className="grid grid-cols-2 gap-3 max-[700px]:grid-cols-1">
            {links.map((item) => <details key={item.id} className="border border-ink bg-white"><summary className="cursor-pointer px-4 py-3 font-bold">{item.key} <small className="font-normal text-ink/50">/{item.category}</small></summary><LinkForm item={item} /></details>)}
            <details className="border border-dashed border-green bg-green/5"><summary className="cursor-pointer px-4 py-3 font-bold text-green">＋ TAMBAH LINK</summary><LinkForm /></details>
          </div>
        </section>
      </div>
    </main>
  );
}

type ProjectItem = Awaited<ReturnType<ReturnType<typeof getPrisma>["project"]["findFirst"]>>;
function ProjectForm({ project }: { project?: NonNullable<ProjectItem> }) {
  return <form action={saveProject} className="grid grid-cols-2 gap-4 border-t border-ink p-4 max-[650px]:grid-cols-1">
    <input type="hidden" name="id" value={project?.id ?? ""} />
    <label className={label}>Nama<input className={input} name="name" required defaultValue={project?.name} /></label>
    <label className={label}>Link<input className={input} name="link" type="url" required defaultValue={project?.link} /></label>
    <label className={`${label} col-span-full`}>Deskripsi<textarea className={input} name="description" rows={3} required defaultValue={project?.description} /></label>
    <label className={label}>Background CSS<input className={input} name="color" required defaultValue={project?.color ?? "radial-gradient(circle, #23745d, #20201d)"} /></label>
    <div />
    <label className={label}>Preview project {project ? <small className="font-normal">(kosongkan untuk mempertahankan)</small> : null}<input className={input} name="image" type="file" accept="image/*" required={!project} /></label>
    <label className={label}>Logo {project ? <small className="font-normal">(kosongkan untuk mempertahankan)</small> : null}<input className={input} name="icon" type="file" accept="image/*" required={!project} /></label>
    <div className="col-span-full flex justify-between"><button className={save}>SIMPAN PROJECT</button>{project ? <button formAction={deleteProject} className={remove}>HAPUS</button> : null}</div>
  </form>;
}

type ExperienceItem = Awaited<ReturnType<ReturnType<typeof getPrisma>["experience"]["findFirst"]>>;
function ExperienceForm({ item }: { item?: NonNullable<ExperienceItem> }) {
  return <form action={saveExperience} className="grid grid-cols-2 gap-4 border-t border-ink p-4 max-[650px]:grid-cols-1">
    <input type="hidden" name="id" value={item?.id ?? ""} />
    <label className={label}>Perusahaan<input className={input} name="company" required defaultValue={item?.company} /></label>
    <label className={label}>Role<input className={input} name="role" required defaultValue={item?.role} /></label>
    <label className={label}>Periode<input className={input} name="period" required defaultValue={item?.period} /></label>
    <label className={label}>Status<input className={input} name="status" required defaultValue={item?.status} /></label>
    <label className={`${label} col-span-full`}>Deskripsi<textarea className={input} name="description" rows={6} required defaultValue={item?.description.join("\n")} /></label>
    <label className={label}>Logo perusahaan<input className={input} name="icon" type="file" accept="image/*" required={!item} /></label>
    <div className="col-span-full flex justify-between"><button className={save}>SIMPAN EXPERIENCE</button>{item ? <button formAction={deleteExperience} className={remove}>HAPUS</button> : null}</div>
  </form>;
}

type SkillItem = Awaited<ReturnType<ReturnType<typeof getPrisma>["skill"]["findFirst"]>>;
function SkillForm({ item }: { item?: NonNullable<SkillItem> }) {
  return <form action={saveSkill} className="grid gap-3 border-t border-ink p-4"><input type="hidden" name="id" value={item?.id ?? ""} /><label className={label}>Nama<input className={input} name="name" required defaultValue={item?.name} /></label><label className={label}>Iconify icon<input className={input} name="icon" required placeholder="fa-brands:react" defaultValue={item?.icon} /></label><label className={label}>Link<input className={input} name="link" type="url" required defaultValue={item?.link} /></label><label className={label}>Kategori<select className={input} name="category" defaultValue={item?.category ?? "tech-stack"}><option value="tech-stack">Tech stack</option><option value="other">Other</option></select></label><label className={label}>Deskripsi<textarea className={input} name="description" rows={3} defaultValue={item?.description ?? ""} /></label><label className={label}>Warna<input className={input} name="color" placeholder="#006CB8" defaultValue={item?.color ?? ""} /></label><div className="flex justify-between"><button className={save}>SIMPAN</button>{item ? <button formAction={deleteSkill} className={remove}>HAPUS</button> : null}</div></form>;
}

type LinkItem = Awaited<ReturnType<ReturnType<typeof getPrisma>["link"]["findFirst"]>>;
function LinkForm({ item }: { item?: NonNullable<LinkItem> }) {
  return <form action={saveLink} className="grid gap-3 border-t border-ink p-4"><input type="hidden" name="id" value={item?.id ?? ""} /><label className={label}>Key<input className={input} name="key" required placeholder="github" defaultValue={item?.key} /></label><label className={label}>Iconify icon<input className={input} name="icon" required placeholder="mdi:github" defaultValue={item?.icon} /></label><label className={label}>URL<input className={input} name="url" type="url" required defaultValue={item?.url} /></label><label className={label}>Kategori<select className={input} name="category" defaultValue={item?.category ?? "social"}><option value="social">Social</option><option value="support">Support</option></select></label><div className="flex justify-between"><button className={save}>SIMPAN</button>{item ? <button formAction={deleteLink} className={remove}>HAPUS</button> : null}</div></form>;
}
