import clsx from 'clsx'

export default function SectionTitle({ subheading, heading, sectionId, bgImage }) {
  return (
    <div className='px-3'>
      <div
        className={clsx(
          'rounded-3xl',
          "relative text-white px-6 py-24 sm:py-32",
          "flex flex-col items-center justify-center",
        )}
        style={{ minHeight: "60vh" }}
      >
        <img src={bgImage} alt={heading}
          className={clsx(
            "w-full h-full object-cover absolute inset-0 z-0 rounded-4xl",
          )}
         />

        <div className={clsx(
            "w-full h-full absolute inset-0 z-10 bg-neutral-950/80",
            'rounded-3xl',
          )}
        />

        <div className="section-header-animate relative z-10 text-center">
          <h2 className="text-7xl tracking-widest font-black uppercase"
            style={{ color: "var(--accent)" }}
          >
            {subheading}
          </h2>
        </div>
      </div>
    </div>
  );
}