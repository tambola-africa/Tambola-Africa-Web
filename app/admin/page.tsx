export default function AdminPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Back-office admin (V1)
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Cet espace servira à gérer : campagnes mensuelles, ventes, dossiers, tickets
        et vérification QR (Option B). La V1 pose la structure UI. La connexion à
        Supabase et l’auth admin arriveront dans l’étape suivante.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Campagnes
          </div>
          <div className="mt-2 text-sm text-black/70 dark:text-white/70">
            Créer/ouvrir/fermer une campagne et définir le lot majeur.
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Dossiers & sélection
          </div>
          <div className="mt-2 text-sm text-black/70 dark:text-white/70">
            Lire les dossiers, qualifier l’urgence, sélectionner 10 bénéficiaires.
          </div>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Vérifier un ticket (QR)
          </div>
          <div className="mt-2 text-sm text-black/70 dark:text-white/70">
            Scanner le QR puis retrouver la fiche ticket dans Supabase.
          </div>
        </div>
      </div>
    </div>
  );
}
