import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-foreground", className)}>
      <svg viewBox="0 0 32 32" className="size-7" aria-hidden="true">
        <rect x="1" y="1" width="14" height="14" rx="2.5" className="fill-primary" />
        <rect x="17" y="1" width="14" height="14" rx="2.5" className="fill-foreground" />
        <rect x="1" y="17" width="14" height="14" rx="2.5" className="fill-primary" />
        <rect x="17" y="17" width="14" height="14" rx="2.5" className="fill-primary" />
      </svg>
      <span className="font-sans text-[0.9375rem] font-medium tracking-[0.22em] uppercase">
        Netso
      </span>
    </span>
  );
}
