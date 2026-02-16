export default function FonctionnementPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.08),rgba(245,158,11,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.10),rgba(251,191,36,0.08))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
            Fonctionnement & transparence
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            Comment fonctionne la tambola solidaire
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
            L’objectif est simple : une participation accessible, un tirage transparent,
            et une redistribution concrète. La priorité humanitaire est tournée vers la
            communauté camerounaise, tout en restant légalement ouverte à tous.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,white)] text-sm font-semibold text-black dark:bg-white/10 dark:text-white">
                  1
                </div>
                <div className="text-sm font-semibold text-black dark:text-white">
                  Participer
                </div>
              </div>
              <div className="mt-3 text-sm leading-6 text-black/70 dark:text-white/70">
                Vous achetez des tickets. Lors de votre participation, vous pouvez
                décrire votre situation ou votre projet. Après paiement confirmé, un
                ticket unique est généré.
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,white)] text-sm font-semibold text-black dark:bg-white/10 dark:text-white">
                  2
                </div>
                <div className="text-sm font-semibold text-black dark:text-white">
                  Tirage transparent
                </div>
              </div>
              <div className="mt-3 text-sm leading-6 text-black/70 dark:text-white/70">
                Le tirage est publié avec des règles claires : période de vente,
                méthode, et résultats. Chaque ticket possède une référence unique.
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--gold)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--gold)_18%,white)] text-sm font-semibold text-black dark:bg-white/10 dark:text-white">
                  3
                </div>
                <div className="text-sm font-semibold text-black dark:text-white">
                  Sélection des bénéficiaires (sur dossier)
                </div>
              </div>
              <div className="mt-3 text-sm leading-6 text-black/70 dark:text-white/70">
                Indépendante du tirage : un participant peut être aidé même s’il ne
                gagne pas. Les dossiers sont étudiés avec bienveillance, sur des critères
                d’urgence et d’impact.
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 border-t-4 border-t-[var(--accent)] bg-[var(--surface)] p-6 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--accent)_16%,white)] text-sm font-semibold text-black dark:bg-white/10 dark:text-white">
                  4
                </div>
                <div className="text-sm font-semibold text-black dark:text-white">
                  Publication & traçabilité
                </div>
              </div>
              <div className="mt-3 text-sm leading-6 text-black/70 dark:text-white/70">
                Les résultats (tirage et aides) sont publiés. Un tableau de transparence
                récapitule les montants collectés, la redistribution, et les impacts.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
