import { Mail, Phone, Sparkles } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export const infoLinks = [
  {
    title: "Enter My World",
    subtitle: "Explore my projects, experience and digital journey",
    href: "/",
    icon: Sparkles,
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
