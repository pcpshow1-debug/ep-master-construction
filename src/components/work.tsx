import { Link } from "@tanstack/react-router";
import { HCarousel } from "@/components/h-carousel";
import { workCats } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="snap-pane relative bg-ink text-bone">
      <div className="relative z-10 flex h-full flex-col px-4 pane-pad sm:px-6 md:px-10 lg:px-12 xl:px-16">
        <div className="shrink-0">
          <p className="text-label font-medium uppercase tracking-label text-bone/70">Work</p>
          <h2 className="mt-2 font-display text-section font-medium leading-[1.05] tracking-display">
            Our Work.
          </h2>
        </div>

        <HCarousel className="pane-stack" full>
          {workCats.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              search={{ cat: item.id }}
              data-slide
              className="relative h-full w-full shrink-0 snap-start overflow-hidden border border-bone/15"
            >
              <img src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-16 sm:bottom-8 sm:left-8">
                <p className="text-label uppercase tracking-label text-bone/70">{item.kicker}</p>
                <p className="mt-1 font-display text-4xl font-medium tracking-display sm:text-5xl">{item.title}</p>
              </div>
            </Link>
          ))}
        </HCarousel>
      </div>
    </section>
  );
}
