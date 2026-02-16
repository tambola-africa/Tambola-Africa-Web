export default function HistoiresPage() {
  const stories = [
    {
      title: "Reprendre pied après une période difficile",
      body:
        "Après une succession d’imprévus (perte d’emploi, dettes, charges familiales), je n’arrivais plus à tenir. L’aide reçue a permis de régler l’essentiel, de stabiliser la maison, et de relancer une petite activité. Ce n’est pas un miracle : c’est un coup de pouce au bon moment qui évite de s’effondrer.",
    },
    {
      title: "Relancer un projet pour nourrir la famille",
      body:
        "J’avais une petite activité, mais une maladie a tout stoppé. Quand je suis retournée travailler, je n’avais plus le minimum : stock, transport, et un peu de trésorerie. L’accompagnement a servi à redémarrer proprement. Aujourd’hui, je peux à nouveau contribuer aux dépenses et avancer avec dignité.",
    },
    {
      title: "Retrouver de la stabilité, sans perdre l’espoir",
      body:
        "Je faisais semblant d’aller bien, mais tout était devenu compliqué : loyer, soins, scolarité. Pouvoir souffler, même un peu, change tout. L’aide a été utilisée de manière ciblée, et surtout avec respect. Quand on se sent écouté, on reprend la force de se battre.",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.08),rgba(245,158,11,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.10),rgba(251,191,36,0.08))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
            Histoires
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            Histoires & bénéficiaires
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
            Derrière chaque dossier, il y a une histoire. Cette page met en avant des
            témoignages (avec accord) et l’impact réel de l’aide, avec une approche
            digne, humaine et respectueuse.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {stories.map((s, idx) => (
              <div
                key={s.title}
                className="rounded-3xl border border-black/10 border-t-4 bg-white p-6 dark:border-white/10 dark:bg-black"
                style={{
                  borderTopColor:
                    idx % 2 === 0 ? "var(--gold)" : "var(--accent)",
                }}
              >
                <div className="text-sm font-semibold text-black dark:text-white">
                  {s.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                  {s.body}
                </div>
                <div className="mt-4 rounded-2xl bg-[var(--surface)] p-4 text-xs text-black/60 dark:bg-white/5 dark:text-white/60">
                  Témoignage partagé avec accord. Certaines informations peuvent être
                  anonymisées.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
