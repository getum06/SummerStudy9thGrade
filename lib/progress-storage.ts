import {
  DEFAULT_PROGRESS,
  isStudentProgressV1,
  migrateProgressV1ToV2,
  PROGRESS_SCHEMA_VERSION,
  type StudentProgress,
} from "@/types";

const STORAGE_KEY = "geometry-summer-prep:progress";

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function normalizeProgress(parsed: unknown): StudentProgress {
  if (isStudentProgressV1(parsed)) {
    return migrateProgressV1ToV2(parsed);
  }

  if (
    typeof parsed === "object" &&
    parsed !== null &&
    "version" in parsed &&
    (parsed as StudentProgress).version === PROGRESS_SCHEMA_VERSION
  ) {
    const progress = parsed as StudentProgress;
    return {
      ...DEFAULT_PROGRESS,
      ...progress,
      version: PROGRESS_SCHEMA_VERSION,
      problemAttempts: progress.problemAttempts ?? [],
      skillMastery: progress.skillMastery ?? [],
    };
  }

  return { ...DEFAULT_PROGRESS };
}

export function loadProgress(): StudentProgress {
  if (!isBrowser()) {
    return { ...DEFAULT_PROGRESS };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { ...DEFAULT_PROGRESS };
    }
    return normalizeProgress(JSON.parse(raw));
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress: StudentProgress): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function clearProgress(): void {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

export function updateLastVisited(): StudentProgress {
  const progress = loadProgress();
  const updated: StudentProgress = {
    ...progress,
    lastVisited: new Date().toISOString(),
  };
  saveProgress(updated);
  return updated;
}
