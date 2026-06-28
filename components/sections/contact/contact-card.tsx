import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  type: "whatsapp" | "email";
  title: string;
  description: string;
}

export default function ContactCard({ type, title, description }: Props) {
  const isWhatsapp = type === "whatsapp";

  return (
    <article
      className="
        group
        rounded-xl
        border
        border-border/50
        bg-card/50
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
    >
      <div
        className="
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-violet-500/10
        "
      >
        {isWhatsapp ? (
          <FaWhatsapp size={32} className="text-violet-500" />
        ) : (
          <Mail size={32} className="text-violet-500" />
        )}
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-8 text-muted-foreground">{description}</p>

      <div className="mt-8">
        <Link
          href={isWhatsapp ? "https://wa.me/YOUR_NUMBER" : "mailto:YOUR_EMAIL"}
          target="_blank"
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-violet-500
            px-6
            py-3
            font-medium
            text-white
            transition-transform
            hover:scale-105
          "
        >
          {isWhatsapp ? "Start Conversation" : "Send Email"}

          <ArrowUpRight size={18} />
        </Link>
      </div>
    </article>
  );
}
