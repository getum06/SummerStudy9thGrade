interface TriangleDiagramProps {
  className?: string;
  label?: string;
}

export function TriangleDiagram({
  className = "h-32 w-40",
  label = "△ ABC",
}: TriangleDiagramProps) {
  return (
    <svg
      viewBox="0 0 160 140"
      className={className}
      role="img"
      aria-label={`Triangle diagram: ${label}`}
    >
      <polygon
        points="80,20 150,120 10,120"
        fill="none"
        stroke="#0284c7"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text x="80" y="12" textAnchor="middle" className="fill-slate-600 text-[11px]">
        A
      </text>
      <text x="155" y="128" textAnchor="start" className="fill-slate-600 text-[11px]">
        B
      </text>
      <text x="5" y="128" textAnchor="end" className="fill-slate-600 text-[11px]">
        C
      </text>
    </svg>
  );
}
