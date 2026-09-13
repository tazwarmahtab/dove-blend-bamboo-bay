"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { estimate, formatBdt, formatNumber } from "@/lib/calculator";
import { useAssess, useCalc } from "@/lib/store";

const CITIES = [
  "Dhaka",
  "Gazipur",
  "Narayanganj",
  "Savar",
  "Chattogram",
  "Khulna",
  "Cumilla",
  "Bogura",
  "Other",
];

type Lead = {
  company: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  notes: string;
};

const EMPTY: Lead = {
  company: "",
  name: "",
  phone: "",
  email: "",
  city: "Dhaka",
  notes: "",
};

export function AssessDialog() {
  const open = useAssess((s) => s.open);
  const closeAssess = useAssess((s) => s.closeAssess);
  const calc = useCalc();
  const [lead, setLead] = useState<Lead>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const result = estimate({
    monthlyBill: calc.monthlyBill,
    roofM2: calc.roofM2,
    zeroCapex: calc.zeroCapex,
    battery: calc.battery,
  });

  function onOpenChange(next: boolean) {
    if (!next) {
      closeAssess();
      window.setTimeout(() => setSubmitted(false), 200);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const payload = {
      ...lead,
      monthlyBill: calc.monthlyBill,
      roofM2: calc.roofM2,
      zeroCapex: calc.zeroCapex,
      battery: calc.battery,
      estimate: {
        systemKwp: result.systemKwp,
        monthlySavings: result.monthlySavings,
        annualSavings: result.annualSavings,
      },
      submittedAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem("netso-leads") ?? "[]") as unknown[];
      localStorage.setItem("netso-leads", JSON.stringify([payload, ...existing].slice(0, 20)));
    } catch {
      /* ignore quota / private mode */
    }
    setSubmitted(true);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90svh,44rem)] overflow-y-auto">
        {submitted ? (
          <div className="py-6">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Check className="size-5" />
            </div>
            <DialogHeader className="mt-5">
              <DialogTitle>Request received.</DialogTitle>
              <DialogDescription>
                Thank you, {lead.name || "there"}. A Netso engineer will follow up with a site
                survey plan. Your indicative estimate is {formatNumber(result.systemKwp, 1)} kWp
                and about {formatBdt(result.annualSavings)} in annual savings.
              </DialogDescription>
            </DialogHeader>
            <Button className="mt-8" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Book a detailed assessment</DialogTitle>
              <DialogDescription>
                Share a few details. We will size the roof properly and send a numbered offer —
                no obligation.
              </DialogDescription>
            </DialogHeader>
            <p className="rounded-md border border-border bg-secondary px-3 py-2 font-mono text-xs text-muted-foreground">
              Indicative: {formatNumber(result.systemKwp, 1)} kWp · {formatBdt(result.monthlySavings)}
              /mo · {calc.zeroCapex ? "Zero CapEx" : "CapEx"}
              {calc.battery ? " · battery" : ""}
            </p>
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Company" htmlFor="company">
                  <Input
                    id="company"
                    required
                    autoComplete="organization"
                    value={lead.company}
                    onChange={(e) => setLead({ ...lead, company: e.target.value })}
                  />
                </Field>
                <Field label="Your name" htmlFor="name">
                  <Input
                    id="name"
                    required
                    autoComplete="name"
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                  />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone">
                  <Input
                    id="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder="+880"
                    value={lead.phone}
                    onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                  />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input
                    id="email"
                    required
                    type="email"
                    autoComplete="email"
                    value={lead.email}
                    onChange={(e) => setLead({ ...lead, email: e.target.value })}
                  />
                </Field>
              </div>
              <Field label="City / industrial area" htmlFor="city">
                <select
                  id="city"
                  value={lead.city}
                  onChange={(e) => setLead({ ...lead, city: e.target.value })}
                  className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm"
                >
                  {CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Notes (optional)" htmlFor="notes">
                <textarea
                  id="notes"
                  rows={3}
                  value={lead.notes}
                  onChange={(e) => setLead({ ...lead, notes: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Shift pattern, roof type, existing diesel, timeline…"
                />
              </Field>
              <Button type="submit" size="lg" className="mt-1">
                Send assessment request
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
