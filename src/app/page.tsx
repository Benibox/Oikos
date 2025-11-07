"use client";

import { useEffect, useRef, useState } from "react";

/* --- Données des bandeaux --- */
const TEXTES_BANDEAUX = [
  {
    mot: "patrimoine",
    texte:
      "Nous restaurons chaque lieu avec respect pour ses traces d’origine, afin de préserver l’âme des bâtisses et révéler un héritage contemporain.",
    video: "/videos/eau.mp4",
  },
  {
    mot: "lieux de vie",
    texte:
      "Nous imaginons des espaces chaleureux et lumineux, pensés pour le quotidien, où chaque détail invite au partage et au confort.",
    video: "/videos/bois.mp4",
  },
  {
    mot: "rentabilité",
    texte:
      "Investir dans le patrimoine devient un levier durable : nous alignons esthétique, qualité et valeur à long terme pour conjuguer plaisir et performance.",
    video: "/videos/feu.mp4",
  },
];

/* --- Bandeau sans images, avec accordéon CSS pur --- */
function Bandeau({
  mot,
  texte,
  video,
}: {
  mot: string;
  texte: string;
  video?: string;
}) {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const tryPlay = () => {
      element.play().catch(() => {
        /* some browsers still block autoplay even when muted */
      });
    };

    tryPlay();
    element.addEventListener("loadeddata", tryPlay);
    return () => element.removeEventListener("loadeddata", tryPlay);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-sm bg-neutral-200">
      {video && (
        <>
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          <div className="absolute inset-0 bg-neutral-900/30" aria-hidden="true" />
        </>
      )}
      <div className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full text-left h-24 md:h-36 px-6 bg-neutral-900/35 hover:bg-neutral-900/45 transition-colors flex items-center"
        >
          <span className="font-heading text-white text-2xl md:text-4xl">
            {mot}
          </span>
        </button>

        <div
          className={[
            "overflow-hidden bg-white/90 text-neutral-800 transition-[max-height] duration-500 ease-out",
            open ? "max-h-[360px]" : "max-h-0",
          ].join(" ")}
        >
          <div
            className={[
              "px-6 md:px-8 py-6 md:py-8 transition-all duration-500 ease-out",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
          >
            <p className="leading-relaxed text-base md:text-lg">{texte}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Page Contact --- */
function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F2EDE6] flex flex-col justify-center items-center text-center relative">
      <div className="max-w-md text-neutral-900">
        <p className="font-heading-alt text-xl md:text-2xl mb-2">
          Louise BERNAZ - Founder
        </p>
        <p className="font-heading-alt text-xl md:text-2xl mb-2">
          lbernaz@oikos-heritage.com
        </p>
        <p className="font-heading-alt text-xl md:text-2xl mb-8">
          +33.06.20.30.06.19
        </p>
      </div>

      <img
        src="/bjr.png"
        alt="Illustration"
        className="absolute bottom-8 left-8 w-40 h-32 object-cover rounded-md"
      />
      <img
        src="/logo.png"
        alt="Louise"
        className="absolute bottom-6 right-6 h-16 md:h-20 w-auto mix-blend-multiply"
      />
    </div>
  );
}

/* --- PAGE PRINCIPALE --- */
export default function Page() {
  const [page, setPage] = useState<"home" | "contact">("home");

  return (
    <div className="min-h-screen bg-[#F2EDE6] text-neutral-900">
      {/* Header */}
      <header className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="opacity-0 pointer-events-none">.</div>
        <nav className="flex items-center gap-6 text-sm">
          <button
            onClick={() =>
              setPage((curr) => (curr === "home" ? "contact" : "home"))
            }
            className="underline underline-offset-4 hover:opacity-70"
          >
            {page === "home" ? "Contact" : "Accueil"}
          </button>
          <div className="flex items-center gap-3">
            <button className="hover:opacity-70" aria-label="FR">
              FR
            </button>
            <span className="opacity-30">/</span>
            <button className="hover:opacity-70" aria-label="EN">
              EN
            </button>
          </div>
        </nav>
      </header>

      {page === "home" ? (
        <>
          {/* 1. Logo plein écran */}
          <section className="container mx-auto px-4 md:px-8 h-screen grid place-items-center relative">
            <img
              src="/logo.png"
              alt="Louise"
              className="h-44 md:h-64 w-auto mix-blend-multiply -translate-y-10"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-700/70 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-6 w-6 animate-bounce"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m0 0-5-5m5 5 5-5"
                />
              </svg>
            </div>
          </section>

          {/* 2. Trois bandeaux */}
          <section className="container mx-auto px-4 md:px-8 mt-16 md:mt-24 pb-16 md:pb-24 space-y-6 md:space-y-8">
            {TEXTES_BANDEAUX.map((b, i) => (
              <Bandeau key={i} mot={b.mot} texte={b.texte} video={b.video} />
            ))}
          </section>

          {/* 3. Philosophie */}
          <section className="container mx-auto px-4 md:px-8 py-32">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-heading text-2xl md:text-3xl mb-12 text-neutral-800">
                Philosophie
              </h2>
              <div className="grid gap-10 md:grid-cols-2 md:gap-16 text-neutral-800">
                <article className="space-y-4">
                  <h3 className="font-heading-alt text-sm tracking-[0.4em] uppercase text-neutral-600">
                    Préserver l’âme
                  </h3>
                  <p className="leading-relaxed text-base md:text-lg">
                    Oikos Heritage est née d’une conviction simple : la modernité
                    ne vaut que lorsqu’elle dialogue avec la mémoire. Chaque
                    projet s’attache à révéler l’histoire intime des lieux.
                  </p>
                </article>
                <article className="space-y-4">
                  <h3 className="font-heading-alt text-sm tracking-[0.4em] uppercase text-neutral-600">
                    Habiter avec sens
                  </h3>
                  <p className="leading-relaxed text-base md:text-lg">
                    Nous composons des intérieurs apaisants, baignés de lumière,
                    qui honorent la matière. Les maisons deviennent des refuges
                    vivants, pensés pour ceux qui les habitent et les transmettent.
                  </p>
                </article>
                <article className="space-y-4 md:col-span-2">
                  <h3 className="font-heading-alt text-sm tracking-[0.4em] uppercase text-neutral-600">
                    Investir dans la durée
                  </h3>
                  <p className="leading-relaxed text-base md:text-lg">
                    Ancrée dans les territoires, notre équipe collabore avec des
                    artisans locaux afin de créer une valeur durable. Nous
                    harmonisons beauté, pérennité et rentabilité pour faire du
                    patrimoine un capital vivant.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </>
      ) : (
        <ContactPage />
      )}

      {page === "home" && (
        <footer className="container mx-auto px-4 md:px-8 py-12 border-top border-neutral-300/70">
          <div className="flex flex-col items-start gap-2 text-xs md:text-sm font-heading-alt uppercase tracking-wide">
            <button className="hover:opacity-70 transition-opacity">
              Politique de confidentialité
            </button>
            <button className="hover:opacity-70 transition-opacity">
              Mentions légales
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
