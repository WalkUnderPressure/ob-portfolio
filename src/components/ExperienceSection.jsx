import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function ExperienceSection() {
  const { experience, sectionTitles } = data;

  return (
    <section className="relative">
      <SectionTitle
        subheading={sectionTitles.experience.subheading}
        heading={sectionTitles.experience.heading}
        bgImage={sectionTitles.experience.bgImage}
      />
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-3xl md:text-4xl font-black md:col-span-4 leading-tight" style={{ color: "var(--px-text)" }}>
            {sectionTitles.experience.heading}<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--px-muted)" }}>
            {experience.description}
          </p>
        </div>
        <div className="relative">
          {experience.items.map((exp, index) => (
            <div
              key={exp.id}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10"
              style={index > 0 ? { borderTop: "1px solid var(--px-hairline)" } : { borderTop: "none" }}
            >
              <div className="md:col-span-4 min-w-0">
                <div className="text-xs font-mono font-bold mb-3" style={{ color: "rgb(34, 211, 238)" }}>
                  {exp.id} / {exp.period}
                </div>
                <h3 className="text-2xl font-black leading-tight mb-2" style={{ color: "var(--px-text)" }}>
                  {exp.title}
                </h3>
                <div className="text-sm font-semibold" style={{ color: "var(--px-muted)" }}>
                  {exp.company}
                </div>
              </div>
              <div className="md:col-span-8 min-w-0">
                <div className="text-base leading-relaxed break-words" style={{ color: "var(--px-muted)", overflowWrap: "anywhere" }}>
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
