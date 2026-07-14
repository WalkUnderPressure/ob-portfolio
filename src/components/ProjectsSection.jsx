import SectionTitle from "./SectionTitle.jsx";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import data from "../data/portfolio.json";

export default function ProjectsSection() {
  const { projects, sectionTitles } = data;

  return (
    <section className="relative">
      <SectionTitle
        subheading={sectionTitles.projects.subheading}
        heading={sectionTitles.projects.heading}
        bgImage={sectionTitles.projects.bgImage}
      />

      <div className="mx-auto max-w-6xl px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-3xl md:text-4xl font-black md:col-span-4 leading-tight" style={{ color: "var(--px-text)" }}>
            {sectionTitles.projects.heading}<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
          </h2>

          <p className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--px-muted)" }}>
            {projects.description}
          </p>
        </div>
        <div className="space-y-20 sm:space-y-28">
          {projects.items.map((project) => (
            <div key={project.id} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-7">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl" style={{ border: "1px dashed var(--px-dashed)" }}>
                  {/* <div className="relative w-full h-full overflow-hidden"
                    style={{ background: "linear-gradient(135deg, var(--px-card-bg) 0%, var(--px-card-bg-hover) 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.04]"
                      style={{ backgroundImage: "linear-gradient(to right, var(--px-text) 1px, transparent 1px), linear-gradient(to bottom, var(--px-text) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                    <div className="absolute -top-12 -right-12 w-48 h-48 rotate-45"
                      style={{ background: "linear-gradient(135deg, rgb(34, 211, 238) 0%, rgba(34, 211, 238, 0) 60%)", opacity: 0.12 }} />
                    <div className="absolute -bottom-8 -left-4 select-none pointer-events-none font-black leading-none"
                      style={{ fontSize: "clamp(11rem, 32vw, 22rem)", color: "transparent", WebkitTextStroke: "2px rgba(34, 211, 238, 0.2)", letterSpacing: "-0.06em" }}>
                      {project.id}
                    </div>
                    <div className="absolute top-6 left-6 sm:top-8 sm:left-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em]"
                      style={{ color: "rgb(34, 211, 238)" }}>
                      <span className="inline-block w-8 h-px" style={{ background: "rgb(34, 211, 238)" }}></span>
                      <span>Project {project.id}</span>
                    </div>
                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 max-w-[70%] text-right">
                      <h4 className="text-2xl sm:text-3xl md:text-4xl font-black leading-[1.05] tracking-tight break-words"
                        style={{ color: "var(--px-text)", overflowWrap: "anywhere" }}>
                        {project.title}
                      </h4>
                    </div>
                  </div> */}
                  <img src={project.image} className='w-full h-full object-cover'></img>
                </div>
              </div>

              <div className="md:col-span-5 min-w-0">
                <div className="text-xs font-mono font-bold mb-3" style={{ color: "rgb(34, 211, 238)" }}>Project {project.id}</div>
                <div className="flex items-start gap-3 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight flex-1" style={{ color: "var(--px-text)" }}>
                    {project.title}
                  </h3>
                  <span className="relative inline-flex items-center flex-shrink-0">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      style={{ background: "rgb(34, 211, 238)", color: "rgb(255, 255, 255)" }}>
                      <ArrowUpRight />
                    </a>
                  </span>
                </div>
                <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--px-muted)" }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
