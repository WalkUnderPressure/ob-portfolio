import LinkedIn from "./icons/LinkedIn.jsx";
import Mail from "./icons/Mail.jsx";
import ArrowDown from "./icons/ArrowDown.jsx";
import data from "../data/portfolio.json";

export default function HeroSection() {
  const { personal } = data;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "rgb(10, 10, 10)" }}>
      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-40">
        {personal.heroBackgrounds.map((bg, i) => (
          <div key={i} className="relative overflow-hidden"
            style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center center" }} />
        ))}
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.7) 60%, rgba(10, 10, 10, 0.95) 100%)" }} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-28 sm:pt-32 pb-16 text-center text-white">
        <div className="flex justify-center mb-8">
          <div className="relative" style={{ width: "150px", height: "150px" }}>
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center"
              style={{ background: "rgb(255, 255, 255)", border: "3px solid rgb(34, 211, 238)", boxShadow: "rgba(34, 211, 238, 0.333) 0px 20px 60px -10px, rgb(255, 255, 255) 0px 0px 0px 8px" }}>
              <img src={personal.profileImage}
                alt={personal.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.4em] mb-6" style={{ color: "rgb(34, 211, 238)" }}>
          {personal.availability}
        </p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-[0.9] mb-6">
          {personal.name}
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-8" style={{ color: "rgba(255, 255, 255, 0.85)" }}>
          {personal.title}
        </h2>
        <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
          {personal.heroDescription}
        </p>
        <div className="flex items-center justify-center gap-3 mb-16">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "rgb(255, 255, 255)" }}>
            <LinkedIn />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255, 255, 255, 0.08)", border: "1px solid rgba(255, 255, 255, 0.2)", color: "rgb(255, 255, 255)" }}>
            <Mail />
          </a>
        </div>
        <a href="#about" className="flex flex-col items-center gap-3 group">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em]" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
            Scroll to explore
          </span>
          <ArrowDown className="animate-bounce group-hover:translate-y-1 transition-transform" style={{ color: "rgb(34, 211, 238)" }} />
        </a>
      </div>
    </section>
  );
}
