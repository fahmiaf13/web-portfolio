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

export default function Home() {
  return (
    <main id="top">
      <header className="header">
        <a className="brand" href="#top"><Image src={Logo} alt="" width={28} height={28} priority /><span>FAHMI ACHMAD</span></a>
        <p>FRONT-END DEVELOPER<br />&amp; DESIGNER</p>
        <nav aria-label="Main navigation"><a href="#projects">PROJECTS</a><a href="#about">ABOUT</a><a href="#experience">EXPERIENCE</a></nav>
        <a className="contactButton" href={icons.linkedin.link} target="_blank" rel="noreferrer">CONTACT ↗</a>
      </header>

      <section className="hero">
        <div className="introTag"><span>PORTFOLIO</span><span>NO. 01 / 2026</span></div>
        <div className="heroCopy">
          <p className="eyebrow">HELLO, I&apos;M FAHMI — BASED IN INDONESIA</p>
          <h1>I DESIGN &amp;<br />BUILD FOR<br /><em>THE WEB.</em></h1>
          <p className="summary">A front-end developer with a designer&apos;s eye. I turn ideas into fast, clear, and enjoyable digital products.</p>
          <div className="heroActions"><a href="#projects">SEE MY WORK ↓</a><a href="/CV_Fahmi-Achmad.pdf" target="_blank">DOWNLOAD CV ↗</a></div>
        </div>
        <figure className="portrait"><Image src={Profile} alt="Fahmi Achmad Fahrudin" priority /><figcaption><span>FAHMI ACHMAD FAHRUDIN</span><span>FIG. 001</span></figcaption></figure>
        <aside className="heroFacts"><div><b>05+</b><span>YEARS OF<br />EXPERIENCE</span></div><div><b>03</b><span>SELECTED<br />PROJECTS</span></div><div><i /> <span>AVAILABLE FOR<br />NEW OPPORTUNITIES</span></div></aside>
      </section>

      <div className="ticker"><div>{[...skillsIcon.techStack, ...skillsIcon.techStack].map((skill, index) => <span key={`${skill.name}-${index}`}>{skill.name.toUpperCase()} <i>✦</i></span>)}</div></div>

      <section className="projectsSection" id="projects">
        <header className="sectionHead"><div><span>01 / PROJECT INDEX</span><h2>SELECTED WORK</h2></div><p>A compact collection of web products developed for companies and organizations.</p></header>
        <div className="projectGrid">
          {ProjectCardsData.map((project, index) => (
            <article className="projectCard" key={project.id}>
              <a className="thumbnail" href={project.link} target="_blank" rel="noreferrer" style={{ background: project.color }}>
                <span className="projectNumber">0{index + 1}</span>
                <Image src={project.img} alt={`${project.name} website preview`} />
                <span className="projectLogo"><Image src={project.icon} alt={`${project.name} logo`} /></span>
              </a>
              <div className="projectTitle"><h3>{project.name}</h3><a href={project.link} target="_blank" rel="noreferrer">↗</a></div>
              <p>{project.desc}</p>
              <span className="projectType">FRONT-END / WEB APPLICATION</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <header><span>02 / PROFILE</span><h2>DESIGN<br />MEETS CODE.</h2></header>
        <div className="aboutCopy"><p className="lead">I enjoy working where design decisions and technical decisions meet.</p><p>My focus is building responsive interfaces with thoughtful interaction, maintainable front-end architecture, and close attention to accessibility and performance. I value clarity, curiosity, and work that feels genuinely useful.</p><a href={icons.linkedin.link} target="_blank" rel="noreferrer">MORE ABOUT ME ↗</a></div>
        <div className="services">{offers.map(([id, title, text]) => <article key={id}><span>{id}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="skills">
        <div className="skillsTitle"><span>03 / TOOLKIT</span><h2>TOOLS I USE<br />TO MAKE THINGS.</h2></div>
        <div className="skillList">{skillsIcon.techStack.map((skill, index) => <a href={skill.link} target="_blank" rel="noreferrer" key={skill.name}><span>{String(index + 1).padStart(2, "0")}</span><b>{skill.name}</b><i>↗</i></a>)}</div>
      </section>

      <section className="experience" id="experience">
        <header className="sectionHead"><div><span>04 / EXPERIENCE</span><h2>WORK HISTORY</h2></div><p>Teams and products that have shaped the way I work.</p></header>
        <div className="jobs">
          {experienceDatas.map((job, index) => (
            <details className="job" key={job.id}>
              <summary><span className="jobNumber">0{index + 1}</span><span className="jobLogo"><Image src={job.icon} alt="" /></span><span className={`jobName${job.company === "BPJS Ketenagakerjaan" ? " bpjsTitle" : ""}`}><b>{job.company}</b><i>{job.role}</i></span><span className="jobDate">{job.entryDate}</span><span className="jobStatus">{job.status}</span><span className="open">＋</span></summary>
              <ul>{job.desc.map((item) => <li key={item}>{item}</li>)}</ul>
            </details>
          ))}
        </div>
      </section>

      <section className="cta" id="contact"><span>05 / CONTACT</span><p>HAVE A PROJECT OR OPPORTUNITY?</p><h2>LET&apos;S TALK.</h2><div><a href={icons.linkedin.link} target="_blank" rel="noreferrer">MESSAGE ON LINKEDIN ↗</a><a href={icons.github.link} target="_blank" rel="noreferrer">VIEW GITHUB ↗</a></div></section>
      <footer><span>© 2026 FAHMI ACHMAD</span><div><a href={icons.github.link}>GITHUB</a><a href={icons.linkedin.link}>LINKEDIN</a><a href={icons.twitter.link}>TWITTER</a></div><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
