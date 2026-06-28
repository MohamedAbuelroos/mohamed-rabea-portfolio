import SkillsHeader from "./skills-header";
import SkillsGrid from "./skills-grid";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-[1320px] px-6">
        <SkillsHeader />

        <SkillsGrid />
      </div>
    </section>
  );
}
