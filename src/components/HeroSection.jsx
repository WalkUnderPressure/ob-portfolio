import LinkedIn from "./icons/LinkedIn.jsx";
import Mail from "./icons/Mail.jsx";
import ArrowDown from "./icons/ArrowDown.jsx";
import data from "../data/portfolio.json";

export default function HeroSection() {
  const { personal } = data;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <div className="absolute inset-0 grid grid-cols-1 gap-1 opacity-20 md:grid-cols-3">
        {personal.heroBackgrounds.map((bg, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i === 1 ? "md:col-span-1" : "hidden md:block"}`}
            style={{
              backgroundImage: `url('${bg}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        ))}
      </div>

      <div
        className="relative z-10 mx-auto max-w-5xl px-6 pt-28 pb-16 text-center sm:px-8 sm:pt-32"
        style={{ color: "var(--foreground)" }}
      >
        <div className="mb-4 flex justify-center md:mb-8">
          <div className="relative" style={{ width: "150px", height: "150px" }}>
            <div
              className="flex h-full w-full items-center justify-center overflow-hidden rounded-full"
              style={{
                background: "rgb(255, 255, 255)",
                border: "3px solid var(--accent)",
                boxShadow:
                  "rgba(245, 197, 24, 0.333) 0px 20px 60px -10px, rgb(255, 255, 255) 0px 0px 0px 8px",
              }}
            >
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="h-full w-full object-cover"
                loading="eager"
                width="150"
                height="150"
              />
            </div>
          </div>
        </div>
        <p
          className="text-caption mb-3 md:mb-6"
          style={{ color: "var(--accent)" }}
        >
          {personal.availability}
        </p>
        <h1 className="text-h1 mb-3 md:mb-6">{personal.name}</h1>
        <h2
          className="text-h2 mb-4 font-light md:mb-8"
          style={{ color: "rgba(245, 245, 240, 0.85)" }}
        >
          {personal.title}
        </h2>

        <p
          className="text-body mx-auto mb-6 max-w-2xl md:mb-12"
          style={{ color: "rgba(245, 245, 240, 0.85)" }}
        >
          {personal.heroDescription}
        </p>

        <div className="mb-8 flex items-center justify-center gap-3 md:mb-16">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 origin-center items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              background: "rgba(245, 245, 240, 0.08)",
              border: "1px solid rgba(245, 245, 240, 0.2)",
              color: "var(--foreground)",
            }}
          >
            <LinkedIn />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-12 w-12 origin-center items-center justify-center rounded-full transition-all hover:scale-110"
            style={{
              background: "rgba(245, 245, 240, 0.08)",
              border: "1px solid rgba(245, 245, 240, 0.2)",
              color: "var(--foreground)",
            }}
          >
            <Mail />
          </a>
        </div>
        <a
          href="#about"
          className="group flex flex-col items-center gap-3 text-[var(--accent)]"
          aria-label="Scroll to explore"
        >
          <span className="text-caption opacity-80">Scroll to explore</span>
          <ArrowDown className="animate-bounce transition-transform group-hover:translate-y-1" />
        </a>
      </div>
    </section>
  );
}
