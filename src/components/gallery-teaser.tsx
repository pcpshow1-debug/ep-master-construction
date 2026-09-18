import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function GalleryTeaser() {
  return (
    <section className="relative min-h-[70svh] overflow-hidden bg-ink text-bone">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/bones.mp4?v=2" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="relative z-10 flex min-h-[70svh] flex-col justify-end px-5 py-16 md:px-12 md:py-20 xl:px-16">
        <p className="text-label font-medium uppercase tracking-label text-bone/70">Gallery</p>
        <h2 className="mt-4 font-display text-section font-medium leading-[1.05] tracking-display">
          The jobs.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-mist">
          Finished decks, patio covers, and framing.
        </p>
        <Link to="/gallery" className="quote-btn mt-10 w-fit">
          Open gallery
          <ArrowRight className="size-3.5" strokeWidth={1.75} />
        </Link>
      </div>
    </section>
  );
}
