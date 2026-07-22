import { useState, useRef } from "react";
import { gsap } from "gsap";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function SkillsSection() {
  const { skills, sectionTitles } = data;
  const [openItems, setOpenItems] = useState({});
  const contentRefs = useRef({});
  const arrowRefs = useRef({});

  const toggleItem = (id) => {
    const isOpen = openItems[id];

    // Animate arrow rotation
    if (arrowRefs.current[id]) {
      gsap.to(arrowRefs.current[id], {
        rotation: isOpen ? 0 : 180,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // Animate content
    if (contentRefs.current[id]) {
      const element = contentRefs.current[id];

      if (isOpen) {
        // Closing animation
        gsap.to(element, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      } else {
        // Opening animation - measure natural height
        gsap.set(element, { height: "auto", opacity: 1 });
        const targetHeight = element.offsetHeight;

        // Reset and animate
        gsap.set(element, { height: 0, opacity: 0 });
        gsap.to(element, {
          height: targetHeight,
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }

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

        <div
          className="stagger-animate space-y-px"
          style={{ background: "var(--border)" }}
        >
          {skills.items.map((skill, index) => {
            const isOpen = openItems[skill.id];

            return (
              <div
                key={skill.id}
                className="stagger-item p-4 md:p-6"
                style={{ background: "var(--surface)" }}
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
                    <svg
                      ref={(el) => (arrowRefs.current[skill.id] = el)}
                      className="h-5 w-5 flex-shrink-0 transition-transform"
                      style={{ color: "var(--accent)" }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6,9 12,15 18,9"></polyline>
                    </svg>
                  </div>
                </button>

                {/* Full-width accordion content */}
                <div
                  ref={(el) => (contentRefs.current[skill.id] = el)}
                  id={`skills-content-${skill.id}`}
                  className="h-0 overflow-hidden opacity-0"
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
