import { ArrowRight } from "lucide-react";
import { blog, site } from "@/data/site";

export function Blog() {
  return (
    <section id="blog" className="relative bg-ink text-bone">
      <div className="relative h-[min(48vh,24rem)] overflow-hidden md:h-[min(56vh,32rem)]">
        <img
          src="/images/hero-porch-h.jpg"
          alt="Covered cedar deck at dusk in the Northwest"
          className="hidden h-full w-full object-cover object-center md:block"
        />
        <img
          src="/images/hero-porch-v.jpg"
          alt="Covered cedar deck at dusk in the Northwest"
          className="h-full w-full object-cover object-center md:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/20" />
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <p className="text-label font-medium uppercase tracking-label text-bone/70">{blog.kicker}</p>
          <h2 className="mt-2 max-w-3xl font-display text-section font-medium leading-[1.05] tracking-display">
            {blog.title}
          </h2>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
        <p className="font-display text-xl font-medium leading-snug tracking-display text-bone sm:text-2xl">
          {blog.lede}
        </p>
        <p className="mt-6 text-sm leading-relaxed text-mist md:text-[0.95rem]">{blog.intro}</p>

        {blog.sections.map((section) => (
          <div key={section.title} className="mt-10 border-t border-bone/15 pt-8">
            <h3 className="font-display text-[1.45rem] font-medium leading-[1.15] tracking-display sm:text-[1.65rem]">
              {section.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-mist md:text-[0.95rem]">{section.body}</p>
          </div>
        ))}

        <p className="mt-10 text-sm leading-relaxed text-mist md:text-[0.95rem]">{blog.closer}</p>
        <p className="mt-4 text-sm leading-relaxed text-bone md:text-[0.95rem]">{blog.cta}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href={site.estimatorUrl} className="quote-btn inline-flex">
            Try the estimator
            <ArrowRight className="size-4" strokeWidth={2} />
          </a>
          <a
            href="#contact"
            className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bone underline decoration-bone/40 underline-offset-8"
          >
            Get a quote
          </a>
        </div>
      </article>
    </section>
  );
}
