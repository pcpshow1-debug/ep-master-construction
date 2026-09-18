import { process } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="border-t border-bone/10 bg-ink text-bone">
      <div className="px-5 py-20 md:px-10 md:py-24 lg:px-12 xl:px-16">
        <p className="text-label font-medium uppercase tracking-label text-fog">Process</p>
        <h2 className="mt-3 max-w-xl font-display text-section font-medium leading-[1.05] tracking-display">
          From the first call
          <br />
          to the final walkthrough.
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist">
          We keep the process clear so you know what to expect at every step.
        </p>
        <ol className="mt-14 grid gap-px bg-bone/10 md:grid-cols-2 xl:grid-cols-4">
          {process.map((step) => (
            <li key={step.n} className="bg-ink px-6 py-10 md:px-8">
              <p className="text-label uppercase tracking-label text-fog">{step.n}</p>
              <h3 className="mt-4 font-display text-2xl font-medium tracking-display">{step.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mist">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
