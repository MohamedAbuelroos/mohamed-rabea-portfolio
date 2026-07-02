// data/info-links.ts

import { Briefcase, Mail, Phone } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export const infoLinks = [
  {
    title: "Portfolio",
    subtitle: "View projects & experience",
    href: "/",
    icon: Briefcase,
    featured: true,
  },

  {
    title: "WhatsApp",
    subtitle: "Let's discuss your idea",
    href: "https://wa.me/201022225621",
    icon: FaWhatsapp,
    external: true,
  },

  {
    title: "Call",
    subtitle: "Contact directly",
    href: "tel:+201022225621",
    icon: Phone,
  },

  {
    title: "Email",
    subtitle: "Professional inquiries",
    href: "mailto:mohamedabuelroos31@gmail.com",
    icon: Mail,
  },
];
