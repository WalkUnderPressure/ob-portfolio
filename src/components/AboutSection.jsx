import ArrowUpRight from "./icons/ArrowUpRight.jsx";
import SectionTitle from "./SectionTitle.jsx";
import data from "../data/portfolio.json";
import CopyButton from "./CopyButton.jsx";

export default function AboutSection() {
  const { personal, sectionTitles } = data;

  return (
    <section id="about" className="relative pt-16">
      <SectionTitle
        subheading={sectionTitles.about.subheading}
        heading={sectionTitles.about.heading}
        bgImage={sectionTitles.about.bgImage}
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pt-12 md:grid-cols-12">
        <h2
          className="text-h2 col-span-1 md:col-span-4"
          style={{ color: "var(--foreground)" }}
        >
          About me<span style={{ color: "var(--accent)" }}>.</span>
        </h2>

        <div className="col-span-1 md:col-span-8">
          <div>
            <h3 className="text-h3 mb-3" style={{ color: "var(--accent)" }}>
              About me
            </h3>

            <p
              className="text-body mb-8"
              style={{ color: "var(--muted-foreground)" }}
            >
              {personal.aboutBio.text}
            </p>
          </div>

          <div>
            <h3 className="text-h3 mb-3" style={{ color: "var(--accent)" }}>
              Business Impact
            </h3>
            <div
              className="stagger-animate space-y-px"
              style={{ background: "var(--border)" }}
            >
              {personal.aboutBio.impacts.map((impact) => (
                <div
                  key={impact.title}
                  className="stagger-item px-6 py-8 sm:px-8 sm:py-10"
                  style={{ background: "var(--surface)" }}
                >
                  <h3
                    className="text-h3 mb-3 flex items-center gap-2"
                    style={{ color: "var(--foreground)" }}
                  >
                    <span style={{ color: "var(--accent)" }}>
                      {impact.icon}
                    </span>
                    {impact.title}
                  </h3>
                  <p
                    className="text-body"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <strong style={{ color: "var(--foreground)" }}>
                      {impact.highlight}
                    </strong>{" "}
                    {impact.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-x-8 gap-y-6 pt-8 md:grid-cols-2"
            style={{ borderTop: "1px solid var(--border)" }}
          >
            <InfoRow icon={<UserIcon />} label="Name" value={personal.name} />

            <InfoRow
              icon={<MailIcon />}
              label="Email"
              value={personal.email}
              withCopy={true}
            />

            <InfoRow
              icon={<PhoneIcon />}
              label="Phone"
              value={personal.phone}
              withCopy={true}
            />

            <InfoRow
              icon={<MapPinIcon />}
              label="Location"
              value={personal.location}
            />
          </div>

          <a
            href={`mailto:${personal.email}`}
            className="text-caption mt-10 inline-flex items-center gap-2 rounded-full px-7 py-4 transition-all duration-200 hover:scale-110"
            style={{
              background: "var(--accent)",
              color: "var(--accent-foreground)",
            }}
          >
            Get in touch <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, withCopy = false }) {
  return (
    <div className="flex min-w-0 items-start gap-3">
      <div className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div
          className="text-caption mb-1"
          style={{ color: "var(--muted-foreground)" }}
        >
          {label}
        </div>
        <div
          className="text-h3 flex flex-row items-center justify-start gap-4 break-words"
          style={{ color: "var(--foreground)", overflowWrap: "anywhere" }}
        >
          {value}

          {withCopy && (
            <CopyButton
              textToCopy={value}
              ariaLabel={`Copy ${label} to clipboard`}
              title={`Copy ${label}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MailIcon() {
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

function PhoneIcon() {
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

function MapPinIcon() {
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
