interface AngleDiagramProps {
  className?: string;
}

export function AngleDiagram({ className = "h-32 w-40" }: AngleDiagramProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label="Angle diagram with two rays"
    >
      <line x1="20" y1="120" x2="140" y2="120" stroke="#94a3b8" strokeWidth="2" />
      <line x1="20" y1="120" x2="120" y2="30" stroke="#0284c7" strokeWidth="2.5" />
      <line x1="20" y1="120" x2="140" y2="50" stroke="#0284c7" strokeWidth="2.5" />
      <path
        d="M 55 120 A 35 35 0 0 0 72 95"
        fill="none"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="58" y="108" className="fill-amber-600 text-[10px]">
        θ
      </text>
    </svg>
  );
}
