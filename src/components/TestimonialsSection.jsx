import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";

export default function TestimonialsSection() {
  const { testimonials, sectionTitles } = data;

  return (
    <section className="relative">
      <SectionTitle
        subheading={sectionTitles.testimonials.subheading}
        heading={sectionTitles.testimonials.heading}
        bgImage={sectionTitles.testimonials.bgImage}
      />
      <div className="mx-auto max-w-5xl px-4 pb-24 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-3xl md:text-4xl font-black md:col-span-4 leading-tight" style={{ color: "var(--px-text)" }}>
            {sectionTitles.testimonials.heading}<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--px-muted)" }}>
            {testimonials.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.items.map((testimonial) => (
            <div key={testimonial.id} className="p-8 sm:p-10 rounded-2xl" style={{ border: "1px dashed var(--px-dashed)", background: "var(--px-card-bg)" }}>
              <QuoteIcon />

              <blockquote className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--px-text)" }}>
                {testimonial.quote}
              </blockquote>



              <figcaption className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid var(--px-hairline)" }}>

                <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm shrink-0 overflow-hidden"
                  style={{ background: "rgb(34, 211, 238)", color: "rgb(255, 255, 255)",
                   }}>

                   <img src={testimonial.initials}></img>

                  </div>

                  <div
                    className="min-w-0 flex-1"
                  >


                    <a
                                                          href={testimonial.profile_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={` ${testimonial.name} ${testimonial.title}`}
                    className="flex items-center gap-2 group"
                    >
                      <div className="text-sm font-black truncate group-hover:underline" style={{ color: "var(--px-text)" }}>{testimonial.name}</div>
                      <ArrowUpRight className="w-4 h-4" style={{ color: "rgb(34, 211, 238)" }} />
                    </a>

                    <div className="text-xs truncate" style={{ color: "var(--px-faint)" }}>{testimonial.title}</div>
                  </div>

              </figcaption>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-5" style={{ color: "rgb(34, 211, 238)" }}>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}