import {
  DiagramLine,
  DiagramSvg,
  DiagramText,
  formatDiagramValue,
} from "./diagram-shared";
import type { ParallelLinesDiagramData } from "./types";

/**
 * Two parallel lines cut by a transversal with numbered angle labels.
 *
 * @example
 * ```tsx
 * <ParallelLinesDiagram
 *   lineLabels={{ m: "m", n: "n" }}
 *   angleLabels={{ "1": "x", "2": "65°", "7": "?", "8": "65°" }}
 * />
 * ```
 */
export interface ParallelLinesDiagramProps extends ParallelLinesDiagramData {
  className?: string;
  title?: string;
}

const LINE_M_Y = 52;
const LINE_N_Y = 128;
const X1 = 24;
const X2 = 176;

export function ParallelLinesDiagram({
  className,
  title = "Parallel lines with transversal",
  lineLabels = {},
  transversalLabel,
  angleLabels = {},
}: ParallelLinesDiagramProps) {
  const intersectTop = { x: 118, y: LINE_M_Y };
  const intersectBottom = { x: 82, y: LINE_N_Y };

  const anglePositions: Record<string, { x: number; y: number }> = {
    "1": { x: intersectTop.x - 22, y: intersectTop.y - 14 },
    "2": { x: intersectTop.x + 18, y: intersectTop.y - 14 },
    "3": { x: intersectTop.x - 22, y: intersectTop.y + 18 },
    "4": { x: intersectTop.x + 18, y: intersectTop.y + 18 },
    "5": { x: intersectBottom.x - 22, y: intersectBottom.y - 18 },
    "6": { x: intersectBottom.x + 18, y: intersectBottom.y - 18 },
    "7": { x: intersectBottom.x - 22, y: intersectBottom.y + 14 },
    "8": { x: intersectBottom.x + 18, y: intersectBottom.y + 14 },
  };

  return (
    <DiagramSvg className={className} title={title} viewBox="0 0 200 180">
      <DiagramLine x1={X1} y1={LINE_M_Y} x2={X2} y2={LINE_M_Y} />
      <DiagramLine x1={X1} y1={LINE_N_Y} x2={X2} y2={LINE_N_Y} />
      <DiagramLine
        x1={40}
        y1={160}
        x2={160}
        y2={20}
      />

      {formatDiagramValue(lineLabels.m) ? (
        <DiagramText x={X2 - 4} y={LINE_M_Y - 8} anchor="end" size={12} bold>
          {formatDiagramValue(lineLabels.m)}
        </DiagramText>
      ) : null}
      {formatDiagramValue(lineLabels.n) ? (
        <DiagramText x={X2 - 4} y={LINE_N_Y - 8} anchor="end" size={12} bold>
          {formatDiagramValue(lineLabels.n)}
        </DiagramText>
      ) : null}
      {formatDiagramValue(transversalLabel) ? (
        <DiagramText x={162} y={24} anchor="start" size={11}>
          {formatDiagramValue(transversalLabel)}
        </DiagramText>
      ) : null}

      {(
        Object.entries(anglePositions) as [
          keyof typeof anglePositions,
          { x: number; y: number },
        ][]
      ).map(([key, pos]) => {
        const value = angleLabels[key as keyof typeof angleLabels];
        const text = formatDiagramValue(value);
        if (!text) {
          return null;
        }
        return (
          <DiagramText key={key} x={pos.x} y={pos.y} size={10}>
            {text}
          </DiagramText>
        );
      })}
    </DiagramSvg>
  );
}
