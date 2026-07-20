import { useState, useEffect, useRef } from "react";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import clsx from "clsx";
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
    ).fromTo(
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
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-h2 col-span-1 md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.testimonials.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="text-body col-span-1 md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {testimonials.description}
          </p>
        </div>

        <div className="relative">
          <div
            className={clsx(
              `flex flex-col rounded-2xl p-8 sm:p-10`,
              "h-[500px]"
            )}
            style={{
              border: "1px dashed var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              key={currentTestimonial.id}
              className={`flex h-full flex-1 flex-col overflow-hidden`}
            >
              <span className="h-10 min-h-14 w-10">
                <QuoteIcon />
              </span>

              <blockquote
                ref={quoteRef}
                className="text-body mb-6 flex-1 flex-grow overflow-y-auto"
                style={{ color: "var(--foreground)" }}
              >
                {currentTestimonial.quote
                  .split("\n")
                  .map((paragraph, index) => (
                    <p key={index} className={"not-last:mb-4"}>
                      {paragraph}
                    </p>
                  ))}
              </blockquote>

              <figcaption
                ref={authorRef}
                className="flex items-center gap-3 pt-6"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-black"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                  }}
                >
                  <img
                    src={currentTestimonial.initials}
                    alt={currentTestimonial.name}
                    width="44"
                    height="44"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <a
                    href={currentTestimonial.profile_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${currentTestimonial.name} ${currentTestimonial.title}`}
                    className="group flex items-center gap-2"
                  >
                    <div
                      className="text-h3 truncate group-hover:underline"
                      style={{ color: "var(--foreground)" }}
                    >
                      {currentTestimonial.name}
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4"
                      style={{ color: "var(--accent)" }}
                    />
                  </a>

                  <div
                    className="text-caption truncate"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {currentTestimonial.title}
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={goToPrevious}
              className={clsx(
                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110"
              )}
              style={{
                minWidth: "32px",
                minHeight: "32px",
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              aria-label="Previous testimonial"
            >
              <RightArrowIcon className={"rotate-180"} />
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
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110"
                    style={{
                      background:
                        index === currentIndex
                          ? "var(--accent)"
                          : "var(--border)",
                      transform:
                        index === currentIndex ? "scale(1.1)" : "scale(1)",
                      minWidth: "32px",
                      minHeight: "32px",
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={goToNext}
              className={clsx(
                "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110"
              )}
              style={{
                minWidth: "32px",
                minHeight: "32px",
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              aria-label="Previous testimonial"
            >
              <RightArrowIcon />
            </button>
          </div>

          <div
            className="mt-4 text-center text-sm font-medium"
            style={{ color: "var(--muted-foreground)" }}
          >
            {currentIndex + 1} / {testimonials.items.length}
          </div>
        </div>
      </div>
    </section>
  );
}

function RightArrowIcon({ className }) {
  return (
    <svg
      fill="currentColor"
      width="16px"
      height="16px"
      viewBox="0 0 8 8"
      className={clsx("text-[var(--accent)]", className)}
    >
      <rect
        x="2.95"
        y="1.921"
        transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 7.6689 8.4842)"
        width="5.283"
        height="1.466"
      />
      <rect x="0.024" y="3.157" width="6.375" height="1.683" />
      <rect
        x="2.956"
        y="4.615"
        transform="matrix(-0.7069 0.7073 -0.7073 -0.7069 13.3369 5.1684)"
        width="5.284"
        height="1.465"
      />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mb-5"
      style={{ color: "var(--accent)" }}
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}
