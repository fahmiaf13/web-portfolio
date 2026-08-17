import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const getAdminUser = cache(async () => {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();
  const user = error ? null : data.user;
  const adminEmail = process.env.ADMIN_EMAIL?.toLowerCase();

  if (!user || (adminEmail && user.email?.toLowerCase() !== adminEmail)) return null;
  return user;
});

export async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");
  return user;
}
