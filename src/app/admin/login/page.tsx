import { redirect } from "next/navigation";
import { getAdminUser } from "@/lib/auth";
import { login } from "./actions";

export default async function AdminLogin({ searchParams }: PageProps<"/admin/login">) {
  if (await getAdminUser()) redirect("/admin");
  const { error } = await searchParams;

  return (
    <main className="grid min-h-screen place-items-center bg-ink p-5 text-ink">
      <form action={login} className="w-full max-w-md border border-ink bg-paper p-8 shadow-[8px_8px_0_var(--color-red)]">
        <p className="font-mono text-[10px] font-bold tracking-widest text-green">PORTFOLIO CMS</p>
        <h1 className="mt-3 mb-7 font-display text-6xl leading-none">ADMIN LOGIN</h1>
        {error ? <p className="mb-5 border border-red bg-red/10 p-3 text-sm text-red">{error}</p> : null}
        <label className="mb-4 block text-sm font-bold">Email<input name="email" type="email" required autoComplete="email" className="mt-1.5 block w-full border border-ink bg-white p-3 font-normal outline-none focus:shadow-[3px_3px_0_var(--color-yellow)]" /></label>
        <label className="mb-6 block text-sm font-bold">Password<input name="password" type="password" required autoComplete="current-password" className="mt-1.5 block w-full border border-ink bg-white p-3 font-normal outline-none focus:shadow-[3px_3px_0_var(--color-yellow)]" /></label>
        <button className="w-full border border-ink bg-green p-3 font-mono text-xs font-bold text-white hover:bg-ink">MASUK →</button>
      </form>
    </main>
  );
}
