import { FaReact, FaGitAlt, FaGithub } from "react-icons/fa";

import { RiNextjsFill } from "react-icons/ri";

import {
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiVercel,
  SiFigma,
  SiVite,
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
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "Tailwind",
        icon: SiTailwindcss,
      },
      {
        name: "MUI",
        icon: SiMui,
      },
    ],
  },

  {
    title: "Frameworks",
    items: [
      {
        name: "Next.js",
        icon: RiNextjsFill,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
    ],
  },

  {
    title: "Tools",
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
        name: "Figma",
        icon: SiFigma,
      },
    ],
  },

  {
    title: "Deployment",
    items: [
      {
        name: "Vercel",
        icon: SiVercel,
      },
    ],
  },
];
