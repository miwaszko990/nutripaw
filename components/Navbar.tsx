"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Jak to działa", href: "#jak-to-dziala" },
  { label: "Linie produktowe", href: "#produkty" },
  { label: "Dlaczego NutriPaw", href: "#dlaczego" },
  { label: "Blog", href: "#blog" },
];

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
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <circle cx="13" cy="17" r="7" fill="#1D3D2F" />
            <circle cx="7" cy="9" r="3.5" fill="#1D3D2F" />
            <circle cx="19" cy="9" r="3.5" fill="#1D3D2F" />
            <circle cx="4" cy="15" r="2.5" fill="#1D3D2F" />
            <circle cx="22" cy="15" r="2.5" fill="#1D3D2F" />
          </svg>
          <span
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: 22,
              color: "var(--green-dark)",
              letterSpacing: "-0.5px",
            }}
          >
            nutripaw
          </span>
        </Link>

        <ul className="hidden lg:flex gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{ fontSize: 14, color: "var(--green-dark)", opacity: 0.65 }}
                className="no-underline hover:opacity-100 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#subskrypcja"
            style={{
              background: "var(--green-dark)",
              color: "var(--cream)",
              fontFamily: "'Sora', sans-serif",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 100,
              padding: "10px 16px",
              textDecoration: "none",
            }}
            className="hover:opacity-80 transition-opacity md:px-[22px] hidden sm:inline-flex"
          >
            <span className="hidden md:inline">Zacznij subskrypcję →</span>
            <span className="md:hidden">Subskrypcja →</span>
          </a>

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
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                style={{ fontSize: 15, color: "var(--green-dark)" }}
                className="block py-3 no-underline hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="sm:hidden pt-2">
            <a
              href="#subskrypcja"
              onClick={() => setOpen(false)}
              style={{
                background: "var(--green-dark)",
                color: "var(--cream)",
                fontFamily: "'Sora', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                borderRadius: 100,
                padding: "12px 20px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Zacznij subskrypcję →
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
