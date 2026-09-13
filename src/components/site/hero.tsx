"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAssess } from "@/lib/store";

export function Hero() {
  const openAssess = useAssess((s) => s.openAssess);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-svh flex-col justify-end">
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
          <img
            src="/images/hero.jpg"
            alt=""
            className="size-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-background/15" />
        <div className="absolute inset-0 bg-linear-to-r from-background/70 via-background/20 to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 pt-28 pb-12 md:px-10 md:pt-32 md:pb-16 lg:pb-20">
        <p
          className="hero-rise text-xs font-medium tracking-[0.28em] text-primary uppercase"
          style={{ animationDelay: "40ms" }}
        >
          Rooftop solar as a service
        </p>
        <h1
          className="hero-rise font-display mt-5 max-w-4xl text-display leading-[0.92] font-medium tracking-tight text-foreground"
          style={{ animationDelay: "120ms" }}
        >
          Clean power.
          <br />
          <em className="italic">Zero upfront cost.</em>
        </h1>
        <p
          className="hero-rise mt-6 max-w-xl text-lead text-muted-foreground"
          style={{ animationDelay: "220ms" }}
        >
          Netso delivers rooftop solar for factories and commercial buildings across
          Bangladesh. You keep the savings. We handle everything.
        </p>
        <div
          className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "320ms" }}
        >
          <Button size="xl" variant="inverse" asChild>
            <a href="#assess">
              Assess your savings
              <ArrowDownRight />
            </a>
          </Button>
          <Button size="xl" variant="outline" onClick={openAssess}>
            Talk to Netso
          </Button>
        </div>
        <dl
          className="hero-rise mt-10 grid max-w-2xl grid-cols-3 gap-4 border-t border-foreground/15 pt-5"
          style={{ animationDelay: "420ms" }}
        >
          <div>
            <dt className="text-[0.6875rem] tracking-[0.18em] text-faint uppercase">Model</dt>
            <dd className="mt-1 text-sm text-foreground">Zero CapEx RESCO</dd>
          </div>
          <div>
            <dt className="text-[0.6875rem] tracking-[0.18em] text-faint uppercase">For</dt>
            <dd className="mt-1 text-sm text-foreground">Industry & commercial</dd>
          </div>
          <div>
            <dt className="text-[0.6875rem] tracking-[0.18em] text-faint uppercase">Where</dt>
            <dd className="mt-1 text-sm text-foreground">Bangladesh</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
