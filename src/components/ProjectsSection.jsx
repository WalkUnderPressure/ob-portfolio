import SectionTitle from "./SectionTitle.jsx";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import data from "../data/portfolio.json";

export default function ProjectsSection() {
  const { projects, sectionTitles } = data;

  return (
    <section id="projects" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.projects.subheading}
        heading={sectionTitles.projects.heading}
        bgImage={sectionTitles.projects.bgImage}
      />

      <div className="mx-auto max-w-6xl px-4 pt-12">
        <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center md:gap-6">
          <h2
            className="text-h2 col-span-1 whitespace-nowrap md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.projects.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p
            className="text-body col-span-1 md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {projects.description}
          </p>
        </div>

        <div className="stagger-animate mt-12 flex flex-col space-y-8 sm:space-y-16">
          {projects.items.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card stagger-item group block grid grid-cols-1 items-center gap-6 sm:grid-cols-12 sm:gap-8 md:gap-12"
            >
              <div className="md:col-span-7">
                <div
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl"
                  style={{
                    border: "1px solid var(--border)",
                    transition: "border-color 0.3s ease",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    width="640"
                    height="400"
                  ></img>
                  {project.url && (
                    <span
                      className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wider uppercase"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    >
                      <span className="live-dot"></span>
                      Live
                    </span>
                  )}
                </div>
              </div>

              <div className="min-w-0 md:col-span-5">
                <div
                  className="text-caption mb-3 font-mono"
                  style={{ color: "var(--accent)" }}
                >
                  Project {project.id}
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <h3
                    className="text-h3 flex-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {project.title}
                  </h3>
                  <span className="relative inline-flex flex-shrink-0 items-center">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }}
                    >
                      <span className="transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight />
                      </span>
                    </span>
                  </span>
                </div>

                <div className="view-project-text hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    View project
                  </span>
                </div>
                <p
                  className="text-body mb-4"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          background: "var(--surface-alt)",
                          color: "var(--muted-foreground)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
