import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://oikos-heritage.com"
).replace(/\/$/, "");

const SITE_TITLE = "Oikos Heritage";
const SITE_DESCRIPTION =
  "Oikos Heritage façonne des intérieurs intemporels et respectueux de l’âme des lieux.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_TITLE}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    images: [
      {
        url: `${SITE_URL}/OIKOSBRUN.png`,
        width: 1200,
        height: 630,
        alt: "Oikos Heritage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/OIKOSBRUN.png`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_TITLE,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/OIKOSBRUN.png`,
  sameAs: ["https://www.instagram.com/oikos.heritage/"],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "lbernaz@oikos-heritage.com",
      telephone: "+33-6-20-30-06-19",
      contactType: "customer service",
      areaServed: "FR",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "12 rue fictive",
    addressLocality: "Paris",
    postalCode: "75000",
    addressCountry: "FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
