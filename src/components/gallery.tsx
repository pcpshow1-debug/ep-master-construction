"use client";

import { useState } from "react";
import { gallery } from "@/data/site";
import { cn } from "@/lib/utils";

type Cat = "decks" | "covers" | "framing";

export function GalleryGrid({ cat }: { cat?: Cat }) {
  const items = cat ? gallery.filter((item) => item.cat === cat) : gallery;
  const [open, setOpen] = useState<number | null>(null);

  if (items.length === 0) {
    return (
      <p className="px-5 py-16 text-sm text-mist md:px-10">Photos for this category are coming next.</p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 border-t border-bone/10 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={item.src + index}
            type="button"
            onClick={() => setOpen(index)}
            className={cn(
              "group relative aspect-[4/5] overflow-hidden border-b border-r border-bone/10 text-left",
              index === 0 && "col-span-2 aspect-[16/10] lg:col-span-2 lg:row-span-2 lg:aspect-auto",
            )}
            aria-label={`Open ${item.label}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.42)_0%,transparent_28%)]" />
            <div className="pointer-events-none absolute inset-3 border border-transparent transition-colors duration-500 group-hover:border-bone/35" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 py-4">
              <p className="text-label uppercase tracking-label text-bone">{item.label}</p>
            </div>
          </button>
        ))}
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/94 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <img src={items[open].src} alt={items[open].alt} className="max-h-[88svh] max-w-full object-contain" />
          <p className="absolute bottom-6 left-0 right-0 text-center text-label uppercase tracking-label text-mist">
            {items[open].label} · tap to close
          </p>
        </div>
      ) : null}
    </>
  );
}
