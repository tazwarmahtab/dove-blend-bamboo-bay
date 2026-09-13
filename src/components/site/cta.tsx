"use client";

import { Button } from "@/components/ui/button";
import { useAssess } from "@/lib/store";

export function Cta() {
  const openAssess = useAssess((s) => s.openAssess);

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src="/images/cta.jpg"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-background/55" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/40 to-background/20" />
      <div className="mx-auto flex min-h-[70svh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center">
        <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">Next step</p>
        <h2 className="font-display mt-5 text-headline leading-[1.05] font-medium tracking-tight">
          Ready to stop paying more for less reliable power?
        </h2>
        <p className="mt-5 max-w-lg text-lead text-muted-foreground">
          Get a detailed assessment. No obligation. Clear numbers for your roof, your tariff,
          and your load.
        </p>
        <Button size="xl" variant="inverse" className="mt-10" onClick={openAssess}>
          Book assessment with Netso
        </Button>
      </div>
    </section>
  );
}
