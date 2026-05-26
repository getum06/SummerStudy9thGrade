import { AngleRelationshipDiagram } from "./AngleRelationshipDiagram";
import { CircleDiagram } from "./CircleDiagram";
import { CoordinatePlaneDiagram } from "./CoordinatePlaneDiagram";
import { ParallelLinesDiagram } from "./ParallelLinesDiagram";
import { RightTriangleDiagram } from "./RightTriangleDiagram";
import { TriangleDiagram } from "./TriangleDiagram";
import type { DiagramRendererProps } from "./types";

/**
 * Renders the correct SVG diagram from a type + data payload.
 * Ideal for problems stored in `/data` or CMS JSON.
 *
 * @example
 * ```tsx
 * <DiagramRenderer
 *   diagramType="right-triangle"
 *   diagramData={{
 *     vertexLabels: { A: "A", B: "B", C: "C" },
 *     sideLabels: { AB: "c", BC: "a = 8", CA: "b = ?" },
 *     rightAngleAt: "C",
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <DiagramRenderer
 *   diagramType="parallel-lines"
 *   diagramData={{
 *     angleLabels: { "1": "x", "2": "72°", "7": "?", "8": "72°" },
 *   }}
 *   className="max-w-md"
 * />
 * ```
 */
export function DiagramRenderer({
  diagramType,
  diagramData,
  className,
  title,
}: DiagramRendererProps) {
  switch (diagramType) {
    case "triangle":
      return (
        <TriangleDiagram
          className={className}
          title={title}
          {...diagramData}
        />
      );
    case "right-triangle":
      return (
        <RightTriangleDiagram
          className={className}
          title={title}
          {...diagramData}
        />
      );
    case "circle":
      return (
        <CircleDiagram className={className} title={title} {...diagramData} />
      );
    case "parallel-lines":
      return (
        <ParallelLinesDiagram
          className={className}
          title={title}
          {...diagramData}
        />
      );
    case "angle-relationship":
      return (
        <AngleRelationshipDiagram
          className={className}
          title={title}
          {...diagramData}
        />
      );
    case "coordinate-plane":
      return (
        <CoordinatePlaneDiagram
          className={className}
          title={title}
          {...diagramData}
        />
      );
    default: {
      const _exhaustive: never = diagramType;
      return _exhaustive;
    }
  }
}
