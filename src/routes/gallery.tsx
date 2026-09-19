import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { GalleryGrid } from "@/components/gallery";
import { MobileDock } from "@/components/mobile-dock";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { workCats } from "@/data/site";

const cats = ["decks", "covers", "framing"] as const;
type Cat = (typeof cats)[number];

export const Route = createFileRoute("/gallery")({
  validateSearch: (search: Record<string, unknown>): { cat?: Cat } => {
    const cat = search.cat;
    if (cat === "decks" || cat === "covers" || cat === "framing") return { cat };
    return {};
  },
  component: GalleryPage,
});

const titles: Record<Cat, string> = {
  decks: "Decks",
  covers: "Patio covers",
  framing: "Framing",
};

function GalleryPage() {
  const { cat } = Route.useSearch();
  const heading = cat ? titles[cat] : "Our Work.";

  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <SiteHeader />
      <main className="bg-ink pb-16 pt-24 text-bone lg:pb-0 lg:pt-28">
        <div className="px-5 py-10 md:px-10 md:py-14 lg:px-12 xl:px-16">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 text-label uppercase tracking-label text-fog hover:text-bone"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Back
          </Link>
          <p className="mt-8 text-label font-medium uppercase tracking-label text-fog">Projects</p>
          <h1 className="mt-3 max-w-xl font-display text-section font-medium leading-[1.05] tracking-display">
            {heading}
          </h1>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {workCats.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                search={{ cat: item.id }}
                className={
                  cat === item.id
                    ? "text-label uppercase tracking-label text-bone underline decoration-bone underline-offset-4"
                    : "text-label uppercase tracking-label text-fog hover:text-bone"
                }
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        {cat ? (
          <GalleryGrid cat={cat} />
        ) : (
          <div className="grid border-t border-bone/10 md:grid-cols-3">
            {workCats.map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                search={{ cat: item.id }}
                className="relative min-h-[42vh] overflow-hidden border-b border-bone/10 md:border-r"
              >
                <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover object-[center_58%]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.5)_0%,rgba(7,7,7,0.12)_30%,transparent_50%,rgba(7,7,7,0.55)_100%)]" />
                <p className="absolute bottom-6 left-6 font-display text-3xl tracking-display">{item.title}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
      <SiteFooter />
      <MobileDock />
    </>
  );
}
