import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,

    title: "ToursVibe",

    slug: "tours-vibe",

    category: "Web-Application",

    image: "/images/projects/seconed-full-project.png",

    description:
      "A comprehensive travel booking platform for Egypt tourism, featuring trip reservations, transfer booking, destination discovery, user authentication, supplier management, and a scalable dashboard ecosystem built for modern travel experiences.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Material UI",
      "SWR",
      "JWT",
      "Jotai",
      "React Hook Form",
      "Zod",
      "Swiper",
    ],

    demo: "https://toursvibe.com/en",

    github: "#",

    featured: true,

    features: [
      "Multi-language platform",
      "Authentication & user accounts",
      "JWT-based authorization",
      "Trip booking system",
      "Transfer booking system",
      "Wishlist management",
      "Supplier management portal",
      "Admin dashboard & analytics",
      "Destination discovery engine",
      "Interactive filtering system",
      "Responsive mobile-first UI",
      "Global state management",
    ],
  },
  {
    id: 2,
    title: "SpeedLine Transfers KSA",
    slug: "transfer-ksa",
    category: "Web-Application",
    image: "/images/projects/first-full-project.png",

    description:
      "A modern, multilingual booking platform offering seamless airport transfers, city rides, hourly chauffeur services, and VIP experiences across Saudi Arabia. With dynamic pricing, responsive design, WhatsApp integration, and a diverse fleet showcase, it delivers a reliable and professional travel experience for both local and international clients.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "React Router",
      "Swiper",
      "Resend",
    ],

    demo: "https://www.speedlinetransfers.com/",

    github: "#",

    featured: false,

    features: [
      "Multi‑Language Support",
      "Dynamic route pricing",
      "Multi‑Transfer Booking System",
      "Smart location selection",
      "Responsive booking experience",
      "Vehicle fleet showcase",
      "WhatsApp booking integration",
      "Global Currency Integration",
      "Automated Email Confirmation",
      "Mobile-first design",
      "RTL Support for Arabix users",
    ],
  },

  {
    id: 3,

    title: "Travelist Dashboard",

    slug: "travelist-dashboard",

    category: "Tools",

    image: "/images/projects/third-full-project.png",

    description:
      "A comprehensive transfer operations dashboard designed for travel and transportation businesses, featuring booking management, fleet tracking, partner integrations, analytics, reporting, and operational monitoring across multiple destinations.",

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Chart.js",
      "React Router",
      "JWT",
      "SWR",
      "Tailwind CSS",
    ],

    demo: "#",

    github: "https://github.com/YOUR_USERNAME/travelist-dashboard",

    featured: false,

    private: true,

    features: [
      "Transfer management system",
      "Booking operations dashboard",
      "Fleet and vehicle monitoring",
      "Driver management",
      "Customer management",
      "Supplier integrations",
      "Partner network management",
      "Revenue analytics",
      "Performance reporting",
      "Airport arrivals monitoring",
      "Multi-destination operations",
      "Business KPI dashboards",
    ],
  },
  {
    id: 4,

    title: "Clarity Factory",

    slug: "clarity-factory",

    category: "Web-Application",

    image: "/images/projects/fourth-full-project.png",

    description:
      "A modern corporate platform built for a leading manufacturer of premium suit covers, canvas bags, and custom branding products, featuring multilingual support, interactive product showcases, customer engagement tools, and conversion-focused user experiences.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Material UI",
      "React Router",
      "i18next",
      "Swiper",

      "EmailJS",
    ],

    demo: "https://clarity-factory-three.vercel.app",

    github: "https://github.com/YOUR_USERNAME/clarity-factory",

    featured: false,

    features: [
      "Multi-language support (EN/AR)",
      "Interactive product showcase",
      "Animated user experience",
      "Business-focused landing pages",
      "Lead generation forms",
      "EmailJS contact integration",
      "Customer testimonials",
      "Booking system",
      "SEO optimization",
      "Responsive mobile-first design",
      "Modern component architecture",
      "Performance-focused implementation",
    ],
  },
  {
    id: 5,

    title: "MRMovie",

    slug: "movie-app",

    category: "Web-Application",

    image: "/images/projects/fifth-full-project.png",

    description:
      "A modern movie discovery platform built with React, featuring dynamic movie browsing, advanced search functionality, personalized favorites management, and detailed movie experiences powered by real-time entertainment data.",

    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "REST API",
      "CSS3",
      "Local Storage",
    ],

    demo: "https://mrmovie.surge.sh/",

    github: "#",

    featured: false,

    features: [
      "Movie discovery platform",
      "Real-time movie search",
      "Movie details pages",
      "Favorites management",
      "Trending and popular movies",
      "Top-rated movies browsing",
      "Upcoming releases section",
      "Hero carousel slider",
      "Responsive user interface",
      "Local storage persistence",
    ],
  },
  {
    id: 6,
    title: "Transfer KSA",
    slug: "transfer-ksa",
    image: "/images/projects/first-full-project.png",
    description:
      "Premium transfer booking platform for Saudi Arabia with multilingual support and modern booking experiences.",
    technologies: ["React", "TypeScript", "MUI", "Tailwind"],
    demo: "https://www.speedlinetransfers.com/",
    github: "#",
    featured: false,
  },
];
