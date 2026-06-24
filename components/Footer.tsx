"use client";
const links = ["O nas", "Składniki", "FAQ", "Kontakt", "Polityka prywatności"];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--green-dark)",
        padding: "40px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 24,
      }}
    >
      <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 18, color: "rgba(245,240,232,0.85)" }}>
        nutripaw
      </span>

      <ul style={{ display: "flex", gap: 24, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
        {links.map((link) => (
          <li key={link}>
            <a href="#" style={{ fontSize: 13, color: "rgba(245,240,232,0.38)", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.75)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,232,0.38)")}
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
