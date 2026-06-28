import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <Image
        src="/images/MrLogo.png"
        alt="Mohamed Rabea"
        width={130}
        height={110}
        priority
      />
    </Link>
  );
}

export default Logo;
