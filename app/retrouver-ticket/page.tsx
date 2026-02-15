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
      "V1 : la recherche sera disponible quand la base Supabase sera connectée. Pour l’instant, conservez le PDF téléchargé lors de la participation.",
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
        Retrouver mon ticket
      </h1>
      <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
        Sans compte, votre ticket est votre référence. Dans la prochaine étape, vous
        pourrez retrouver un ticket via votre numéro de téléphone et/ou une
        vérification.
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
          className="mt-6 h-12 w-full rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        >
          Rechercher
        </button>
      </form>
    </div>
  );
}
