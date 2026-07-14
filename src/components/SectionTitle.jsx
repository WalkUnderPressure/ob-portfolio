export default function SectionTitle({ subheading, heading, sectionId, bgImage }) {
  return (
    <div style={{ paddingLeft: "12px", paddingRight: "12px" }}>
      <div
        id={sectionId}
        className="relative overflow-hidden rounded-3xl flex flex-col items-center justify-center text-white px-6 py-24 sm:py-32"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          minHeight: "60vh",
        }}
      >
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="relative z-10 text-center">
          <p
            className="mb-3 text-base sm:text-xl md:mb-4 md:text-2xl font-semibold uppercase tracking-[0.3em]"
            style={{ color: "rgb(34, 211, 238)" }}
          >
            {subheading}
          </p>
          <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            {heading}
          </p>
        </div>
      </div>
    </div>
  );
}