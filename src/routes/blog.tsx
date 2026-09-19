import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blog, site } from "@/data/site";

export const Route = createFileRoute("/blog")({ component: BlogPage });

function BlogPage() {
  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <SiteHeader />
      <main className="bg-ink pb-16 pt-24 text-bone lg:pb-0 lg:pt-28">
        <div className="relative h-[min(42vh,22rem)] overflow-hidden md:h-[min(52vh,28rem)]">
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/15" />
        </div>

        <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 md:px-10 lg:px-12 lg:py-16">
          <Link
            to="/"
            hash="blog"
            className="inline-flex items-center gap-2 text-label uppercase tracking-label text-fog hover:text-bone"
          >
            <ArrowLeft className="size-3.5" strokeWidth={1.75} />
            Back
          </Link>
          <p className="mt-8 text-label font-medium uppercase tracking-label text-fog">Blog</p>
          <h1 className="mt-3 font-display text-section font-medium leading-[1.05] tracking-display">
            {blog.title}
          </h1>
          <p className="mt-6 font-display text-xl font-medium leading-snug tracking-display text-bone sm:text-2xl">
            {blog.lede}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-mist md:text-[0.95rem]">{blog.intro}</p>

          {blog.sections.map((section) => (
            <div key={section.title} className="mt-10 border-t border-bone/15 pt-8">
              <h2 className="font-display text-[1.45rem] font-medium leading-[1.15] tracking-display sm:text-[1.65rem]">
                {section.title}
              </h2>
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
            <Link
              to="/"
              hash="contact"
              className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bone underline decoration-bone/40 underline-offset-8"
            >
              Get a quote
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
