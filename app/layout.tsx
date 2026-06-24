import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NutriPaw — Karma gotowana dla psów",
  description: "Gotowana karma pełnoporcjowa dla psów w subskrypcji. Celowana zdrowotnie, FEDIAF 2025.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
