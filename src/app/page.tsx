import Image from "next/image";
import Logo from "@/assets/img/logo.svg";
import Profile from "@/assets/img/me.png";
import { ProjectCardsData } from "@/data/ProjectData";
import { experienceDatas } from "@/data/ExperienceData";
import { icons, skillsIcon } from "@/data/IconsData";

const offers = [
  ["01", "Development", "Responsive websites and web apps built with modern front-end tools."],
  ["02", "Interface Design", "Clear, useful interfaces with thoughtful visual systems."],
  ["03", "Creative Coding", "Interaction and motion that add meaning, not noise."],
];

const sectionLabel = "font-mono text-[10px] font-bold tracking-[0.12em] leading-[1.35]";
const sectionTitle = "mt-[18px] font-display text-[clamp(42px,5vw,76px)] leading-[0.85]";

export default function Home() {
  return (
    <main id="top" className="bg-paper text-ink selection:bg-green selection:text-white">
      <header className="grid h-[72px] grid-cols-[1fr_1fr_1.2fr_auto] items-center gap-[25px] border-b border-ink px-[3vw] font-mono text-[11px] leading-[1.3] font-bold max-[900px]:grid-cols-[1fr_1fr_auto] max-[650px]:h-[68px] max-[650px]:px-[18px]">
        <a className="flex items-center gap-[10px]" href="#top">
          <Image className="rounded-[5px]" src={Logo} alt="" width={50} height={50} priority />
          {/* <span className="text-xs max-[650px]:hidden">FAHMI ACHMAD</span> */}
        </a>
        <p className="max-[900px]:hidden">
          FRONT-END DEVELOPER
          <br />
          &amp; DESIGNER
        </p>
        <nav className="flex justify-center gap-[25px] max-[650px]:gap-3" aria-label="Main navigation">
          <a className="hover:text-red" href="#projects">
            PROJECTS
          </a>
          <a className="hover:text-red" href="#about">
            ABOUT
          </a>
          <a className="hover:text-red" href="#experience">
            EXPERIENCE
          </a>
        </nav>
        <a className="border border-ink px-3 py-[10px] shadow-[3px_3px_0_var(--color-red)] max-[650px]:hidden" href={icons.linkedin.link} target="_blank" rel="noreferrer">
          CONTACT ↗
        </a>
      </header>

      <section className="grid min-h-[calc(100vh-72px)] grid-cols-[55px_1.15fr_0.75fr_0.32fr] items-center gap-[3vw] p-[3vw] max-[900px]:grid-cols-[40px_1fr_0.75fr] max-[650px]:block max-[650px]:px-[18px] max-[650px]:py-[45px]">
        <div className="flex h-full flex-col justify-between border-r border-ink pr-3 font-mono text-[10px] font-bold max-[650px]:h-auto max-[650px]:flex-row max-[650px]:border-r-0 max-[650px]:border-b max-[650px]:pb-[10px] max-[650px]:pr-0">
          <span className="[writing-mode:vertical-rl] max-[650px]:[writing-mode:initial]">PORTFOLIO</span>
          <span className="rotate-180 [writing-mode:vertical-rl] max-[650px]:rotate-0 max-[650px]:[writing-mode:initial]">NO. 01 / 2026</span>
        </div>
        <div className="max-[650px]:my-[45px]">
          <p className="font-mono text-[11px] font-bold tracking-[0.1em]">HELLO, I&apos;M FAHMI — BASED IN INDONESIA</p>
          <h1 className="my-[30px] font-display text-[clamp(65px,8.2vw,128px)] leading-[0.78] tracking-[-0.02em] max-[900px]:text-[clamp(65px,11vw,105px)] max-[650px]:text-[clamp(64px,18vw,110px)]">
            I DESIGN &amp;
            <br />
            BUILD FOR
            <br />
            <em className="not-italic text-red">THE WEB.</em>
          </h1>
          <p className="max-w-[590px] font-serif text-lg leading-normal">A front-end developer with a designer&apos;s eye. I turn ideas into fast, clear, and enjoyable digital products.</p>
          <div className="mt-[30px] flex gap-[25px] font-mono text-[11px] font-bold">
            <a className="border-b border-ink pb-[5px]" href="#projects">
              SEE MY WORK ↓
            </a>
            <a className="border-b border-ink pb-[5px]" href="/CV_Fahmi-Achmad.pdf" target="_blank">
              DOWNLOAD CV ↗
            </a>
          </div>
        </div>
        <figure className="m-0 max-[650px]:mx-auto max-[650px]:max-w-[420px]">
          <Image className="block h-auto w-full border border-ink" src={Profile} alt="Fahmi Achmad Fahrudin" priority />
          <figcaption className="mt-2 flex justify-between font-mono text-[9px] leading-[1.35] font-bold tracking-[0.03em]">
            <span>FAHMI ACHMAD FAHRUDIN</span>
            <span>FIG. 001</span>
          </figcaption>
        </figure>
        <aside className="flex self-stretch flex-col justify-around border-l border-ink pl-[22px] max-[900px]:hidden">
          <div className="flex flex-col gap-[7px]">
            <b className="font-display text-[45px] leading-none text-green">04+</b>
            <span className="font-mono text-[10px] leading-[1.4] font-bold">
              YEARS OF
              <br />
              EXPERIENCE
            </span>
          </div>
          <div className="flex flex-col gap-[7px]">
            <b className="font-display text-[45px] leading-none text-green">03</b>
            <span className="font-mono text-[10px] leading-[1.4] font-bold">
              SELECTED
              <br />
              PROJECTS
            </span>
          </div>
          <div className="flex flex-col gap-[7px]">
            <i className="size-[9px] rounded-full bg-green shadow-[0_0_0_4px_#23745d22]" />
            <span className="font-mono text-[10px] leading-[1.4] font-bold">
              AVAILABLE FOR
              <br />
              NEW OPPORTUNITIES
            </span>
          </div>
        </aside>
      </section>

      <div className="overflow-hidden border-y border-ink bg-green py-[11px] whitespace-nowrap text-white">
        <div className="flex w-max animate-ticker motion-reduce:animate-none">
          {[...skillsIcon.techStack, ...skillsIcon.techStack].map((skill, index) => (
            <span className="mr-[25px] font-mono text-[11px] font-bold" key={`${skill.name}-${index}`}>
              {skill.name.toUpperCase()} <i className="ml-[25px] not-italic text-yellow">✦</i>
            </span>
          ))}
        </div>
      </div>

      <section className="px-[3vw] py-[95px] max-[650px]:px-[18px] max-[650px]:py-[70px]" id="projects">
        <header className="mb-[45px] grid grid-cols-[1fr_0.7fr] items-end gap-[8vw] border-b border-ink pb-[25px] max-[650px]:grid-cols-1 max-[650px]:gap-5">
          <div>
            <span className={sectionLabel}>01 / PROJECT INDEX</span>
            <h2 className={sectionTitle}>SELECTED WORK</h2>
          </div>
          <p className="m-0 max-w-[500px] font-serif text-base leading-normal">A compact collection of web products developed for companies and organizations.</p>
        </header>
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[650px]:grid-cols-1">
          {ProjectCardsData.map((project, index) => (
            <article className="min-w-0 last:max-[900px]:col-span-full last:max-[900px]:w-1/2 last:max-[650px]:col-auto last:max-[650px]:w-full" key={project.id}>
              <a className="group relative grid h-[280px] place-items-center overflow-hidden border border-ink max-[650px]:h-[300px]" href={project.link} target="_blank" rel="noreferrer" style={{ background: project.color }}>
                <span className="absolute top-[10px] right-[10px] z-2 grid size-8 place-items-center rounded-full border border-ink bg-yellow font-mono text-[8px] font-bold">0{index + 1}</span>
                <Image
                  className="h-[88%] w-[92%] object-contain drop-shadow-[7px_8px_0_#20201d30] transition-transform duration-300 group-hover:scale-[1.025] motion-reduce:transition-none"
                  src={project.img}
                  alt={`${project.name} website preview`}
                />
                <span className="absolute top-[10px] left-[10px] grid h-8 w-[76px] place-items-center border border-ink bg-white p-[5px]">
                  <Image className="h-auto max-h-5 w-auto max-w-[65px]" src={project.icon} alt={`${project.name} logo`} />
                </span>
              </a>
              <div className="flex items-center justify-between border-b border-ink px-0.5 py-[14px]">
                <h3 className="m-0 font-serif text-[28px] leading-[1.05] font-bold">{project.name}</h3>
                <a className="text-xl" href={project.link} target="_blank" rel="noreferrer">
                  ↗
                </a>
              </div>
              <p className="min-h-[72px] font-serif text-sm leading-[1.55] max-[650px]:min-h-0">{project.desc}</p>
              <span className="font-mono text-[9px] leading-[1.35] font-bold tracking-[0.03em] text-green max-[430px]:text-[10px]">FRONT-END / WEB APPLICATION</span>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[0.7fr_1fr_1.3fr] gap-[5vw] border-y border-ink bg-yellow px-[3vw] py-[85px] max-[900px]:grid-cols-2 max-[650px]:grid-cols-1 max-[650px]:px-[18px] max-[650px]:py-[70px]" id="about">
        <header>
          <span className={sectionLabel}>02 / PROFILE</span>
          <h2 className="mt-[18px] font-display text-[clamp(52px,6.5vw,100px)] leading-[0.85]">
            DESIGN
            <br />
            MEETS CODE.
          </h2>
        </header>
        <div>
          <p className="m-0 mb-[25px] font-serif text-[25px] leading-[1.4] italic">I enjoy working where design decisions and technical decisions meet.</p>
          <p className="text-[15px] leading-[1.65]">
            My focus is building responsive interfaces with thoughtful interaction, maintainable front-end architecture, and close attention to accessibility and performance. I value clarity, curiosity, and work that feels genuinely useful.
          </p>
          <a className="mt-7 block w-max border-b border-ink pb-[5px] font-mono text-[10px] font-bold" href={icons.linkedin.link} target="_blank" rel="noreferrer">
            MORE ABOUT ME ↗
          </a>
        </div>
        <div className="border-t border-ink max-[900px]:col-span-full max-[900px]:grid max-[900px]:grid-cols-3 max-[650px]:col-auto max-[650px]:grid-cols-1">
          {offers.map(([id, title, text]) => (
            <article className="grid grid-cols-[35px_1fr] gap-2 border-b border-ink px-[5px] py-[18px] max-[900px]:border-r max-[650px]:border-r-0" key={id}>
              <span className="font-mono text-[10px] leading-[1.35] font-bold tracking-[0.03em]">{id}</span>
              <h3 className="m-0 text-[19px] leading-[1.15] font-extrabold">{title}</h3>
              <p className="col-start-2 m-0 text-[13px] leading-[1.45]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-[10vw] bg-green px-[5vw] py-20 text-white max-[650px]:grid-cols-1 max-[650px]:gap-[45px] max-[650px]:px-[18px] max-[650px]:py-[70px]">
        <div>
          <span className={sectionLabel}>03 / TOOLKIT</span>
          <h2 className="mt-[25px] font-display text-[clamp(42px,5vw,76px)] leading-[0.85]">
            TOOLS I USE
            <br />
            TO MAKE THINGS.
          </h2>
        </div>
        <div className="border-t border-white">
          {skillsIcon.techStack.map((skill, index) => (
            <a className="group grid grid-cols-[35px_1fr_auto] border-b border-white/60 px-[5px] py-[14px] font-mono text-[11px] hover:bg-yellow hover:text-ink" href={skill.link} target="_blank" rel="noreferrer" key={skill.name}>
              <span className="opacity-50">{String(index + 1).padStart(2, "0")}</span>
              <b>{skill.name}</b>
              <i className="not-italic text-yellow group-hover:text-ink">↗</i>
            </a>
          ))}
        </div>
      </section>

      <section className="px-[3vw] py-[95px] max-[650px]:px-[18px] max-[650px]:py-[70px]" id="experience">
        <header className="mb-[45px] grid grid-cols-[1fr_0.7fr] items-end gap-[8vw] border-b border-ink pb-[25px] max-[650px]:grid-cols-1 max-[650px]:gap-5">
          <div>
            <span className={sectionLabel}>04 / EXPERIENCE</span>
            <h2 className={sectionTitle}>WORK HISTORY</h2>
          </div>
          <p className="m-0 max-w-[500px] font-serif text-base leading-normal">Teams and products that have shaped the way I work.</p>
        </header>
        <div className="border-t border-ink">
          {experienceDatas.map((job, index) => (
            <details className="group border-b border-ink" key={job.id}>
              <summary className="grid cursor-pointer list-none grid-cols-[38px_45px_1fr_0.65fr_0.3fr_25px] items-center gap-[15px] px-[5px] py-[17px] font-mono text-[11px] font-bold hover:bg-red/10 max-[900px]:grid-cols-[32px_44px_1fr_0.6fr_25px] max-[650px]:grid-cols-[30px_42px_1fr_25px] max-[430px]:text-[10px]">
                <span>0{index + 1}</span>
                <span className="grid size-10 place-items-center border border-ink bg-white p-1.5">
                  <Image className="h-auto max-h-full w-auto max-w-full" src={job.icon} alt="" />
                </span>
                <span className="flex flex-col gap-1">
                  <b
                    className={
                      job.company === "BPJS Ketenagakerjaan"
                        ? "font-serif text-[21px] leading-[1.05] font-bold tracking-[-0.02em] max-[650px]:text-lg"
                        : "font-display text-[28px] leading-[1.05] font-normal tracking-normal max-[650px]:text-2xl"
                    }
                  >
                    {job.company}
                  </b>
                  <i className="text-[11px] not-italic max-[650px]:text-[10px]">{job.role}</i>
                </span>
                <span className="max-[650px]:hidden">{job.entryDate}</span>
                <span className="w-max border border-ink p-1 text-[10px] leading-[1.35] tracking-[0.03em] max-[900px]:hidden">{job.status}</span>
                <span className="text-base transition-transform group-open:rotate-45 motion-reduce:transition-none">＋</span>
              </summary>
              <ul className="m-0 border-t border-dashed border-ink py-[18px] pr-[8vw] pb-6 pl-[110px] text-[13px] leading-[1.55] marker:text-red max-[650px]:pr-[15px] max-[650px]:pb-[22px] max-[650px]:pl-[70px] [&>li+li]:mt-1.5">
                {job.desc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-red px-[3vw] py-20 text-center text-white max-[650px]:px-[18px] max-[650px]:py-[70px]" id="contact">
        <span className={sectionLabel}>05 / CONTACT</span>
        <p className="mt-[30px] font-mono text-[11px] font-bold">HAVE A PROJECT OR OPPORTUNITY?</p>
        <h2 className="mt-[25px] mb-[45px] font-display text-[clamp(75px,11vw,170px)] leading-[0.8]">LET&apos;S TALK.</h2>
        <div className="flex justify-center gap-[15px] max-[650px]:mx-auto max-[650px]:max-w-80 max-[650px]:flex-col">
          <a className="border border-white px-4 py-[13px] font-mono text-[10px] font-bold hover:bg-white hover:text-red" href={icons.linkedin.link} target="_blank" rel="noreferrer">
            MESSAGE ON LINKEDIN ↗
          </a>
          <a className="border border-white px-4 py-[13px] font-mono text-[10px] font-bold hover:bg-white hover:text-red" href={icons.github.link} target="_blank" rel="noreferrer">
            VIEW GITHUB ↗
          </a>
        </div>
      </section>
      <footer className="flex h-16 items-center justify-between bg-ink px-[3vw] font-mono text-[10px] font-bold text-white max-[650px]:h-auto max-[650px]:flex-col max-[650px]:items-start max-[650px]:gap-5 max-[650px]:px-[18px] max-[650px]:py-6">
        <span>© 2026 FAHMI ACHMAD</span>
        <div className="flex gap-[22px] max-[650px]:flex-wrap">
          <a href={icons.github.link}>GITHUB</a>
          <a href={icons.linkedin.link}>LINKEDIN</a>
          <a href={icons.twitter.link}>TWITTER</a>
        </div>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
