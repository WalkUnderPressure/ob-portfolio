import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import { timelineItem } from "../utils/animations.js";

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
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-h2 col-span-1 md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.experience.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="text-body col-span-1 md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {experience.description}
          </p>
        </div>
        <div className="relative">
          {experience.items.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12"
              style={
                index > 0
                  ? { borderTop: "1px solid var(--border)" }
                  : { borderTop: "none" }
              }
              {...timelineItem}
            >
              <div className="min-w-0 md:col-span-4">
                <div
                  className="text-caption mb-3 font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  {exp.id} / {exp.period}
                </div>
                <h3
                  className="text-h3 mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {exp.title}
                </h3>
                <div
                  className="text-body font-semibold"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {exp.company}
                </div>
              </div>
              <div className="min-w-0 md:col-span-8">
                <div
                  className="text-body break-words"
                  style={{
                    color: "var(--muted-foreground)",
                    overflowWrap: "anywhere",
                  }}
                >
                  <ul className="list-disc space-y-1 pl-5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
