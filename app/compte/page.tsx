export default function ComptePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Compte utilisateur
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        La V1 fonctionne sans connexion (pas de login) pour simplifier la
        participation. Cette page est prévue pour une V2 : historique de
        participation, suivi de dossier, reçus, et notifications.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            Sans compte (V1)
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Votre ticket PDF est votre preuve. Si vous l’avez perdu, vous pourrez
            le retrouver quand Supabase sera connecté (téléphone + vérification).
          </div>
          <a className="mt-4 inline-flex text-sm font-semibold hover:underline" href="/retrouver-ticket">
            Retrouver mon ticket
          </a>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black">
          <div className="text-sm font-semibold text-black dark:text-white">
            À venir (V2)
          </div>
          <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
            Connexion sécurisée, historique des tickets, suivi des campagnes, et
            messages de transparence.
          </div>
        </div>
      </div>
    </div>
  );
}
