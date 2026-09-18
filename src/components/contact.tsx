"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";

const PROJECTS = ["Deck", "Patio cover", "Framing", "Not sure yet"] as const;

export function Contact() {
  const [sent, setSent] = useState(false);

  function submitForm(form: HTMLFormElement) {
    const data = Object.fromEntries(new FormData(form).entries());
    const leads = JSON.parse(localStorage.getItem("epmaster-leads") ?? "[]") as unknown[];
    leads.push({ ...data, at: new Date().toISOString() });
    localStorage.setItem("epmaster-leads", JSON.stringify(leads));
    setSent(true);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitForm(event.currentTarget);
  }

  return (
    <section id="contact" className="relative bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-6 md:px-10 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16 lg:py-24">
        <div>
          <p className="text-label font-medium uppercase tracking-label text-fog">Contact</p>
          <h2 className="mt-2 font-display text-section font-medium leading-[1.05] tracking-display">
            Get a quote.
          </h2>
          {sent ? (
            <p className="mt-10 font-display text-2xl font-medium tracking-display">
              Received. We’ll come back with a number, not a brochure.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-10 space-y-1">
              <input required name="name" className="field" placeholder="Name" autoComplete="name" />
              <input
                required
                type="email"
                name="email"
                className="field"
                placeholder="Email"
                autoComplete="email"
              />
              <input type="tel" name="phone" className="field" placeholder="Phone" autoComplete="tel" />
              <input name="city" className="field" placeholder="City — Oregon or Washington" />
              <select name="project" className="field appearance-none bg-ink" defaultValue="Deck">
                {PROJECTS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <textarea
                name="notes"
                rows={4}
                className="field resize-none"
                placeholder="What are we building?"
              />
              <button type="submit" className="quote-btn mt-8">
                Send
                <ArrowRight className="size-4" strokeWidth={2} />
              </button>
            </form>
          )}
        </div>

        <div className="relative min-h-[22rem] overflow-hidden border border-bone/15 lg:min-h-full">
          <video
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/truck.jpg"
          >
            <source src="/video/truck.mp4?v=2" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-ink/62" />
          <div className="relative flex h-full flex-col justify-between px-6 py-8 md:px-8">
            <div>
              <p className="text-label uppercase tracking-label text-mist">Call or text</p>
              <a
                href={`tel:+1${site.phone}`}
                className="mt-4 block font-display text-3xl font-medium tracking-display text-bone"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-3 block text-sm text-mist underline decoration-bone/25 underline-offset-4"
              >
                {site.email}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-mist">
                {site.address}
                <br />
                {site.region}. {site.radius}.
              </p>
            </div>
            <div>
              <p className="text-label uppercase tracking-label text-bone/70">
                OR CCB #{site.ccb}
                <br />
                WA #{site.waLicense}
              </p>
              <Link
                to="/estimator"
                className="mt-5 inline-flex items-center gap-2 text-label uppercase tracking-label text-bone"
              >
                Open the deck estimator
                <ArrowRight className="size-3.5" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
