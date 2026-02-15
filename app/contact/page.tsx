"use client";

import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Contact
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Un besoin, une question, une proposition de partenariat ? Écris-nous. La
        V1 affichera ensuite une intégration dédiée (email / WhatsApp / formulaire
        relié au back-office).
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
            Message enregistré (démo). L’envoi réel sera branché plus tard.
          </div>
        ) : null}

        <button
          type="submit"
          className="mt-6 h-12 w-full rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
