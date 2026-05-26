export interface CurriculumUnit {
  id: string;
  title: string;
  topics: string[];
  lessonCount: number;
}

export const curriculumUnits: CurriculumUnit[] = [
  {
    id: "foundations",
    title: "Foundations & Tools",
    topics: ["Points, lines, planes", "Notation", "Measuring segments"],
    lessonCount: 5,
  },
  {
    id: "angles",
    title: "Angles & Relationships",
    topics: ["Angle pairs", "Parallel lines", "Transversals"],
    lessonCount: 6,
  },
  {
    id: "triangles",
    title: "Triangles",
    topics: ["Classification", "Congruence", "Similarity"],
    lessonCount: 8,
  },
  {
    id: "circles",
    title: "Circles",
    topics: ["Arcs & chords", "Inscribed angles", "Tangents"],
    lessonCount: 5,
  },
];
