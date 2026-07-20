import { useState } from "react";
import SectionTitle from "./SectionTitle.jsx";
import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import data from "../data/portfolio.json";

export default function ContactSection() {
  const { personal, contact, sectionTitles } = data;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="contact" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.contact.subheading}
        heading={sectionTitles.contact.heading}
        bgImage={sectionTitles.contact.bgImage}
      />

      <div className="mx-auto max-w-5xl px-4 pt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 mb-12">
          <h2 className="col-span-1 text-h2 md:col-span-4" style={{ color: "var(--foreground)" }}>
            {sectionTitles.contact.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="col-span-1 md:col-span-8 text-body" style={{ color: "var(--muted-foreground)" }}>
            {contact.description}
          </p>
        </div>

        <div className="space-y-6">
          {/* Secondary Contact Info */}
          <div className="flex flex-wrap gap-6 text-body" style={{ color: "var(--muted-foreground)" }}>
            <div className="flex items-center gap-2">
              <MailSmallIcon />
              <a
                href={`mailto:${personal.email}`}
                className="hover:underline"
                style={{ color: "var(--foreground)" }}
              >
                {personal.email}
              </a>

              <button
                onClick={() => copyToClipboard(personal.email)}
                className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity ml-1"
                aria-label="Copy email to clipboard"
                title="Copy email"
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <PhoneSmallIcon />
              <a
                href={`tel:${personal.phone}`}
                className="hover:underline"
                style={{ color: "var(--foreground)" }}
              >
                {personal.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapSmallIcon />
              <span style={{ color: "var(--foreground)" }}>{personal.location}</span>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="px-8 py-4 cursor-pointer text-h3 font-medium rounded-lg transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--background)"
              }}
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function MapSmallIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--accent)" }}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}