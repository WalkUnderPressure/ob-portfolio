import LinkedIn from "./icons/LinkedIn.jsx";
import Mail from "./icons/Mail.jsx";
import data from "../data/portfolio.json";

export default function Footer() {
  const { personal } = data;

  return (
    <footer
      className="relative px-6 py-12"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div
            className="text-h3 tracking-tight uppercase"
            style={{ color: "var(--foreground)" }}
          >
            {personal.name}
            <span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <p
            className="text-caption"
            style={{ color: "var(--muted-foreground)" }}
          >
            {personal.copyright}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
            style={{
              background: "var(--surface-alt)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            <LinkedIn />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-transform hover:scale-110"
            style={{
              background: "var(--surface-alt)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          >
            <Mail />
          </a>
        </div>
      </div>
    </footer>
  );
}
