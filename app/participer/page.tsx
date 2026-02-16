"use client";

import { useMemo, useState } from "react";

type FormState = {
  ticketQuantity: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  diasporaStatus: "local" | "diaspora";
  situation: string;
  projectOrUrgency: string;
  influencerCode: string;
  acceptReglement: boolean;
};

const defaultState: FormState = {
  ticketQuantity: 1,
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  country: "Cameroun",
  city: "",
  diasporaStatus: "local",
  situation: "",
  projectOrUrgency: "",
  influencerCode: "",
  acceptReglement: false,
};

export default function ParticiperPage() {
  const [state, setState] = useState<FormState>(defaultState);
  const [error, setError] = useState<string>("");

  const estimatedAmountXaf = useMemo(() => {
    const pricePerTicket = 2000;
    return state.ticketQuantity * pricePerTicket;
  }, [state.ticketQuantity]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function validate(): string {
    if (!state.firstName.trim() || !state.lastName.trim()) {
      return "Merci de renseigner votre nom et prénom.";
    }
    if (!state.phone.trim()) {
      return "Merci de renseigner votre numéro de téléphone.";
    }
    if (!state.city.trim()) {
      return "Merci de renseigner votre ville.";
    }
    if (state.ticketQuantity < 1) {
      return "Veuillez choisir au moins 1 ticket.";
    }
    if (!state.acceptReglement) {
      return "Vous devez accepter le règlement et les conditions.";
    }
    return "";
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }

    setError("");
    sessionStorage.setItem("tambola_checkout_payload_v1", JSON.stringify(state));
    window.location.href = "/participer/succes";
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            Participer à la tambola solidaire
          </h1>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center rounded-full border border-[var(--gold)]/45 bg-[color-mix(in_srgb,var(--gold)_14%,white)] px-3 py-1 text-xs font-semibold text-black/90 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/85">
              Participation : 2000 FCFA
            </div>
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/80 dark:border-white/10 dark:bg-black dark:text-white/80">
              Ouvert à tous
            </div>
          </div>
          <p className="text-sm leading-6 text-black/70 dark:text-white/70">
            Pour simplifier, la participation se fait sans création de compte.
            Pendant votre achat, vous pouvez décrire votre situation : ces
            informations servent uniquement à l’étude des dossiers et restent
            confidentielles.
          </p>

          <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-[var(--surface)] p-6 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <div className="font-semibold text-black dark:text-white">
              V1 (démo)
            </div>
            <div className="mt-1">
              Cette V1 génère un ticket unique + PDF (QR inclus) afin de valider
              l’expérience. L’intégration paiement Stripe/Flutterwave et la
              connexion Supabase arriveront ensuite.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <form className="space-y-6" onSubmit={onSubmit}>
            {error ? (
              <div className="rounded-2xl border border-red-500/30 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-200">
                {error}
              </div>
            ) : null}

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Prénom</label>
                <input
                  value={state.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Ex: Marie"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Nom</label>
                <input
                  value={state.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Ex: Nguema"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Téléphone</label>
                <input
                  value={state.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Ex: +237 6xx xxx xxx"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold">Email (optionnel)</label>
                <input
                  value={state.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Ex: vous@email.com"
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
                  placeholder="Ex: Douala"
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
              <div className="space-y-2">
                <label className="text-sm font-semibold">Nombre de tickets</label>
                <input
                  type="number"
                  min={1}
                  value={state.ticketQuantity}
                  onChange={(e) => update("ticketQuantity", Number(e.target.value))}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Situation personnelle</label>
              <textarea
                value={state.situation}
                onChange={(e) => update("situation", e.target.value)}
                rows={4}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Décrivez votre situation (difficulté, contexte, etc.)"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">Projet ou urgence</label>
              <textarea
                value={state.projectOrUrgency}
                onChange={(e) => update("projectOrUrgency", e.target.value)}
                rows={4}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Expliquez votre projet (ou votre urgence) et ce que l’aide changerait."
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Code influenceur (optionnel)</label>
                <input
                  value={state.influencerCode}
                  onChange={(e) => update("influencerCode", e.target.value)}
                  className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                  placeholder="Ex: PRINCE23"
                />
              </div>
              <div className="rounded-2xl border border-black/10 bg-[var(--surface)] p-4 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
                <div className="font-semibold text-black dark:text-white">
                  Estimation
                </div>
                <div className="mt-1">Total estimé : {estimatedAmountXaf} FCFA</div>
                <div className="mt-1 text-xs">
                  Prix par ticket : 2000 FCFA. Le tarif peut évoluer selon la campagne.
                </div>
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-black/70 dark:text-white/70">
              <input
                type="checkbox"
                checked={state.acceptReglement}
                onChange={(e) => update("acceptReglement", e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-black/20"
              />
              <span>
                J’accepte le <a className="underline" href="/reglement">règlement</a> et je
                comprends que la sélection des bénéficiaires est indépendante du
                tirage.
              </span>
            </label>

            <button
              type="submit"
              className="h-12 w-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
            >
              Continuer (générer mon ticket V1)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
