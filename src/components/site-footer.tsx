import { site } from "@/data/site";

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-bone/12 bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 md:px-10 lg:px-12 xl:px-16">
        <div>
          <img src="/brand/logo-white.png" alt={site.name} className="h-12 w-auto" />
          <p className="mt-5 text-label uppercase tracking-label text-fog">
            {site.tagline}
            <br />
            {site.region}
          </p>
        </div>
        <div>
          <p className="text-label uppercase tracking-label text-fog">Contact</p>
          <a href={`tel:+1${site.phone}`} className="mt-4 block font-display text-xl tracking-display">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-mist">
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-label uppercase tracking-label text-fog">Follow</p>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block text-sm text-bone underline decoration-bone/30 underline-offset-4"
          >
            Instagram {site.instagramHandle}
          </a>
          <a
            href={site.facebook}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-sm text-bone underline decoration-bone/30 underline-offset-4"
          >
            Facebook
          </a>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block text-sm text-mist underline decoration-bone/20 underline-offset-4"
          >
            Google Maps
          </a>
          <img
            src="/brand/bbb.png"
            alt="BBB Accredited Business"
            className="mt-8 h-12 w-auto sm:h-14"
          />
        </div>
      </div>
      <div className="border-t border-bone/10 px-5 py-5 pb-[max(5.5rem,calc(env(safe-area-inset-bottom)+4.75rem))] text-label uppercase tracking-label text-ash md:flex md:items-center md:justify-between md:px-10 lg:px-12 xl:px-16 lg:pb-6">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="mt-2 md:mt-0">
          OR CCB #{site.ccb} · WA #{site.waLicense}
        </p>
      </div>
    </footer>
  );
}
