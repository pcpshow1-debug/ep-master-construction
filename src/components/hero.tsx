import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const services = [
  { label: "Decks", cat: "decks" as const },
  { label: "Patio covers", cat: "covers" as const },
  { label: "Framing", cat: "framing" as const },
];

export function Hero() {
  return (
    <section id="home" className="snap-pane relative bg-ink text-bone">
      <video
        className="hero-media hero-v absolute inset-0 h-full w-full"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-porch-v.jpg"
      >
        <source src="/video/hero-porch-v.mp4" type="video/mp4" />
      </video>
      <video
        className="hero-media hero-h absolute inset-0 h-full w-full"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-porch-h.jpg"
      >
        <source src="/video/hero-porch-h.mp4" type="video/mp4" />
      </video>
      <div className="hero-veil" />

      <div className="relative z-10 flex h-full flex-col px-5 pane-pad-hero sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="hero-copy flex min-h-0 flex-1 flex-col">
          <div className="max-w-[26rem] sm:max-w-[34rem] lg:max-w-[44rem]">
            <p className="text-[0.82rem] font-medium uppercase tracking-label text-bone sm:text-[0.9rem]">
              Custom spaces. Lasting places.
            </p>
            <h1 className="hero-title mt-3 font-display font-medium leading-[0.9] tracking-display text-balance [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
              Built for
              <br />
              the Northwest.
            </h1>
            <span className="hairline mt-5 lg:mt-7" />
            <p className="mt-5 text-[0.82rem] font-medium uppercase tracking-meta text-bone sm:text-[0.9rem] lg:mt-6">
              {services.map((item, i) => (
                <span key={item.cat}>
                  {i > 0 ? <span className="px-2 text-bone/50">/</span> : null}
                  <Link
                    to="/gallery"
                    search={{ cat: item.cat }}
                    className="underline decoration-bone/35 underline-offset-4 hover:decoration-bone"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </p>
            <p className="mt-1.5 text-[0.82rem] font-medium uppercase tracking-meta text-bone/80 sm:text-[0.9rem]">
              {site.region}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4 lg:mt-9">
              <a href="#contact" className="quote-btn inline-flex">
                Get a quote
                <ArrowRight className="size-4" strokeWidth={2} />
              </a>
              <a
                href={site.estimatorUrl}
                className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bone underline decoration-bone/40 underline-offset-8"
              >
                Deck estimator
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
