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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.projects.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {projects.description}
          </p>
        </div>
        <div className="space-y-20 sm:space-y-28 stagger-animate">
          {projects.items.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card block grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 md:gap-12 items-center stagger-item group"
            >
              <div className="md:col-span-7">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl relative" style={{ border: "1px solid var(--border)", transition: "border-color 0.3s ease" }}>
                  <img src={project.image} alt={project.title} className='w-full h-full object-cover' width="640" height="400"></img>
                  {project.url && (
                    <span
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
                      }}
                    >
                      <span className="live-dot"></span>
                      Live
                    </span>
                  )}
                </div>
              </div>

                <div className="md:col-span-5 min-w-0">
                  <div className="text-caption font-mono mb-3" style={{ color: "var(--accent)" }}>Project {project.id}</div>
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-h3 flex-1" style={{ color: "var(--foreground)" }}>
                    {project.title}
                  </h3>
                  <span className="relative inline-flex items-center flex-shrink-0">
                    <span
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}
                    >
                      <span className="transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight />
                      </span>
                    </span>
                  </span>
                </div>
                <div className="view-project-text opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>View project</span>
                </div>
                <p className="text-body mb-4" style={{ color: "var(--muted-foreground)" }}>
                  {project.description}
                </p>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "var(--surface-alt)",
                          color: "var(--muted-foreground)",
                          border: "1px solid var(--border)"
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
