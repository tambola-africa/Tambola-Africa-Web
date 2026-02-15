export default function FonctionnementPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Fonctionnement & transparence
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        L’objectif est simple : une participation accessible, un tirage transparent,
        et une redistribution concrète. La priorité humanitaire est tournée vers la
        communauté camerounaise, tout en restant légalement ouverte à tous.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            1) Participer
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Vous achetez des tickets. Lors de votre participation, vous pouvez
            décrire votre situation ou votre projet. Après paiement confirmé, un
            ticket unique est généré.
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            2) Tirage transparent
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Le tirage est publié avec des règles claires : période de vente,
            méthode, et résultats. Chaque ticket possède une référence unique.
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            3) Sélection des bénéficiaires (sur dossier)
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Indépendante du tirage : un participant peut être aidé même s’il ne
            gagne pas. Les dossiers sont étudiés avec bienveillance, sur des critères
            d’urgence et d’impact.
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            4) Publication & traçabilité
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Les résultats (tirage et aides) sont publiés. Un tableau de transparence
            récapitule les montants collectés, la redistribution, et les impacts.
          </div>
        </div>
      </div>
    </div>
  );
}
