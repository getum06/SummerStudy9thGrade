import { isSkillId, type ProblemType, type SkillId } from "./problem";

function isLegacySkillTopic(topicId: string): topicId is SkillId {
  return isSkillId(topicId);
}

export const PROGRESS_SCHEMA_VERSION = 2 as const;

export type ProgressSchemaVersion = typeof PROGRESS_SCHEMA_VERSION;

export const LESSON_STATUSES = [
  "not_started",
  "in_progress",
  "completed",
] as const;

export type LessonStatus = (typeof LESSON_STATUSES)[number];

export const MASTERY_LEVELS = [
  "not_started",
  "learning",
  "practicing",
  "proficient",
  "mastered",
] as const;

export type MasteryLevel = (typeof MASTERY_LEVELS)[number];

export interface LessonProgress {
  readonly lessonId: string;
  readonly status: LessonStatus;
  readonly completedAt?: string;
  readonly score?: number;
}

export interface ProblemAttempt {
  readonly id: string;
  readonly problemId: string;
  readonly problemType: ProblemType;
  readonly lessonId?: string;
  readonly skillIds: readonly SkillId[];
  readonly correct: boolean;
  readonly attemptedAt: string;
  readonly response?: string;
  readonly selectedChoiceId?: string;
  readonly timeSpentMs?: number;
}

export interface SkillMastery {
  readonly skillId: SkillId;
  readonly level: MasteryLevel;
  readonly correctCount: number;
  readonly attemptCount: number;
  readonly lastPracticedAt?: string;
}

export interface ErrorReviewItem {
  readonly problemId: string;
  readonly lessonId?: string;
  readonly skillIds: readonly SkillId[];
  readonly missedAt: string;
  readonly reviewed: boolean;
}

/** v1 error-review row shape (migrated to {@link ErrorReviewItem}). */
export interface LegacyErrorReviewItem {
  readonly questionId: string;
  readonly topicId: string;
  readonly missedAt: string;
  readonly reviewed: boolean;
}

/**
 * @deprecated v1 aggregate attempt — use {@link ProblemAttempt} instead.
 * Kept for migrating stored progress from schema v1.
 */
export interface PracticeAttempt {
  readonly id: string;
  readonly topicId: string;
  readonly correct: number;
  readonly total: number;
  readonly attemptedAt: string;
}

/** v1 shape — internal migration only. */
export interface StudentProgressV1 {
  readonly version: 1;
  readonly lessons: readonly LessonProgress[];
  readonly practiceAttempts: readonly PracticeAttempt[];
  readonly errorReview: readonly LegacyErrorReviewItem[];
  readonly lastVisited?: string;
}

export interface StudentProgress {
  readonly version: ProgressSchemaVersion;
  readonly lessons: readonly LessonProgress[];
  readonly problemAttempts: readonly ProblemAttempt[];
  readonly skillMastery: readonly SkillMastery[];
  readonly errorReview: readonly ErrorReviewItem[];
  readonly lastVisited?: string;
}

export const DEFAULT_PROGRESS: StudentProgress = {
  version: PROGRESS_SCHEMA_VERSION,
  lessons: [],
  problemAttempts: [],
  skillMastery: [],
  errorReview: [],
};

export function isStudentProgressV1(
  value: unknown,
): value is StudentProgressV1 {
  return (
    typeof value === "object" &&
    value !== null &&
    "version" in value &&
    (value as StudentProgressV1).version === 1
  );
}

export function migrateProgressV1ToV2(
  legacy: StudentProgressV1,
): StudentProgress {
  const problemAttempts: ProblemAttempt[] = legacy.practiceAttempts.map(
    (attempt) => ({
      id: attempt.id,
      problemId: attempt.topicId,
      problemType: "free-response",
      lessonId: undefined,
      skillIds: [],
      correct: attempt.correct === attempt.total && attempt.total > 0,
      attemptedAt: attempt.attemptedAt,
    }),
  );

  const errorReview: ErrorReviewItem[] = legacy.errorReview.map((item) => ({
    problemId: item.questionId,
    lessonId: undefined,
    skillIds: isLegacySkillTopic(item.topicId) ? [item.topicId] : [],
    missedAt: item.missedAt,
    reviewed: item.reviewed,
  }));

  return {
    version: PROGRESS_SCHEMA_VERSION,
    lessons: [...legacy.lessons],
    problemAttempts,
    skillMastery: [],
    errorReview,
    lastVisited: legacy.lastVisited,
  };
}

/** Total practice activity (v2 attempts + unmigrated v1 batches). */
export function countPracticeAttempts(progress: StudentProgress): number {
  return progress.problemAttempts.length;
}
