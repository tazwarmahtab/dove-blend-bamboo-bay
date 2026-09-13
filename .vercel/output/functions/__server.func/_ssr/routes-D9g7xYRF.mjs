import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Factory, c as ArrowDownRight, i as Menu, n as Wallet, o as Check, r as TriangleAlert, s as ArrowRight, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, f as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/@radix-ui/react-switch+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D9g7xYRF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-wide transition-[color,background-color,border-color,opacity,transform] duration-150 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			inverse: "bg-foreground text-background hover:bg-foreground/90",
			outline: "border border-foreground/25 bg-transparent text-foreground hover:border-foreground/50 hover:bg-foreground/5",
			ghost: "text-foreground hover:bg-foreground/8",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80"
		},
		size: {
			default: "h-11 rounded-md px-5",
			sm: "h-9 rounded-sm px-3 text-[0.8125rem]",
			lg: "h-12 rounded-md px-6 text-[0.9375rem]",
			xl: "h-14 rounded-lg px-7 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-1.5rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border border-border bg-card p-6 shadow-soft duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm p-1 text-muted-foreground opacity-80 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-2xl font-medium tracking-tight text-foreground", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-faint focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props
}));
Label.displayName = Root.displayName;
var GRID_RATE = 13.5;
var RESCO_RATE = 10.8;
var RESCO_BATTERY_RATE = 12.2;
var YIELD_KWH_PER_KWP_YEAR = 1400;
var CAPEX_PER_KWP = 7e4;
var BATTERY_CAPEX_FACTOR = 1.5;
var BATTERY_YIELD_FACTOR = .93;
var OM_RATE_YEAR = .012;
var CO2_KG_PER_KWH = .64;
var BILL_MIN = 5e4;
var BILL_MAX = 1e7;
var ROOF_MAX = 5e4;
function estimate(input) {
	const bill = clamp(input.monthlyBill, BILL_MIN, BILL_MAX);
	const roof = clamp(input.roofM2, 200, ROOF_MAX);
	const monthlyKwh = bill / GRID_RATE;
	const demandKwp = monthlyKwh * 12 / YIELD_KWH_PER_KWP_YEAR;
	const roofKwp = roof / 9;
	const systemKwp = Math.max(0, Math.min(demandKwp, roofKwp));
	const ratio = demandKwp === 0 ? 1 : systemKwp / demandKwp;
	const constrainedBy = Math.abs(roofKwp - demandKwp) < .5 ? "both" : systemKwp === roofKwp ? "roof" : "load";
	const yieldFactor = input.battery ? BATTERY_YIELD_FACTOR : 1;
	const annualGenKwh = systemKwp * YIELD_KWH_PER_KWP_YEAR * yieldFactor;
	const monthlyGenKwh = annualGenKwh / 12;
	let effectiveRate;
	let monthlySavings;
	let upfront;
	let paybackYears;
	if (input.zeroCapex) {
		effectiveRate = input.battery ? RESCO_BATTERY_RATE : RESCO_RATE;
		monthlySavings = monthlyGenKwh * (GRID_RATE - effectiveRate);
		upfront = 0;
		paybackYears = null;
	} else {
		effectiveRate = 0;
		upfront = systemKwp * CAPEX_PER_KWP * (input.battery ? BATTERY_CAPEX_FACTOR : 1);
		const omMonthly = upfront * OM_RATE_YEAR / 12;
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
		co2TonnesYear: annualGenKwh * CO2_KG_PER_KWH / 1e3,
		coveragePct: Math.min(100, ratio * 100),
		monthlyKwh
	};
}
function formatBdt(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return `৳${new Intl.NumberFormat("en-IN", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(n)}`;
}
function formatNumber(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return new Intl.NumberFormat("en-IN", {
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(n);
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
var useCalc = create((set) => ({
	monthlyBill: 8e5,
	roofM2: 3e3,
	zeroCapex: true,
	battery: false,
	setBill: (n) => set({ monthlyBill: clamp(n, BILL_MIN, BILL_MAX) }),
	setRoof: (n) => set({ roofM2: clamp(n, 200, ROOF_MAX) }),
	setZeroCapex: (v) => set({ zeroCapex: v }),
	setBattery: (v) => set({ battery: v })
}));
var useAssess = create((set) => ({
	open: false,
	openAssess: () => set({ open: true }),
	closeAssess: () => set({ open: false })
}));
var CITIES = [
	"Dhaka",
	"Gazipur",
	"Narayanganj",
	"Savar",
	"Chattogram",
	"Khulna",
	"Cumilla",
	"Bogura",
	"Other"
];
var EMPTY = {
	company: "",
	name: "",
	phone: "",
	email: "",
	city: "Dhaka",
	notes: ""
};
function AssessDialog() {
	const open = useAssess((s) => s.open);
	const closeAssess = useAssess((s) => s.closeAssess);
	const calc = useCalc();
	const [lead, setLead] = (0, import_react.useState)(EMPTY);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const result = estimate({
		monthlyBill: calc.monthlyBill,
		roofM2: calc.roofM2,
		zeroCapex: calc.zeroCapex,
		battery: calc.battery
	});
	function onOpenChange(next) {
		if (!next) {
			closeAssess();
			window.setTimeout(() => setSubmitted(false), 200);
		}
	}
	function onSubmit(e) {
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
				annualSavings: result.annualSavings
			},
			submittedAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			const existing = JSON.parse(localStorage.getItem("netso-leads") ?? "[]");
			localStorage.setItem("netso-leads", JSON.stringify([payload, ...existing].slice(0, 20)));
		} catch {}
		setSubmitted(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "max-h-[min(90svh,44rem)] overflow-y-auto",
			children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, {
						className: "mt-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Request received." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
							"Thank you, ",
							lead.name || "there",
							". A Netso engineer will follow up with a site survey plan. Your indicative estimate is ",
							formatNumber(result.systemKwp, 1),
							" kWp and about ",
							formatBdt(result.annualSavings),
							" in annual savings."
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-8",
						onClick: () => onOpenChange(false),
						children: "Close"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Book a detailed assessment" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Share a few details. We will size the roof properly and send a numbered offer — no obligation." })] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-md border border-border bg-secondary px-3 py-2 font-mono text-xs text-muted-foreground",
					children: [
						"Indicative: ",
						formatNumber(result.systemKwp, 1),
						" kWp · ",
						formatBdt(result.monthlySavings),
						"/mo · ",
						calc.zeroCapex ? "Zero CapEx" : "CapEx",
						calc.battery ? " · battery" : ""
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "grid gap-4",
					onSubmit,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Company",
								htmlFor: "company",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "company",
									required: true,
									autoComplete: "organization",
									value: lead.company,
									onChange: (e) => setLead({
										...lead,
										company: e.target.value
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Your name",
								htmlFor: "name",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "name",
									required: true,
									autoComplete: "name",
									value: lead.name,
									onChange: (e) => setLead({
										...lead,
										name: e.target.value
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Phone",
								htmlFor: "phone",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "phone",
									required: true,
									type: "tel",
									autoComplete: "tel",
									placeholder: "+880",
									value: lead.phone,
									onChange: (e) => setLead({
										...lead,
										phone: e.target.value
									})
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
								label: "Email",
								htmlFor: "email",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "email",
									required: true,
									type: "email",
									autoComplete: "email",
									value: lead.email,
									onChange: (e) => setLead({
										...lead,
										email: e.target.value
									})
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "City / industrial area",
							htmlFor: "city",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "city",
								value: lead.city,
								onChange: (e) => setLead({
									...lead,
									city: e.target.value
								}),
								className: "flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm",
								children: CITIES.map((city) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: city,
									children: city
								}, city))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field$1, {
							label: "Notes (optional)",
							htmlFor: "notes",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "notes",
								rows: 3,
								value: lead.notes,
								onChange: (e) => setLead({
									...lead,
									notes: e.target.value
								}),
								className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
								placeholder: "Shift pattern, roof type, existing diesel, timeline…"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							size: "lg",
							className: "mt-1",
							children: "Send assessment request"
						})
					]
				})
			] })
		})
	});
}
function Field$1({ label, htmlFor, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
			htmlFor,
			children: label
		}), children]
	});
}
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-border", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: cn("pointer-events-none block size-5 rounded-full bg-background shadow-sm ring-0 transition-transform duration-150 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5 data-[state=checked]:bg-primary-foreground") })
}));
Switch.displayName = Switch$1.displayName;
function CalculatorPanel() {
	const monthlyBill = useCalc((s) => s.monthlyBill);
	const roofM2 = useCalc((s) => s.roofM2);
	const zeroCapex = useCalc((s) => s.zeroCapex);
	const battery = useCalc((s) => s.battery);
	const setBill = useCalc((s) => s.setBill);
	const setRoof = useCalc((s) => s.setRoof);
	const setZeroCapex = useCalc((s) => s.setZeroCapex);
	const setBattery = useCalc((s) => s.setBattery);
	const openAssess = useAssess((s) => s.openAssess);
	const result = (0, import_react.useMemo)(() => estimate({
		monthlyBill,
		roofM2,
		zeroCapex,
		battery
	}), [
		monthlyBill,
		roofM2,
		zeroCapex,
		battery
	]);
	const constraint = result.constrainedBy === "roof" ? "Sized to available rooftop." : result.constrainedBy === "load" ? "Sized to your current load." : "Roof and load are in balance.";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "assess",
		className: "scroll-mt-24 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
						children: "Savings assessment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight",
						children: "Estimate your savings with rooftop solar."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lead text-muted-foreground",
						children: "All figures are indicative, based on current Bangladesh market data. Final numbers follow a site survey and a Netso commercial offer."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid gap-6 lg:grid-cols-12 lg:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-5 md:p-8 lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							label: "Average monthly electricity bill",
							valueLabel: formatBdt(monthlyBill),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "netso-range mt-4",
								type: "range",
								min: BILL_MIN,
								max: BILL_MAX,
								step: 1e4,
								value: monthlyBill,
								"aria-label": "Average monthly electricity bill in taka",
								onChange: (e) => setBill(Number(e.target.value))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								inputMode: "numeric",
								min: BILL_MIN,
								max: BILL_MAX,
								step: 1e3,
								value: monthlyBill,
								onChange: (e) => setBill(Number(e.target.value) || 5e4),
								className: "mt-4 h-11 w-full rounded-md border border-input bg-background px-3 font-mono text-sm tabular-nums"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, {
							className: "mt-8",
							label: "Available rooftop area",
							valueLabel: `${formatNumber(roofM2)} m²`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "netso-range mt-4",
								type: "range",
								min: 200,
								max: ROOF_MAX,
								step: 50,
								value: roofM2,
								"aria-label": "Available rooftop area in square metres",
								onChange: (e) => setRoof(Number(e.target.value))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								inputMode: "numeric",
								min: 200,
								max: ROOF_MAX,
								step: 10,
								value: roofM2,
								onChange: (e) => setRoof(Number(e.target.value) || 200),
								className: "mt-4 h-11 w-full rounded-md border border-input bg-background px-3 font-mono text-sm tabular-nums"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "zero-capex",
								title: "Zero CapEx (RESCO)",
								description: "Netso finances and owns the system. You pay only for solar units.",
								checked: zeroCapex,
								onCheckedChange: setZeroCapex
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToggleRow, {
								id: "battery",
								title: "Add battery backup",
								description: "Higher reliability during outages, higher effective cost.",
								checked: battery,
								onCheckedChange: setBattery
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-secondary p-5 md:p-8 lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: constraint
							}), zeroCapex ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs tracking-wide text-primary uppercase",
								children: "Zero upfront cost"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase",
								children: "Client-owned CapEx"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid grid-cols-2 gap-6 md:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Estimated system size",
									value: `${formatNumber(result.systemKwp, 1)} kWp`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Monthly generation",
									value: `${formatNumber(result.monthlyGenKwh)} kWh`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Monthly savings",
									value: formatBdt(result.monthlySavings),
									emphasize: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
									label: "Annual savings",
									value: formatBdt(result.annualSavings),
									emphasize: true
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: zeroCapex ? "You pay (solar)" : "Effective solar cost",
									value: zeroCapex ? `${formatBdt(result.effectiveRate, 2)}/kWh` : "Own generation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: zeroCapex ? "Upfront" : "Estimated CapEx",
									value: zeroCapex ? "৳0" : formatBdt(result.upfront)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MiniStat, {
									label: zeroCapex ? "CO₂ avoided" : "Simple payback",
									value: zeroCapex ? `${formatNumber(result.co2TonnesYear, 0)} t/yr` : result.paybackYears ? `${formatNumber(result.paybackYears, 1)} yrs` : "—"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-xs leading-relaxed text-faint",
							children: [
								"Assumptions: Grid ",
								formatBdt(GRID_RATE, 2),
								"/kWh · RESCO ",
								formatBdt(RESCO_RATE, 2),
								"/kWh",
								battery ? ` · with battery ${formatBdt(RESCO_BATTERY_RATE, 2)}/kWh` : "",
								" · Yield 1,400 kWh/kWp/year · 9 m²/kWp packing. Load coverage",
								" ",
								formatNumber(result.coveragePct, 0),
								"%. Indicative only."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "mt-8 w-full sm:w-auto",
							onClick: openAssess,
							children: ["Book detailed assessment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})
					]
				})]
			})]
		})
	});
}
function Field({ label, valueLabel, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-mono text-sm tabular-nums text-foreground",
				children: valueLabel
			})]
		}), children]
	});
}
function ToggleRow({ id, title, description, checked, onCheckedChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: id,
		className: "flex cursor-pointer items-start justify-between gap-4 rounded-lg border border-border bg-background p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "block text-sm font-medium",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 block text-xs leading-relaxed text-muted-foreground",
			children: description
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			id,
			checked,
			onCheckedChange
		})]
	});
}
function Stat({ label, value, emphasize }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs tracking-[0.16em] text-faint uppercase",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: cn("mt-2 font-display text-3xl leading-none font-medium tracking-tight tabular-nums md:text-4xl", emphasize ? "text-primary" : "text-foreground"),
		children: value
	})] });
}
function MiniStat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-xs text-faint",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 font-mono text-sm tabular-nums text-foreground",
		children: value
	})] });
}
function Cta() {
	const openAssess = useAssess((s) => s.openAssess);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/cta.jpg",
				alt: "",
				className: "absolute inset-0 -z-10 size-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-background/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-linear-to-t from-background via-background/40 to-background/20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex min-h-[70svh] max-w-4xl flex-col items-center justify-center px-5 py-28 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
						children: "Next step"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-5 text-headline leading-[1.05] font-medium tracking-tight",
						children: "Ready to stop paying more for less reliable power?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-lead text-muted-foreground",
						children: "Get a detailed assessment. No obligation. Clear numbers for your roof, your tariff, and your load."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						variant: "inverse",
						className: "mt-10",
						onClick: openAssess,
						children: "Book assessment with Netso"
					})
				]
			})
		]
	});
}
function Logo({ className, markClassName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5 text-foreground", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 32 32",
			className: cn("size-7", markClassName),
			fill: "none",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4 22.5 L16 8.5 L28 22.5",
				stroke: "currentColor",
				strokeWidth: "1.6",
				strokeLinejoin: "miter"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "23.5",
				cy: "10.5",
				r: "4.2",
				stroke: "currentColor",
				strokeWidth: "1.6"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans text-[0.9375rem] font-medium tracking-[0.22em] uppercase",
			children: "Netso"
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl flex-col gap-10 px-5 py-12 md:flex-row md:items-start md:justify-between md:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground",
				children: "Rooftop solar as a service for factories and commercial buildings across Bangladesh."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-10 text-sm sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-faint uppercase",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#model",
								className: "transition-colors hover:text-foreground",
								children: "The model"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#how",
								className: "transition-colors hover:text-foreground",
								children: "How it works"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#assess",
								className: "transition-colors hover:text-foreground",
								children: "Savings"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] text-faint uppercase",
						children: "Office"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-muted-foreground",
						children: [
							"Dhaka, Bangladesh",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Industrial & commercial RESCO"
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "col-span-2 sm:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.18em] text-faint uppercase",
							children: "Note"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "Calculator figures are indicative. They are not a tariff, a PPA, or a regulated offer."
						})]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-faint md:flex-row md:justify-between md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Netso. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Clean power. Zero upfront cost." })]
			})
		})]
	});
}
function Hero() {
	const openAssess = useAssess((s) => s.openAssess);
	const [reduceMotion, setReduceMotion] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReduceMotion(mq.matches);
		const onChange = () => setReduceMotion(mq.matches);
		mq.addEventListener("change", onChange);
		return () => mq.removeEventListener("change", onChange);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative isolate flex min-h-svh flex-col justify-end overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0 -z-10",
			children: [
				!reduceMotion ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "size-full object-cover",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					poster: "/images/hero.jpg",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: "/images/hero.mp4",
						type: "video/mp4"
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "",
					className: "size-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-background via-background/55 to-background/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-background/70 via-background/20 to-transparent" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-5 pt-28 pb-16 md:px-10 md:pb-20 lg:pb-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-rise text-xs font-medium tracking-[0.28em] text-primary uppercase",
					style: { animationDelay: "40ms" },
					children: "Rooftop solar as a service"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "hero-rise font-display mt-5 max-w-4xl text-display leading-[0.92] font-medium tracking-tight text-foreground",
					style: { animationDelay: "120ms" },
					children: [
						"Clean power.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic",
							children: "Zero upfront cost."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-rise mt-6 max-w-xl text-lead text-muted-foreground",
					style: { animationDelay: "220ms" },
					children: "Netso delivers rooftop solar for factories and commercial buildings across Bangladesh. You keep the savings. We handle everything."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
					style: { animationDelay: "320ms" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						variant: "inverse",
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#assess",
							children: ["Assess your savings", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "xl",
						variant: "outline",
						onClick: openAssess,
						children: "Talk to Netso"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "hero-rise mt-14 grid max-w-2xl grid-cols-3 gap-4 border-t border-foreground/15 pt-6",
					style: { animationDelay: "420ms" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.6875rem] tracking-[0.18em] text-faint uppercase",
							children: "Model"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-foreground",
							children: "Zero CapEx RESCO"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.6875rem] tracking-[0.18em] text-faint uppercase",
							children: "For"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-foreground",
							children: "Industry & commercial"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[0.6875rem] tracking-[0.18em] text-faint uppercase",
							children: "Where"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-sm text-foreground",
							children: "Bangladesh"
						})] })
					]
				})
			]
		})]
	});
}
function Model() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "model",
		className: "scroll-mt-24 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-12 lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
						children: "The Netso model"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-4 text-headline leading-[1.05] font-medium tracking-tight",
						children: "We finance, install, own, and maintain the system."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lead text-muted-foreground",
						children: "You simply pay a lower rate for the electricity it produces — with no capital outlay and full performance responsibility on us."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-10 space-y-5",
						children: [
							{
								k: "No CapEx",
								v: "Netso funds 100% of the rooftop plant. Your capital stays in the business."
							},
							{
								k: "Lower than grid",
								v: "You buy solar units at a contracted RESCO rate below your industrial tariff."
							},
							{
								k: "We carry the risk",
								v: "Design, interconnection, yield, and maintenance sit with Netso for the life of the contract."
							}
						].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "grid grid-cols-[7.5rem_1fr] gap-4 border-t border-border pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-primary",
								children: row.k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: row.v
							})]
						}, row.k))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "lg:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/project-industrial.jpg",
						alt: "Industrial rooftop in Bangladesh covered with solar modules",
						className: "aspect-3/2 w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-faint",
					children: "Idle factory roofs become a power plant — without a line on your balance sheet."
				})]
			})]
		})
	});
}
var LINKS = [
	{
		href: "#problem",
		label: "The problem"
	},
	{
		href: "#model",
		label: "The model"
	},
	{
		href: "#how",
		label: "How it works"
	},
	{
		href: "#assess",
		label: "Savings"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const openAssess = useAssess((s) => s.openAssess);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300", scrolled || open ? "border-b border-border/80 bg-background/90" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "relative z-50",
					"aria-label": "Netso home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden items-center gap-8 lg:flex",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-2 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: openAssess,
						children: "Talk to Netso"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#assess",
							children: "Assess your savings"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "relative z-50 lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("lg:hidden", open ? "block" : "hidden"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[calc(100svh-4rem)] flex-col gap-2 border-t border-border bg-background px-5 py-8",
				children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "font-display py-3 text-3xl font-medium tracking-tight",
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						onClick: () => {
							setOpen(false);
							document.getElementById("assess")?.scrollIntoView({ behavior: "smooth" });
						},
						children: "Assess your savings"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						onClick: () => {
							setOpen(false);
							openAssess();
						},
						children: "Talk to Netso"
					})]
				})]
			})
		})]
	});
}
var POINTS = [
	{
		icon: TriangleAlert,
		title: "Rising grid tariffs",
		body: "Industrial rates have climbed sharply in recent years. Peak power now sits well above ৳15/kWh for many factory connections, squeezing already thin margins."
	},
	{
		icon: Factory,
		title: "Unplanned downtime",
		body: "Load-shedding and unstable supply interrupt production schedules, spoil batches, and push teams onto expensive diesel backup."
	},
	{
		icon: Wallet,
		title: "Capital locked up",
		body: "Traditional solar still asks for a large cheque upfront. That capital could be buying machines, inventory, or growth instead of sitting on a roof."
	}
];
function Problem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "problem",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
						children: "The cost of waiting"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-4 max-w-3xl text-headline leading-[1.05] font-medium tracking-tight",
						children: "Power cuts and rising costs are quietly taxing every factory."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-lead text-muted-foreground",
						children: "Industrial electricity tariffs keep climbing. Load-shedding still hits production lines. Diesel backup is expensive and unreliable. Most factories are left choosing between higher operating costs or risky capital expenditure on solar."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "relative mx-auto max-w-7xl overflow-hidden px-5 md:px-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/problem.jpg",
						alt: "Empty factory floor during a power interruption",
						className: "aspect-16/9 w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-faint",
					children: "When the grid fails, production stops. Diesel is a costly, incomplete answer."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-px border-t border-border px-5 py-16 md:grid-cols-3 md:px-10 md:py-20",
				children: POINTS.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "py-8 md:px-8 md:py-0 first:md:pl-0 last:md:pr-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(point.icon, {
							className: "size-5 text-primary",
							strokeWidth: 1.5
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-medium tracking-tight",
							children: point.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-muted-foreground",
							children: point.body
						})
					]
				}, point.title))
			})
		]
	});
}
var PROJECTS = [
	{
		src: "/images/project-industrial.jpg",
		title: "Industrial rooftops",
		body: "Large-scale arrays on factory sheds, designed around HVAC, walkways, and production loads."
	},
	{
		src: "/images/project-commercial.jpg",
		title: "Commercial buildings",
		body: "Office and logistics roofs that lock in a lower daytime rate without a capital programme."
	},
	{
		src: "/images/project-detail.jpg",
		title: "Full responsibility",
		body: "Modules, mounting, inverters, interconnection, and ongoing operations sit with Netso."
	}
];
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "scroll-mt-24 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
					children: "On the roof"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-4 max-w-2xl text-headline leading-[1.05] font-medium tracking-tight",
					children: "Real projects. Real roofs. Real results."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-lead text-muted-foreground",
					children: "Serving industrial and commercial clients across Bangladesh with rooftop solar as a service."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-8 md:grid-cols-3",
					children: PROJECTS.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: project.src,
								alt: project.title,
								className: "aspect-3/2 w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 text-lg font-medium tracking-tight",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: project.body
						})
					] }, project.title))
				})
			]
		})
	});
}
var STEPS = [
	{
		n: "01",
		title: "Assess",
		body: "We evaluate your roof, load profile, and current tariff — then send a clear, numbered offer."
	},
	{
		n: "02",
		title: "Design & finance",
		body: "Netso designs the system to your production pattern and provides 100% project financing."
	},
	{
		n: "03",
		title: "Install & operate",
		body: "We install, interconnect, and take full responsibility for performance and maintenance."
	},
	{
		n: "04",
		title: "Save",
		body: "You pay only for the clean electricity generated — at a rate lower than the grid."
	}
];
function Steps() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "scroll-mt-24 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.28em] text-primary uppercase",
					children: "Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-4 max-w-2xl text-headline leading-[1.05] font-medium tracking-tight",
					children: "Simple. Transparent. Built for industry."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4",
					children: STEPS.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col border-t border-border pt-8 pr-0 pb-10 sm:pr-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-sm tracking-widest text-primary",
								children: step.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-lg font-medium tracking-tight",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: step.body
							})
						]
					}, step.n))
				})
			]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Problem, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Model, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculatorPanel, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessDialog, {})
		]
	});
}
var SplitComponent = HomePage;
//#endregion
export { SplitComponent as component };
