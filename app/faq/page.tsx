export default function FaqPage() {
  const items: { q: string; a: string }[] = [
    {
      q: "Dois-je créer un compte pour participer ?",
      a: "Non. La participation ne nécessite pas de compte. Votre ticket (PDF) est votre preuve.",
    },
    {
      q: "Puis-je être aidé même si je ne gagne pas la maison ?",
      a: "Oui. La sélection des bénéficiaires est indépendante du tirage : elle se fait sur dossier.",
    },
    {
      q: "Pourquoi la priorité est-elle camerounaise ?",
      a: "La mission est humanitaire : soutenir en priorité la communauté camerounaise au Cameroun et dans la diaspora, tout en restant ouverte à tous.",
    },
    {
      q: "Comment la transparence est-elle assurée ?",
      a: "Un tableau public et des publications par campagne détaillent la méthode de tirage, les montants et la redistribution.",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-black">
      <section className="bg-[linear-gradient(135deg,rgba(22,163,74,0.08),rgba(245,158,11,0.08))] dark:bg-[linear-gradient(135deg,rgba(34,197,94,0.10),rgba(251,191,36,0.08))]">
        <div className="mx-auto w-full max-w-6xl px-4 py-10">
          <div className="inline-flex rounded-full border border-[var(--gold)]/40 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-black/80 dark:border-[var(--gold)]/30 dark:bg-white/5 dark:text-white/80">
            Questions fréquentes
          </div>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
            FAQ
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
            Les réponses essentielles. Si tu ne trouves pas ta question, contacte-nous.
          </p>

          <div className="mt-10 grid gap-4">
            {items.map((it, idx) => (
              <div
                key={it.q}
                className="rounded-3xl border border-black/10 border-t-4 bg-white p-6 dark:border-white/10 dark:bg-black"
                style={{
                  borderTopColor:
                    idx % 2 === 0 ? "var(--accent)" : "var(--gold)",
                }}
              >
                <div className="text-sm font-semibold text-black dark:text-white">
                  {it.q}
                </div>
                <div className="mt-2 text-sm leading-6 text-black/70 dark:text-white/70">
                  {it.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
