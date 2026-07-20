import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import clsx from 'clsx';
import { gsap } from "gsap";

export default function TestimonialsSection() {
  const { testimonials, sectionTitles } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredDot, setHoveredDot] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  const maxIndex = Math.max(0, testimonials.items.length - 1);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const visibleTestimonials = testimonials.items;

  const currentTestimonial = testimonials.items[currentIndex];

  useEffect(() => {
    if (!quoteRef.current || !authorRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      quoteRef.current,
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" }
    )
    .fromTo(
      authorRef.current,
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
      "-=0.4"
    );
  }, [currentTestimonial]);

  return (
    <section id="testimonials" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.testimonials.subheading}
        heading={sectionTitles.testimonials.heading}
        bgImage={sectionTitles.testimonials.bgImage}
      />

      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.testimonials.heading}<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {testimonials.description}
          </p>
        </div>

        <div className="relative">
          <div
            className={clsx(`p-8 sm:p-10 rounded-2xl flex flex-col`, "h-[500px]")}
            style={{
              border: "1px dashed var(--border)",
              background: "var(--surface)"
            }}
          >
              <div
                key={currentTestimonial.id}
                className={`flex flex-col flex-1 h-full overflow-hidden`}
              >
                <span className='min-h-14 w-10 h-10'>
                  <QuoteIcon />
                </span>

                <blockquote
                  ref={quoteRef}
                  className="flex-1 overflow-y-auto text-body mb-6 flex-grow"
                  style={{ color: "var(--foreground)" }}
                >
                  {currentTestimonial.quote.split('\n').map((paragraph, index) => (
                    <p key={index} className={"not-last:mb-4"}>
                      {paragraph}
                    </p>
                  ))}
                </blockquote>

                <figcaption ref={authorRef} className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm shrink-0 overflow-hidden"
                    style={{ background: "var(--accent)", color: "var(--accent-foreground)" }}>
                    <img src={currentTestimonial.initials} alt={currentTestimonial.name} width="44" height="44" loading="lazy" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <a
                      href={currentTestimonial.profile_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${currentTestimonial.name} ${currentTestimonial.title}`}
                      className="flex items-center gap-2 group"
                    >
                      <div className="text-h3 truncate group-hover:underline" style={{ color: "var(--foreground)" }}>
                        {currentTestimonial.name}
                      </div>
                      <ArrowUpRight className="w-4 h-4" style={{ color: "var(--accent)" }} />
                    </a>

                    <div className="text-caption truncate" style={{ color: "var(--muted-foreground)" }}>
                      {currentTestimonial.title}
                    </div>
                  </div>
                </figcaption>
              </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goToPrevious}
              className={clsx(
                "w-6 h-6 rounded-full transition-all hover:scale-110 cursor-pointer flex items-center justify-center",
              )}
              style={{
                paddingRight: '6px',
                minWidth: "44px",
                minHeight: "44px",
                background: "var(--surface)", color: "var(--foreground)", border: "1px solid var(--border)"
              }}
              aria-label="Previous testimonial"
            >
              <svg height="24px" width="24px" viewBox="0 0 125.304 125.304" fill='currentColor' className='text-[var(--accent)]'>
              <g>
                <g>
                  <polygon points="21.409,62.652 103.895,125.304 103.895,0 		"/>
                </g>
              </g>
              </svg>
            </button>

            <div className="flex items-center gap-3">
              {testimonials.items.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredDot(index)}
                  onMouseLeave={() => setHoveredDot(null)}
                >
                  <button
                    onClick={() => goToIndex(index)}
                    className="w-6 h-6 rounded-full transition-all hover:scale-110 cursor-pointer flex items-center justify-center"
                    style={{
                      background: index === currentIndex ? "var(--accent)" : "var(--border)",
                      transform: index === currentIndex ? "scale(1.1)" : "scale(1)",
                      minWidth: "44px",
                      minHeight: "44px"
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>

                  {hoveredDot === index && (
                    <div
                      className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 p-3 rounded-lg shadow-lg z-50 whitespace-nowrap"
                      style={{
                        background: "var(--surface)",
                        border: "1px solid var(--border)",
                        minWidth: "200px"
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden shrink-0"
                          style={{ background: "var(--accent)" }}>
                          <img src={item.initials} alt={item.name} className="w-full h-full object-cover" width="40" height="40" loading="lazy" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm truncate" style={{ color: "var(--foreground)" }}>
                            {item.name}
                          </div>
                          <div className="text-xs truncate" style={{ color: "var(--muted-foreground)" }}>
                            {item.title}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

                        <button
              onClick={goToNext}
              className={clsx(
                "w-6 h-6 rounded-full transition-all hover:scale-110 cursor-pointer flex items-center justify-center",
              )}
              style={{
                paddingLeft: '6px',
                minWidth: "44px",
                minHeight: "44px",
                background: "var(--surface)", color: "var(--foreground)", border: "1px solid var(--border)"
              }}
              aria-label="Previous testimonial"
            >
              <svg height="24px" width="24px" viewBox="0 0 125.304 125.304" fill='currentColor' className='rotate-180 text-[var(--accent)]'>
              <g>
                <g>
                  <polygon points="21.409,62.652 103.895,125.304 103.895,0 		"/>
                </g>
              </g>
              </svg>
            </button>
          </div>

          <div className="text-center mt-4 text-sm font-medium" style={{ color: "var(--muted-foreground)" }}>
            {currentIndex + 1} / {testimonials.items.length}
          </div>
        </div>
      </div>
    </section>
  );
}

  function QuoteIcon() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-5" style={{ color: "var(--accent)" }}>
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}