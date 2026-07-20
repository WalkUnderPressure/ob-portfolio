import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function SkillsSection() {
  const { skills, sectionTitles } = data;

  return (
    <section id="skills" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.skills.subheading}
        heading={sectionTitles.skills.heading}
        bgImage={sectionTitles.skills.bgImage}
      />
      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.skills.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {skills.description}
          </p>
        </div>
        <div className="space-y-px stagger-animate" style={{ background: "var(--border)" }}>
          {skills.items.map((skill) => (
            <div key={skill.id} className="px-6 py-8 sm:px-8 sm:py-10 stagger-item" style={{ background: "var(--surface)" }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 flex items-center gap-3 min-w-0">
                  <div className="text-caption font-mono flex-shrink-0" style={{ color: "var(--accent)" }}>{skill.id}</div>
                  <h3 className="text-h3 break-words min-w-0" style={{ color: "var(--foreground)", overflowWrap: "anywhere" }}>
                    {skill.category}
                  </h3>
                </div>
                <div className="md:col-span-8 min-w-0">
                  <p className="text-body mb-4" style={{ color: "var(--muted-foreground)" }}>{skill.description}</p>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {skill.technologies.map((tech) => (
                      <span key={tech.name}
                        className="inline-flex items-center gap-1.5 text-body px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold"
                        style={{ background: "var(--surface-alt)", border: "1px solid var(--border)", color: "var(--foreground)" }}>
                        {tech.icon && (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            loading="lazy"
                          />
                        )}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
