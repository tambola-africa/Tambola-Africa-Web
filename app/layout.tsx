import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tambola solidaire — Maison à gagner, projets à financer",
  description:
    "Offrir une chance de gagner à tous, pour aider concrètement la communauté camerounaise à se relever, entreprendre et sortir de la précarité.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
          <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
              <a href="/" className="font-semibold tracking-tight">
                Tambola solidaire
              </a>
              <nav className="hidden items-center gap-5 text-sm text-black/80 dark:text-white/80 md:flex">
                <a className="hover:underline" href="/fonctionnement">
                  Fonctionnement
                </a>
                <a className="hover:underline" href="/transparence">
                  Transparence
                </a>
                <a className="hover:underline" href="/histoires">
                  Histoires
                </a>
                <a className="hover:underline" href="/faq">
                  FAQ
                </a>
                <a className="hover:underline" href="/contact">
                  Contact
                </a>
                <a className="hover:underline" href="/compte">
                  Compte
                </a>
              </nav>
              <div className="flex items-center gap-2">
                <a
                  href="/participer"
                  className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                >
                  Participer
                </a>
                <a
                  href="/deposer-dossier"
                  className="hidden rounded-full border border-black/15 px-4 py-2 text-sm font-semibold hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10 sm:inline-flex"
                >
                  Déposer un dossier
                </a>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-black/10 py-10 text-sm text-black/70 dark:border-white/10 dark:text-white/70">
            <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 md:grid-cols-3">
              <div className="space-y-2">
                <div className="font-semibold text-black dark:text-white">
                  Tambola solidaire
                </div>
                <div>
                  Maison à gagner. Projets à financer. Une initiative de solidarité
                  tournée en priorité vers la communauté camerounaise, tout en
                  restant ouverte à tous.
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-black dark:text-white">
                  Liens
                </div>
                <div className="grid gap-1">
                  <a className="hover:underline" href="/reglement">
                    Règlement & légalité
                  </a>
                  <a className="hover:underline" href="/fonctionnement">
                    Fonctionnement & transparence
                  </a>
                  <a className="hover:underline" href="/transparence">
                    Tableau de transparence
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-black dark:text-white">
                  Important
                </div>
                <div>
                  La participation n’est pas un jeu de hasard à visée “casino”.
                  C’est une collecte solidaire avec tirage, encadrée par un
                  règlement. Les modalités sont adaptées selon le pays.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
