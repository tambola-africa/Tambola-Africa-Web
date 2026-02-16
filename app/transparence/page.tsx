export default function TransparencePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Tableau de transparence
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Cette page est conçue pour afficher, campagne par campagne, les montants
        collectés, la répartition, et les résultats. Nous publions régulièrement
        ces informations afin de garantir une transparence maximale.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
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
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
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
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
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

      <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6 text-sm text-black/70 dark:border-white/10 dark:bg-black dark:text-white/70">
        <div className="font-semibold text-black dark:text-white">
          Ce que vous trouverez ici
        </div>
        <div className="mt-2 grid gap-2">
          <div>- Répartition des fonds (frais, lot majeur, enveloppe d’aide)</div>
          <div>- Méthode de tirage + publication des résultats</div>
          <div>- Liste des tickets gagnants (références) et campagne du mois</div>
          <div>- Rapports mensuels téléchargeables</div>
        </div>
      </div>
    </div>
  );
}
