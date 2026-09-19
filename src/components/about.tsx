import { Minus, Plus } from "lucide-react";
import { type ReactNode } from "react";
import { about, areas, materials, process, site, who, why } from "@/data/site";

function Fold({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <details className="group border-t border-bone/15">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
        <span>
          <span className="block text-label font-medium uppercase tracking-label text-fog">{kicker}</span>
          <span className="mt-2 block font-display text-[1.85rem] font-medium leading-[1.1] tracking-display sm:text-3xl">
            {title}
          </span>
        </span>
        <Plus className="size-5 shrink-0 text-bone group-open:hidden" strokeWidth={1.5} />
        <Minus className="hidden size-5 shrink-0 text-bone group-open:block" strokeWidth={1.5} />
      </summary>
      <div className="pb-8 text-sm leading-relaxed text-mist md:text-[0.95rem]">{children}</div>
    </details>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-ink text-bone">
      <div className="relative h-[min(88svh,46rem)] overflow-hidden">
        <img
          src="/images/eli-portrait.jpg"
          alt="Eli, owner of EP Master Construction"
          className="h-full w-full object-cover object-[18%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/25" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <p className="text-label font-medium uppercase tracking-label text-bone/70">More about</p>
          <h2 className="mt-2 font-display text-section font-medium leading-[1.05] tracking-display">Eli.</h2>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-6 sm:px-6 md:px-10 lg:px-12">
        <Fold kicker="About Eli" title="The story.">
          <div className="space-y-4">
            {about.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
            <p className="text-label uppercase tracking-label text-bone/70">
              Licensed · Bonded · Insured
              <br />
              OR CCB #{site.ccb} · WA #{site.waLicense}
            </p>
          </div>
        </Fold>

        <Fold kicker="How we work" title="The sequence.">
          <ol className="space-y-5">
            {process.map((step) => (
              <li key={step.n}>
                <p className="text-label uppercase tracking-label text-fog">{step.n}</p>
                <p className="mt-1 font-medium text-bone">{step.title}</p>
                <p className="mt-1">{step.copy}</p>
              </li>
            ))}
          </ol>
        </Fold>

        <Fold kicker="Materials" title="What we build with.">
          <div className="space-y-5">
            {materials.map((item) => (
              <div key={item.title}>
                <p className="font-medium text-bone">{item.title}</p>
                <p className="mt-1">{item.copy}</p>
              </div>
            ))}
          </div>
        </Fold>

        <Fold kicker="Why EP Master" title="How we treat the job.">
          <div className="space-y-4">
            {why.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </Fold>

        <Fold kicker="Oregon & Washington" title="Where we work.">
          <div className="space-y-4">
            <p>{who[0]}</p>
            <p>{areas}</p>
          </div>
        </Fold>
      </div>
    </section>
  );
}
