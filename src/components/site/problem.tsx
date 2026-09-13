import { Factory, TriangleAlert, Wallet } from "lucide-react";

const POINTS = [
  {
    icon: TriangleAlert,
    title: "Rising grid tariffs",
    body: "Industrial rates have climbed sharply in recent years. Peak power now sits well above ৳15/kWh for many factory connections, squeezing already thin margins.",
  },
  {
    icon: Factory,
    title: "Unplanned downtime",
    body: "Load-shedding and unstable supply interrupt production schedules, spoil batches, and push teams onto expensive diesel backup.",
  },
  {
    icon: Wallet,
    title: "Capital locked up",
    body: "Traditional solar still asks for a large cheque upfront. That capital could be buying machines, inventory, or growth instead of sitting on a roof.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">The cost of waiting</p>
        <h2 className="font-display mt-4 max-w-3xl text-headline leading-[1.05] font-medium tracking-tight">
          Power cuts and rising costs are quietly taxing every factory.
        </h2>
        <p className="mt-6 max-w-2xl text-lead text-muted-foreground">
          Industrial electricity tariffs keep climbing. Load-shedding still hits production
          lines. Diesel backup is expensive and unreliable. Most factories are left choosing
          between higher operating costs or risky capital expenditure on solar.
        </p>
      </div>

      <figure className="relative mx-auto max-w-7xl overflow-hidden px-5 md:px-10">
        <div className="overflow-hidden rounded-xl">
          <img
            src="/images/problem.jpg"
            alt="Empty factory floor during a power interruption"
            className="aspect-16/9 w-full object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm text-faint">
          When the grid fails, production stops. Diesel is a costly, incomplete answer.
        </figcaption>
      </figure>

      <div className="mx-auto grid max-w-7xl gap-px border-t border-border px-5 py-16 md:grid-cols-3 md:px-10 md:py-20">
        {POINTS.map((point) => (
          <article key={point.title} className="py-8 md:px-8 md:py-0 first:md:pl-0 last:md:pr-0">
            <point.icon className="size-5 text-primary" strokeWidth={1.5} />
            <h3 className="mt-5 text-lg font-medium tracking-tight">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
