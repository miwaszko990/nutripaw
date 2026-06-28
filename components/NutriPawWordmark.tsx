type NutriPawWordmarkProps = {
  variant?: "forest" | "cream";
  className?: string;
};

const colors = {
  forest: "#2e4636",
  cream: "rgba(245, 240, 232, 0.88)",
} as const;

export default function NutriPawWordmark({
  variant = "forest",
  className = "",
}: NutriPawWordmarkProps) {
  const color = colors[variant];

  return (
    <span
      className={`inline-flex items-baseline leading-none ${className}`}
      style={{
        fontFamily: "'Sora', sans-serif",
        fontWeight: 600,
        letterSpacing: "-0.02em",
        color,
      }}
      aria-label="NutriPaw"
    >
      <span>nutrip</span>
      <svg
        viewBox="12 12 76 90"
        fill="none"
        aria-hidden="true"
        className="inline-block"
        style={{
          width: "0.74em",
          height: "0.87em",
          margin: "0 0.05em",
          transform: "translateY(0.08em)",
        }}
      >
        <g fill={color}>
          <ellipse cx="22" cy="42" rx="8.5" ry="14" transform="rotate(-18 22 42)" />
          <ellipse cx="41" cy="31" rx="9" ry="16" transform="rotate(-6 41 31)" />
          <ellipse cx="59" cy="31" rx="9" ry="16" transform="rotate(6 59 31)" />
          <ellipse cx="78" cy="42" rx="8.5" ry="14" transform="rotate(18 78 42)" />
          <path d="M50 56 C34 56 23 67 23 79 C23 90 31 99 40 99 C45 99 47 95 50 93 C53 95 55 99 60 99 C69 99 77 90 77 79 C77 67 66 56 50 56 Z" />
        </g>
      </svg>
      <span>w</span>
    </span>
  );
}
