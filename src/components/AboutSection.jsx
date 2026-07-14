import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";

export default function AboutSection() {
  const { personal, sectionTitles } = data;

  return (
    <section className="relative">
      <SectionTitle
        subheading={sectionTitles.about.subheading}
        heading={sectionTitles.about.heading}
        bgImage={sectionTitles.about.bgImage}
      />
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl md:text-4xl font-black md:col-span-4 leading-tight" style={{ color: "var(--px-text)" }}>
          About me<span style={{ color: "rgb(34, 211, 238)" }}>.</span>
        </h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-8 text-lg md:text-xl leading-relaxed" style={{ color: "var(--px-muted)" }}>
            {personal.aboutBio}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-8" style={{ borderTop: "1px solid var(--px-hairline)" }}>
            <InfoRow icon={<UserIcon />} label="Name" value={personal.name} />
            <InfoRow icon={<MailIcon />} label="Email" value={personal.email} />
            <InfoRow icon={<PhoneIcon />} label="Phone" value={personal.phone} />
            <InfoRow icon={<MapPinIcon />} label="Location" value={personal.location} />
          </div>
          <a href={`mailto:${personal.email}`}
            className="mt-10 inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-transform hover:scale-105"
            style={{ background: "var(--px-primary)", color: "rgb(255, 255, 255)" }}>
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 min-w-0">
      <div className="shrink-0 mt-1" style={{ color: "rgb(34, 211, 238)" }}>{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-1" style={{ color: "var(--px-subtle)" }}>{label}</div>
        <div className="text-sm font-semibold break-words" style={{ color: "var(--px-text)", overflowWrap: "anywhere" }}>{value}</div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}