import type { Problem, SkillId } from "./problem";

/** ISO date string (YYYY-MM-DD) for scheduling. */
export type IsoDateString = string;

export interface Week {
  readonly id: string;
  readonly weekNumber: number;
  readonly title: string;
  readonly description: string;
  readonly startDate?: IsoDateString;
  readonly lessonIds: readonly string[];
  readonly goals?: readonly string[];
}

export interface Lesson {
  readonly id: string;
  readonly weekId: string;
  readonly dayNumber: number;
  /** Order within the week (1-based). */
  readonly order: number;
  readonly title: string;
  readonly description: string;
  readonly objectives: readonly string[];
  readonly skillIds: readonly SkillId[];
  readonly problemIds: readonly string[];
  readonly estimatedMinutes?: number;
}

export interface Worksheet {
  readonly id: string;
  readonly title: string;
  readonly weekId?: string;
  readonly lessonId?: string;
  readonly problemIds: readonly string[];
  readonly skillIds: readonly SkillId[];
  readonly pdfUrl?: string;
  readonly pageCount?: number;
}

export interface AnswerKeyEntry {
  readonly problemId: string;
  readonly answer: string;
  readonly workedSolution?: string;
}

export interface AnswerKey {
  readonly id: string;
  readonly worksheetId: string;
  readonly title: string;
  readonly entries: readonly AnswerKeyEntry[];
}

/**
 * Bundle of static curriculum content.
 * Useful for `/data` modules and future CMS imports.
 */
export interface Curriculum {
  readonly weeks: readonly Week[];
  readonly lessons: readonly Lesson[];
  readonly problems: readonly Problem[];
  readonly worksheets: readonly Worksheet[];
  readonly answerKeys: readonly AnswerKey[];
}

export type CurriculumEntity =
  | Week
  | Lesson
  | Problem
  | Worksheet
  | AnswerKey;
