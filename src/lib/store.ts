import { create } from "zustand";
import { BILL_MAX, BILL_MIN, ROOF_MAX, ROOF_MIN, clamp } from "./calculator";

export type CalcState = {
  monthlyBill: number;
  roofM2: number;
  zeroCapex: boolean;
  battery: boolean;
  setBill: (n: number) => void;
  setRoof: (n: number) => void;
  setZeroCapex: (v: boolean) => void;
  setBattery: (v: boolean) => void;
};

export const useCalc = create<CalcState>((set) => ({
  monthlyBill: 800_000,
  roofM2: 3_000,
  zeroCapex: true,
  battery: false,
  setBill: (n) => set({ monthlyBill: clamp(n, BILL_MIN, BILL_MAX) }),
  setRoof: (n) => set({ roofM2: clamp(n, ROOF_MIN, ROOF_MAX) }),
  setZeroCapex: (v) => set({ zeroCapex: v }),
  setBattery: (v) => set({ battery: v }),
}));

type AssessState = {
  open: boolean;
  openAssess: () => void;
  closeAssess: () => void;
};

export const useAssess = create<AssessState>((set) => ({
  open: false,
  openAssess: () => set({ open: true }),
  closeAssess: () => set({ open: false }),
}));
