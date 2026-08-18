const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

export const siteConfig = {
  name: "Fahmi Achmad Fahrudin",
  title: "Fahmi Achmad Fahrudin — Frontend Developer in Indonesia",
  description:
    "Portfolio of Fahmi Achmad Fahrudin, a frontend developer and interface designer in Indonesia building fast, accessible, and thoughtful web products.",
  url: new URL(
    configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`,
  ).origin,
  locale: "en_US",
  social: {
    github: "https://github.com/fahmiaf13",
    linkedin: "https://www.linkedin.com/in/fahmi-achmad-fahrudin",
    twitter: "https://twitter.com/fahmiaf13",
  },
};
