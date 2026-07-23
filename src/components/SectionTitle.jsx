import clsx from "clsx";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations.js";

export default function SectionTitle({ subheading, heading, bgImage }) {
  return (
    <div className="px-3">
      <div
        className={clsx(
          "rounded-3xl",
          "relative px-6 py-24 text-white sm:py-32",
          "flex flex-col items-center justify-center",
          "min-h-[25vh] md:min-h-[60vh]"
        )}
      >
        <img
          src={bgImage}
          alt={heading}
          className={clsx(
            "absolute inset-0 z-0 h-full w-full rounded-4xl object-cover"
          )}
        />

        <div
          className={clsx(
            "absolute inset-0 z-10 h-full w-full bg-neutral-950/80",
            "rounded-3xl"
          )}
        />

        <motion.div className="relative z-10 text-center" {...fadeInUp}>
          <h2
            className="text-4xl font-black tracking-widest uppercase md:text-7xl"
            style={{ color: "var(--accent)" }}
          >
            {subheading}
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
