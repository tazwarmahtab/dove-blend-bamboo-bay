import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";

const COLS = [
  {
    title: "Site",
    items: [
      { to: "/model", label: "Model" },
      { to: "/work", label: "Work" },
      { to: "/savings", label: "Savings" },
      { to: "/assess", label: "Assessment" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-6">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Rooftop solar as a service for factories and commercial buildings in Bangladesh.
            We fund the plant. You buy the power.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="label-mono">Site</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {COLS[0].items.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="label-mono">Office</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Dhaka, Bangladesh
            <br />
            <a href="mailto:hello@netso.energy" className="text-foreground transition-colors hover:text-primary">
              hello@netso.energy
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-faint md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Netso</p>
          <p>Figures on this site are indicative, not a PPA.</p>
        </div>
      </div>
    </footer>
  );
}
