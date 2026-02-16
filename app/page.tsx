import { getPublicMetricsCurrent } from "@/lib/supabase/public-metrics";

export default async function Home() {
  const metrics = (await getPublicMetricsCurrent()) ?? {
    participants_count: 0,
    projects_helped_count: 0,
    amount_redistributed: 0,
    currency: "XAF",
  };

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.10),rgba(245,158,11,0.10))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.12),rgba(251,191,36,0.10))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
                Priorité humanitaire : communauté camerounaise (Cameroun & diaspora)
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex items-center rounded-full border border-[var(--gold)]/45 bg-[color-mix(in_srgb,var(--gold)_14%,white)] px-3 py-1 text-xs font-semibold text-black/90 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/85">
                  Participation : 2000 FCFA
                </div>
                <div className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-black/80 dark:border-white/10 dark:bg-black dark:text-white/80">
                  Ouvert à tous
                </div>
              </div>
              <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-white md:text-5xl md:leading-[1.05]">
                Une maison à gagner.
                <br />
                Pour 2000 FCFA.
              </h1>
              <p className="text-base leading-7 text-black/70 dark:text-white/70 md:text-lg">
                Une participation accessible, un tirage transparent, et des fonds
                réorientés vers des dossiers prioritaires (difficulté sociale ou projet
                à fort impact). L&apos;objectif : aider concrètement la communauté
                camerounaise à se relever, tout en restant ouvert à tous.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/participer"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--gold))] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-black/10 hover:brightness-[0.98] dark:shadow-black/30"
                >
                  Participer à la tambola
                </a>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black/70 dark:border-white/10 dark:bg-black dark:text-white/70">
                <div className="font-semibold text-black dark:text-white">
                  10 bénéficiaires également sélectionnés
                </div>
                <div className="mt-1">
                  En plus du grand gagnant, 10 personnes seront sélectionnées parmi
                  les participants, en fonction du dossier communiqué pendant la
                  participation (urgence, situation, parcours).
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 rounded-2xl border border-black/10 bg-[var(--surface)] p-4 text-center dark:border-white/10 dark:bg-white/5">
                <div>
                  <div className="text-2xl font-semibold text-black dark:text-white">
                    1
                  </div>
                  <div className="text-xs text-black/60 dark:text-white/60">
                    lot majeur
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-black dark:text-white">
                    10
                  </div>
                  <div className="text-xs text-black/60 dark:text-white/60">
                    bénéficiaires / campagne
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-black dark:text-white">
                    Mensuel
                  </div>
                  <div className="text-xs text-black/60 dark:text-white/60">
                    si le projet fonctionne
                  </div>
                </div>
              </div>
            </div>

          <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-white p-6 dark:border-white/10 dark:bg-black">
            <div className="space-y-5">
              <div className="text-sm font-semibold text-black/80 dark:text-white/80">
                Notre mission
              </div>
              <div className="rounded-2xl bg-[var(--surface)] p-5 text-black/80 dark:bg-white/5 dark:text-white/80">
                “Offrir une chance de gagner à tous, pour aider concrètement la
                communauté camerounaise à se relever, entreprendre et sortir de la
                précarité.”
              </div>
              <div className="grid gap-3 text-sm text-black/70 dark:text-white/70">
                <div className="rounded-2xl border border-black/10 bg-[var(--surface-2)] p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="font-semibold text-black dark:text-white">
                    Une tambola solidaire
                  </div>
                  <div className="mt-1">
                    Une maison à gagner, avec des règles claires et un tirage
                    transparent.
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[var(--surface-2)] p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="font-semibold text-black dark:text-white">
                    Une aide à 10 bénéficiaires
                  </div>
                  <div className="mt-1">
                    Sélection sur dossier : difficulté sociale ou projet jugé
                    prioritaire.
                  </div>
                </div>
                <div className="rounded-2xl border border-black/10 bg-[var(--surface-2)] p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="font-semibold text-black dark:text-white">
                    Une sélection humaine
                  </div>
                  <div className="mt-1">
                    Indépendante du tirage : même sans gagner, on peut être aidé.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 md:pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-white p-6 dark:border-white/10 dark:bg-black">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Pourquoi la communauté camerounaise ?
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
              Parce que nous connaissons ses réalités : chômage, précarité,
              difficultés de lancement de projets, et besoins urgents. Notre
              priorité est humanitaire, mais l’initiative reste légalement ouverte
              à tous.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-white p-6 dark:border-white/10 dark:bg-black">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Comment ça fonctionne
            </h2>
            <p className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
              Vous participez en achetant des tickets. Pendant la participation,
              vous pouvez décrire votre situation. Après paiement confirmé, un
              ticket unique vous est généré (QR + PDF).
            </p>
            <a
              className="mt-4 inline-flex text-sm font-semibold text-[var(--gold-hover)] hover:underline"
              href="/fonctionnement"
            >
              Voir le détail
            </a>
          </div>
          <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-white p-6 dark:border-white/10 dark:bg-black">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              Nos impacts (compteurs)
            </h2>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-[var(--surface)] p-4 dark:bg-white/5">
                <div className="text-xl font-semibold text-black dark:text-white">
                  {metrics.participants_count}
                </div>
                <div className="text-xs text-black/60 dark:text-white/60">
                  participants
                </div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] p-4 dark:bg-white/5">
                <div className="text-xl font-semibold text-black dark:text-white">
                  {metrics.projects_helped_count}
                </div>
                <div className="text-xs text-black/60 dark:text-white/60">
                  projets aidés
                </div>
              </div>
              <div className="rounded-2xl bg-[var(--surface)] p-4 dark:bg-white/5">
                <div className="text-xl font-semibold text-black dark:text-white">
                  {metrics.amount_redistributed}
                </div>
                <div className="text-xs text-black/60 dark:text-white/60">
                  redistribués ({metrics.currency})
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-black/60 dark:text-white/60">
              Ces chiffres viennent de Supabase. Si les variables d’environnement
              ne sont pas encore configurées, la page affiche des valeurs par
              défaut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
