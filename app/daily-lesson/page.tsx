import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { TriangleDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Daily Lesson",
};

export default function DailyLessonPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Daily Lesson"
        description="One focused geometry lesson each day — videos, notes, and examples."
        badge="Day 1 placeholder"
      />

      <ComingSoonBanner />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto]">
        <PlaceholderCard title="Today's topic: Introduction to triangles">
          <p>
            Lesson content, step-by-step explanations, and guided examples will
            go here. Students will mark lessons complete to update their
            progress in local storage.
          </p>
        </PlaceholderCard>

        <div className="flex items-center justify-center rounded-2xl border border-border bg-card p-6">
          <TriangleDiagram className="h-40 w-48" />
        </div>
      </div>
    </div>
  );
}
