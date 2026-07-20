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
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-h2 col-span-1 md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.skills.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="text-body col-span-1 md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {skills.description}
          </p>
        </div>
        <div
          className="stagger-animate space-y-px"
          style={{ background: "var(--border)" }}
        >
          {skills.items.map((skill) => (
            <div
              key={skill.id}
              className="stagger-item px-6 py-8 sm:px-8 sm:py-10"
              style={{ background: "var(--surface)" }}
            >
              <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
                <div className="flex min-w-0 items-center gap-3 md:col-span-4">
                  <div
                    className="text-caption flex-shrink-0 font-mono"
                    style={{ color: "var(--accent)" }}
                  >
                    {skill.id}
                  </div>
                  <h3
                    className="text-h3 min-w-0 break-words"
                    style={{
                      color: "var(--foreground)",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {skill.category}
                  </h3>
                </div>
                <div className="min-w-0 md:col-span-8">
                  <p
                    className="text-body mb-4"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech.name}
                        className="text-body inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-semibold sm:px-3 sm:py-1.5"
                        style={{
                          background: "var(--surface-alt)",
                          border: "1px solid var(--border)",
                          color: "var(--foreground)",
                        }}
                      >
                        {tech.icon && (
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-4 w-4 sm:h-5 sm:w-5"
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
