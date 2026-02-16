"use client";

import { useState } from "react";

export default function RetrouverTicketPage() {
  const [ticketCode, setTicketCode] = useState("");
  const [message, setMessage] = useState<string>("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!ticketCode.trim()) {
      setMessage("Merci de renseigner un code ticket.");
      return;
    }
    setMessage(
      "Pour retrouver vos informations, rendez-vous sur la page Compte et saisissez votre numéro de téléphone (ou votre code ticket).",
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
        Retrouver mon ticket
      </h1>
      <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
        Sans compte, votre ticket est votre référence. Vous pouvez retrouver vos
        tickets et vérifier un ticket depuis la page Compte.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-8 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
      >
        <div className="space-y-2">
          <label className="text-sm font-semibold">Code ticket</label>
          <input
            value={ticketCode}
            onChange={(e) => setTicketCode(e.target.value)}
            className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
            placeholder="Ex: TS-ABCD-EF12"
          />
        </div>

        {message ? (
          <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-sm text-black/70 dark:bg-white/5 dark:text-white/70">
            {message}
          </div>
        ) : null}

        <button
          type="submit"
          className="mt-6 h-12 w-full rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)]"
        >
          Rechercher
        </button>

        <a
          href="/compte"
          className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/10"
        >
          Aller à la page Compte
        </a>
      </form>
    </div>
  );
}
