const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Shared fade-in + translateY variant for section headers
export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-20% 0px" },
  transition: { duration: 0.75, delay: 0.2, ease: "easeOut" },
};

// Stagger container variant — children use .staggerItem
export const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.08,
    },
  },
  viewport: { once: true, margin: "-20% 0px" },
};

export const staggerItem = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const getProjectItem = (index) => ({
  viewport: {
    once: true,
    amount: 0.2,
  },
  initial: {
    rotate: index % 2 ? 2 : -2,
    y: 30,
    x: index % 2 ? 80 : -80,
  },
  whileInView: {
    rotate: 0,
    y: 0,
    x: 0,
  },
  transition: {
    duration: 0.4,
  },
});

// Timeline slide-in from left
export const timelineItem = {
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-20% 0px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

/**
 * Wraps any animation config and disables it when prefers-reduced-motion is active.
 * Usage: spread the returned object onto a motion element.
 */
export function withReducedMotion(config) {
  if (prefersReducedMotion) {
    return {};
  }
  return config;
}
