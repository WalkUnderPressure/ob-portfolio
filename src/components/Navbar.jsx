import { useState } from "react";
import data from "../data/portfolio.json";

export default function Navbar() {
  const { navigation, personal } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
      }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button className="text-base font-black tracking-tight uppercase"
            style={{ color: "rgb(255, 255, 255)", mixBlendMode: "difference" }}>
            {navigation.brand}
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navigation.items.map((item) => (
              <a key={item.sectionId} href={`#${item.sectionId}`}
                className="text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:opacity-60"
                style={{ color: "rgb(255, 255, 255)", mixBlendMode: "difference" }}>
                {item.label}
              </a>
            ))}
          </div>
          <a href={`mailto:${personal.email}`}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105"
            style={{ background: "rgb(34, 211, 238)", color: "rgb(255, 255, 255)" }}>
            Contact
          </a>
          <button
            className="md:hidden p-2"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "rgb(255, 255, 255)", mixBlendMode: "difference" }}>
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6L6 18" /><path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navigation.items.map((item) => (
                <a
                  key={item.sectionId}
                  href={`#${item.sectionId}`}
                  className="text-sm font-bold uppercase tracking-[0.2em] transition-colors hover:opacity-60"
                  style={{ color: "rgb(255, 255, 255)", mixBlendMode: "difference" }}
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href={`mailto:${personal.email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105 mt-2"
                style={{ background: "rgb(34, 211, 238)", color: "rgb(255, 255, 255)" }}
                onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}