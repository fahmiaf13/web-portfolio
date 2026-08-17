import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DIRECT_URL atau DATABASE_URL belum diatur.");
}

const prisma = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });

const projects = [
  { id: 0, name: "Ommar", imageKey: "ommar-project", iconKey: "ommar-logo", description: "fundraising website for a non-profit activity in a religious event.", color: "radial-gradient(circle, #3fd6eb, #34c5d9, #28b4c8, #1ba3b7, #0993a6)", link: "https://staging.ommar.net", sortOrder: 0 },
  { id: 1, name: "STAMP Pertamina", imageKey: "stamp-project", iconKey: "stamp-logo", description: "Stakeholder Management System of Pertamina is an application for managing data of institutions and stakeholders that have an impact on Pertamina policy.", color: "radial-gradient(circle, #4fa0da, #3f93d2, #2e86c9, #1c79c1, #006cb8)", link: "https://stamp.pertamina-ptc.com/", sortOrder: 1 },
  { id: 2, name: "Sagara Group", imageKey: "sagara-project", iconKey: "sagara-logo", description: "A website for company executives and investors to track Sagara Technology's financial performance and product progress.", color: "radial-gradient(circle, #454545, #3b3b3b, #313131, #272727, #1e1e1e)", link: "https://sagara-frontend.vercel.app/", sortOrder: 2 },
];

const experiences = [
  { id: 0, company: "Maybank Sekuritas Indonesia", role: "Front-End Developer", iconKey: "maybank", period: "May 2026 - Present", status: "Contract", description: ["Develop and maintain desktop and mobile applications using React.js, Tauri, and React Native.", "Build reusable and maintainable user interfaces while focusing on application performance, usability, and user experience.", "Implement application and server-state management using Zustand and React Query.", "Integrate REST APIs, WebSocket connections, and Server-Sent Events (SSE) to support application data and real-time functionality.", "Collaborate with Product Owners, Backend Developers, QA Developers, and Team Leaders throughout the software development lifecycle.", "Use GitHub for version control and participate in Agile development workflows using Notion."], sortOrder: 0 },
  { id: 1, company: "OCBC Bank", role: "Front-End Developer", iconKey: "ocbc", period: "Nov 2023 - Apr 2026", status: "Contract", description: ["Developed and maintained web applications using React.js.", "Implemented application state management using Recoil.", "Integrated REST APIs using Axios to support application data and CRUD operations.", "Used Docker for application containerization and Jenkins for deployment.", "Collaborated with Project Managers, Backend Developers, QA Developers, and Team Leaders throughout the development lifecycle.", "Participated in Agile development workflows using Jira and GitLab for version control."], sortOrder: 1 },
  { id: 2, company: "BPJS Ketenagakerjaan", role: "Front-End Developer", iconKey: "bpjs", period: "Feb 2023 - Aug 2023", status: "Contract", description: ["Developed and maintained web applications using Vue.js, Nuxt.js, and Vuetify.", "Developed backend API endpoints using Nuxt.js, Node.js, and Express.js to support application functionality and data integration.", "Implemented application state management using Vuex and utilized Redis middleware for caching.", "Integrated REST APIs using Axios to support application data and CRUD operations.", "Collaborated with Project Managers and Team Leaders throughout the development lifecycle.", "Participated in Agile development workflows using Jira and GitHub for version control."], sortOrder: 2 },
  { id: 3, company: "Soluvas", role: "Front-End Developer", iconKey: "soluvas", period: "Oct 2022 - Jan 2023", status: "Contract", description: ["Collaborated with Project Managers and designers to develop web applications using TypeScript, React.js, Next.js, and Material UI.", "Implemented application state management using Redux Toolkit, Redux Thunk, and Redux Persist.", "Integrated REST APIs using Axios to support application data and CRUD operations.", "Used GitLab for version control and collaborative development workflows."], sortOrder: 3 },
  { id: 4, company: "PT. Sagara Technology", role: "Front-End Engineer", iconKey: "sagara", period: "Aug 2022 - Nov 2022", status: "Internship", description: ["Contributed to internal web application development using React.js and Tailwind CSS.", "Implemented application state management using Redux, Redux Thunk, and Redux Persist.", "Integrated REST APIs using Axios to support application data and CRUD operations.", "Collaborated with Project Managers and Team Leaders throughout the development process."], sortOrder: 4 },
  { id: 5, company: "Magprotech", role: "Embedded System Engineer", iconKey: "magprotech", period: "Dec 2020 - Jul 2021", status: "Contract", description: ["Led the development of an automatic disinfection chamber and automatic fish feeder using Arduino, including software programming and electrical system design.", "Designed and developed interconnected electrical instrumentation systems supporting wired and wireless connectivity.", "Integrated IoT functionality with web interfaces using React.js."], sortOrder: 5 },
];

const skills = [
  ["React", "fa-brands:react", "https://beta.reactjs.org/", "React is a JavaScript library for UI development, providing reusable components and efficient state management.", "#006CB8"],
  ["TypeScript", "mdi:language-typescript", "https://www.typescriptlang.org/", "TypeScript is a statically typed extension of JavaScript with improved scalability and bug-detection, used for large-scale web development projects."],
  ["Redux", "simple-icons:redux", "https://redux-toolkit.js.org/", "Redux is a JavaScript state management library that centralizes app state, facilitates management and debugging, and is often used with React."],
  ["Tailwind", "mdi:tailwind", "https://tailwindcss.com/", "Tailwind is a utility-first CSS framework for fast UI building with pre-designed classes."],
  ["Next", "file-icons:nextjs", "https://nextjs.org/", "Next.js is a React framework for fast and scalable server-rendered web apps with features for optimized performance."],
  ["Node Js", "teenyicons:nodejs-solid", "https://nodejs.org/en/", "Node.js is a server-side JavaScript runtime environment for building fast, scalable network applications."],
  ["Express", "simple-icons:express", "https://www.express.com"],
].map(([name, icon, link, description, color], sortOrder) => ({ name, icon, link, description, color, category: "tech-stack", sortOrder }));

const otherSkills = [
  ["Arduino", "cib:arduino", "https://www.arduino.cc/"],
  ["C", "teenyicons:c-solid", "https://devdocs.io/c/"],
  ["HTML", "icomoon-free:html-five", "https://devdocs.io/html/"],
  ["CSS", "simple-icons:css3", "https://devdocs.io/css/"],
  ["JavaScript", "bxl:javascript", "https://www.javascript.com/"],
  ["Bootstrap", "mdi:bootstrap", "https://getbootstrap.com/"],
  ["Sass", "mdi:sass", "https://sass-lang.com/"],
  ["Vue", "akar-icons:vue-fill", "https://vuejs.org/"],
  ["Nuxt", "simple-icons:nuxtdotjs", "https://nuxt.com/"],
  ["Git", "mdi:git", "https://git-scm.com/"],
  ["Photoshop", "file-icons:adobe-photoshop", "https://www.adobe.com/id_id/products/photoshop.html"],
  ["Illustrator", "file-icons:adobe-illustrator", "https://www.adobe.com/id_id/products/illustrator.html"],
  ["Figma", "ph:figma-logo-bold", "https://www.figma.com/"],
].map(([name, icon, link], sortOrder) => ({ name, icon, link, category: "other", sortOrder }));

const links = [
  { key: "twitter", icon: "mdi:twitter", url: "https://twitter.com/fahmiaf13", category: "social", sortOrder: 0 },
  { key: "github", icon: "mdi:github", url: "https://github.com/fahmiaf13", category: "social", sortOrder: 1 },
  { key: "linkedin", icon: "mdi:linkedin", url: "https://www.linkedin.com/in/fahmi-achmad-fahrudin", category: "social", sortOrder: 2 },
  { key: "nextjs", icon: "file-icons:nextjs", url: "https://nextjs.org/", category: "support", sortOrder: 0 },
  { key: "tailwind", icon: "mdi:tailwind", url: "https://tailwindcss.com/", category: "support", sortOrder: 1 },
  { key: "typescript", icon: "mdi:language-typescript", url: "https://www.typescriptlang.org/", category: "support", sortOrder: 2 },
  { key: "vercel", icon: "ion:logo-vercel", url: "https://vercel.com", category: "support", sortOrder: 3 },
];

async function main() {
  await prisma.$transaction([
    ...projects.map((data) => prisma.project.upsert({ where: { id: data.id }, update: data, create: data })),
    ...experiences.map((data) => prisma.experience.upsert({ where: { id: data.id }, update: data, create: data })),
    ...[...skills, ...otherSkills].map((data) => prisma.skill.upsert({ where: { name: data.name }, update: data, create: data })),
    ...links.map((data) => prisma.link.upsert({ where: { key: data.key }, update: data, create: data })),
  ]);
}

main()
  .then(() => console.log("Portfolio data berhasil dimasukkan ke database."))
  .finally(() => prisma.$disconnect());
