export default function HistoiresPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        Histoires & bénéficiaires
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Derrière chaque dossier, il y a une histoire. Cette page mettra en avant
        des témoignages (avec accord) et l’impact réel de l’aide. L’objectif :
        garder une approche digne, humaine et respectueuse.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
          >
            <div className="text-sm font-semibold text-black dark:text-white">
              Témoignage (exemple)
            </div>
            <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
              Un récit concis : la situation, le projet, l’aide reçue, et ce que ça
              a changé. Les visuels (avant/après) ne seront publiés que si la
              personne l’autorise.
            </div>
            <div className="mt-4 rounded-2xl bg-zinc-50 p-4 text-xs text-black/60 dark:bg-white/5 dark:text-white/60">
              V1 : contenu de démonstration. V1.1 : données depuis Supabase.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
