"use client";

import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.15,
      lerp: 0.09,
    });
    const w = window as Window & { __lenis?: Lenis };
    w.__lenis = lenis;

    return () => {
      lenis.destroy();
      delete w.__lenis;
    };
  }, []);

  useEffect(() => {
    const w = window as Window & { __lenis?: Lenis };
    if (w.__lenis) w.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
