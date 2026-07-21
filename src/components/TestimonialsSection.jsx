import { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import clsx from "clsx";

export default function TestimonialsSection() {
  const { testimonials, sectionTitles } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStartPos, setTouchStartPos] = useState(null);

  const length = testimonials.items.length;

  // Handle responsive check for 3D card layout adjustments
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check on initial mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStartPos({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    });
  };

  const handleTouchEnd = (e) => {
    if (!touchStartPos) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchStartPos.x - touchEndX;
    const deltaY = touchStartPos.y - touchEndY;

    // Check if it's a horizontal swipe (distance > 50px and mostly horizontal)
    if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        goToNext(); // Swiped left
      } else {
        goToPrevious(); // Swiped right
      }
    }
    setTouchStartPos(null);
  };

  // Calculate the shortest distance in a circular array to achieve the infinite 3D wrapping effect
  const getOffset = (index) => {
    let offset = index - currentIndex;
    if (offset > Math.floor(length / 2)) offset -= length;
    if (offset < -Math.floor(length / 2)) offset += length;
    return offset;
  };

  return (
    <section id="testimonials" className="relative overflow-hidden pt-16">
      <SectionTitle
        subheading={sectionTitles.testimonials.subheading}
        heading={sectionTitles.testimonials.heading}
        bgImage={sectionTitles.testimonials.bgImage}
      />

      <div className="mx-auto max-w-6xl px-4 pt-12">
        {/* Header Section */}
        <div className="mb-4 grid grid-cols-1 gap-2 md:mb-16 md:grid-cols-12 md:gap-6 md:gap-8">
          <h2
            className="text-h2 col-span-1 md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.testimonials.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>

          <p
            className="text-body col-span-1 flex items-center justify-start md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {testimonials.description}
          </p>
        </div>

        {/* 3D Carousel Viewport */}
        <div
          className="relative mx-auto flex h-[580px] w-full max-w-3xl items-center justify-center sm:h-[550px] md:h-[480px]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.items.map((testimonial, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);
            const isActive = offset === 0;

            // Shift cards wider on mobile so they don't block the main card's text
            const translationPercentage = isMobile ? 95 : 65;
            const scaleAmount = isMobile ? 0.08 : 0.15;

            return (
              <div
                key={testimonial.id}
                className={clsx(
                  "absolute flex flex-col overflow-hidden rounded-2xl p-6 sm:p-10",
                  "h-[550px] w-full max-w-xl transition-all duration-700 ease-in-out sm:h-[500px] md:h-[450px]"
                )}
                style={{
                  border: "1px dashed var(--border)",
                  background: "var(--surface)",
                  transform: `translateX(${offset * translationPercentage}%) scale(${1 - absOffset * scaleAmount})`,
                  zIndex: 40 - absOffset,
                  opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.35,
                  pointerEvents: isActive ? "auto" : "none",
                  filter:
                    absOffset > 0
                      ? `blur(${absOffset * (isMobile ? 1 : 1.5)}px)`
                      : "none",
                }}
              >
                <div className="flex h-full flex-1 flex-col overflow-hidden">
                  <span className="mb-4 h-8 min-h-8 w-8 sm:mb-5 sm:h-10 sm:min-h-14 sm:w-10">
                    <QuoteIcon />
                  </span>

                  <blockquote
                    className="text-body mb-6 flex-1 flex-grow overflow-y-auto"
                    style={{ color: "var(--foreground)" }}
                  >
                    {testimonial.quote.split("\n").map((paragraph, i) => (
                      <p key={i} className={"not-last:mb-4"}>
                        {paragraph}
                      </p>
                    ))}
                  </blockquote>

                  <figcaption
                    className="flex items-center gap-3 pt-5 sm:pt-6"
                    style={{ borderTop: "1px solid var(--border)" }}
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full text-sm font-black sm:h-11 sm:w-11"
                      style={{
                        background: "var(--accent)",
                        color: "var(--accent-foreground)",
                      }}
                    >
                      <img
                        src={testimonial.initials}
                        alt={testimonial.name}
                        width="44"
                        height="44"
                        loading="lazy"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <a
                        href={testimonial.profile_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${testimonial.name} ${testimonial.title}`}
                        className="group flex items-center gap-2"
                      >
                        <div
                          className="text-h3 truncate text-base group-hover:underline sm:text-lg"
                          style={{ color: "var(--foreground)" }}
                        >
                          {testimonial.name}
                        </div>
                        <ArrowUpRight
                          className="h-3 w-3 sm:h-4 sm:w-4"
                          style={{ color: "var(--accent)" }}
                        />
                      </a>

                      <div
                        className="text-caption truncate text-xs sm:text-sm"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        {testimonial.title}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls - Identical across devices */}
        <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-12">
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goToPrevious}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
              style={{
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              aria-label="Previous testimonial"
            >
              <RightArrowIcon className="rotate-180" />
            </button>

            <div className="flex items-center gap-3">
              {testimonials.items.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => goToIndex(index)}
                  className="cursor-pointer transition-all duration-300 hover:scale-110"
                  style={{
                    background:
                      index === currentIndex
                        ? "var(--accent)"
                        : "var(--border)",
                    width: index === currentIndex ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span className="sr-only">Testimonial {index + 1}</span>
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform hover:scale-110"
              style={{
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
              aria-label="Next testimonial"
            >
              <RightArrowIcon />
            </button>
          </div>

          <div
            className="text-center text-sm font-medium tracking-widest"
            style={{ color: "var(--muted-foreground)" }}
          >
            {currentIndex + 1} / {length}
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
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--accent)" }}
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  );
}
