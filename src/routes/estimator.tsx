import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { site } from "@/data/site";

export const Route = createFileRoute("/estimator")({ component: EstimatorPage });

function EstimatorPage() {
  return (
    <div className="relative flex min-h-svh flex-col bg-ink text-bone">
      <div className="film-grain" aria-hidden="true" />
      <header className="relative z-10 flex items-center justify-between gap-4 border-b border-bone/10 px-5 py-4 md:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-label uppercase tracking-label text-mist hover:text-bone"
        >
          <ArrowLeft className="size-3.5" strokeWidth={1.75} />
          EP Master
        </Link>
        <a
          href={`tel:+1${site.phone}`}
          className="text-label uppercase tracking-label text-mist hover:text-bone"
        >
          {site.phoneDisplay}
        </a>
      </header>
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <p className="text-label font-medium uppercase tracking-label text-fog">Deck estimator</p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-medium tracking-display md:text-5xl">
          Walk the deck before it’s built.
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-mist">
          Our own deck estimator — size, materials, a number. Not a fence tool. Opens in a new tab.
        </p>
        <a
          href={site.estimatorUrl}
          target="_blank"
          rel="noreferrer"
          className="quote-btn mt-10"
        >
          Launch estimator
          <ArrowRight className="size-3.5" strokeWidth={1.75} />
        </a>
        <p className="mt-8 text-label uppercase tracking-label text-ash">
          Prefer to talk?{" "}
          <a href={`tel:+1${site.phone}`} className="text-mist underline decoration-bone/25 underline-offset-4">
            {site.phoneDisplay}
          </a>
        </p>
      </main>
    </div>
  );
}
