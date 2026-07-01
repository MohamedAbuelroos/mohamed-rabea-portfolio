import { FaReact, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMui,
  SiShadcnui,
  SiVercel,
  SiJira,
  SiVite,
  SiFigma,
  SiRedux,
} from "react-icons/si";

export const skillGroups = [
  {
    title: "Frontend Core",

    items: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "JavaScript (ES6+)",
        icon: SiJavascript,
      },
    ],
  },

  {
    title: "Tools & Workflow",

    items: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Visily",
        icon: SiFigma,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Docker",
        icon: FaDocker,
      },
      {
        name: "Jira",
        icon: SiJira,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
      },
    ],
  },
  {
    title: "Frameworks & UI",

    items: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Material UI",
        icon: SiMui,
      },
      {
        name: "Shadcn/UI",
        icon: SiShadcnui,
      },
    ],
  },

  {
    title: "Deployment & Automation",

    items: [
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Excel VBA",
        icon: FaGitAlt, // temporary icon
      },
    ],
  },
];
