"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-tight">
          Tambola solidaire
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-black/80 dark:text-white/80 md:flex">
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/fonctionnement">
            Fonctionnement
          </a>
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/transparence">
            Transparence
          </a>
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/histoires">
            Histoires
          </a>
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/faq">
            FAQ
          </a>
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/contact">
            Contact
          </a>
          <a className="hover:text-[var(--gold-hover)] hover:underline" href="/compte">
            Compte
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/participer"
            className="rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
          >
            Participer (2000 FCFA)
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-10 items-center justify-center rounded-full border border-black/15 px-4 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10 md:hidden"
          >
            Menu
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-black/10 bg-[var(--surface)]/80 dark:border-white/10 dark:bg-black/30 md:hidden"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-4">
            <div className="grid gap-2 text-sm">
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/fonctionnement"
                onClick={() => setOpen(false)}
              >
                Fonctionnement
              </a>
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/transparence"
                onClick={() => setOpen(false)}
              >
                Transparence
              </a>
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/histoires"
                onClick={() => setOpen(false)}
              >
                Histoires
              </a>
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/faq"
                onClick={() => setOpen(false)}
              >
                FAQ
              </a>
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
              <a
                className="rounded-2xl px-4 py-3 hover:bg-black/5 hover:text-[var(--gold-hover)] dark:hover:bg-white/10"
                href="/compte"
                onClick={() => setOpen(false)}
              >
                Compte
              </a>
            </div>

          </div>
        </div>
      ) : null}
    </header>
  );
}
