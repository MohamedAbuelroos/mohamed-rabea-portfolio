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

    github: "https://github.com/moelashmawy/travel-frontend",

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

    github: "https://github.com/MohamedAbuelroos/speedline-transfers",

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
      "NodeJS",
    ],

    demo: "#",

    github: "#",

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

    category: "Business-Websites",

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

    github: "https://github.com/MohamedAbuelroos/clarity-factory",

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

    title: "Transfer Signs Generator",

    slug: "transfer-signs-generator",

    category: "Tools",

    image: "/images/projects/signs-converter.png",

    description:
      "A business automation tool developed for transfer operations companies that processes Excel manifests, filters transportation data by date, and generates structured export files used to automatically create driver-specific PDF transfer signs through Excel VBA automation.",

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "React Router",
      "SheetJS",
      "FileSaver",
      "Excel VBA",
    ],

    demo: "#",

    github: "#",

    featured: false,

    private: true,

    features: [
      "Excel file import and processing",
      "Date-based transfer filtering",
      "Transfer manifest management",
      "Driver assignment grouping",
      "Automated export generation",
      "Excel VBA integration",
      "PDF signs automation workflow",
      "Driver folder organization",
      "Authentication by access code",
      "Business operations optimization",
      "Bulk data processing",
      "Transfer company workflow automation",
    ],
  },

  {
    id: 6,

    title: "Mohamed Rabea Portfolio",

    slug: "mohamed-rabea-portfolio",

    category: "Web-Application",

    image: "/images/projects/sixth-full-project.png",

    description:
      "A modern developer portfolio built to showcase professional frontend projects, technical expertise, and real-world case studies through interactive experiences, smooth animations, and a performance-focused architecture.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Next Themes",
      "Vercel",
    ],

    demo: "https://mohamed-rabea-portfolio.vercel.app",

    github: "https://github.com/MohamedAbuelroos/mohamed-rabea-portfolio",

    featured: true,

    features: [
      "Dark & light theme support",
      "Animated user experience",
      "Interactive project showcase",
      "Responsive mobile-first design",
      "Smooth scrolling navigation",
      "Advanced project filtering",
      "SEO optimization",
      "Performance optimization",
      "Reusable component system",
      "Professional UI/UX design",
    ],
  },

  {
    id: 7,

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

    github: "https://github.com/MohamedAbuelroos/Movie-App",

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
    id: 8,

    title: "Guest Confirmation System",

    slug: "guest-confirmation-system",

    category: "Tools",

    image: "/images/projects/confirmation-tool.jpg",

    description:
      "A business automation platform developed for transfer companies that processes Excel manifests, displays guest transfer details, and generates personalized confirmation messages for each traveler, significantly reducing manual communication workflows.",

    technologies: ["JavaScript", "CSS", "SheetJS", "Local Storage"],

    demo: "#",

    github: "#",

    private: true,

    featured: false,

    features: [
      "Excel manifest processing",
      "Transfer data extraction",
      "Guest confirmation automation",
      "Personalized message generation",
      "WhatsApp workflow integration",
      "Transfer status management",
      "Bulk guest processing",
      "Business workflow automation",
      "Data persistence",
      "Operational efficiency tools",
      "Transfer confirmation tracking",
      "Real-time transfer management",
    ],
  },

  {
    id: 9,

    title: "El Anod Pest Control",

    slug: "el-anod-pest-control",

    category: "Business-Websites",

    image: "/images/projects/elanod-project.png",

    description:
      "A bilingual corporate website developed for a pest control and insect management company, featuring multilingual content, product showcases, equipment catalogs, and responsive business experiences tailored for commercial services.",

    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],

    demo: "https://your-github-pages-link",

    github: "https://github.com/MohamedAbuelroos/Elanod-Site",

    featured: false,

    features: [
      "Arabic & English support",
      "Responsive design",
      "Corporate company profile",
      "Products catalog",
      "Equipment showcase",
      "Business services presentation",
      "Contact information sections",
      "Multi-section landing experience",
      "Mobile-friendly interface",
      "Client-focused website structure",
    ],
  },

  {
    id: 10,

    title: "Hexa Shop",

    slug: "hexa-shop",

    category: "Landing-Page",

    image: "/images/projects/Hexa-shop.png",

    description:
      "A modern fashion e-commerce landing page designed for clothing brands, featuring product showcases, category exploration, promotional sections, and responsive shopping experiences.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Google Fonts",
    ],

    demo: "https://mohamedabuelroos.github.io/Hexa-shop/",

    github: "https://github.com/MohamedAbuelroos/Hexa-shop",

    featured: false,

    features: [
      "Responsive e-commerce design",
      "Men, women and kids sections",
      "Product showcase cards",
      "Category browsing",
      "Promotional banners",
      "Newsletter subscription",
      "Modern shopping layout",
      "Image galleries",
      "Interactive navigation",
      "Mobile-friendly experience",
    ],
  },

  {
    id: 11,

    title: "Eatery Cafe",

    slug: "eatery-cafe",

    category: "Landing-Page",

    image: "/images/projects/Eatery-cafe.png",

    description:
      "A modern restaurant and cafe landing page featuring chef showcases, food galleries, reservation sections, and customer-focused experiences designed for hospitality businesses.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Google Fonts",
    ],

    demo: "https://mohamedabuelroos.github.io/Eatery-cafe/",

    github: "https://github.com/MohamedAbuelroos/Eatery-cafe",

    featured: false,

    features: [
      "Restaurant landing page",
      "Chef showcase section",
      "Food gallery",
      "Reservation section",
      "Contact forms",
      "Testimonials",
      "Responsive layouts",
      "Animated interactions",
      "Business information sections",
      "Mobile-first design",
    ],
  },

  {
    id: 12,

    title: "Elzero World",

    slug: "elzero-world",

    category: "Landing-Page",

    image: "/images/projects/Elzero.png",

    description:
      "A comprehensive multi-section landing page developed during my early frontend learning journey, featuring articles, galleries, services, team members, testimonials, skills, and interactive UI components.",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Font Awesome",
      "Google Fonts",
    ],

    demo: "https://mohamedabuelroos.github.io/HTML-CSS-Template2/",

    github: "https://github.com/MohamedAbuelroos/HTML-CSS-Template2",

    featured: false,

    features: [
      "Multi-section landing page",
      "Articles and blog cards",
      "Image galleries",
      "Team members showcase",
      "Testimonials section",
      "Services section",
      "Skills progress bars",
      "Events countdown",
      "Responsive layouts",
      "Interactive UI components",
    ],
  },
];
