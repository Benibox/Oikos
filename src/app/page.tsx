"use client";

import { useEffect, useRef, useState } from "react";

const TEXTS = {
  fr: {
    bandeau: {
      mot: "patrimoine",
      texte:
        "Nous restaurons chaque lieu avec respect pour ses traces d’origine, afin de préserver l’âme des bâtisses et révéler un héritage contemporain.",
      video: "/videos/videobien.mp4",
    },
    keywords: ["patrimoine", "lieux de vie", "rentabilité"],
    philosophyTitle: "Philosophie",
    philosophyParagraphs: [
      "Préserver l’âme. Oikos Heritage est née d’une conviction simple : la modernité ne vaut que lorsqu’elle dialogue avec la mémoire. Chaque projet s’attache à révéler l’histoire intime des lieux.",
      "Habiter avec sens. Nous composons des intérieurs apaisants, baignés de lumière, qui honorent la matière. Les maisons deviennent des refuges vivants, pensés pour ceux qui les habitent et les transmettent.",
      "Investir dans la durée. Ancrée dans les territoires, notre équipe collabore avec des artisans locaux afin de créer une valeur durable. Nous harmonisons beauté, pérennité et rentabilité pour faire du patrimoine un capital vivant.",
    ],
    nav: {
      toContact: "Contact",
      toHome: "Accueil",
    },
    contact: {
      roleLabel: " – fondatrice",
    },
    privacy: {
      eyebrow: "Confidentialité",
      title: "Politique de confidentialité",
      intro:
        "Nous protégeons les informations confiées par nos clients et partenaires avec une attention particulière. Voici comment nous traitons et sécurisons les données personnelles.",
      sections: [
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
      ],
    },
    legal: {
      eyebrow: "Légal",
      title: "Mentions légales",
      intro:
        "Ces informations présentent les coordonnées de l’éditeur, de l’hébergeur ainsi que le cadre juridique applicable au site Oikos Heritage.",
      sections: [
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
      ],
    },
    footer: {
      privacy: "Politique de confidentialité",
      legal: "Mentions légales",
    },
  },
  en: {
    bandeau: {
      mot: "heritage",
      texte:
        "We restore every place with respect for its original traces, safeguarding each building’s spirit while revealing a contemporary legacy.",
      video: "/videos/videobien.mp4",
    },
    keywords: ["heritage", "living spaces", "long-term value"],
    philosophyTitle: "Philosophy",
    philosophyParagraphs: [
      "Preserving the soul. Oikos Heritage was born from one conviction: modernity only makes sense when it converses with memory. Each project carefully reveals the intimate story of the place.",
      "Living with meaning. We craft calm, light-filled interiors that honor materials. Homes become living refuges, imagined for those who inhabit and pass them on.",
      "Investing for the long run. Rooted in local regions, our team collaborates with artisans to build lasting value. We balance beauty, durability, and profitability so heritage remains a living asset.",
    ],
    nav: {
      toContact: "Contact",
      toHome: "Home",
    },
    contact: {
      roleLabel: " – founder",
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Privacy policy",
      intro:
        "We protect all information entrusted to us with utmost care. Here is how we handle and secure personal data.",
      sections: [
        {
          title: "Data collected",
          content: [
            "We only gather the information strictly needed to respond (name, email, phone number, and message content). No advertising tracking or automated profiling is implemented.",
          ],
        },
        {
          title: "Use and retention",
          content: [
            "Shared data is used solely to answer inquiries and follow up on ongoing projects. It is stored for the time strictly necessary to manage exchanges, then archived securely.",
          ],
        },
        {
          title: "Your rights",
          content: [
            "You may request access, rectification, or deletion of your personal information at any time, as well as restrict its processing. To exercise these rights, write to us at lbernaz@oikos-heritage.com.",
          ],
        },
        {
          title: "Security",
          content: [
            "We implement appropriate organizational and technical measures to preserve confidentiality and data integrity (restricted access, protected storage, periodic access reviews).",
          ],
        },
      ],
    },
    legal: {
      eyebrow: "Legal",
      title: "Legal notice",
      intro:
        "These details specify the publisher’s contact information, hosting provider, and regulatory framework for the Oikos Heritage website.",
      sections: [
        {
          title: "Site publisher",
          content: [
            "Oikos Heritage – Louise Bernaz",
            "Head office: 12 rue fictive, 75000 Paris, France",
            "Contact: lbernaz@oikos-heritage.com | +33 (0)6 20 30 06 19",
          ],
        },
        {
          title: "Editorial responsibility",
          content: [
            "The publication director is Louise Bernaz, founder. Visual and textual content is the exclusive property of Oikos Heritage; any reproduction requires prior authorization.",
          ],
        },
        {
          title: "Hosting",
          content: [
            "The site is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, United States.",
            "Contact: support@vercel.com",
          ],
        },
        {
          title: "Intellectual property",
          content: [
            "Logos, typefaces, photographs, and copy are protected by copyright. Unauthorized use may result in legal action in accordance with French IP law.",
          ],
        },
      ],
    },
    footer: {
      privacy: "Privacy policy",
      legal: "Legal notice",
    },
  },
} as const;

type LanguageKey = keyof typeof TEXTS;
type TextSection = { title: string; content: readonly string[] };
type TextContentCopy = typeof TEXTS["fr"]["privacy"];
type ContactCopy = typeof TEXTS["fr"]["contact"];

/* --- Bandeau sans images, avec accordéon CSS pur --- */
function Bandeau({
  mot,
  texte,
  video,
  keywords,
}: {
  mot: string;
  texte: string;
  video?: string;
  keywords: ReadonlyArray<string>;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [visibleKeywords, setVisibleKeywords] = useState<boolean[]>([]);

  useEffect(() => {
    setVisibleKeywords(keywords.map(() => false));
  }, [keywords]);

  useEffect(() => {
    const element = videoRef.current;
    if (!element) return;

    const tryPlay = () => {
      element.playbackRate = 0.6;
      element.play().catch(() => {
        /* some browsers still block autoplay even when muted */
      });
    };

    tryPlay();
    element.addEventListener("loadeddata", tryPlay);
    return () => element.removeEventListener("loadeddata", tryPlay);
  }, [keywords]);

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
      setVisibleKeywords(keywords.map(() => false));

      keywords.forEach((_, index) => {
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
      (keywords.length - 1) * KEYWORD_STAGGER +
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
            style={{ filter: "brightness(1.7) contrast(1.16)" }}
          />
          <div className="absolute inset-0 bg-neutral-900/6" aria-hidden="true" />
        </>
      )}
      <div className="relative">
        <div className="relative w-full min-h-[420px] md:min-h-[520px] px-6 md:px-12 py-10 bg-neutral-900/35 transition-colors overflow-hidden flex items-center justify-center">
          <div className="grid w-full grid-cols-3 items-end gap-4 font-heading text-white text-[0.55rem] md:text-xl tracking-[0.4em]">
            {keywords.map((motCle, index) => (
              <span
                key={motCle}
                className={[
                  "transition-all duration-[1600ms] ease-out uppercase pointer-events-none text-white/80",
                  visibleKeywords[index]
                    ? "opacity-100 translate-y-0 scale-100 blur-0"
                    : "opacity-0 translate-y-3 scale-95 blur-sm",
                  index === 0
                    ? "justify-self-start text-left translate-x-2 md:translate-x-10"
                    : index === 1
                      ? "justify-self-center text-center"
                      : "justify-self-end text-right -translate-x-2 md:-translate-x-10",
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
function ContactPage({ copy }: { copy: ContactCopy }) {
  return (
    <div className="min-h-screen bg-[#EEE5D8] flex flex-col justify-center items-center relative px-6 md:px-16 py-6 md:py-10">
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1.2fr_minmax(220px,_0.9fr)] gap-6 md:gap-10 md:items-start md:pl-10 lg:pl-20 md:-translate-y-4">
        <div className="relative w-full flex justify-start">
          <img
            src="/contact-illustration.png"
            alt="Oikos architecture"
            className="w-full h-auto max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl object-contain md:ml-[7rem] lg:ml-[9rem]"
          />
        </div>
        <div className="font-avant-garde text-[#3b1f1a] text-left space-y-3 tracking-[0.05em] md:self-start md:justify-self-start md:-translate-y-4 md:-translate-x-[7.5rem]">
          <p className="text-lg md:text-xl">
            <span className="font-semibold">Louise Bernaz</span>
            <span className="font-normal">{copy.roleLabel}</span>
          </p>
          <p className="text-lg md:text-xl font-normal">+33 6 20 30 06 19</p>
          <p className="text-lg md:text-xl font-normal lowercase">
            lbernaz@oikos-heritage.com
          </p>
        </div>
      </div>

      <img
        src="/logo.png"
        alt="Louise"
        className="absolute bottom-6 right-6 h-16 md:h-20 w-auto mix-blend-multiply"
      />
    </div>
  );
}

function TextContentPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: ReadonlyArray<TextSection>;
}) {
  return (
    <div className="min-h-screen bg-[#EEE5D8] flex flex-col justify-center px-6 md:px-12 py-16 text-neutral-900">
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

function PrivacyPage({ copy }: { copy: TextContentCopy }) {
  return (
    <TextContentPage
      eyebrow={copy.eyebrow}
      title={copy.title}
      intro={copy.intro}
      sections={copy.sections}
    />
  );
}

function LegalPage({ copy }: { copy: TextContentCopy }) {
  return (
    <TextContentPage
      eyebrow={copy.eyebrow}
      title={copy.title}
      intro={copy.intro}
      sections={copy.sections}
    />
  );
}

/* --- PAGE PRINCIPALE --- */
export default function Page() {
  const [page, setPage] = useState<"home" | "contact" | "privacy" | "legal">("home");
  const [lang, setLang] = useState<LanguageKey>("fr");
  const [showHeroLogo, setShowHeroLogo] = useState(false);
  const [showFooterMeta, setShowFooterMeta] = useState(false);
  const heroRevealTimeoutRef = useRef<number | null>(null);
  const heroRevealFrameRef = useRef<number | null>(null);
  const HERO_LOGO_DELAY_MS = 500;
  const HERO_LOGO_TRANSITION_MS = 4200;
  const t = TEXTS[lang];

  useEffect(() => {
    if (heroRevealTimeoutRef.current) {
      clearTimeout(heroRevealTimeoutRef.current);
      heroRevealTimeoutRef.current = null;
    }
    if (heroRevealFrameRef.current) {
      cancelAnimationFrame(heroRevealFrameRef.current);
      heroRevealFrameRef.current = null;
    }

    if (page !== "home") {
      setShowHeroLogo(false);
      return;
    }

    setShowHeroLogo(false);
    heroRevealTimeoutRef.current = window.setTimeout(() => {
      heroRevealFrameRef.current = requestAnimationFrame(() => setShowHeroLogo(true));
    }, HERO_LOGO_DELAY_MS);

    return () => {
      if (heroRevealTimeoutRef.current) {
        clearTimeout(heroRevealTimeoutRef.current);
        heroRevealTimeoutRef.current = null;
      }
      if (heroRevealFrameRef.current) {
        cancelAnimationFrame(heroRevealFrameRef.current);
        heroRevealFrameRef.current = null;
      }
    };
  }, [page]);

  useEffect(() => {
    if (page !== "home") {
      setShowFooterMeta(true);
      return;
    }

    setShowFooterMeta(false);
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowFooterMeta(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  return (
    <div className="min-h-screen bg-[#EEE5D8] text-neutral-900">
      {/* Header */}
      <header className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="opacity-0 pointer-events-none">.</div>
        <nav className="flex items-center gap-6 text-sm">
          <button
            onClick={() =>
              setPage((curr) => (curr === "home" ? "contact" : "home"))
            }
            className="transition-colors duration-200 hover:text-neutral-400"
          >
            {page === "home" ? t.nav.toContact : t.nav.toHome}
          </button>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang("fr")}
              className={[
                "transition-colors duration-200 hover:text-neutral-400 lang-button",
                lang === "fr"
                  ? "text-neutral-900 lang-button-active"
                  : "text-neutral-500",
              ].join(" ")}
              aria-label="FR"
            >
              FR
            </button>
            <span className="opacity-30">/</span>
            <button
              onClick={() => setLang("en")}
              className={[
                "transition-colors duration-200 hover:text-neutral-400 lang-button",
                lang === "en"
                  ? "text-neutral-900 lang-button-active"
                  : "text-neutral-500",
              ].join(" ")}
              aria-label="EN"
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      {page === "home" ? (
        <>
          {/* 1. Logo plein écran */}
          <section className="hero">
            <div className="hero-arc" aria-hidden="true" />
            <div className="hero-content">
              <div className="container mx-auto px-4 md:px-8 h-full grid place-items-center">
                <div
                  role="img"
                  aria-label="Louise"
                  className="h-44 md:h-64 w-full max-w-[520px] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    aspectRatio: "1394 / 786",
                    transitionDuration: `${HERO_LOGO_TRANSITION_MS}ms`,
                    transitionProperty: "transform, filter",
                    transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
                  backgroundColor: showHeroLogo
                    ? undefined
                    : "rgba(232,214,199,0.78)",
                  filter: "blur(0px)",
                  animation: `heroLogoColorReveal ${HERO_LOGO_TRANSITION_MS}ms forwards`,
                  transform: "scale(1)",
                    WebkitMaskImage: "url(/OIKOSBRUN.png)",
                    maskImage: "url(/OIKOSBRUN.png)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </div>
            </div>
          </section>

          {/* 2. Bandeau plein écran */}
          <section className="mt-16 md:mt-24 pb-16 md:pb-24">
            <Bandeau
              mot={t.bandeau.mot}
              texte={t.bandeau.texte}
              video={t.bandeau.video}
              keywords={t.keywords}
            />
          </section>

          {/* 3. Philosophie */}
          <section className="container mx-auto px-4 md:px-8 py-32 relative -mt-8 md:-mt-16">
            <div className="max-w-4xl mx-auto font-avant-garde-extra text-[#3a1f18]">
              <h2 className="font-avant-garde-extra text-3xl md:text-4xl font-light text-[#2b150f] mb-12 tracking-[0.08em] uppercase">
                {t.philosophyTitle}
              </h2>
              <div className="space-y-8">
                {t.philosophyParagraphs.map((paragraph) => (
                  <article
                    key={paragraph}
                    className="font-avant-garde-extra leading-relaxed text-base md:text-xl text-[#140906]"
                    style={{ textAlign: "justify", textJustify: "inter-word" }}
                  >
                    {paragraph}
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : page === "contact" ? (
        <ContactPage copy={t.contact} />
      ) : page === "privacy" ? (
        <PrivacyPage copy={t.privacy} />
      ) : (
        <LegalPage copy={t.legal} />
      )}

      {page === "home" && (
        <>
          <footer
            className={[
              "fixed bottom-6 left-6 flex flex-col items-start gap-2 text-[0.45rem] md:text-[0.55rem] font-heading-alt uppercase tracking-[0.4em] text-neutral-600 transition-all duration-700 ease-out",
              showFooterMeta
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-3 pointer-events-none",
            ].join(" ")}
          >
            <button
              className="transition-colors duration-200 hover:text-neutral-400 text-left"
              onClick={() => setPage("privacy")}
            >
              {t.footer.privacy}
            </button>
            <button
              className="transition-colors duration-200 hover:text-neutral-400 text-left"
              onClick={() => setPage("legal")}
            >
              {t.footer.legal}
            </button>
          </footer>
          <img
            src="/OIKOSBRUN.png"
            alt="Oikos Heritage"
            className={[
              "fixed bottom-6 right-6 h-14 md:h-16 w-auto pointer-events-none mix-blend-multiply z-10 transition-all duration-700 ease-out",
              showFooterMeta ? "opacity-80 translate-y-0" : "opacity-0 translate-y-3",
            ].join(" ")}
            aria-hidden="true"
          />
        </>
      )}
    </div>
  );
}
