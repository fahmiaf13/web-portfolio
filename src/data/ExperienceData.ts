import SagaraIcon from "@/assets/img/experiences/ic-sagara.png";
import SoluvasIcon from "@/assets/img/experiences/ic-soluvas.png";
import MagprotechIcon from "@/assets/img/experiences/ic-magprotech.svg";
import BpjsLogo from "@/assets/img/experiences/ic-bpjs.svg";
import OcbcLogo from "@/assets/img/experiences/ocbc.svg";

export const experienceDatas = [
  {
    id: 0,
    company: "OCBC Bank",
    role: "Front-End Developer",
    icon: OcbcLogo,
    entryDate: "Nov 2023 - Current",
    status: "Contract",
    desc: [
      "Work closely with Project Manager and collaborating with designers to ensure good visual integration with the code",
      "Develop web application using Typescript and React JS for the Front-End side",
      "Working collaboratively with other developer using gitlab",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    id: 1,
    company: "BPJS Ketenagakerjaan",
    role: "Full-Stack Developer",
    icon: BpjsLogo,
    entryDate: "Feb 2023 - Aug 2023",
    status: "Contract",
    desc: [
      "Work closely with Project Manager and collaborating with designers to ensure good visual integration with the code",
      "Develop web application using Nuxt and Vue for Front-End and Express Js on the Back-End",
      "Working collaboratively with other developer using gitlab",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    id: 2,
    company: "Soluvas",
    role: "Front-End Developer",
    icon: SoluvasIcon,
    entryDate: "Oct 2022 - Jan 2023",
    status: "Contract",
    desc: [
      "Work closely with Project Manager and collaborating with designers to ensure good visual integration with the code",
      "Develop web application using Typescript, Material UI, React JS and Next JS",
      "Working collaboratively with other developer using gitlab",
      "Managing application’s state using Redux",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    id: 3,
    company: "Sagara Technology",
    role: "Front-End Engineer",
    icon: SagaraIcon,
    entryDate: "Aug 2022 - Nov 2022",
    status: "Internship",
    desc: [
      "Work closely with Project Manager and Team Leader",
      "Continuing internal website projects using React JS",
      "Managing application’s state using Redux, especially redux thunk and redux persist",
      "Working with asynchronous HTTP requests to REST endpoints using axios and perform CRUD operations",
    ],
  },
  {
    id: 4,
    company: "Magprotech",
    role: "Embedded System Engineer",
    icon: MagprotechIcon,
    entryDate: "Aug 2022 - Nov 2022",
    status: "Contract",
    desc: [
      "Building an automatic disinfection chamber and automatic fish feeder project.",
      "Creating a software program using arduino and designing the electrical system",
      "Building electrical instrumentation that can be connected each other, both wired and wireless.",
      "Implementing Internet of Things in several project",
    ],
  },
];
