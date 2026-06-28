import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="
        flex
        items-center
        gap-4
        transition-opacity
        hover:opacity-90
      "
    >
      {/* Logo Mark */}
      <Image
        src="/images/MR-Logo1.png"
        alt="Mohamed Rabea"
        width={72}
        height={70}
        priority
        // className="h-auto w-[72px] shrink-0"
      />

      {/* Divider */}
      <div className="hidden h-14 w-px bg-border sm:block" />

      {/* Text */}
      <div className="hidden flex-col sm:flex">
        {/* Mohamed */}
        <span
          className="
            text-[16px]
            font-black
            leading-none
            tracking-[0.1em]
            text-foreground
          "
        >
          MOHAMED
        </span>

        {/* Rabea */}
        <span
          className="
            mt-1
            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-sky-400
            bg-clip-text
            text-[15px]
            font-black
            leading-none
            tracking-[0.28em]
            text-transparent
          "
        >
          RABEA
        </span>

        {/* Frontend Developer */}
        <div className="mt-1 flex items-center gap-2">
          <span className="h-[2px] w-4 bg-violet-500" />

          <span
            className="
              text-[8px]
              font-semibold
              uppercase
              tracking-[0.35em]
              text-muted-foreground
            "
          >
            FRONTEND DEVELOPER
          </span>

          <span className="h-[2px] w-4 bg-emerald-500" />
        </div>
      </div>
    </Link>
  );
}
