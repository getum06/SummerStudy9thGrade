import { cn } from "@/lib/utils";

/** Display value for lengths, angles, or unknowns (e.g. "5", "x", "?"). */
export type DiagramValue = string | number;

export interface DiagramSvgProps {
  className?: string;
  /** Accessible title / aria-label override */
  title?: string;
  viewBox?: string;
  children: React.ReactNode;
}

const STROKE = "#000000";
const FILL_TEXT = "#000000";
const STROKE_WIDTH = 2;
const STROKE_WIDTH_THIN = 1.5;

export const diagramStyles = {
  stroke: STROKE,
  fillText: FILL_TEXT,
  strokeWidth: STROKE_WIDTH,
  strokeWidthThin: STROKE_WIDTH_THIN,
} as const;

export function formatDiagramValue(value?: DiagramValue): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  return String(value);
}

export function DiagramSvg({
  className,
  title,
  viewBox = "0 0 200 180",
  children,
}: DiagramSvgProps) {
  return (
    <svg
      viewBox={viewBox}
      className={cn(
        "h-auto w-full max-w-full text-black print:text-black",
        className,
      )}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="#ffffff"
        className="print:fill-white"
      />
      {children}
    </svg>
  );
}

interface DiagramTextProps {
  x: number;
  y: number;
  children: React.ReactNode;
  anchor?: "start" | "middle" | "end";
  size?: number;
  bold?: boolean;
}

export function DiagramText({
  x,
  y,
  children,
  anchor = "middle",
  size = 12,
  bold = false,
}: DiagramTextProps) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fill={FILL_TEXT}
      fontSize={size}
      fontFamily="system-ui, sans-serif"
      fontWeight={bold ? 600 : 400}
      className="select-none print:fill-black"
    >
      {children}
    </text>
  );
}

interface DiagramLineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  thin?: boolean;
  dashed?: boolean;
}

export function DiagramLine({
  x1,
  y1,
  x2,
  y2,
  thin,
  dashed,
}: DiagramLineProps) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={STROKE}
      strokeWidth={thin ? STROKE_WIDTH_THIN : STROKE_WIDTH}
      strokeDasharray={dashed ? "6 4" : undefined}
      vectorEffect="non-scaling-stroke"
    />
  );
}

/** Small square marker for right angles */
export function RightAngleMarker({
  x,
  y,
  size = 12,
  orientation = "bottom-left",
}: {
  x: number;
  y: number;
  size?: number;
  orientation?: "bottom-left" | "bottom-right" | "top-left" | "top-right";
}) {
  const paths: Record<string, string> = {
    "bottom-left": `M ${x} ${y - size} L ${x} ${y} L ${x + size} ${y}`,
    "bottom-right": `M ${x - size} ${y} L ${x} ${y} L ${x} ${y - size}`,
    "top-left": `M ${x} ${y + size} L ${x} ${y} L ${x + size} ${y}`,
    "top-right": `M ${x - size} ${y} L ${x} ${y} L ${x} ${y + size}`,
  };

  return (
    <path
      d={paths[orientation]}
      fill="none"
      stroke={STROKE}
      strokeWidth={STROKE_WIDTH_THIN}
    />
  );
}

export function midPoint(
  ax: number,
  ay: number,
  bx: number,
  by: number,
): { x: number; y: number } {
  return { x: (ax + bx) / 2, y: (ay + by) / 2 };
}

export function offsetFromMid(
  ax: number,
  ay: number,
  bx: number,
  by: number,
  offsetX: number,
  offsetY: number,
): { x: number; y: number } {
  const m = midPoint(ax, ay, bx, by);
  return { x: m.x + offsetX, y: m.y + offsetY };
}
