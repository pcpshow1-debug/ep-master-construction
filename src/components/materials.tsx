import { materials } from "@/data/site";

export function Materials() {
  return (
    <section id="materials" className="border-t border-bone/10 bg-ink text-bone">
      <div className="px-5 py-20 md:px-10 md:py-24 lg:px-12 xl:px-16">
        <p className="text-label font-medium uppercase tracking-label text-fog">Materials</p>
        <h2 className="mt-3 max-w-2xl font-display text-section font-medium leading-[1.05] tracking-display">
          Chosen for the Pacific Northwest.
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist">
          We help you choose materials that fit your style, budget, and maintenance preferences,
          with careful consideration for the Pacific Northwest climate.
        </p>
        <div className="mt-14 grid gap-px bg-bone/10 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((item) => (
            <article key={item.title} className="bg-ink px-6 py-10 md:px-8">
              <h3 className="font-display text-2xl font-medium tracking-display">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
