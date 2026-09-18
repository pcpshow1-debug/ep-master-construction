"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

function telHref() {
  return `tel:+1${site.phone}`;
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActive(pathname.replace("/", "") || "home");
      return;
    }
    const nodes = ["home", "work", "reviews", "estimate", "about", "contact"]
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const menu =
    open && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-ink lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between px-5 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
              <p className="text-label uppercase tracking-label text-fog">Menu</p>
              <button
                type="button"
                className="flex size-11 items-center justify-center text-bone"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="size-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="flex flex-col px-5 pt-2" aria-label="Mobile">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="border-b border-bone/15 py-3.5 font-display text-[1.85rem] font-medium leading-none tracking-display text-bone"
              >
                Home
              </Link>
              {nav.map((item) =>
                item.id === "gallery" ? (
                  <Link
                    key={item.id}
                    to="/gallery"
                    onClick={() => setOpen(false)}
                    className="border-b border-bone/15 py-3.5 font-display text-[1.85rem] font-medium leading-none tracking-display text-bone"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-bone/15 py-3.5 font-display text-[1.85rem] font-medium leading-none tracking-display text-bone"
                  >
                    {item.label}
                  </a>
                ),
              )}
            </nav>
            <div className="mt-auto space-y-4 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8">
              <a
                href={site.estimatorUrl}
                onClick={() => setOpen(false)}
                className="quote-btn w-full justify-center"
              >
                Estimate your deck
              </a>
              <a href={telHref()} className="block font-display text-2xl tracking-display text-bone">
                {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="block text-sm text-mist">
                {site.email}
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-bone underline decoration-bone/30 underline-offset-4"
              >
                Facebook
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-mist underline decoration-bone/20 underline-offset-4"
              >
                Instagram {site.instagramHandle}
              </a>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70]",
          open && "pointer-events-none opacity-0",
          !onHome && "border-b border-bone/10 bg-ink",
        )}
      >
        {onHome ? <div className="header-veil" aria-hidden="true" /> : null}
        <div className="header-bar flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5 md:gap-4 md:px-10 md:py-4 lg:px-12 xl:px-16">
          <Link to="/" className="relative z-[80] shrink-0" onClick={() => setOpen(false)}>
            <img
              src="/brand/logo-white.png"
              alt={site.name}
              className="site-logo"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary">
            {nav.map((item) => {
              const isActive = active === item.id;
              const className = cn(
                "text-nav font-sans font-medium uppercase tracking-nav text-bone/80 transition-colors hover:text-bone",
                isActive && "text-bone",
              );
              const inner = (
                <span className={cn("border-b pb-1", isActive ? "border-bone" : "border-transparent")}>
                  {item.label}
                </span>
              );
              return item.id === "gallery" ? (
                <Link key={item.id} to="/gallery" className={className}>
                  {inner}
                </Link>
              ) : (
                <a key={item.id} href={item.href} className={className}>
                  {inner}
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href={telHref()}
              className="text-label font-medium uppercase tracking-label text-bone/85 hover:text-bone"
            >
              {site.phoneDisplay}
            </a>
            <a href={site.estimatorUrl} className="quote-btn py-2.5">
              Estimator
            </a>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="relative z-[80] flex size-11 items-center justify-center text-bone"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      {menu}
    </>
  );
}
