/**
 * Canonical problem-type and skill identifiers.
 * Add new values here to extend the domain without breaking exhaustiveness checks.
 */

export const PROBLEM_TYPES = [
  "multiple-choice",
  "free-response",
  "diagram",
  "proof",
  "word-problem",
] as const;

export type ProblemType = (typeof PROBLEM_TYPES)[number];

export const SKILLS = [
  "solving-equations",
  "slope",
  "distance-formula",
  "midpoint-formula",
  "angle-relationships",
  "parallel-lines",
  "triangle-sum",
  "pythagorean-theorem",
  "congruence",
  "similarity",
  "circles",
  "coordinate-geometry",
  "proof-reasoning",
] as const;

export type SkillId = (typeof SKILLS)[number];

export function isProblemType(value: string): value is ProblemType {
  return (PROBLEM_TYPES as readonly string[]).includes(value);
}

export function isSkillId(value: string): value is SkillId {
  return (SKILLS as readonly string[]).includes(value);
}

/** Shared fields for all curriculum problems. */
export interface ProblemBase {
  readonly id: string;
  readonly lessonId: string;
  readonly type: ProblemType;
  readonly prompt: string;
  readonly skills: readonly SkillId[];
  readonly points?: number;
  readonly hints?: readonly string[];
  readonly diagramId?: string;
}

export interface ProblemChoice {
  readonly id: string;
  readonly label: string;
}

export interface MultipleChoiceProblem extends ProblemBase {
  readonly type: "multiple-choice";
  readonly choices: readonly ProblemChoice[];
  readonly correctChoiceId: string;
}

export interface FreeResponseProblem extends ProblemBase {
  readonly type: "free-response";
  readonly acceptableAnswers: readonly string[];
  readonly unit?: string;
}

export interface DiagramProblem extends ProblemBase {
  readonly type: "diagram";
  readonly diagramId: string;
  readonly acceptableAnswers: readonly string[];
}

export interface ProofProblem extends ProblemBase {
  readonly type: "proof";
  readonly given: readonly string[];
  readonly prove: string;
  readonly rubric?: readonly string[];
}

export interface WordProblemProblem extends ProblemBase {
  readonly type: "word-problem";
  readonly context: string;
  readonly acceptableAnswers: readonly string[];
  readonly unit?: string;
}

/** Discriminated union — narrow with `problem.type`. */
export type Problem =
  | MultipleChoiceProblem
  | FreeResponseProblem
  | DiagramProblem
  | ProofProblem
  | WordProblemProblem;

export type ProblemByType<T extends ProblemType> = Extract<Problem, { type: T }>;
