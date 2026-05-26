import {
  DiagramLine,
  DiagramSvg,
  DiagramText,
  formatDiagramValue,
} from "./diagram-shared";
import type { CoordinatePlaneDiagramData } from "./types";

/**
 * Coordinate plane with grid, axes, and labeled points.
 *
 * @example
 * ```tsx
 * <CoordinatePlaneDiagram
 *   xLabel="x"
 *   yLabel="y"
 *   showGrid
 *   points={[
 *     { label: "A", x: 2, y: 3 },
 *     { label: "B", x: -1, y: 2 },
 *   ]}
 *   lineLabel="y = x + 1"
 * />
 * ```
 */
export interface CoordinatePlaneDiagramProps extends CoordinatePlaneDiagramData {
  className?: string;
  title?: string;
}

const ORIGIN = { x: 100, y: 100 };
const SCALE = 18;
const GRID_MIN = -4;
const GRID_MAX = 4;

function toSvg(x: number, y: number): { x: number; y: number } {
  return {
    x: ORIGIN.x + x * SCALE,
    y: ORIGIN.y - y * SCALE,
  };
}

export function CoordinatePlaneDiagram({
  className,
  title = "Coordinate plane",
  xLabel = "x",
  yLabel = "y",
  points = [],
  lineLabel,
  showGrid = true,
}: CoordinatePlaneDiagramProps) {
  const gridLines: React.ReactNode[] = [];

  if (showGrid) {
    for (let i = GRID_MIN; i <= GRID_MAX; i++) {
      const v = toSvg(i, 0);
      const h = toSvg(0, i);
      gridLines.push(
        <DiagramLine
          key={`v-${i}`}
          x1={v.x}
          y1={28}
          x2={v.x}
          y2={172}
          thin
          dashed
        />,
        <DiagramLine
          key={`h-${i}`}
          x1={28}
          y1={h.y}
          x2={172}
          y2={h.y}
          thin
          dashed
        />,
      );
    }
  }

  const axisXEnd = toSvg(GRID_MAX + 0.5, 0);
  const axisYEnd = toSvg(0, GRID_MAX + 0.5);

  return (
    <DiagramSvg className={className} title={title} viewBox="0 0 200 180">
      {gridLines}

      <DiagramLine x1={28} y1={ORIGIN.y} x2={axisXEnd.x} y2={ORIGIN.y} />
      <DiagramLine x1={ORIGIN.x} y1={172} x2={ORIGIN.x} y2={axisYEnd.y} />

      <polygon
        points={`${axisXEnd.x},${ORIGIN.y} ${axisXEnd.x - 6},${ORIGIN.y - 3} ${axisXEnd.x - 6},${ORIGIN.y + 3}`}
        fill="#000"
      />
      <polygon
        points={`${ORIGIN.x},${axisYEnd.y} ${ORIGIN.x - 3},${axisYEnd.y + 6} ${ORIGIN.x + 3},${axisYEnd.y + 6}`}
        fill="#000"
      />

      <DiagramText x={axisXEnd.x + 4} y={ORIGIN.y + 4} anchor="start" size={12} bold>
        {formatDiagramValue(xLabel) ?? "x"}
      </DiagramText>
      <DiagramText x={ORIGIN.x - 8} y={axisYEnd.y - 4} anchor="end" size={12} bold>
        {formatDiagramValue(yLabel) ?? "y"}
      </DiagramText>

      {formatDiagramValue(lineLabel) ? (
        <DiagramLine x1={toSvg(-3, -2).x} y1={toSvg(-3, -2).y} x2={toSvg(3, 4).x} y2={toSvg(3, 4).y} thin />
      ) : null}
      {formatDiagramValue(lineLabel) ? (
        <DiagramText x={toSvg(2, 4).x} y={toSvg(2, 4).y - 8} size={10}>
          {formatDiagramValue(lineLabel)}
        </DiagramText>
      ) : null}

      {points.map((point) => {
        const pos = toSvg(point.x, point.y);
        const label = formatDiagramValue(point.label) ?? "?";
        return (
          <g key={`${point.x}-${point.y}-${label}`}>
            <circle cx={pos.x} cy={pos.y} r={4} fill="#000" />
            <DiagramText x={pos.x + 8} y={pos.y - 6} anchor="start" size={11} bold>
              {label}
            </DiagramText>
            <DiagramText x={pos.x + 8} y={pos.y + 10} anchor="start" size={9}>
              ({point.x}, {point.y})
            </DiagramText>
          </g>
        );
      })}

      <DiagramText x={ORIGIN.x - 6} y={ORIGIN.y + 14} size={10}>
        O
      </DiagramText>
    </DiagramSvg>
  );
}
