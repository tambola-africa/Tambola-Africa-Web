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
    <div className="mx-auto w-full max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
        FAQ
      </h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-black/70 dark:text-white/70">
        Les réponses essentielles. Si tu ne trouves pas ta question, contacte-nous.
      </p>

      <div className="mt-10 grid gap-4">
        {items.map((it) => (
          <div
            key={it.q}
            className="rounded-3xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-black"
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
  );
}
