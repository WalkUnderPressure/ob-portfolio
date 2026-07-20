import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

import SectionTitle from "./SectionTitle.jsx";
import CopyButton from "./CopyButton.jsx";
import data from "../data/portfolio.json";

export default function ContactSection() {
  const { personal, contact, sectionTitles } = data;

  return (
    <section id="contact" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.contact.subheading}
        heading={sectionTitles.contact.heading}
        bgImage={sectionTitles.contact.bgImage}
      />

      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <h2
            className="text-h2 col-span-1 md:col-span-4"
            style={{ color: "var(--foreground)" }}
          >
            {sectionTitles.contact.heading}
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p
            className="text-body col-span-1 md:col-span-8"
            style={{ color: "var(--muted-foreground)" }}
          >
            {contact.description}
          </p>
        </div>

        <div className="space-y-6">
          {/* Secondary Contact Info */}
          <div
            className="text-body flex flex-wrap gap-6"
            style={{ color: "var(--muted-foreground)" }}
          >
            <div className="flex items-center justify-center gap-2">
              <MailSmallIcon />
              <a
                href={`mailto:${personal.email}`}
                className={clsx(
                  "text-[var(--foreground)] hover:underline",
                  "flex items-center justify-center"
                )}
              >
                {personal.email}
              </a>

              <CopyButton
                textToCopy={personal.email}
                ariaLabel="Copy email to clipboard"
                title="Copy email"
              />
            </div>

            <div className="flex items-center gap-2">
              <PhoneSmallIcon />

              <a
                href={`tel:${personal.phone}`}
                className={clsx(
                  "text-[var(--foreground)] hover:underline",
                  "flex items-center justify-center"
                )}
                style={{ color: "var(--foreground)" }}
              >
                {personal.phone}
              </a>

              <CopyButton
                textToCopy={personal.phone}
                ariaLabel="Copy phone to clipboard"
                title="Copy phone"
              />
            </div>

            <div className="flex items-center gap-2">
              <MapSmallIcon />
              <span style={{ color: "var(--foreground)" }}>
                {personal.location}
              </span>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="text-h3 cursor-pointer rounded-lg px-8 py-4 font-medium transition-all duration-200 hover:scale-110"
              style={{
                backgroundColor: "var(--accent)",
                color: "var(--background)",
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function PhoneSmallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function MapSmallIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
