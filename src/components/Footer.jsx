import LinkedIn from "./icons/LinkedIn.jsx";
import Mail from "./icons/Mail.jsx";
import data from "../data/portfolio.json";

export default function Footer() {
  const { personal } = data;

  return (
    <footer className="relative px-6 py-12 mt-6"
      style={{ borderTop: "1px solid var(--px-hairline)", background: "var(--px-surface)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="text-base font-black uppercase tracking-tight" style={{ color: "var(--px-text)" }}>
            {personal.name}<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
          </div>
          <p className="text-xs" style={{ color: "var(--px-subtle)" }}>
            {personal.copyright}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "var(--px-pill-bg)", border: "1px solid var(--px-hairline)", color: "var(--px-text)" }}>
            <LinkedIn />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ background: "var(--px-pill-bg)", border: "1px solid var(--px-hairline)", color: "var(--px-text)" }}>
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
