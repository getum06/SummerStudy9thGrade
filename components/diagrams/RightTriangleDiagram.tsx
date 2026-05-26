import {
  DiagramSvg,
  DiagramText,
  formatDiagramValue,
  offsetFromMid,
  RightAngleMarker,
  type DiagramValue,
} from "./diagram-shared";
import type { AngleLabels, SideLabels, VertexLabels } from "./types";

/**
 * Right triangle with a right-angle square marker.
 *
 * @example
 * ```tsx
 * <RightTriangleDiagram
 *   vertexLabels={{ A: "A", B: "B", C: "C" }}
 *   sideLabels={{ AB: "c", BC: "a = 6", CA: "b = ?" }}
 *   rightAngleAt="C"
 * />
 * ```
 */
export interface RightTriangleDiagramProps {
  className?: string;
  title?: string;
  vertexLabels?: VertexLabels;
  sideLabels?: SideLabels;
  angleLabels?: AngleLabels;
  rightAngleAt?: "A" | "B" | "C";
}

const A = { x: 100, y: 28 };
const B = { x: 172, y: 152 };
const C = { x: 36, y: 152 };

function labelOr(value: DiagramValue | undefined, fallback: string): string {
  return formatDiagramValue(value) ?? fallback;
}

function SideLabel({
  ax,
  ay,
  bx,
  by,
  label,
  ox,
  oy,
}: {
  ax: number;
  ay: number;
  bx: number;
  by: number;
  label?: DiagramValue;
  ox: number;
  oy: number;
}) {
  const text = formatDiagramValue(label);
  if (!text) {
    return null;
  }
  const pos = offsetFromMid(ax, ay, bx, by, ox, oy);
  return (
    <DiagramText x={pos.x} y={pos.y} size={11}>
      {text}
    </DiagramText>
  );
}

export function RightTriangleDiagram({
  className,
  title = "Right triangle diagram",
  vertexLabels = {},
  sideLabels = {},
  angleLabels = {},
  rightAngleAt = "C",
}: RightTriangleDiagramProps) {
  const rightCorner =
    rightAngleAt === "A" ? A : rightAngleAt === "B" ? B : C;

  const markerOrientation =
    rightAngleAt === "A"
      ? "top-left"
      : rightAngleAt === "B"
        ? "bottom-right"
        : "bottom-left";

  return (
    <DiagramSvg className={className} title={title} viewBox="0 0 200 180">
      <polygon
        points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />

      <RightAngleMarker
        x={rightCorner.x}
        y={rightCorner.y}
        orientation={markerOrientation}
      />

      <SideLabel
        ax={A.x}
        ay={A.y}
        bx={B.x}
        by={B.y}
        label={sideLabels.AB}
        ox={6}
        oy={-8}
      />
      <SideLabel
        ax={B.x}
        ay={B.y}
        bx={C.x}
        by={C.y}
        label={sideLabels.BC}
        ox={0}
        oy={16}
      />
      <SideLabel
        ax={C.x}
        ay={C.y}
        bx={A.x}
        by={A.y}
        label={sideLabels.CA ?? sideLabels.AC}
        ox={-12}
        oy={-8}
      />

      {formatDiagramValue(angleLabels.A) ? (
        <DiagramText x={A.x + 18} y={A.y + 20} anchor="start" size={10}>
          {formatDiagramValue(angleLabels.A)}
        </DiagramText>
      ) : null}
      {formatDiagramValue(angleLabels.B) ? (
        <DiagramText x={B.x - 28} y={B.y - 8} anchor="end" size={10}>
          {formatDiagramValue(angleLabels.B)}
        </DiagramText>
      ) : null}
      {formatDiagramValue(angleLabels.C) ? (
        <DiagramText x={C.x + 14} y={C.y - 18} anchor="start" size={10}>
          {formatDiagramValue(angleLabels.C)}
        </DiagramText>
      ) : null}

      <DiagramText x={A.x} y={A.y - 10} size={13} bold>
        {labelOr(vertexLabels.A, "A")}
      </DiagramText>
      <DiagramText x={B.x + 8} y={B.y + 4} anchor="start" size={13} bold>
        {labelOr(vertexLabels.B, "B")}
      </DiagramText>
      <DiagramText x={C.x - 8} y={C.y + 4} anchor="end" size={13} bold>
        {labelOr(vertexLabels.C, "C")}
      </DiagramText>
    </DiagramSvg>
  );
}
