import { site } from "@/data/site";

export function MobileDock() {
  return (
    <div className="mobile-dock fixed inset-x-0 bottom-0 z-[55] border-t border-bone/15 bg-ink/95 backdrop-blur-sm">
      <div className="grid grid-cols-2 gap-px bg-bone/10 pb-[env(safe-area-inset-bottom)]">
        <a
          href={site.estimatorUrl}
          className="bg-ink py-3.5 text-center text-label font-medium uppercase tracking-label text-bone"
        >
          Estimator
        </a>
        <a
          href={`tel:+1${site.phone}`}
          className="bg-ink py-3.5 text-center text-label font-medium uppercase tracking-label text-bone"
        >
          Call Eli
        </a>
      </div>
    </div>
  );
}
