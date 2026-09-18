"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { HCarousel } from "@/components/h-carousel";
import { reviews, site } from "@/data/site";

export function Reviews() {
  const [open, setOpen] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const lightbox =
    mounted && open !== null
      ? createPortal(
          <div className="fixed inset-0 z-[220] flex flex-col bg-ink text-bone">
            <div className="flex items-center justify-between px-5 pt-[max(0.75rem,env(safe-area-inset-top))] pb-3">
              <p className="text-label uppercase tracking-label text-fog">Review</p>
              <button
                type="button"
                className="flex size-11 items-center justify-center"
                aria-label="Close"
                onClick={() => setOpen(null)}
              >
                <X className="size-6" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex min-h-0 flex-1 flex-col justify-center px-6 pb-8 sm:px-12 md:px-20">
              <p className="text-label tracking-[0.4em] text-bone">★★★★★</p>
              <blockquote className="mt-5 max-h-[58svh] overflow-y-auto">
                <p className="font-display text-[1.35rem] font-medium leading-[1.25] tracking-display text-bone sm:text-2xl md:text-3xl">
                  “{reviews[open].quote}”
                </p>
              </blockquote>
              <p className="mt-8 font-display text-2xl tracking-display">{reviews[open].name}</p>
              <p className="mt-1 text-label uppercase tracking-label text-fog">
                {reviews[open].when} · Google
              </p>
            </div>
            <div className="flex items-center justify-between px-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                className="flex size-11 items-center justify-center border border-bone/25"
                aria-label="Previous review"
                onClick={() => setOpen((i) => (i === null ? 0 : (i + reviews.length - 1) % reviews.length))}
              >
                <ChevronLeft className="size-5" />
              </button>
              <p className="text-label uppercase tracking-label text-fog">
                {open + 1} / {reviews.length}
              </p>
              <button
                type="button"
                className="flex size-11 items-center justify-center border border-bone/25"
                aria-label="Next review"
                onClick={() => setOpen((i) => (i === null ? 0 : (i + 1) % reviews.length))}
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <section id="reviews" className="snap-pane relative bg-ink text-bone">
      <div className="relative z-10 flex h-full flex-col px-4 pane-pad sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="flex shrink-0 items-end justify-between gap-6">
          <h2 className="font-display text-section font-medium leading-[1.05] tracking-display">
            What our customers say
          </h2>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-label uppercase tracking-label text-bone/70 underline decoration-bone/25 underline-offset-4 hover:text-bone md:block"
          >
            Read on Google
          </a>
        </div>

        <HCarousel className="pane-stack" full>
          {reviews.map((item, index) => (
            <button
              key={`${item.name}-${item.when}`}
              type="button"
              data-slide
              onClick={() => setOpen(index)}
              className="review-slide flex h-full w-full shrink-0 snap-start flex-col border border-bone/15 bg-pitch px-6 py-6 text-left sm:px-10 sm:py-8 md:px-14"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center border border-bone/25 font-display text-lg text-bone">
                  {item.initial}
                </span>
                <div>
                  <p className="font-display text-xl tracking-display sm:text-2xl">{item.name}</p>
                  <p className="text-label uppercase tracking-label text-fog">{item.when}</p>
                </div>
              </div>
              <p className="mt-4 text-sm tracking-[0.4em] text-bone" aria-label="5 stars">
                ★★★★★
              </p>
              <blockquote className="mt-5 min-h-0 flex-1 overflow-hidden">
                <p className="review-slide-quote font-display font-medium leading-[1.2] tracking-display text-bone">
                  “{item.quote}”
                </p>
              </blockquote>
              <p className="mt-4 text-label uppercase tracking-label text-fog">Tap to read · Google</p>
            </button>
          ))}
        </HCarousel>
      </div>
      {lightbox}
    </section>
  );
}
