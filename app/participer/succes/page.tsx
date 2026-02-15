"use client";

import { jsPDF } from "jspdf";
import QRCode from "qrcode";
import { useEffect, useMemo, useState } from "react";

type Payload = {
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

function makeTicketCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const part = (len: number) =>
    Array.from({ length: len }, () => alphabet[Math.floor(Math.random() * alphabet.length)]).join("");
  return `TS-${part(4)}-${part(4)}`;
}

export default function SuccesPage() {
  const [payload, setPayload] = useState<Payload | null>(null);
  const [ticketCode, setTicketCode] = useState<string>("");
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [isReady, setIsReady] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("tambola_checkout_payload_v1");
      if (!raw) {
        setError(
          "Aucune participation en cours. Revenez sur la page Participer pour générer un ticket.",
        );
        return;
      }
      const parsed = JSON.parse(raw) as Payload;
      setPayload(parsed);
      setTicketCode(makeTicketCode());
    } catch {
      setError("Impossible de lire les informations de participation.");
    }
  }, []);

  const qrPayload = useMemo(() => {
    if (!ticketCode) return "";
    return JSON.stringify({ ticket_code: ticketCode });
  }, [ticketCode]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!qrPayload) return;
      const dataUrl = await QRCode.toDataURL(qrPayload, { margin: 1, width: 280 });
      if (!cancelled) {
        setQrDataUrl(dataUrl);
        setIsReady(true);
      }
    }
    run().catch(() => setError("Impossible de générer le QR code."));
    return () => {
      cancelled = true;
    };
  }, [qrPayload]);

  function downloadPdf() {
    if (!payload || !ticketCode || !qrDataUrl) return;

    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const margin = 48;
    const width = doc.internal.pageSize.getWidth();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Tambola solidaire — Ticket de participation", margin, 70);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "Maison à gagner • Projets à financer • Priorité humanitaire : communauté camerounaise (ouvert à tous)",
      margin,
      92,
      { maxWidth: width - margin * 2 },
    );

    doc.setDrawColor(0);
    doc.setLineWidth(0.5);
    doc.roundedRect(margin, 115, width - margin * 2, 140, 12, 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(`Code ticket : ${ticketCode}`, margin + 16, 145);

    doc.setFont("helvetica", "normal");
    doc.text(`Nom : ${payload.lastName}`, margin + 16, 170);
    doc.text(`Prénom : ${payload.firstName}`, margin + 16, 190);
    doc.text(`Ville : ${payload.city}`, margin + 16, 210);
    doc.text(`Téléphone : ${payload.phone}`, margin + 16, 230);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(
      "QR (Option B) : ce QR ne contient que la référence ticket. Les informations s’affichent lors de la vérification dans le back-office.",
      margin + 16,
      252,
      { maxWidth: width - margin * 2 - 160 },
    );

    const qrX = width - margin - 120;
    const qrY = 130;
    doc.addImage(qrDataUrl, "PNG", qrX, qrY, 110, 110);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Rappel important", margin, 305);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.text(
      "Conservez ce ticket. Il sert de preuve de participation et peut être demandé lors de la publication des résultats. La sélection des bénéficiaires est indépendante du tirage et se fait sur dossier.",
      margin,
      328,
      { maxWidth: width - margin * 2 },
    );

    doc.setFontSize(10);
    doc.text(
      "V1 (démo) : le paiement et la base Supabase seront connectés dans la prochaine étape. Ce document valide le format ticket + QR + PDF.",
      margin,
      370,
      { maxWidth: width - margin * 2 },
    );

    doc.save(`ticket-${ticketCode}.pdf`);
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
          Participation enregistrée (V1)
        </h1>
        <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
          Votre ticket est prêt. Conservez-le soigneusement : il sert de preuve et
          facilite la vérification.
        </p>

        {error ? (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-950/30 dark:text-red-200">
            {error}
          </div>
        ) : null}

        {payload && ticketCode ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
            <div className="rounded-3xl bg-zinc-50 p-6 text-sm text-black/80 dark:bg-white/5 dark:text-white/80">
              <div className="text-xs font-semibold text-black/60 dark:text-white/60">
                Code ticket
              </div>
              <div className="mt-1 text-2xl font-semibold text-black dark:text-white">
                {ticketCode}
              </div>

              <div className="mt-4 grid gap-2 text-sm">
                <div>
                  <span className="font-semibold">Nom :</span> {payload.lastName}
                </div>
                <div>
                  <span className="font-semibold">Prénom :</span> {payload.firstName}
                </div>
                <div>
                  <span className="font-semibold">Ville :</span> {payload.city}
                </div>
                <div>
                  <span className="font-semibold">Téléphone :</span> {payload.phone}
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={downloadPdf}
                  disabled={!isReady}
                  className="h-12 rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/90 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Télécharger le ticket PDF
                </button>
                <a
                  href="/retrouver-ticket"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-black/15 bg-white px-6 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/15 dark:bg-black dark:text-white dark:hover:bg-white/10"
                >
                  Retrouver un ticket
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
              <div className="text-sm font-semibold text-black dark:text-white">
                QR de vérification (Option B)
              </div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">
                Ce QR contient uniquement la référence du ticket.
              </p>
              <div className="mt-4 flex items-center justify-center rounded-2xl bg-zinc-50 p-6 dark:bg-white/5">
                {qrDataUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={qrDataUrl}
                    alt="QR code du ticket"
                    className="h-48 w-48"
                  />
                ) : (
                  <div className="text-sm text-black/60 dark:text-white/60">
                    Génération du QR...
                  </div>
                )}
              </div>
              <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-xs text-black/60 dark:bg-white/5 dark:text-white/60">
                Lors du scan dans le back-office, le système vérifiera le ticket et
                affichera les informations associées.
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
