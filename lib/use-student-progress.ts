"use client";

import { useSyncExternalStore } from "react";
import { loadProgress } from "@/lib/progress-storage";
import { DEFAULT_PROGRESS, type StudentProgress } from "@/types";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  return () => window.removeEventListener("storage", onStoreChange);
}

function getSnapshot(): StudentProgress {
  return loadProgress();
}

function getServerSnapshot(): StudentProgress {
  return { ...DEFAULT_PROGRESS };
}

export function useStudentProgress(): StudentProgress {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
