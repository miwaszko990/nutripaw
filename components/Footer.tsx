"use client";

import Link from "next/link";
import NutriPawWordmark from "./NutriPawWordmark";

const links = [
  { label: "O nas", href: "#" },
  { label: "Składniki", href: "/#skladniki" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "#" },
  { label: "Polityka prywatności", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--green-dark)] px-5 py-8 sm:px-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6 text-center md:text-left">
      <Link href="/" className="shrink-0 no-underline">
        <NutriPawWordmark variant="cream" className="text-[20px] sm:text-[22px]" />
      </Link>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                href={link.href}
                style={{ fontSize: 13, color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
                className="hover:text-[rgba(245,240,232,0.75)] transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                href={link.href}
                style={{ fontSize: 13, color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
                className="hover:text-[rgba(245,240,232,0.75)] transition-colors"
              >
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <span style={{ fontSize: 13, color: "rgba(245,240,232,0.25)" }}>© 2025 NutriPaw · Warszawa</span>
    </footer>
  );
}
