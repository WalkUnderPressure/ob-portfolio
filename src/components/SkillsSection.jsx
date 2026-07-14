import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function SkillsSection() {
  const { skills, sectionTitles } = data;

  return (
    <section className="relative">
      <SectionTitle
        subheading={sectionTitles.skills.subheading}
        heading={sectionTitles.skills.heading}
        bgImage={sectionTitles.skills.bgImage}
      />
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-3xl md:text-4xl font-black md:col-span-4 leading-tight" style={{ color: "var(--px-text)" }}>
            {sectionTitles.skills.heading}<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--px-muted)" }}>
            {skills.description}
          </p>
        </div>
        <div className="space-y-px" style={{ background: "var(--px-hairline)" }}>
          {skills.items.map((skill) => (
            <div key={skill.id} className="px-6 py-8 sm:px-8 sm:py-10" style={{ background: "var(--px-card-bg)" }}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 flex items-center gap-3 min-w-0">
                  <div className="text-xs font-mono font-bold flex-shrink-0" style={{ color: "rgb(34, 211, 238)" }}>{skill.id}</div>
                  <h3 className="text-xl sm:text-2xl font-black leading-tight break-words min-w-0" style={{ color: "var(--px-text)", overflowWrap: "anywhere" }}>
                    {skill.category}
                  </h3>
                </div>
                <div className="md:col-span-8 min-w-0">
                  <p className="text-base leading-relaxed mb-4" style={{ color: "var(--px-muted)" }}>{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span key={tech.name}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold"
                        style={{ background: "var(--px-pill-bg)", border: "1px solid var(--px-hairline)", color: "var(--px-text)" }}>
                        {tech.icon && (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-4 h-4"
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
