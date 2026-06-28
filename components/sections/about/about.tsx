import AboutContent from "./about-content";
import AboutPreview from "./about-preview";

export default function About() {
  return (
    <section id="about" className="py-18">
      <div className="mx-auto max-w-[1320px] px-6 ">
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-[500px_1fr]
          "
        >
          
          <AboutPreview />

          <AboutContent />
        </div>
      </div>
    </section>
  );
}
