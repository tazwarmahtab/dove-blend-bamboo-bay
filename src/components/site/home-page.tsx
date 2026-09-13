"use client";

import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/site/frame";
import { ROOFS } from "@/lib/projects";
import { estimate, formatBdt, formatKwp } from "@/lib/calculator";
import { useCalc } from "@/lib/store";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "intro", n: "00" },
  { id: "tax", n: "01" },
  { id: "model", n: "02" },
  { id: "work", n: "03" },
  { id: "instrument", n: "04" },
];

export function HomePage() {
  return (
    <SiteFrame>
      <ChapterRail />
      <Hero />
      <Tax />
      <ModelTease />
      <WorkTease />
      <InstrumentTease />
    </SiteFrame>
  );
}

function ChapterRail() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const nodes = CHAPTERS.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Chapters"
      className="pointer-events-none fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 xl:flex"
    >
      <ol className="pointer-events-auto flex flex-col gap-3">
        {CHAPTERS.map((c) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={cn(
                "font-mono text-xs tracking-widest transition-colors duration-150",
                active === c.id ? "text-primary" : "text-faint hover:text-foreground",
              )}
            >
              {c.n}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Hero() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="intro" className="relative flex min-h-svh flex-col justify-end">
      <div className="absolute inset-0 overflow-hidden">
        {!reduceMotion ? (
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero.jpg"
            aria-hidden="true"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <img src="/images/hero.jpg" alt="" className="size-full object-cover" />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-linear-to-r from-background/55 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-14 md:px-8 md:pb-16">
        <p className="hero-rise label-mono text-primary" style={{ animationDelay: "60ms" }}>
          00 — Rooftop solar as a service
        </p>
        <h1
          className="hero-rise font-display mt-6 max-w-4xl text-display leading-[0.92] font-medium tracking-tight"
          style={{ animationDelay: "140ms" }}
        >
          Clean power.
          <br />
          <em className="italic">Zero capital.</em>
        </h1>
        <p
          className="hero-rise mt-6 max-w-md text-lead text-muted-foreground"
          style={{ animationDelay: "240ms" }}
        >
          We fund, build, and run the plant on your roof. You buy the electricity —
          cheaper than the grid.
        </p>
        <div
          className="hero-rise mt-10 flex flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "340ms" }}
        >
          <Button size="lg" variant="inverse" asChild>
            <Link to="/savings">
              Open the instrument
              <ArrowUpRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/assess">Book assessment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Tax() {
  return (
    <section id="tax" className="relative min-h-svh">
      <img
        src="/images/problem.jpg"
        alt="Factory floor during a power interruption"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-background/25" />
      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-end px-5 py-16 md:px-8 md:py-20">
        <p className="label-mono text-primary">01 — The tax</p>
        <h2 className="font-display mt-4 max-w-3xl text-headline leading-[1.05] font-medium tracking-tight">
          The grid is taxing the factory.
        </h2>
        <ul className="mt-10 grid gap-8 border-t border-foreground/15 pt-8 md:grid-cols-3">
          {[
            {
              k: "Tariffs",
              v: "Industrial peak power now sits above ৳15/kWh. Daytime rates keep climbing.",
            },
            {
              k: "Downtime",
              v: "Cuts stop the line. Diesel covers them badly, and at a worse price.",
            },
            {
              k: "Capital",
              v: "Buying the plant yourself locks cash on the roof that should be in production.",
            },
          ].map((row) => (
            <li key={row.k}>
              <p className="label-mono text-foreground">{row.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{row.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ModelTease() {
  return (
    <section id="model" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-12">
        <div className="flex flex-col justify-center px-5 py-20 md:px-8 lg:col-span-5 lg:py-28">
          <p className="label-mono text-primary">02 — The model</p>
          <h2 className="font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight">
            You keep the roof. We keep the risk.
          </h2>
          <p className="mt-6 max-w-md text-lead text-muted-foreground">
            Netso finances, installs, owns, and maintains the system. You pay only for the
            units it produces, at a contracted rate below your tariff.
          </p>
          <div className="mt-10">
            <Button variant="outline" asChild>
              <Link to="/model">
                Read the model
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-7">
          <img
            src="/images/project-industrial.jpg"
            alt="Industrial rooftop solar array in Gazipur"
            className="media h-full min-h-[22rem] w-full object-cover lg:min-h-[36rem]"
          />
        </div>
      </div>
    </section>
  );
}

function WorkTease() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="label-mono text-primary">03 — Roofs</p>
            <h2 className="font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight">
              Three roofs. Same contract.
            </h2>
          </div>
          <Button variant="ghost" className="hidden sm:inline-flex" asChild>
            <Link to="/work">
              All roofs
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {ROOFS.map((roof) => (
            <li key={roof.slug}>
              <Link
                to="/work"
                hash={roof.slug}
                className="group grid grid-cols-12 items-baseline gap-3 py-5 transition-colors hover:text-primary"
              >
                <span className="label-mono col-span-2 text-faint group-hover:text-primary">
                  {roof.index}
                </span>
                <span className="col-span-6 text-lg md:text-xl">{roof.location}</span>
                <span className="label-mono col-span-4 text-right text-muted-foreground">
                  {formatKwp(roof.kwp)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function InstrumentTease() {
  const monthlyBill = useCalc((s) => s.monthlyBill);
  const roofM2 = useCalc((s) => s.roofM2);
  const zeroCapex = useCalc((s) => s.zeroCapex);
  const battery = useCalc((s) => s.battery);
  const result = estimate({ monthlyBill, roofM2, zeroCapex, battery });

  return (
    <section id="instrument" className="relative overflow-hidden border-t border-border">
      <img src="/images/cta.jpg" alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <div className="relative mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-5 py-20 md:px-8 md:py-24">
        <p className="label-mono text-primary">04 — The instrument</p>
        <p className="font-display mt-4 text-headline leading-none font-medium tracking-tight">
          {formatBdt(result.monthlySavings)}
          <span className="text-muted-foreground"> / month</span>
        </p>
        <p className="mt-4 max-w-md text-sm text-muted-foreground">
          Indicative RESCO savings on a {formatKwp(result.systemKwp)} plant — {formatBdt(monthlyBill)}{" "}
          monthly bill, {roofM2.toLocaleString("en-IN")} m² roof. Change the numbers yourself.
        </p>
        <div className="mt-8">
          <Button size="lg" variant="inverse" asChild>
            <Link to="/savings">
              Open the instrument
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
