import { DEFAULT_PROGRESS, type StudentProgress } from "@/types";

const STORAGE_KEY = "geometry-summer-prep:progress";

function isBrowser(): boolean {
  return typeof window !== "undefined";
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
    const parsed = JSON.parse(raw) as StudentProgress;
    if (parsed.version !== 1) {
      return { ...DEFAULT_PROGRESS };
    }
    return parsed;
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
