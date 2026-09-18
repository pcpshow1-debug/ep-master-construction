"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";

const PROJECTS = ["Deck", "Patio cover", "Framing", "Not sure yet"] as const;

type Fields = {
  name: string;
  email: string;
  phone: string;
  city: string;
  project: string;
  notes: string;
};

function quoteBody(data: Fields) {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `City: ${data.city || "—"}`,
    `Project: ${data.project || "—"}`,
    "",
    data.notes || "(no notes)",
  ].join("\n");
}

function mailtoHref(data: Fields) {
  const subject = `Quote request — ${data.name} — ${data.project || "project"}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(quoteBody(data))}`;
}

async function postQuote(data: Fields) {
  const res = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(data),
  });
  const json = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    id?: string | null;
    error?: string;
  };
  if (!res.ok || !json.ok) {
    throw new Error(json.error || `Couldn’t send (${res.status})`);
  }
  return json;
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [mailHref, setMailHref] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    const data: Fields = {
      name: raw.name?.trim() || "",
      email: raw.email?.trim() || "",
      phone: raw.phone?.trim() || "",
      city: raw.city?.trim() || "",
      project: raw.project || "Deck",
      notes: raw.notes?.trim() || "",
    };
    setSending(true);
    setError("");
    setMailHref(mailtoHref(data));
    try {
      await postQuote(data);
      setSent(true);
    } catch (err) {
      setMailHref(mailtoHref(data));
      setError(
        err instanceof Error
          ? err.message
          : "Couldn’t send. Email or call Eli.",
      );
      // Do NOT mark success or auto-open mailto — honest failure only.
    } finally {
      setSending(false);
    }
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
            <div className="mt-10 space-y-4">
              <p className="font-display text-2xl font-medium tracking-display">
                Received. We’ll come back with a number, not a brochure.
              </p>
            </div>
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
              <label className="block">
                <span className="sr-only">Project</span>
                <select name="project" className="field field-select bg-ink" defaultValue="Deck">
                  {PROJECTS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>
              <textarea
                name="notes"
                rows={4}
                className="field resize-none"
                placeholder="What are we building?"
              />
              {error ? (
                <p className="pt-4 text-sm text-mist">
                  {error}{" "}
                  {mailHref ? (
                    <a href={mailHref} className="underline decoration-bone/30 underline-offset-4">
                      Send from Mail
                    </a>
                  ) : (
                    <a href={`mailto:${site.email}`} className="underline decoration-bone/30 underline-offset-4">
                      Email Eli
                    </a>
                  )}
                </p>
              ) : null}
              <button type="submit" className="quote-btn mt-8" disabled={sending}>
                {sending ? "Sending…" : "Send"}
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
                {site.region}. {site.radius}.
              </p>
            </div>
            <div>
              <p className="text-label uppercase tracking-label text-bone/70">
                OR CCB #{site.ccb}
                <br />
                WA #{site.waLicense}
              </p>
              <a
                href={site.estimatorUrl}
                className="mt-5 inline-flex items-center gap-2 text-label uppercase tracking-label text-bone"
              >
                Open the deck estimator
                <ArrowRight className="size-3.5" strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
