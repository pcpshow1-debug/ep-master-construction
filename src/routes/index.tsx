import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Estimator } from "@/components/estimator";
import { Hero } from "@/components/hero";
import { MobileDock } from "@/components/mobile-dock";
import { Reviews } from "@/components/reviews";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SnapGate } from "@/components/snap-gate";
import { Work } from "@/components/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <SnapGate />
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <Reviews />
        <Estimator />
        <About />
        <Contact />
      </main>
      <SiteFooter />
      <MobileDock />
    </>
  );
}
