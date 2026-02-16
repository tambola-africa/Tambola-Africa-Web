"use client";

import { useEffect } from "react";

export default function DeposerDossierPage() {
  useEffect(() => {
    window.location.replace("/participer");
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Déposer un dossier d’aide
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        La sélection des bénéficiaires se fait parmi les participants. Merci de
        passer par la page Participation pour acheter un ticket et communiquer
        votre situation.
      </p>
      <div className="mt-8">
        <a
          href="/participer"
          className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
        >
          Participer (ticket requis)
        </a>
      </div>
    </div>
  );
}
