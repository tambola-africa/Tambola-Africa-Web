"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
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
  selectionReason: string;
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
  selectionReason: "",
  influencerCode: "",
  acceptReglement: false,
};

function makeTicketCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = (len: number) =>
    Array.from({ length: len }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  return `TS-${part(4)}-${part(4)}`;
}

export default function ParticiperPage() {
  const [state, setState] = useState<FormState>(defaultState);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    void (async () => {
      const msg = validate();
      if (msg) {
        setError(msg);
        return;
      }

      setError("");
      setIsSubmitting(true);
      try {
        const supabase = createSupabaseBrowserClient();
        if (!supabase) {
          throw new Error("Configuration Supabase manquante.");
        }

        const { data: campaign, error: campaignError } = await supabase
          .from("campaigns")
          .select("id, ticket_price, currency")
          .eq("slug", "current")
          .single();

        if (campaignError || !campaign) {
          throw new Error("Impossible de charger la campagne en cours.");
        }

        const { data: participant, error: participantError } = await supabase
          .from("participants")
          .insert({
            first_name: state.firstName.trim(),
            last_name: state.lastName.trim(),
            phone: state.phone.trim(),
            email: state.email.trim() || null,
            country: state.country.trim(),
            city: state.city.trim(),
            diaspora_status: state.diasporaStatus,
          })
          .select("id")
          .single();

        if (participantError || !participant) {
          throw new Error("Impossible d’enregistrer le participant.");
        }

        const amount = state.ticketQuantity * campaign.ticket_price;
        const { data: order, error: orderError } = await supabase
          .from("orders")
          .insert({
            campaign_id: campaign.id,
            participant_id: participant.id,
            provider: "stripe",
            status: "paid",
            ticket_quantity: state.ticketQuantity,
            amount,
            currency: campaign.currency,
            influencer_code: state.influencerCode.trim() || null,
            provider_metadata: {},
            paid_at: new Date().toISOString(),
          })
          .select("id")
          .single();

        if (orderError || !order) {
          throw new Error("Impossible d’enregistrer la commande.");
        }

        await supabase.from("aid_submissions").insert({
          order_id: order.id,
          situation_text: state.situation.trim() || null,
          project_or_urgency_text: state.projectOrUrgency.trim() || null,
          selection_reason: state.selectionReason.trim() || null,
          public_anonymity: true,
          status: "submitted",
        });

        const ticketCode = makeTicketCode();
        const { error: ticketError } = await supabase.from("tickets").insert({
          order_id: order.id,
          campaign_id: campaign.id,
          ticket_code: ticketCode,
          qr_payload: { ticket_code: ticketCode },
        });

        if (ticketError) {
          throw new Error("Impossible de générer le ticket.");
        }

        sessionStorage.setItem(
          "tambola_last_participation",
          JSON.stringify({ payload: state, ticketCode }),
        );
        window.location.href = "/participer/succes";
      } catch (err) {
        const message = err instanceof Error ? err.message : "Erreur inconnue";
        setError(message);
      } finally {
        setIsSubmitting(false);
      }
    })();
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
              Ticket & dossier
            </div>
            <div className="mt-1">
              Après validation, un ticket unique est généré (QR + PDF). Conservez-le
              soigneusement : il sert de preuve et facilite la vérification.
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

            <div className="space-y-2">
              <label className="text-sm font-semibold">
                Pourquoi doit-on vous sélectionner parmi les 10 bénéficiaires si vous
                n’êtes pas le grand gagnant ?
              </label>
              <textarea
                value={state.selectionReason}
                onChange={(e) => update("selectionReason", e.target.value)}
                rows={4}
                className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Expliquez en quelques mots votre situation et ce qui rend votre dossier prioritaire."
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
              disabled={isSubmitting}
              className="h-12 w-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
            >
              {isSubmitting ? "Traitement..." : "Continuer (générer mon ticket)"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
