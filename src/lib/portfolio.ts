import "server-only";

import { getPrisma } from "@/lib/prisma";

export async function getPortfolioData() {
  const prisma = getPrisma();
  const [projects, experiences, skills, links, cvSetting] = await Promise.all([
    prisma.project.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.experience.findMany({ orderBy: { sortOrder: "asc" } }),
    prisma.skill.findMany({ where: { category: "tech-stack" }, orderBy: { sortOrder: "asc" } }),
    prisma.link.findMany({ where: { category: "social" }, orderBy: { sortOrder: "asc" } }),
    prisma.siteSetting.findUnique({ where: { key: "cv_url" } }),
  ]);

  return {
    projects,
    experiences,
    skills,
    links: Object.fromEntries(links.map((link) => [link.key, link])),
    cvUrl: cvSetting?.value ?? "#",
  };
}
