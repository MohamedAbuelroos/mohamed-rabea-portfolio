import { heroData } from "@/data/hero";
import HeroBadge from "./badge";
import HeroActions from "./actions";

export default function HeroContent() {
  return (
    <div className="max-w-[660px] animate-fade-up">
      <HeroBadge />

      <h1 className="mt-6 text-5xl font-black leading-none tracking-tight lg:text-7xl">
        <span className="block ">{heroData.title.first}</span>

        <span className="mt-2 block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          {heroData.title.second}
        </span>

        <span className="block">{heroData.title.third}</span>
      </h1>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">
        {heroData.description}
      </p>

      <HeroActions />
    </div>
  );
}
