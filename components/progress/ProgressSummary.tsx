"use client";

import { useStudentProgress } from "@/lib/use-student-progress";

export function ProgressSummary() {
  const progress = useStudentProgress();

  const completedLessons = progress.lessons.filter(
    (l) => l.status === "completed",
  ).length;
  const pendingReview = progress.errorReview.filter((e) => !e.reviewed).length;

  return (
    <dl className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-xl bg-sky-50 p-4">
        <dt className="text-xs font-medium uppercase text-sky-700">
          Lessons completed
        </dt>
        <dd className="mt-1 text-2xl font-bold text-sky-900">
          {completedLessons}
        </dd>
      </div>
      <div className="rounded-xl bg-amber-50 p-4">
        <dt className="text-xs font-medium uppercase text-amber-700">
          Practice attempts
        </dt>
        <dd className="mt-1 text-2xl font-bold text-amber-900">
          {progress.practiceAttempts.length}
        </dd>
      </div>
      <div className="rounded-xl bg-rose-50 p-4">
        <dt className="text-xs font-medium uppercase text-rose-700">
          Errors to review
        </dt>
        <dd className="mt-1 text-2xl font-bold text-rose-900">
          {pendingReview}
        </dd>
      </div>
      {progress.lastVisited ? (
        <p className="col-span-full text-xs text-muted">
          Last activity saved:{" "}
          {new Date(progress.lastVisited).toLocaleString()}
        </p>
      ) : (
        <p className="col-span-full text-xs text-muted">
          No activity saved yet. Your progress will appear here as you study.
        </p>
      )}
    </dl>
  );
}
