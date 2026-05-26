import {
  DiagramLine,
  DiagramSvg,
  DiagramText,
  formatDiagramValue,
  type DiagramValue,
} from "./diagram-shared";
import type { AngleRelationshipDiagramData } from "./types";

/**
 * Intersecting lines showing angle relationships (vertical, linear pair, etc.).
 *
 * @example
 * ```tsx
 * <AngleRelationshipDiagram
 *   relationship="vertical"
 *   angleLabels={{ "1": "x", "2": "?", "3": "x", "4": "?" }}
 * />
 * ```
 */
export interface AngleRelationshipDiagramProps
  extends AngleRelationshipDiagramData {
  className?: string;
  title?: string;
}

const CENTER = { x: 100, y: 95 };

function labelOr(value: DiagramValue | undefined, fallback: string): string {
  return formatDiagramValue(value) ?? fallback;
}

export function AngleRelationshipDiagram({
  className,
  title = "Angle relationship diagram",
  vertexLabels = {},
  angleLabels = {},
  relationship = "vertical",
}: AngleRelationshipDiagramProps) {
  const positions: Record<string, { x: number; y: number }> =
    relationship === "linear-pair"
      ? {
          "1": { x: 128, y: 78 },
          "2": { x: 128, y: 118 },
        }
      : relationship === "corresponding"
        ? {
            "1": { x: 128, y: 72 },
            "2": { x: 72, y: 118 },
          }
        : {
            "1": { x: 128, y: 72 },
            "2": { x: 72, y: 72 },
            "3": { x: 72, y: 118 },
            "4": { x: 128, y: 118 },
          };

  return (
    <DiagramSvg className={className} title={title} viewBox="0 0 200 180">
      <DiagramLine x1={28} y1={CENTER.y} x2={172} y2={CENTER.y} />
      <DiagramLine x1={CENTER.x} y1={24} x2={CENTER.x} y2={166} />

      <DiagramText x={CENTER.x} y={CENTER.y + 5} size={12} bold>
        {labelOr(vertexLabels.A ?? vertexLabels.D, "O")}
      </DiagramText>

      {(
        Object.entries(positions) as [string, { x: number; y: number }][]
      ).map(([key, pos]) => {
        const text = formatDiagramValue(angleLabels[key as keyof typeof angleLabels]);
        if (!text) {
          return null;
        }
        return (
          <DiagramText key={key} x={pos.x} y={pos.y} size={11}>
            {text}
          </DiagramText>
        );
      })}
    </DiagramSvg>
  );
}

/**
 * @deprecated Use {@link AngleRelationshipDiagram} instead.
 */
export function AngleDiagram(
  props: Omit<AngleRelationshipDiagramProps, "relationship">,
) {
  return <AngleRelationshipDiagram {...props} relationship="vertical" />;
}
