"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.08),rgba(245,158,11,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.10),rgba(251,191,36,0.08))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
            Contact
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            Contact
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
            Un besoin, une question, une proposition de partenariat ? Écris-nous. Nous
            te répondrons au plus vite.
          </p>

          <form
            onSubmit={onSubmit}
            className="mt-10 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Nom</label>
                <input
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Votre nom"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email</label>
                <input
                  type="email"
                  required
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="vous@email.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold">Téléphone (optionnel)</label>
                <input
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="+237 ..."
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="text-sm font-semibold">Message</label>
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Votre message..."
              />
            </div>

            {sent ? (
              <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-sm text-black/70 dark:bg-white/5 dark:text-white/70">
                Merci, ton message a bien été enregistré. Nous revenons vers toi
                rapidement.
              </div>
            ) : null}

            <button
              type="submit"
              className="mt-6 h-12 w-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
