import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main
      className="
        flex
        min-h-screen
        items-center
        justify-center
        px-6
      "
    >
      <div className="mx-auto max-w-2xl text-center">
        {/* Number */}
        <h1
          className="
            bg-gradient-to-r
            from-violet-500
            to-cyan-500
            bg-clip-text
            text-[120px]
            font-black
            leading-none
            text-transparent
            md:text-[180px]
          "
        >
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-4xl font-black">
          Oops! Looks like you&apos;ve taken a wrong turn.
        </h2>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            leading-8
            text-muted-foreground
          "
        >
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved. Let&apos;s get you back to exploring my work and projects.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-col
            justify-center
            gap-4
            sm:flex-row
          "
        >
          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-violet-500
              to-cyan-500
              px-7
              py-4
              font-medium
              text-white
              transition-transform
              hover:-translate-y-1
            "
          >
            <Home size={18} />
            Back Home
          </Link>

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              px-7
              py-4
              font-medium
              transition-transform
              hover:-translate-y-1
            "
          >
            <ArrowLeft size={18} />
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
