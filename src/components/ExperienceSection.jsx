import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function ExperienceSection() {
  const { experience, sectionTitles } = data;

  return (
    <section id="experience" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.experience.subheading}
        heading={sectionTitles.experience.heading}
        bgImage={sectionTitles.experience.bgImage}
      />
      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.experience.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {experience.description}
          </p>
        </div>
        <div className="relative">
          {experience.items.map((exp, index) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 timeline-animate"
               style={index > 0 ? { borderTop: "1px solid var(--border)" } : { borderTop: "none" }}
            >
              <div className="md:col-span-4 min-w-0">
                <div className="text-caption font-mono mb-3" style={{ color: "var(--accent)" }}>
                  {exp.id} / {exp.period}
                </div>
                <h3 className="text-h3 mb-2" style={{ color: "var(--foreground)" }}>
                  {exp.title}
                </h3>
                <div className="text-body font-semibold" style={{ color: "var(--muted-foreground)" }}>
                  {exp.company}
                </div>
              </div>
              <div className="md:col-span-8 min-w-0">
                <div className="text-body break-words" style={{ color: "var(--muted-foreground)", overflowWrap: "anywhere" }}>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
