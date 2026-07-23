import { useState } from "react";
import data from "../data/portfolio.json";
import clsx from "clsx";

export default function Navbar() {
  const { navigation, personal } = data;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 right-0 left-0 z-50 h-16 transition-all duration-300"
      style={{
        background: "rgba(11, 14, 20, 0.3)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(245, 245, 240, 0.1)",
      }}
    >
      <div className="mx-auto h-full max-w-7xl px-6 py-4">
        <div className="flex h-full items-center justify-between gap-4">
          <button
            className={clsx(
              "flex flex-row items-center justify-center",
              "text-h3 tracking-tight text-[var(--foreground)] uppercase"
            )}
            style={{
              mixBlendMode: "difference",
            }}
          >
            {navigation.brand}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.items.map((item) => (
              <a
                key={item.sectionId}
                href={`#${item.sectionId}`}
                className={clsx(
                  "text-caption transition-all duration-200 hover:scale-110",
                  "hover:opacity-60"
                )}
                style={{ mixBlendMode: "difference" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="text-caption hidden items-center gap-2 rounded-full px-5 py-2 transition-all duration-200 hover:scale-110 md:inline-flex"
            style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
          >
            Contact
          </a>

          <button
            className="flex min-h-[44px] min-w-[44px] items-center justify-center p-2 md:hidden"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "var(--foreground)", mixBlendMode: "difference" }}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={clsx(
            "fixed top-16 left-0 w-screen border-t px-8 py-4 md:hidden",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-4 opacity-0"
          )}
          style={{
            background: "rgba(11, 14, 20, 0.95)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(245, 245, 240, 0.1)",
          }}
        >
          <div className="flex flex-col gap-2">
            {navigation.items.map((item) => (
              <a
                key={item.sectionId}
                href={`#${item.sectionId}`}
                className="text-caption flex min-h-[44px] items-center py-3 transition-colors hover:opacity-60"
                style={{
                  color: "var(--foreground)",
                  mixBlendMode: "difference",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href={`mailto:${personal.email}`}
              className="text-caption mt-2 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-3 transition-all duration-200 hover:scale-110"
              style={{
                background: "var(--accent)",
                color: "var(--accent-foreground)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
