This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Database (Prisma + Supabase)

1. Buat project Supabase, lalu salin `.env.example` menjadi `.env.local`.
2. Isi `DATABASE_URL` dengan Transaction Pooler dan `DIRECT_URL` dengan Direct Connection dari **Supabase → Connect**.
3. Terapkan migration dan masukkan data portfolio:

```bash
pnpm db:deploy
pnpm db:seed
```

Saat mengubah `prisma/schema.prisma` pada development, buat migration baru dengan `pnpm db:migrate --name nama_perubahan`.

Untuk production, jalankan `pnpm db:deploy` saat deployment. Jangan pernah memakai prefix `NEXT_PUBLIC_` untuk kedua connection string karena kredensial database hanya boleh tersedia di server.

### CMS

CMS tersedia di `/admin`. Tambahkan `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, dan `ADMIN_EMAIL` ke `.env.local` sesuai `.env.example`, lalu:

1. Buka **Supabase → Authentication → Users → Add user** dan buat user dengan email yang sama seperti `ADMIN_EMAIL`.
2. Jalankan `pnpm db:deploy` agar bucket Storage `portfolio` dan policy upload dibuat.
3. Login lewat `/admin/login`.

Project dan experience dapat dibuat, diedit, dihapus, serta diberi gambar baru dari CMS. Gambar baru disimpan di Supabase Storage; asset lama tetap didukung dari bundle aplikasi.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# web-portfolio" 
