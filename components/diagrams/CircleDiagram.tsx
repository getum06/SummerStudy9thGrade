interface CircleDiagramProps {
  className?: string;
}

export function CircleDiagram({ className = "h-32 w-40" }: CircleDiagramProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label="Circle diagram with radius"
    >
      <circle
        cx="80"
        cy="70"
        r="50"
        fill="none"
        stroke="#0284c7"
        strokeWidth="2.5"
      />
      <line x1="80" y1="70" x2="130" y2="70" stroke="#f59e0b" strokeWidth="2" />
      <circle cx="80" cy="70" r="3" fill="#0284c7" />
      <text x="100" y="62" className="fill-amber-700 text-[10px]">
        r
      </text>
      <text x="80" y="18" textAnchor="middle" className="fill-slate-600 text-[11px]">
        O
      </text>
    </svg>
  );
}
