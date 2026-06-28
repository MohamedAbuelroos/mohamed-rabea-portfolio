import HeroContent from "./content";
import HeroPreview from "./preview";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-100px)] items-center overflow-hidden "
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <HeroContent />

        <HeroPreview />
      </div>
    </section>
  );
}

export default Hero;
