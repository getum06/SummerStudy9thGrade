import {
  DiagramLine,
  DiagramSvg,
  DiagramText,
  formatDiagramValue,
  type DiagramValue,
} from "./diagram-shared";
import type { CircleDiagramData } from "./types";

/**
 * Circle with center, radius, and optional chord / arc labels.
 *
 * @example
 * ```tsx
 * <CircleDiagram
 *   centerLabel="O"
 *   radiusLabel="r = 5"
 *   pointOnCircleLabel="P"
 *   chordLabel="?"
 * />
 * ```
 */
export interface CircleDiagramProps extends CircleDiagramData {
  className?: string;
  title?: string;
}

const CX = 100;
const CY = 95;
const R = 58;
const POINT = { x: CX + R, y: CY };

function labelOr(value: DiagramValue | undefined, fallback: string): string {
  return formatDiagramValue(value) ?? fallback;
}

export function CircleDiagram({
  className,
  title = "Circle diagram",
  centerLabel = "O",
  radiusLabel,
  diameterLabel,
  chordLabel,
  arcLabel,
  pointOnCircleLabel = "P",
}: CircleDiagramProps) {
  const chordEnd = { x: CX - 42, y: CY - 38 };

  return (
    <DiagramSvg className={className} title={title} viewBox="0 0 200 180">
      <circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />

      <DiagramLine x1={CX} y1={CY} x2={POINT.x} y2={POINT.y} thin />

      {diameterLabel ? (
        <DiagramLine x1={CX - R} y1={CY} x2={CX + R} y2={CY} dashed />
      ) : null}

      {chordLabel ? (
        <DiagramLine
          x1={POINT.x}
          y1={POINT.y}
          x2={chordEnd.x}
          y2={chordEnd.y}
          thin
        />
      ) : null}

      {arcLabel ? (
        <path
          d={`M ${POINT.x} ${POINT.y} A ${R} ${R} 0 0 0 ${chordEnd.x} ${chordEnd.y}`}
          fill="none"
          stroke="#000"
          strokeWidth={1.5}
        />
      ) : null}

      <circle cx={CX} cy={CY} r={3} fill="#000" />
      <circle cx={POINT.x} cy={POINT.y} r={3} fill="#000" />

      <DiagramText x={CX} y={CY - 12} size={13} bold>
        {labelOr(centerLabel, "O")}
      </DiagramText>
      <DiagramText x={POINT.x + 6} y={POINT.y + 4} anchor="start" size={12} bold>
        {labelOr(pointOnCircleLabel, "P")}
      </DiagramText>

      {formatDiagramValue(radiusLabel) ? (
        <DiagramText x={(CX + POINT.x) / 2} y={CY - 10} size={11}>
          {formatDiagramValue(radiusLabel)}
        </DiagramText>
      ) : null}

      {formatDiagramValue(diameterLabel) ? (
        <DiagramText x={CX} y={CY + 18} size={11}>
          {formatDiagramValue(diameterLabel)}
        </DiagramText>
      ) : null}

      {formatDiagramValue(chordLabel) ? (
        <DiagramText
          x={(POINT.x + chordEnd.x) / 2}
          y={(POINT.y + chordEnd.y) / 2 - 10}
          size={11}
        >
          {formatDiagramValue(chordLabel)}
        </DiagramText>
      ) : null}

      {formatDiagramValue(arcLabel) ? (
        <DiagramText x={CX + 8} y={CY - 42} size={11}>
          {formatDiagramValue(arcLabel)}
        </DiagramText>
      ) : null}
    </DiagramSvg>
  );
}
