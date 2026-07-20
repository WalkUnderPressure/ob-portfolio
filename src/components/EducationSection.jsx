import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function EducationSection() {
  const { education, sectionTitles } = data;

  return (
    <section id="education" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.education.subheading}
        heading={sectionTitles.education.heading}
        bgImage={sectionTitles.education.bgImage}
      />

      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.education.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {education.description}
          </p>
        </div>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-0.5" style={{ background: "var(--border)" }}></div>

          {/* Timeline entries */}
          <div className="space-y-8">
            {education.items.map((edu) => (
              <div key={edu.degree} className="relative flex gap-6 md:gap-8">
                {/* Timeline marker with icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--accent)",
                    border: "2px solid var(--accent)"
                  }}
                  >
                    <GraduationCapIcon />
                  </div>
                </div>

                {/* Entry content */}
                <div className="flex-1 pb-8">
                <div className="text-caption font-mono mb-2" style={{ color: "var(--muted-foreground)" }}>
                  {edu.year}
                </div>
                <h3 className="text-h3 mb-1" style={{ color: "var(--foreground)" }}>
                  {edu.degree}
                </h3>
                <p className="text-body" style={{ color: "var(--muted-foreground)" }}>
                  {edu.institution}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

  function GraduationCapIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-foreground)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}