import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export function Estimator() {
  return (
    <section id="estimate" className="snap-pane relative bg-ink text-bone">
      <video
        className="estimator-media est-v"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/estimator-poster-v.jpg?v=7"
      >
        <source src="/video/estimator-v.mp4?v=7" type="video/mp4" />
      </video>
      <video
        className="estimator-media est-h"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/estimator-poster-h.jpg?v=7"
      >
        <source src="/video/estimator-h.mp4?v=7" type="video/mp4" />
      </video>
      <div className="hero-veil" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pane-pad-hero pb-28 sm:px-6 md:px-10 lg:justify-center lg:px-12 lg:pb-0 xl:px-16">
        <div className="max-w-[26rem] sm:max-w-[34rem] lg:max-w-[42rem]">
          <p className="text-[0.82rem] font-medium uppercase tracking-label text-bone sm:text-[0.9rem]">
            Decks · Pergolas · Outdoor living
          </p>
          <h2 className="hero-title mt-3 font-display font-medium leading-[0.9] tracking-display text-bone [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            Build your deck.
          </h2>
          <a
            href={site.estimatorUrl}
            className="quote-btn mt-7 inline-flex"
          >
            Start estimator
            <ArrowRight className="size-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
