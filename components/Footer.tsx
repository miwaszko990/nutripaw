"use client";

const links = ["O nas", "Składniki", "FAQ", "Kontakt", "Polityka prywatności"];

export default function Footer() {
  return (
    <footer className="bg-[var(--green-dark)] px-5 py-8 sm:px-8 md:px-12 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-6 text-center md:text-left">
      <span
        style={{
          fontFamily: "'Sora', sans-serif",
          fontWeight: 600,
          fontSize: 18,
          color: "rgba(245,240,232,0.85)",
        }}
      >
        nutripaw
      </span>

      <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 list-none m-0 p-0">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              style={{ fontSize: 13, color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
              className="hover:text-[rgba(245,240,232,0.75)] transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <span style={{ fontSize: 13, color: "rgba(245,240,232,0.25)" }}>© 2025 NutriPaw · Warszawa</span>
    </footer>
  );
}
