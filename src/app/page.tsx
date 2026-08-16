import Image from "next/image";
import Logo from "@/assets/img/logo.svg";
import Profile from "@/assets/img/me.png";
import { ProjectCardsData } from "@/data/ProjectData";
import { experienceDatas } from "@/data/ExperienceData";
import { icons, skillsIcon } from "@/data/IconsData";

const services = [
  { title: "Web Development", text: "Production-ready interfaces built with React, Next.js, TypeScript, and scalable front-end patterns." },
  { title: "UI / UX Design", text: "Responsive interfaces and design systems that turn complex workflows into clear experiences." },
  { title: "Creative Direction", text: "Visual concepts, interaction, and motion that give digital products a distinct personality." },
];

function Spark() { return <span className="spark" aria-hidden="true">✦</span>; }

export default function Home() {
  return (
    <main id="top">
      <header className="nav">
        <a className="brand" href="#top"><Image src={Logo} alt="" width={30} height={30} priority /><span>FAHMI<br />ACHMAD</span></a>
        <p>FRONT-END DEVELOPER<br />&amp; INTERFACE DESIGNER</p>
        <nav aria-label="Main navigation"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#experience">EXPERIENCE</a></nav>
        <a className="sayHi" href={icons.linkedin.link} target="_blank" rel="noreferrer">LET&apos;S TALK ↗</a>
      </header>

      <section className="hero">
        <div className="heroCopy">
          <span className="issue">PORTFOLIO VOL. 01 — 2026</span>
          <h1>MAKING<br />THE WEB<br /><em>FEEL HUMAN.</em></h1>
          <div className="heroNote"><Spark /><p>I design and develop digital experiences with clear ideas, thoughtful details, and dependable code.</p></div>
        </div>
        <figure className="photoWrap">
          <Image src={Profile} alt="Fahmi Achmad Fahrudin" priority />
          <figcaption><span>FAHMI ACHMAD FAHRUDIN</span><span>PORTRAIT / 2026</span></figcaption>
        </figure>
        <div className="heroSide">
          <span className="availability">● AVAILABLE FOR WORK</span>
          <p>Based in Indonesia<br />Working worldwide</p>
          <a href="#work">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <div className="ribbon"><div>{[...skillsIcon.techStack, ...skillsIcon.techStack].map((skill, i) => <span key={`${skill.name}-${i}`}>{skill.name} <Spark /></span>)}</div></div>

      <section className="work" id="work">
        <header className="sectionIntro"><span>01 / FEATURED WORK</span><h2>THINGS I&apos;VE<br /><em>PUT INTO THE WORLD.</em></h2><p>A selection of web platforms developed for organizations, teams, and growing businesses.</p></header>
        <div className="projects">
          {ProjectCardsData.map((project, index) => (
            <article className="project" key={project.id}>
              <a className="projectImageWrap" href={project.link} target="_blank" rel="noreferrer" style={{ background: project.color }}>
                <span className="projectNo">0{index + 1}</span>
                <Image className="projectImage" src={project.img} alt={`${project.name} website preview`} />
                <span className="projectLogo"><Image src={project.icon} alt={`${project.name} logo`} /></span>
                <span className="view">VIEW LIVE ↗</span>
              </a>
              <div className="projectText"><div><span>WEB DEVELOPMENT / LIVE PROJECT</span><h3>{project.name}</h3></div><p>{project.desc}</p><a href={project.link} target="_blank" rel="noreferrer">VISIT WEBSITE ↗</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <aside><span>02 / ABOUT</span><div className="orbit"><b>DESIGN</b><Spark /><b>CODE</b></div><p>ONE MIND,<br />TWO SIDES.</p></aside>
        <div className="aboutMain">
          <h2>CURIOUS BY NATURE.<br /><em>PRECISE BY PRACTICE.</em></h2>
          <div className="aboutColumns"><p className="lead">I enjoy working at the intersection of design and technology—where visual ideas become useful, reliable products.</p><p>My work spans interface design and front-end development. I care about systems that are easy to maintain, experiences that are accessible, and visual details that make a product feel considered rather than generic.</p></div>
          <div className="serviceCards">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
        </div>
      </section>

      <section className="toolbox">
        <div className="toolboxTitle"><span>MY EVERYDAY TOOLBOX</span><h2>TOOLS OF<br /><em>THE TRADE.</em></h2></div>
        <div className="toolGrid">{skillsIcon.techStack.map((skill, index) => <a href={skill.link} target="_blank" rel="noreferrer" key={skill.name}><span>{String(index + 1).padStart(2, "0")}</span><b>{skill.name}</b><i>↗</i></a>)}</div>
      </section>

      <section className="experience" id="experience">
        <header><span>03 / EXPERIENCE</span><h2>PLACES I&apos;VE<br /><em>GROWN WITH.</em></h2></header>
        <div className="jobs">
          {experienceDatas.map((job, index) => (
            <details className="job" key={job.id}>
              <summary><span className="jobNo">0{index + 1}</span><span className="jobLogo"><Image src={job.icon} alt="" /></span><span className="jobTitle"><b>{job.company}</b><i>{job.role}</i></span><span className="date">{job.entryDate}</span><span className="status">{job.status}</span><span className="plus">＋</span></summary>
              <ul>{job.desc.map((item) => <li key={item}>{item}</li>)}</ul>
            </details>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <span className="contactStar"><Spark /></span><p>HAVE A PROJECT, AN IDEA,<br />OR JUST WANT TO SAY HELLO?</p><h2>LET&apos;S MAKE<br /><em>SOMETHING GOOD.</em></h2>
        <div className="contactLinks"><a href={icons.linkedin.link} target="_blank" rel="noreferrer">START A CONVERSATION <b>↗</b></a><a href="/CV_Fahmi-Achmad.pdf" target="_blank">DOWNLOAD RÉSUMÉ <b>↓</b></a></div>
      </section>

      <footer><span>© 2026 FAHMI ACHMAD</span><div><a href={icons.github.link}>GITHUB ↗</a><a href={icons.linkedin.link}>LINKEDIN ↗</a><a href={icons.twitter.link}>TWITTER ↗</a></div><a href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
