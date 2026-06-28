import Link from "next/link";

import { Clock3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactFooter() {
  return (
    <div className="mt-12">
      <div
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-6
          rounded-xl
          border
          border-border/50
          bg-card/50
          p-8
          backdrop-blur-xl
          md:flex-row
          md:justify-between
        "
      >
        {/* Availability */}
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />

            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>

          <div>
            <p className="font-semibold">Available for Freelance Projects</p>

            <p className="text-sm text-muted-foreground">
              Usually replies within 24 hours
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex items-center gap-3">
          <Clock3 size={18} className="text-violet-500" />

          <span className="text-sm text-muted-foreground">
            Fast communication & project updates
          </span>
        </div>

        {/* Social */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="
              rounded-xl
              border
              p-3
              transition-all
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <FaLinkedin size={20} />
          </Link>

          <Link
            href="#"
            className="
              rounded-xl
              border
              p-3
              transition-all
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
