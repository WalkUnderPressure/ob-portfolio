import LinkedIn from "./icons/LinkedIn.jsx";
import Mail from "./icons/Mail.jsx";
import ArrowDown from "./icons/ArrowDown.jsx";
import data from "../data/portfolio.json";

export default function HeroSection() {
  const { personal } = data;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--background)" }}>
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-1 opacity-20">
        {personal.heroBackgrounds.map((bg, i) => (
          <div key={i} className={`relative overflow-hidden ${i === 1 ? 'md:col-span-1' : 'hidden md:block'}`}
            style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center center" }} />
        ))}
      </div>

      <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(var(--background) 0.4) 0%, rgba(var(--background) 0.7) 60%, rgba(var(--background) 0.95) 100%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-28 sm:pt-32 pb-16 text-center" style={{ color: "var(--foreground)" }}>
        <div className="flex justify-center mb-8">
          <div className="relative" style={{ width: "150px", height: "150px" }}>
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
              style={{ background: "rgb(255, 255, 255)", border: "3px solid var(--accent)", boxShadow: "rgba(245, 197, 24, 0.333) 0px 20px 60px -10px, rgb(255, 255, 255) 0px 0px 0px 8px" }}>
              <img src={personal.profileImage}
                alt={personal.name} className="w-full h-full object-cover"
                loading="eager" width="150" height="150" />
            </div>
          </div>
        </div>
        <p className="text-caption mb-6" style={{ color: "var(--accent)" }}>
          {personal.availability}
        </p>
        <h1 className="text-h1 mb-6">
          {personal.name}
        </h1>
        <h2 className="text-h2 font-light mb-8" style={{ color: "rgba(245, 245, 240, 0.85)" }}>
          {personal.title}
        </h2>
        {/* <p className="text-body max-w-2xl mx-auto mb-12" style={{ color: "rgba(245, 245, 240, 0.6)" }}> */}
        <p className="text-body max-w-2xl mx-auto mb-12" style={{ color: "rgba(245, 245, 240, 0.85)" }}>
          {personal.heroDescription}
        </p>
        <div className="flex items-center justify-center gap-3 mb-16">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all origin-center hover:scale-110"
            style={{ background: "rgba(245, 245, 240, 0.08)", border: "1px solid rgba(245, 245, 240, 0.2)", color: "var(--foreground)" }}>
            <LinkedIn />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email"
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all origin-center hover:scale-110"
            style={{ background: "rgba(245, 245, 240, 0.08)", border: "1px solid rgba(245, 245, 240, 0.2)", color: "var(--foreground)" }}>
            <Mail />
          </a>
        </div>
        <a href="#about" className="flex flex-col items-center gap-3 group text-[var(--accent)]" aria-label="Scroll to explore">
          <span className="text-caption opacity-80">
          {/* style={{ color: "rgba(245, 245, 240, 0.5)" }} */}
            Scroll to explore
          </span>
          <ArrowDown className="animate-bounce group-hover:translate-y-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
