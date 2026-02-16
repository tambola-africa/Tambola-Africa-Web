export default function TransparencePage() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.08),rgba(245,158,11,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.10),rgba(251,191,36,0.08))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
            Transparence
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            Tableau de transparence
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
            Cette page est conçue pour afficher, campagne par campagne, les montants
            collectés, la répartition, et les résultats. Nous publions régulièrement
            ces informations afin de garantir une transparence maximale.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-black dark:text-white">
                Participants
              </div>
              <div className="mt-2 text-3xl font-semibold text-black dark:text-white">
                0
              </div>
              <div className="mt-2 text-sm text-black/70 dark:text-white/70">
                Total de participants (toutes campagnes).
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-black dark:text-white">
                Projets aidés
              </div>
              <div className="mt-2 text-3xl font-semibold text-black dark:text-white">
                0
              </div>
              <div className="mt-2 text-sm text-black/70 dark:text-white/70">
                Bénéficiaires accompagnés (sur dossier).
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="text-sm font-semibold text-black dark:text-white">
                Montants redistribués
              </div>
              <div className="mt-2 text-3xl font-semibold text-black dark:text-white">
                0 FCFA
              </div>
              <div className="mt-2 text-sm text-black/70 dark:text-white/70">
                Montants d’aide versés aux bénéficiaires.
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-white p-6 text-sm text-black/70 dark:border-white/10 dark:bg-black dark:text-white/70">
            <div className="font-semibold text-black dark:text-white">
              Ce que vous trouverez ici
            </div>
            <div className="mt-2 grid gap-2">
              <div className="flex gap-2">
                <span className="text-[var(--gold-hover)]">•</span>
                <span>Répartition des fonds (frais, lot majeur, enveloppe d’aide)</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--gold-hover)]">•</span>
                <span>Méthode de tirage + publication des résultats</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--gold-hover)]">•</span>
                <span>Liste des tickets gagnants (références) et campagne du mois</span>
              </div>
              <div className="flex gap-2">
                <span className="text-[var(--gold-hover)]">•</span>
                <span>Rapports mensuels téléchargeables</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
