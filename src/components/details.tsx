"use client";

import { useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";
import { areas, materials, process, site, warranty, who, why } from "@/data/site";
import { cn } from "@/lib/utils";

const rows = [
  { id: "process", n: "01", title: "How we work" },
  { id: "materials", n: "02", title: "Materials" },
  { id: "why", n: "03", title: "Why EP Master" },
  { id: "who", n: "04", title: "Who we work with" },
  { id: "areas", n: "05", title: "Areas we serve" },
  { id: "license", n: "06", title: "Licensing & warranties" },
] as const;

function Panel({ children }: { children: ReactNode }) {
  return <div className="max-w-3xl space-y-5 pb-12 pt-2 text-sm leading-relaxed text-mist">{children}</div>;
}

export function Details() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="details" className="border-t border-bone/10 bg-ink text-bone">
      <div className="px-5 pt-16 md:px-10 md:pt-20 lg:px-12 xl:px-16">
        <p className="text-label font-medium uppercase tracking-label text-fog">The details</p>
        <h2 className="mt-3 max-w-xl font-display text-section font-medium leading-[1.05] tracking-display">
          If you want to know more.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-mist">
          Process, materials, licensing — open a line. Nothing extra until you ask.
        </p>
      </div>

      <div className="mt-12 border-t border-bone/10">
        {rows.map((row) => {
          const isOpen = open === row.id;
          return (
            <div key={row.id} className="border-b border-bone/10">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : row.id)}
                className="flex w-full items-center gap-5 px-5 py-6 text-left md:px-10 lg:px-12 xl:px-16"
              >
                <span className="w-8 shrink-0 text-label uppercase tracking-label text-fog">{row.n}</span>
                <span className="flex-1 font-display text-2xl font-medium tracking-display md:text-3xl">
                  {row.title}
                </span>
                {isOpen ? (
                  <Minus className="size-5 shrink-0 text-bone" strokeWidth={1.25} />
                ) : (
                  <Plus className="size-5 shrink-0 text-bone" strokeWidth={1.25} />
                )}
              </button>
              <div
                className={cn(
                  "grid px-5 transition-[grid-template-rows] duration-300 md:px-10 lg:px-12 xl:px-16",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  {row.id === "process" && (
                    <Panel>
                      <p>From the first call to the final walkthrough, we keep the process clear so you know what to expect at every step.</p>
                      <ol className="space-y-5">
                        {process.map((step) => (
                          <li key={step.n}>
                            <p className="text-label uppercase tracking-label text-fog">
                              {step.n} · {step.title}
                            </p>
                            <p className="mt-1 text-mist">{step.copy}</p>
                          </li>
                        ))}
                      </ol>
                    </Panel>
                  )}
                  {row.id === "materials" && (
                    <Panel>
                      <p>
                        We help you choose materials that fit your style, budget, and maintenance preferences,
                        with careful consideration for the Pacific Northwest climate.
                      </p>
                      {materials.map((item) => (
                        <div key={item.title}>
                          <p className="font-medium text-bone">{item.title}</p>
                          <p className="mt-1">{item.copy}</p>
                        </div>
                      ))}
                    </Panel>
                  )}
                  {row.id === "why" && (
                    <Panel>
                      {why.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </Panel>
                  )}
                  {row.id === "who" && (
                    <Panel>
                      {who.map((p) => (
                        <p key={p.slice(0, 24)}>{p}</p>
                      ))}
                    </Panel>
                  )}
                  {row.id === "areas" && (
                    <Panel>
                      <p>{areas}</p>
                    </Panel>
                  )}
                  {row.id === "license" && (
                    <Panel>
                      <p>EP Master Construction LLC is licensed, bonded, and insured in both Oregon and Washington.</p>
                      <p>
                        Oregon CCB License: #{site.ccb}
                        <br />
                        Washington Contractor License: #{site.waLicense}
                      </p>
                      <p>
                        <span className="text-bone">Two-year workmanship warranty. </span>
                        {warranty.workmanship}
                      </p>
                      <p>
                        <span className="text-bone">Manufacturer warranties. </span>
                        {warranty.manufacturer}
                      </p>
                    </Panel>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
