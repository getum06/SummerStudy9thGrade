import type { DiagramValue } from "./diagram-shared";

export const DIAGRAM_TYPES = [
  "triangle",
  "right-triangle",
  "circle",
  "parallel-lines",
  "angle-relationship",
  "coordinate-plane",
] as const;

export type DiagramType = (typeof DIAGRAM_TYPES)[number];

export interface VertexLabels {
  readonly A?: DiagramValue;
  readonly B?: DiagramValue;
  readonly C?: DiagramValue;
  readonly D?: DiagramValue;
}

export interface SideLabels {
  readonly AB?: DiagramValue;
  readonly BC?: DiagramValue;
  readonly CA?: DiagramValue;
  readonly AC?: DiagramValue;
  readonly CD?: DiagramValue;
  readonly DE?: DiagramValue;
}

export interface AngleLabels {
  readonly A?: DiagramValue;
  readonly B?: DiagramValue;
  readonly C?: DiagramValue;
  readonly D?: DiagramValue;
  readonly E?: DiagramValue;
  readonly F?: DiagramValue;
  readonly "1"?: DiagramValue;
  readonly "2"?: DiagramValue;
  readonly "3"?: DiagramValue;
  readonly "4"?: DiagramValue;
  readonly "5"?: DiagramValue;
  readonly "6"?: DiagramValue;
  readonly "7"?: DiagramValue;
  readonly "8"?: DiagramValue;
}

export interface TriangleDiagramData {
  readonly vertexLabels?: VertexLabels;
  readonly sideLabels?: SideLabels;
  readonly angleLabels?: AngleLabels;
}

export interface RightTriangleDiagramData {
  readonly vertexLabels?: VertexLabels;
  readonly sideLabels?: SideLabels;
  readonly angleLabels?: AngleLabels;
  /** Which vertex has the right angle (default C). */
  readonly rightAngleAt?: "A" | "B" | "C";
}

export interface CircleDiagramData {
  readonly centerLabel?: DiagramValue;
  readonly radiusLabel?: DiagramValue;
  readonly diameterLabel?: DiagramValue;
  readonly chordLabel?: DiagramValue;
  readonly arcLabel?: DiagramValue;
  readonly pointOnCircleLabel?: DiagramValue;
}

export interface ParallelLinesDiagramData {
  readonly lineLabels?: { readonly m?: DiagramValue; readonly n?: DiagramValue };
  readonly transversalLabel?: DiagramValue;
  readonly angleLabels?: AngleLabels;
}

export interface AngleRelationshipDiagramData {
  readonly vertexLabels?: VertexLabels;
  readonly angleLabels?: AngleLabels;
  readonly relationship?: "vertical" | "linear-pair" | "corresponding";
}

export interface CoordinatePoint {
  readonly label: DiagramValue;
  readonly x: number;
  readonly y: number;
}

export interface CoordinatePlaneDiagramData {
  readonly xLabel?: DiagramValue;
  readonly yLabel?: DiagramValue;
  readonly points?: readonly CoordinatePoint[];
  readonly lineLabel?: DiagramValue;
  readonly showGrid?: boolean;
}

export type DiagramData =
  | { diagramType: "triangle"; diagramData: TriangleDiagramData }
  | { diagramType: "right-triangle"; diagramData: RightTriangleDiagramData }
  | { diagramType: "circle"; diagramData: CircleDiagramData }
  | { diagramType: "parallel-lines"; diagramData: ParallelLinesDiagramData }
  | {
      diagramType: "angle-relationship";
      diagramData: AngleRelationshipDiagramData;
    }
  | {
      diagramType: "coordinate-plane";
      diagramData: CoordinatePlaneDiagramData;
    };

export type DiagramRendererProps = DiagramData & {
  className?: string;
  title?: string;
};
