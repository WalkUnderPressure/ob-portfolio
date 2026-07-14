import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";

export default function TestimonialsSection() {
  const { testimonials, sectionTitles } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.items.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials.items[currentIndex];

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

        <div className="relative">
          <div
            className="p-8 sm:p-10 rounded-2xl flex flex-col"
            style={{
              height: '450px',
              border: "1px dashed var(--px-dashed)",
              background: "var(--px-card-bg)"
            }}
          >
            <span className='min-h-14 w-10 h-10'>
              <QuoteIcon />
            </span>

            <blockquote
              className="flex-1 overflow-auto text-base sm:text-lg leading-relaxed mb-6 flex-grow"
              style={{ color: "var(--px-text)" }}
            >
              {currentTestimonial.quote.split('\n').map((paragraph, index) => (
                <p key={index} className={"not-last:mb-4"}>
                  {paragraph}
                </p>
              ))}
            </blockquote>

            <figcaption className="flex items-center gap-3 pt-6" style={{ borderTop: "1px solid var(--px-hairline)" }}>
              <div className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm shrink-0 overflow-hidden"
                style={{ background: "rgb(34, 211, 238)", color: "rgb(255, 255, 255)" }}>
                <img src={currentTestimonial.initials} alt={currentTestimonial.name} />
              </div>

              <div className="min-w-0 flex-1">
                <a
                  href={currentTestimonial.profile_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${currentTestimonial.name} ${currentTestimonial.title}`}
                  className="flex items-center gap-2 group"
                >
                  <div className="text-sm font-black truncate group-hover:underline" style={{ color: "var(--px-text)" }}>
                    {currentTestimonial.name}
                  </div>
                  <ArrowUpRight className="w-4 h-4" style={{ color: "rgb(34, 211, 238)" }} />
                </a>

                <div className="text-xs truncate" style={{ color: "var(--px-faint)" }}>
                  {currentTestimonial.title}
                </div>
              </div>
            </figcaption>
          </div>

          <div className="flex items-center justify-between mt-8">
            {/* <button
              onClick={goToPrevious}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--px-card-bg)", color: "var(--px-text)", border: "1px solid var(--px-hairline)" }}
              aria-label="Previous testimonial"
            >
              ← Previous
            </button> */}

            <div className="mx-auto flex items-center gap-2">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="w-5 h-5 rounded-full transition-all hover:scale-125 cursor-pointer"
                  style={{
                    background: index === currentIndex ? "rgb(34, 211, 238)" : "var(--px-hairline)",
                    transform: index === currentIndex ? "scale(1.2)" : "scale(1)"
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* <button
              onClick={goToNext}
              className="px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-105"
              style={{ background: "var(--px-card-bg)", color: "var(--px-text)", border: "1px solid var(--px-hairline)" }}
              aria-label="Next testimonial"
            >
              Next →
            </button> */}
          </div>

          {/* <div className="text-center mt-4 text-sm font-medium" style={{ color: "var(--px-muted)" }}>
            {currentIndex + 1} / {testimonials.items.length}
          </div> */}
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
