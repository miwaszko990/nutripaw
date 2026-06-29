"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import NutriPawWordmark from "./NutriPawWordmark";
import StartSubscriptionButton from "./StartSubscriptionButton";

const navLinks = [
  { label: "Jak to działa", href: "/#jak-to-dziala" },
  { label: "Linie produktowe", href: "/#produkty" },
  { label: "Dlaczego NutriPaw", href: "/#dlaczego" },
  { label: "FAQ", href: "/faq" },
];

function NavLink({
  href,
  label,
  className,
  style,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}) {
  if (href === "/faq") {
    return (
      <Link href={href} className={className} style={style} onClick={onClick}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className} style={style} onClick={onClick}>
      {label}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        background: "var(--cream)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
      className="px-5 md:px-12 py-4 md:py-[18px]"
    >
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center no-underline shrink-0">
          <NutriPawWordmark className="text-[26px] md:text-[30px]" />
        </Link>

        <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                style={{ fontSize: 14, color: "var(--green-dark)", opacity: 0.65 }}
                className="no-underline hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <StartSubscriptionButton
            style={{
              background: "var(--green-dark)",
              color: "var(--cream)",
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 100,
              padding: "10px 16px",
              border: "none",
              cursor: "pointer",
            }}
            className="hover:opacity-80 transition-opacity md:px-[22px] hidden sm:inline-flex"
          >
            <span className="hidden md:inline">Zacznij subskrypcję →</span>
            <span className="md:hidden">Subskrypcja →</span>
          </StartSubscriptionButton>

          <button
            type="button"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2 rounded-lg border border-[rgba(29,61,47,0.15)] bg-transparent cursor-pointer"
          >
            <span
              className="block h-[2px] w-full bg-[#1D3D2F] transition-transform origin-center"
              style={{ transform: open ? "translateY(7px) rotate(45deg)" : undefined }}
            />
            <span
              className="block h-[2px] w-full bg-[#1D3D2F] transition-opacity"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[2px] w-full bg-[#1D3D2F] transition-transform origin-center"
              style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : undefined }}
            />
          </button>
        </div>
      </div>

      {open && (
        <ul className="lg:hidden list-none m-0 p-0 pt-4 pb-2 flex flex-col gap-1 border-t border-[rgba(29,61,47,0.08)] mt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <NavLink
                href={link.href}
                label={link.label}
                onClick={() => setOpen(false)}
                style={{ fontSize: 15, color: "var(--green-dark)" }}
                className="block py-3 no-underline hover:opacity-70 transition-opacity"
              />
            </li>
          ))}
          <li className="lg:hidden pt-2">
            <StartSubscriptionButton
              onClick={() => setOpen(false)}
              style={{
                background: "var(--green-dark)",
                color: "var(--cream)",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 100,
                padding: "12px 20px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Zacznij subskrypcję →
            </StartSubscriptionButton>
          </li>
        </ul>
      )}
    </nav>
  );
}
