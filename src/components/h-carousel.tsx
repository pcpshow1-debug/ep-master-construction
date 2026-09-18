"use client";

import { type ReactNode, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function HCarousel({
  children,
  className,
  trackClassName,
  full = false,
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
  full?: boolean;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  function slide(dir: number) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector<HTMLElement>("[data-slide]");
    const gap = full ? 0 : 16;
    const step = card ? card.offsetWidth + gap : node.clientWidth;
    node.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return (
    <div className={cn("relative min-h-0 flex-1", className)}>
      <div
        ref={scroller}
        className={cn(
          "h-track flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden",
          full ? "gap-0" : "gap-4 px-12 sm:px-14",
          trackClassName,
        )}
      >
        {children}
      </div>
      <button
        type="button"
        className="carousel-btn absolute left-1 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center border border-bone/25 bg-ink/80 text-bone hover:border-bone/60 sm:left-2 sm:size-10"
        aria-label="Previous"
        onClick={() => slide(-1)}
      >
        <ChevronLeft className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        className="carousel-btn absolute right-1 top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center border border-bone/25 bg-ink/80 text-bone hover:border-bone/60 sm:right-2 sm:size-10"
        aria-label="Next"
        onClick={() => slide(1)}
      >
        <ChevronRight className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}
