export function Model() {
  return (
    <section id="model" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">The Netso model</p>
          <h2 className="font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight">
            We finance, install, own, and maintain the system.
          </h2>
          <p className="mt-6 text-lead text-muted-foreground">
            You simply pay a lower rate for the electricity it produces — with no capital
            outlay and full performance responsibility on us.
          </p>
          <ul className="mt-10 space-y-5">
            {[
              {
                k: "No CapEx",
                v: "Netso funds 100% of the rooftop plant. Your capital stays in the business.",
              },
              {
                k: "Lower than grid",
                v: "You buy solar units at a contracted RESCO rate below your industrial tariff.",
              },
              {
                k: "We carry the risk",
                v: "Design, interconnection, yield, and maintenance sit with Netso for the life of the contract.",
              },
            ].map((row) => (
              <li key={row.k} className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-border pt-5">
                <span className="text-sm font-medium text-primary">{row.k}</span>
                <span className="text-sm leading-relaxed text-muted-foreground">{row.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <figure className="lg:col-span-7">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/project-industrial.jpg"
              alt="Industrial rooftop in Bangladesh covered with solar modules"
              className="aspect-3/2 w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-faint">
            Idle factory roofs become a power plant — without a line on your balance sheet.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
