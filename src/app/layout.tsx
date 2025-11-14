import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oikos Heritage",
  description:
    "Oikos Heritage façonne des intérieurs intemporels et respectueux de l’âme des lieux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
