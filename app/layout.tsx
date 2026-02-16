import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

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
          <SiteHeader />

          <main>{children}</main>

          <footer className="border-t border-black/10 py-12 text-sm text-black/70 dark:border-white/10 dark:text-white/70">
            <div className="mx-auto w-full max-w-6xl px-4">
              <div className="h-0.5 w-full bg-sky-600/35 dark:bg-sky-400/25" />
            </div>
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
