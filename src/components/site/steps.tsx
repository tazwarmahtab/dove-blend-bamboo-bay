const STEPS = [
  {
    n: "01",
    title: "Assess",
    body: "We evaluate your roof, load profile, and current tariff — then send a clear, numbered offer.",
  },
  {
    n: "02",
    title: "Design & finance",
    body: "Netso designs the system to your production pattern and provides 100% project financing.",
  },
  {
    n: "03",
    title: "Install & operate",
    body: "We install, interconnect, and take full responsibility for performance and maintenance.",
  },
  {
    n: "04",
    title: "Save",
    body: "You pay only for the clean electricity generated — at a rate lower than the grid.",
  },
];

export function Steps() {
  return (
    <section id="how" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">Process</p>
        <h2 className="font-display mt-4 max-w-2xl text-headline leading-[1.05] font-medium tracking-tight">
          Simple. Transparent. Built for industry.
        </h2>
        <ol className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.n}
              className="flex flex-col border-t border-border pt-8 pr-0 pb-10 sm:pr-8"
            >
              <span className="font-mono text-sm tracking-widest text-primary">{step.n}</span>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
