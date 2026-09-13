"use client";

import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/model", label: "Model" },
  { to: "/work", label: "Work" },
  { to: "/savings", label: "Savings" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open || !onHero;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-300",
        solid ? "border-b border-border bg-background/92" : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Link to="/" className="relative z-50" aria-label="Netso home">
          <Logo />
        </Link>
        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "label-mono transition-colors duration-150 hover:text-foreground",
                pathname === link.to ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link to="/assess">Book assessment</Link>
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="relative z-50 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>
      {open ? (
        <div className="flex min-h-[calc(100svh-4rem)] flex-col border-t border-border bg-background px-5 py-10 lg:hidden">
          <Link to="/" onClick={() => setOpen(false)} className="font-display py-3 text-4xl font-medium">
            Home
          </Link>
          {LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="font-display py-3 text-4xl font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-auto pb-8">
            <Button size="lg" className="w-full" asChild>
              <Link to="/assess">Book assessment</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
