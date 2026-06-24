"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "var(--cream)",
        borderBottom: "1px solid rgba(29,61,47,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
      className="px-12 py-[18px] flex items-center justify-between"
    >
      <Link href="/" className="flex items-center gap-2 no-underline">
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

      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {[
          { label: "Jak to działa", href: "#jak-to-dziala" },
          { label: "Linie produktowe", href: "#produkty" },
          { label: "Dlaczego NutriPaw", href: "#dlaczego" },
          { label: "Blog", href: "#blog" },
        ].map((link) => (
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

      <a
        href="#subskrypcja"
        style={{
          background: "var(--green-dark)",
          color: "var(--cream)",
          fontFamily: "'Sora', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          borderRadius: 100,
          padding: "10px 22px",
          textDecoration: "none",
        }}
        className="hover:opacity-80 transition-opacity"
      >
        Zacznij subskrypcję →
      </a>
    </nav>
  );
}
