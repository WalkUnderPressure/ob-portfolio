import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

export function initScrollAnimations() {
  if (prefersReducedMotion) {
    return;
  }

  // Section headers: fade in + translateY from 12px to 0
  const sectionHeaders = document.querySelectorAll(".section-header-animate");

  sectionHeaders.forEach((header) => {
    gsap.fromTo(
      header,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Stagger fade-in for skill rows and project cards
  const staggerItems = document.querySelectorAll(".stagger-animate");
  staggerItems.forEach((container) => {
    const items = container.querySelectorAll(".stagger-item");
    gsap.fromTo(
      items,
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // Timeline items: left-to-right slide
  const timelineItems = document.querySelectorAll(".timeline-animate");
  timelineItems.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: -16 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}
