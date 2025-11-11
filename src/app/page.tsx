"use client";

import { useEffect, useRef, useState } from "react";

/* --- Données du bandeau principal --- */
const BANDEAU_PRINCIPAL = {
  mot: "patrimoine",
  texte:
    "Nous restaurons chaque lieu avec respect pour ses traces d’origine, afin de préserver l’âme des bâtisses et révéler un héritage contemporain.",
  video: "/videos/videobien.mp4",
};

const BANDEAU_KEYWORDS = ["patrimoine", "lieux de vie", "rentabilité"];

const PHILOSOPHY_PARAGRAPHS = [
  "Préserver l’âme. Oikos Heritage est née d’une conviction simple : la modernité ne vaut que lorsqu’elle dialogue avec la mémoire. Chaque projet s’attache à révéler l’histoire intime des lieux.",
  "Habiter avec sens. Nous composons des intérieurs apaisants, baignés de lumière, qui honorent la matière. Les maisons deviennent des refuges vivants, pensés pour ceux qui les habitent et les transmettent.",
  "Investir dans la durée. Ancrée dans les territoires, notre équipe collabore avec des artisans locaux afin de créer une valeur durable. Nous harmonisons beauté, pérennité et rentabilité pour faire du patrimoine un capital vivant.",
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
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visibleKeywords, setVisibleKeywords] = useState<boolean[]>(
    () => BANDEAU_KEYWORDS.map(() => false)
  );

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const tryPlay = () => {
      element.playbackRate = 0.75;
      element.play().catch(() => {
        /* some browsers still block autoplay even when muted */
      });
    };

    tryPlay();
    element.addEventListener("loadeddata", tryPlay);
    return () => element.removeEventListener("loadeddata", tryPlay);
  }, []);

  useEffect(() => {
    const KEYWORD_BASE_DELAY = 1000;
    const KEYWORD_VISIBLE_DURATION = 2600;
    const KEYWORD_STAGGER = 2800;
    const LOOP_PAUSE = 1600;

    let timers: ReturnType<typeof setTimeout>[] = [];
    let loop: ReturnType<typeof setInterval> | null = null;

    const scheduleVisibility = (index: number, visible: boolean) => {
      setVisibleKeywords((prev) => {
        if (prev[index] === visible) return prev;
        const next = [...prev];
        next[index] = visible;
        return next;
      });
    };

    const startSequence = () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers = [];
      setVisibleKeywords(BANDEAU_KEYWORDS.map(() => false));

      BANDEAU_KEYWORDS.forEach((_, index) => {
        const appearAt = KEYWORD_BASE_DELAY + index * KEYWORD_STAGGER;
        const disappearAt = appearAt + KEYWORD_VISIBLE_DURATION;

        timers.push(
          setTimeout(() => scheduleVisibility(index, true), appearAt)
        );
        timers.push(
          setTimeout(() => scheduleVisibility(index, false), disappearAt)
        );
      });
    };

    startSequence();

    const totalDuration =
      KEYWORD_BASE_DELAY +
      (BANDEAU_KEYWORDS.length - 1) * KEYWORD_STAGGER +
      KEYWORD_VISIBLE_DURATION +
      LOOP_PAUSE;

    loop = setInterval(startSequence, totalDuration);

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      if (loop) clearInterval(loop);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-neutral-200 min-h-[420px] md:min-h-[520px]">
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
          <div className="absolute inset-0 bg-neutral-900/15" aria-hidden="true" />
        </>
      )}
      <div className="relative">
        <div className="relative w-full min-h-[420px] md:min-h-[520px] px-6 md:px-12 py-10 bg-neutral-900/35 hover:bg-neutral-900/45 transition-colors overflow-hidden flex items-center justify-center">
          <div className="grid w-full grid-cols-3 items-end gap-4 font-heading text-white text-[0.55rem] md:text-xl tracking-[0.4em]">
            {BANDEAU_KEYWORDS.map((motCle, index) => (
              <span
                key={motCle}
                className={[
                  "transition-all duration-[1600ms] ease-out uppercase pointer-events-none text-white/80",
                  visibleKeywords[index]
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-3 scale-95 blur-sm",
                  index === 0
                    ? "justify-self-start text-left"
                    : index === 1
                      ? "justify-self-center text-center"
                      : "justify-self-end text-right",
                ].join(" ")}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {motCle}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

/* --- Pages statiques --- */
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
        src="/Arch%20DEF%20OIKOS.png"
        alt="Oikos architecture"
        className="absolute bottom-8 left-8 w-44 h-32 object-contain"
      />
      <img
        src="/logo.png"
        alt="Louise"
        className="absolute bottom-6 right-6 h-16 md:h-20 w-auto mix-blend-multiply"
      />
    </div>
  );
}

type TextSection = { title: string; content: string[] };

function TextContentPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: TextSection[];
}) {
  return (
    <div className="min-h-screen bg-[#F2EDE6] flex flex-col justify-center px-6 md:px-12 py-16 text-neutral-900">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-3 text-center">
          <p className="font-heading-alt text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-500">
            {eyebrow}
          </p>
          <h1 className="font-heading text-2xl md:text-4xl">{title}</h1>
          <p className="text-base md:text-lg leading-relaxed text-neutral-700">{intro}</p>
        </div>
        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-3 bg-white/70 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-heading text-lg md:text-xl text-neutral-800">{section.title}</h2>
              {section.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed text-sm md:text-base text-neutral-700">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrivacyPage() {
  const sections: TextSection[] = [
    {
      title: "Données collectées",
      content: [
        "Nous ne collectons que les informations strictement nécessaires à la prise de contact (nom, adresse e-mail, numéro de téléphone, contenu du message). Aucun suivi publicitaire ni profilage automatisé n’est mis en place.",
      ],
    },
    {
      title: "Utilisation et conservation",
      content: [
        "Les données partagées servent uniquement à répondre aux sollicitations et à assurer le suivi des dossiers en cours. Elles sont conservées pour la durée strictement nécessaire aux échanges commerciaux, puis archivées de manière sécurisée.",
      ],
    },
    {
      title: "Vos droits",
      content: [
        "Vous pouvez à tout moment demander l’accès, la rectification ou la suppression de vos informations personnelles, ainsi que limiter leur traitement. Pour exercer ces droits, écrivez-nous à l’adresse : lbernaz@oikos-heritage.com.",
      ],
    },
    {
      title: "Sécurité",
      content: [
        "Nous mettons en place des mesures organisationnelles et techniques proportionnées pour préserver la confidentialité et l’intégrité des données (accès restreint, stockage protégé, revue régulière des accès).",
      ],
    },
  ];

  return (
    <TextContentPage
      eyebrow="Confidentialité"
      title="Politique de confidentialité"
      intro="Nous protégeons les informations confiées par nos clients et partenaires avec une attention particulière. Voici comment nous traitons et sécurisons les données personnelles."
      sections={sections}
    />
  );
}

function LegalPage() {
  const sections: TextSection[] = [
    {
      title: "Éditeur du site",
      content: [
        "Oikos Heritage – Louise Bernaz",
        "Siège social : 12 rue fictive, 75000 Paris, France",
        "Contact : lbernaz@oikos-heritage.com | +33 (0)6 20 30 06 19",
      ],
    },
    {
      title: "Responsabilité éditoriale",
      content: [
        "La directrice de la publication est Louise Bernaz, en sa qualité de fondatrice. Les contenus visuels et textuels sont la propriété exclusive d’Oikos Heritage, toute reproduction est soumise à autorisation préalable.",
      ],
    },
    {
      title: "Hébergement",
      content: [
        "Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.",
        "Contact : support@vercel.com",
      ],
    },
    {
      title: "Propriété intellectuelle",
      content: [
        "Les logos, typographies, photographies et contenus sont protégés par le droit d’auteur. Toute utilisation non autorisée pourra faire l’objet de poursuites conformément aux articles L.335-2 et suivants du Code de la propriété intellectuelle.",
      ],
    },
  ];

  return (
    <TextContentPage
      eyebrow="Légal"
      title="Mentions légales"
      intro="Ces informations présentent les coordonnées de l’éditeur, de l’hébergeur ainsi que le cadre juridique applicable au site Oikos Heritage."
      sections={sections}
    />
  );
}

/* --- PAGE PRINCIPALE --- */
export default function Page() {
  const [page, setPage] = useState<"home" | "contact" | "privacy" | "legal">("home");
  const [showHeroLogo, setShowHeroLogo] = useState(false);
  const HERO_LOGO_DELAY_MS = 3000;
  const HERO_LOGO_TRANSITION_MS = 3800;

  useEffect(() => {
    if (page !== "home") {
      setShowHeroLogo(false);
      return;
    }

    setShowHeroLogo(false);
    const timer = setTimeout(() => setShowHeroLogo(true), HERO_LOGO_DELAY_MS);
    return () => clearTimeout(timer);
  }, [page]);

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
              className={[
                "h-44 md:h-64 w-auto mix-blend-multiply -translate-y-10 transition-all ease-[cubic-bezier(0.22,1,0.36,1)]",
                showHeroLogo ? "opacity-100 scale-100" : "opacity-0 scale-90",
              ].join(" ")}
              style={{
                transitionDuration: `${HERO_LOGO_TRANSITION_MS}ms`,
                transitionProperty: "opacity, transform",
              }}
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

          {/* 2. Bandeau plein écran */}
          <section className="mt-16 md:mt-24 pb-16 md:pb-24">
            <Bandeau
              mot={BANDEAU_PRINCIPAL.mot}
              texte={BANDEAU_PRINCIPAL.texte}
              video={BANDEAU_PRINCIPAL.video}
            />
          </section>

          {/* 3. Philosophie */}
          <section className="container mx-auto px-4 md:px-8 py-32 relative">
            <div className="max-w-4xl mx-auto font-avant-garde text-neutral-800">
              <h2 className="font-heading text-2xl md:text-3xl text-neutral-800 mb-10">
                Philosophie
              </h2>
              <div className="space-y-8">
                {PHILOSOPHY_PARAGRAPHS.map((paragraph) => (
                  <article
                    key={paragraph}
                    className="leading-relaxed text-base md:text-xl border-l border-neutral-800/30 pl-6"
                  >
                    {paragraph}
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : page === "contact" ? (
        <ContactPage />
      ) : page === "privacy" ? (
        <PrivacyPage />
      ) : (
        <LegalPage />
      )}

      {page === "home" && (
        <>
          <footer className="fixed bottom-6 left-6 flex flex-col items-start gap-2 text-[0.45rem] md:text-[0.55rem] font-heading-alt uppercase tracking-[0.4em] text-neutral-600">
            <button
              className="hover:opacity-60 transition-opacity text-left"
              onClick={() => setPage("privacy")}
            >
              Politique de confidentialité
            </button>
            <button
              className="hover:opacity-60 transition-opacity text-left"
              onClick={() => setPage("legal")}
            >
              Mentions légales
            </button>
          </footer>
          <img
            src="/OIKOSBRUN.png"
            alt="Oikos Heritage"
            className="fixed bottom-6 right-6 h-14 md:h-16 w-auto opacity-80 pointer-events-none mix-blend-multiply z-10"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
