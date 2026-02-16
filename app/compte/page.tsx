"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useState } from "react";

type TicketRow = {
  ticket_code: string;
  issued_at: string;
  ticket_quantity: number;
};

type VerifiedTicket = {
  ticket_code: string;
  issued_at: string;
  participant_first_name: string;
  participant_last_name: string;
  participant_phone: string;
  participant_email: string | null;
  participant_country: string;
  participant_city: string;
  diaspora_status: string;
  ticket_quantity: number;
  situation_text: string | null;
  project_or_urgency_text: string | null;
  selection_reason: string | null;
};

export default function ComptePage() {
  const [phone, setPhone] = useState("");
  const [ticketCode, setTicketCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [tickets, setTickets] = useState<TicketRow[]>([]);
  const [verified, setVerified] = useState<VerifiedTicket | null>(null);

  async function loadTicketsByPhone() {
    const trimmed = phone.trim();
    if (!trimmed) {
      setError("Merci de renseigner votre numéro de téléphone.");
      return;
    }

    setError("");
    setLoading(true);
    setVerified(null);
    try {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) throw new Error("Configuration Supabase manquante.");

      const { data, error: rpcError } = await supabase.rpc("get_tickets_by_phone", {
        p_phone: trimmed,
      });

      if (rpcError) throw rpcError;
      setTickets((data as TicketRow[]) ?? []);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setError(message);
      setTickets([]);
    } finally {
      setLoading(false);
    }
  }

  async function verifyTicket() {
    const trimmedCode = ticketCode.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedCode) {
      setError("Merci de renseigner un code ticket.");
      return;
    }
    if (!trimmedPhone) {
      setError("Merci de renseigner votre numéro de téléphone.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      const supabase = createSupabaseBrowserClient();
      if (!supabase) throw new Error("Configuration Supabase manquante.");

      const { data, error: rpcError } = await supabase.rpc("verify_ticket", {
        p_ticket_code: trimmedCode,
        p_phone: trimmedPhone,
      });

      if (rpcError) throw rpcError;
      const row = (data as VerifiedTicket[] | null)?.[0] ?? null;
      if (!row) {
        setVerified(null);
        setError("Ticket introuvable. Vérifiez le code et le téléphone.");
        return;
      }
      setVerified(row);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erreur inconnue";
      setError(message);
      setVerified(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Mes tickets & vérification
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Saisissez votre numéro de téléphone pour retrouver vos tickets. Vous pouvez
        également vérifier un ticket à partir de son code.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Retrouver mes tickets
          </div>
          <div className="mt-2 grid gap-3">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Téléphone</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Ex: +237 6xx xxx xxx"
              />
            </div>
            <button
              type="button"
              onClick={() => void loadTicketsByPhone()}
              disabled={loading}
              className="h-12 w-full rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-[var(--accent-foreground)] hover:bg-[var(--accent-hover)] disabled:opacity-50"
            >
              {loading ? "Chargement..." : "Afficher mes tickets"}
            </button>
          </div>

          {tickets.length ? (
            <div className="mt-6 grid gap-3">
              {tickets.map((t) => (
                <button
                  key={t.ticket_code}
                  type="button"
                  onClick={() => {
                    setTicketCode(t.ticket_code);
                    void verifyTicket();
                  }}
                  className="w-full rounded-2xl border border-black/10 bg-[var(--surface)] p-4 text-left text-sm text-black/80 hover:bg-black/5 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
                >
                  <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                    Code ticket
                  </div>
                  <div className="mt-1 font-semibold text-black dark:text-white">
                    {t.ticket_code}
                  </div>
                  <div className="mt-1 text-xs text-black/60 dark:text-white/60">
                    Quantité : {t.ticket_quantity}
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="mt-6 text-sm text-black/60 dark:text-white/60">
              Aucun ticket affiché pour le moment.
            </div>
          )}
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Vérifier un ticket
          </div>
          <div className="mt-2 grid gap-3">
            <div className="space-y-2">
              <label className="text-sm font-semibold">Code ticket</label>
              <input
                value={ticketCode}
                onChange={(e) => setTicketCode(e.target.value)}
                className="h-11 w-full rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none focus:border-black/30 dark:border-white/10 dark:bg-black"
                placeholder="Ex: TS-ABCD-EF12"
              />
            </div>
            <button
              type="button"
              onClick={() => void verifyTicket()}
              disabled={loading}
              className="h-12 w-full rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] disabled:opacity-50 dark:shadow-black/30"
            >
              {loading ? "Vérification..." : "Vérifier"}
            </button>
          </div>

          {verified ? (
            <div className="mt-6 rounded-3xl border border-black/10 bg-[var(--surface)] p-5 text-sm text-black/80 dark:border-white/10 dark:bg-white/5 dark:text-white/80">
              <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                Ticket vérifié
              </div>
              <div className="mt-2 grid gap-2">
                <div>
                  <span className="font-semibold">Nom :</span> {verified.participant_last_name}
                </div>
                <div>
                  <span className="font-semibold">Prénom :</span> {verified.participant_first_name}
                </div>
                <div>
                  <span className="font-semibold">Ville :</span> {verified.participant_city}
                </div>
                <div>
                  <span className="font-semibold">Téléphone :</span> {verified.participant_phone}
                </div>
                {verified.participant_email ? (
                  <div>
                    <span className="font-semibold">Email :</span> {verified.participant_email}
                  </div>
                ) : null}
                <div>
                  <span className="font-semibold">Quantité :</span> {verified.ticket_quantity}
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-black/70 dark:bg-black dark:text-white/70">
                <div className="font-semibold text-black dark:text-white">Votre dossier</div>
                {verified.situation_text ? (
                  <div className="mt-2">
                    <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                      Situation
                    </div>
                    <div className="mt-1">{verified.situation_text}</div>
                  </div>
                ) : null}
                {verified.project_or_urgency_text ? (
                  <div className="mt-3">
                    <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                      Projet / urgence
                    </div>
                    <div className="mt-1">{verified.project_or_urgency_text}</div>
                  </div>
                ) : null}
                {verified.selection_reason ? (
                  <div className="mt-3">
                    <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                      Pourquoi vous sélectionner ?
                    </div>
                    <div className="mt-1">{verified.selection_reason}</div>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {error ? (
        <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-200">
          {error}
        </div>
      ) : null}
    </div>
  );
}
