import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blog } from "@/data/site";

export function Blog() {
  return (
    <section id="blog" className="relative bg-ink text-bone">
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-6 md:px-10 lg:px-12 lg:py-16">
        <p className="text-label font-medium uppercase tracking-label text-fog">Blog</p>
        <h2 className="mt-3 font-display text-section font-medium leading-[1.05] tracking-display">
          {blog.title}
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-mist md:text-[0.95rem]">{blog.intro}</p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-bone underline decoration-bone/40 underline-offset-8"
        >
          Read more
          <ArrowRight className="size-3.5" strokeWidth={2} />
        </Link>
      </article>
    </section>
  );
}
