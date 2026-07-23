import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import { staggerContainer, staggerItem } from "../utils/animations.js";

export default function SkillsSection() {
  const { skills, sectionTitles } = data;
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

        <motion.div
          className="space-y-px"
          style={{ background: "var(--border)" }}
          {...staggerContainer}
        >
          {skills.items.map((skill, index) => {
            const isOpen = openItems[skill.id];

            return (
              <motion.div
                key={skill.id}
                className="p-4 md:p-6"
                style={{ background: "var(--surface)" }}
                {...staggerItem}
              >
                <button
                  onClick={() => toggleItem(skill.id)}
                  className="flex w-full cursor-pointer items-start gap-6"
                  aria-expanded={isOpen}
                  aria-controls={`skills-content-${skill.id}`}
                >
                  <div className="flex min-w-0 flex-col items-start gap-3">
                    <div className="flex flex-row items-center justify-start gap-4">
                      <div
                        className="text-caption flex-shrink-0 font-mono"
                        style={{ color: "var(--accent)" }}
                      >
                        {String(index + 1).padStart(2, "0") + "."}
                      </div>

                      <h3
                        className="text-h3 min-w-0 text-left break-words"
                        style={{
                          color: "var(--foreground)",
                          overflowWrap: "anywhere",
                        }}
                      >
                        {skill.category}
                      </h3>
                    </div>
                  </div>

                  <div className="ml-auto flex min-w-0 items-center justify-end">
                    <motion.svg
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "var(--accent)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </motion.svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${skill.id}`}
                      id={`skills-content-${skill.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="w-full pt-6">
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
