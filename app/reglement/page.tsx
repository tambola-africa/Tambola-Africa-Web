export default function ReglementPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Règlement & légalité
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Cette section présente le cadre, les responsabilités et les règles. Le
        texte final sera adapté selon les exigences légales du pays d’organisation.
        Le site reste ouvert à tous, sans discrimination, avec une priorité
        humanitaire tournée vers la communauté camerounaise.
      </p>

      <div className="mt-10 grid gap-6">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Conditions générales (résumé)
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            - Période de participation et campagne mensuelle
            <br />
            - Prix du ticket et modalités de paiement (carte / Mobile Money)
            <br />
            - Ticket unique, preuve de participation
            <br />
            - Publication des résultats et méthode de tirage
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Sélection des bénéficiaires (sur dossier)
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            La sélection est indépendante du tirage : elle vise à soutenir des
            personnes en difficulté ou porteuses de projets. Les dossiers sont
            évalués de manière humaine et bienveillante.
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Responsabilités & protection des données
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Les données collectées servent à gérer la participation et l’étude des
            dossiers. La publication d’histoires ou de visuels n’est possible
            qu’avec accord explicite.
          </div>
        </div>
      </div>
    </div>
  );
}
