export const GRID_RATE = 14.8;
export const RESCO_RATE = 11.5;
export const RESCO_BATTERY_RATE = 12.9;
export const YIELD_KWH_PER_KWP_YEAR = 1400;
export const M2_PER_KWP = 9;
export const CAPEX_PER_KWP = 70_000;
export const BATTERY_CAPEX_FACTOR = 1.5;
export const BATTERY_YIELD_FACTOR = 0.93;
export const OM_RATE_YEAR = 0.012;
export const CO2_KG_PER_KWH = 0.64;

export const BILL_MIN = 50_000;
export const BILL_MAX = 10_000_000;
export const ROOF_MIN = 200;
export const ROOF_MAX = 50_000;

export type CalcInput = {
  monthlyBill: number;
  roofM2: number;
  zeroCapex: boolean;
  battery: boolean;
};

export type CalcResult = {
  systemKwp: number;
  roofKwp: number;
  demandKwp: number;
  constrainedBy: "roof" | "load" | "both";
  monthlyGenKwh: number;
  monthlySavings: number;
  annualSavings: number;
  annualGenKwh: number;
  effectiveRate: number;
  rateDelta: number;
  upfront: number;
  paybackYears: number | null;
  co2TonnesYear: number;
  coveragePct: number;
  monthlyKwh: number;
  extraRoofM2: number;
};

export function estimate(input: CalcInput): CalcResult {
  const bill = clamp(input.monthlyBill, BILL_MIN, BILL_MAX);
  const roof = clamp(input.roofM2, ROOF_MIN, ROOF_MAX);
  const monthlyKwh = bill / GRID_RATE;
  const demandKwp = (monthlyKwh * 12) / YIELD_KWH_PER_KWP_YEAR;
  const roofKwp = roof / M2_PER_KWP;
  const systemKwp = Math.max(0, Math.min(demandKwp, roofKwp));
  const ratio = demandKwp === 0 ? 1 : systemKwp / demandKwp;
  const constrainedBy: CalcResult["constrainedBy"] =
    Math.abs(roofKwp - demandKwp) < 0.5
      ? "both"
      : systemKwp === roofKwp
        ? "roof"
        : "load";

  const yieldFactor = input.battery ? BATTERY_YIELD_FACTOR : 1;
  const annualGenKwh = systemKwp * YIELD_KWH_PER_KWP_YEAR * yieldFactor;
  const monthlyGenKwh = annualGenKwh / 12;

  let effectiveRate: number;
  let monthlySavings: number;
  let upfront: number;
  let paybackYears: number | null;

  if (input.zeroCapex) {
    effectiveRate = input.battery ? RESCO_BATTERY_RATE : RESCO_RATE;
    monthlySavings = monthlyGenKwh * (GRID_RATE - effectiveRate);
    upfront = 0;
    paybackYears = null;
  } else {
    effectiveRate = 0;
    upfront = systemKwp * CAPEX_PER_KWP * (input.battery ? BATTERY_CAPEX_FACTOR : 1);
    const omMonthly = (upfront * OM_RATE_YEAR) / 12;
    monthlySavings = monthlyGenKwh * GRID_RATE - omMonthly;
    paybackYears = monthlySavings > 0 ? upfront / (monthlySavings * 12) : null;
  }

  return {
    systemKwp,
    roofKwp,
    demandKwp,
    constrainedBy,
    monthlyGenKwh,
    monthlySavings,
    annualSavings: monthlySavings * 12,
    annualGenKwh,
    effectiveRate,
    rateDelta: GRID_RATE - (input.zeroCapex ? effectiveRate : 0),
    upfront,
    paybackYears,
    co2TonnesYear: (annualGenKwh * CO2_KG_PER_KWH) / 1000,
    coveragePct: Math.min(100, ratio * 100),
    monthlyKwh,
    extraRoofM2: Math.max(0, (demandKwp - roofKwp) * M2_PER_KWP),
  };
}

export function formatBdt(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return "—";
  return `৳\u00a0${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n)}`;
}

export function formatNumber(n: number, digits = 0): string {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);
}

export function formatKwp(n: number): string {
  if (!Number.isFinite(n)) return "—";
  const digits = n >= 100 ? 0 : 1;
  const value = Number(n.toFixed(digits));
  return `${formatNumber(value, digits)} kWp`;
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}
