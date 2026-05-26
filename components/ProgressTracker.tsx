"use client";

import { useEffect } from "react";
import { updateLastVisited } from "@/lib/progress-storage";

export function ProgressTracker() {
  useEffect(() => {
    updateLastVisited();
  }, []);

  return null;
}
