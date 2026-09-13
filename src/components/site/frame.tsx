import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Nav } from "@/components/site/nav";
import { SmoothScroll } from "@/components/site/smooth-scroll";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SmoothScroll />
      <Nav />
      <main className="page-in">{children}</main>
      <Footer />
    </div>
  );
}
