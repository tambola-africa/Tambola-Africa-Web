"use client";

import { useState } from "react";

type State = {
  fullName: string;
  phone: string;
  country: string;
  city: string;
  diasporaStatus: "local" | "diaspora";
  situation: string;
  projectOrUrgency: string;
  wantsPublicAnonymity: boolean;
};

const initialState: State = {
  fullName: "",
  phone: "",
  country: "Cameroun",
  city: "",
  diasporaStatus: "local",
  situation: "",
  projectOrUrgency: "",
  wantsPublicAnonymity: true,
};

export default function DeposerDossierPage() {
  const [state, setState] = useState<State>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof State>(key: K, value: State[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Déposer un dossier d’aide
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Ce formulaire existe pour celles et ceux qui veulent expliquer leur
        situation. Dans ton modèle, la sélection est liée à la participation : la
        V1 collecte ces informations aussi pendant l’achat des tickets.
      </p>

      <form
        onSubmit={onSubmit}
        className="mt-10 rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Nom & prénom</label>
            <input
              value={state.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
              placeholder="Ex: Marie Nguema"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Téléphone</label>
            <input
              value={state.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
              placeholder="+237 ..."
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Pays</label>
            <input
              value={state.country}
              onChange={(e) => update("country", e.target.value)}
              className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Ville</label>
            <input
              value={state.city}
              onChange={(e) => update("city", e.target.value)}
              className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
              placeholder="Douala"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold">Parcours</label>
            <select
              value={state.diasporaStatus}
              onChange={(e) =>
                update(
                  "diasporaStatus",
                  e.target.value === "diaspora" ? "diaspora" : "local",
                )
              }
              className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
            >
              <option value="local">Au Cameroun</option>
              <option value="diaspora">Diaspora</option>
            </select>
          </div>
          <div className="rounded-2xl bg-zinc-50 p-4 text-sm text-black/70 dark:bg-white/5 dark:text-white/70">
            <div className="font-semibold text-black dark:text-white">Anonymat</div>
            <div className="mt-1">
              Anonymat public uniquement (Option validée) : l’équipe peut voir les
              informations pour étudier le dossier.
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <label className="text-sm font-semibold">Situation personnelle</label>
          <textarea
            value={state.situation}
            onChange={(e) => update("situation", e.target.value)}
            rows={4}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
            placeholder="Décris ta situation (contexte, difficultés, etc.)"
          />
        </div>

        <div className="mt-4 space-y-2">
          <label className="text-sm font-semibold">Projet ou urgence</label>
          <textarea
            value={state.projectOrUrgency}
            onChange={(e) => update("projectOrUrgency", e.target.value)}
            rows={4}
            className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
            placeholder="Explique ton projet ou ton urgence."
          />
        </div>

        <label className="mt-4 flex items-start gap-3 text-sm text-black/70 dark:text-white/70">
          <input
            type="checkbox"
            checked={state.wantsPublicAnonymity}
            onChange={(e) => update("wantsPublicAnonymity", e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-black/20"
          />
          <span>
            Je souhaite rester anonyme dans les publications publiques (témoignage,
            stories, etc.).
          </span>
        </label>

        {submitted ? (
          <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-sm text-black/70 dark:bg-white/5 dark:text-white/70">
            Dossier enregistré (démo). La connexion Supabase arrivera ensuite.
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
