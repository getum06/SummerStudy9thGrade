export type LessonStatus = "not_started" | "in_progress" | "completed";

export interface LessonProgress {
  lessonId: string;
  status: LessonStatus;
  completedAt?: string;
  score?: number;
}

export interface PracticeAttempt {
  id: string;
  topicId: string;
  correct: number;
  total: number;
  attemptedAt: string;
}

export interface ErrorReviewItem {
  questionId: string;
  topicId: string;
  missedAt: string;
  reviewed: boolean;
}

export interface StudentProgress {
  version: 1;
  lessons: LessonProgress[];
  practiceAttempts: PracticeAttempt[];
  errorReview: ErrorReviewItem[];
  lastVisited?: string;
}

export const DEFAULT_PROGRESS: StudentProgress = {
  version: 1,
  lessons: [],
  practiceAttempts: [],
  errorReview: [],
};
