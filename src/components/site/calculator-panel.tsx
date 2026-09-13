"use client";

import { useMemo, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  BILL_MAX,
  BILL_MIN,
  GRID_RATE,
  RESCO_BATTERY_RATE,
  RESCO_RATE,
  ROOF_MAX,
  ROOF_MIN,
  estimate,
  formatBdt,
  formatNumber,
} from "@/lib/calculator";
import { useAssess, useCalc } from "@/lib/store";
import { cn } from "@/lib/utils";

export function CalculatorPanel() {
  const monthlyBill = useCalc((s) => s.monthlyBill);
  const roofM2 = useCalc((s) => s.roofM2);
  const zeroCapex = useCalc((s) => s.zeroCapex);
  const battery = useCalc((s) => s.battery);
  const setBill = useCalc((s) => s.setBill);
  const setRoof = useCalc((s) => s.setRoof);
  const setZeroCapex = useCalc((s) => s.setZeroCapex);
  const setBattery = useCalc((s) => s.setBattery);
  const openAssess = useAssess((s) => s.openAssess);

  const result = useMemo(
    () => estimate({ monthlyBill, roofM2, zeroCapex, battery }),
    [monthlyBill, roofM2, zeroCapex, battery],
  );

  const constraint =
    result.constrainedBy === "roof"
      ? "Sized to available rooftop."
      : result.constrainedBy === "load"
        ? "Sized to your current load."
        : "Roof and load are in balance.";

  return (
    <section id="assess" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.28em] text-primary uppercase">
            Savings assessment
          </p>
          <h2 className="font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight">
            Estimate your savings with rooftop solar.
          </h2>
          <p className="mt-5 text-lead text-muted-foreground">
            All figures are indicative, based on current Bangladesh market data. Final numbers
            follow a site survey and a Netso commercial offer.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="rounded-xl border border-border bg-card p-5 md:p-8 lg:col-span-5">
            <Field
              label="Average monthly electricity bill"
              valueLabel={formatBdt(monthlyBill)}
            >
              <input
                className="netso-range mt-4"
                type="range"
                min={BILL_MIN}
                max={BILL_MAX}
                step={10_000}
                value={monthlyBill}
                aria-label="Average monthly electricity bill in taka"
                onChange={(e) => setBill(Number(e.target.value))}
              />
              <input
                type="number"
                inputMode="numeric"
                min={BILL_MIN}
                max={BILL_MAX}
                step={1000}
                value={monthlyBill}
                onChange={(e) => setBill(Number(e.target.value) || BILL_MIN)}
                className="mt-4 h-11 w-full rounded-md border border-input bg-background px-3 font-mono text-sm tabular-nums"
              />
            </Field>

            <Field
              className="mt-8"
              label="Available rooftop area"
              valueLabel={`${formatNumber(roofM2)} m²`}
            >
              <input
                className="netso-range mt-4"
                type="range"
                min={ROOF_MIN}
                max={ROOF_MAX}
                step={50}
                value={roofM2}
                aria-label="Available rooftop area in square metres"
                onChange={(e) => setRoof(Number(e.target.value))}
              />
              <input
                type="number"
                inputMode="numeric"
                min={ROOF_MIN}
                max={ROOF_MAX}
                step={10}
                value={roofM2}
                onChange={(e) => setRoof(Number(e.target.value) || ROOF_MIN)}
                className="mt-4 h-11 w-full rounded-md border border-input bg-background px-3 font-mono text-sm tabular-nums"
              />
            </Field>

            <div className="mt-8 space-y-3">
              <ToggleRow
                id="zero-capex"
                title="Zero CapEx (RESCO)"
                description="Netso finances and owns the system. You pay only for solar units."
                checked={zeroCapex}
                onCheckedChange={setZeroCapex}
              />
              <ToggleRow
                id="battery"
                title="Add battery backup"
                description="Higher reliability during outages, higher effective cost."
                checked={battery}
                onCheckedChange={setBattery}
              />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-secondary p-5 md:p-8 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">{constraint}</p>
              {zeroCapex ? (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs tracking-wide text-primary uppercase">
                  Zero upfront cost
                </span>
              ) : (
                <span className="rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
                  Client-owned CapEx
                </span>
              )}
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-2">
              <Stat label="Estimated system size" value={`${formatNumber(result.systemKwp, 1)} kWp`} />
              <Stat
                label="Monthly generation"
                value={`${formatNumber(result.monthlyGenKwh)} kWh`}
              />
              <Stat
                label="Monthly savings"
                value={formatBdt(result.monthlySavings)}
                emphasize
              />
              <Stat label="Annual savings" value={formatBdt(result.annualSavings)} emphasize />
            </dl>

            <div className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
              <MiniStat
                label={zeroCapex ? "You pay (solar)" : "Effective solar cost"}
                value={
                  zeroCapex
                    ? `${formatBdt(result.effectiveRate, 2)}/kWh`
                    : "Own generation"
                }
              />
              <MiniStat
                label={zeroCapex ? "Upfront" : "Estimated CapEx"}
                value={zeroCapex ? "৳0" : formatBdt(result.upfront)}
              />
              <MiniStat
                label={zeroCapex ? "CO₂ avoided" : "Simple payback"}
                value={
                  zeroCapex
                    ? `${formatNumber(result.co2TonnesYear, 0)} t/yr`
                    : result.paybackYears
                      ? `${formatNumber(result.paybackYears, 1)} yrs`
                      : "—"
                }
              />
            </div>

            <p className="mt-6 text-xs leading-relaxed text-faint">
              Assumptions: Grid {formatBdt(GRID_RATE, 2)}/kWh · RESCO {formatBdt(RESCO_RATE, 2)}
              /kWh
              {battery ? ` · with battery ${formatBdt(RESCO_BATTERY_RATE, 2)}/kWh` : ""} · Yield
              1,400 kWh/kWp/year · 9 m²/kWp packing. Load coverage{" "}
              {formatNumber(result.coveragePct, 0)}%. Indicative only.
            </p>

            <Button size="lg" className="mt-8 w-full sm:w-auto" onClick={openAssess}>
              Book detailed assessment
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  valueLabel,
  className,
  children,
}: {
  label: string;
  valueLabel: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-4">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="font-mono text-sm tabular-nums text-foreground">{valueLabel}</span>
      </div>
      {children}
    </div>
  );
}

function ToggleRow({
  id,
  title,
  description,
  checked,
  onCheckedChange,
}: {
  id: string;
  title: string;
  description: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border bg-background p-4"
    >
      <span>
        <span className="block text-sm font-medium">{title}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
          {description}
        </span>
      </span>
      <Switch id={id} checked={checked} onCheckedChange={onCheckedChange} />
    </label>
  );
}

function Stat({
  label,
  value,
  emphasize,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div>
      <dt className="text-xs tracking-[0.16em] text-faint uppercase">{label}</dt>
      <dd
        className={cn(
          "mt-2 font-display text-3xl leading-none font-medium tracking-tight tabular-nums md:text-4xl",
          emphasize ? "text-primary" : "text-foreground",
        )}
      >
        {value}
      </dd>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-faint">{label}</p>
      <p className="mt-1 font-mono text-sm tabular-nums text-foreground">{value}</p>
    </div>
  );
}
