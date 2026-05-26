import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { AngleDiagram } from "@/components/diagrams";

export const metadata: Metadata = {
  title: "Practice",
};

export default function PracticePage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Practice"
        description="Short interactive drills to build confidence with geometry skills."
      />

      <ComingSoonBanner />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PlaceholderCard title="Practice set (placeholder)">
          <ol className="list-inside list-decimal space-y-2">
            <li>Find the measure of angle θ.</li>
            <li>Classify the triangle by sides and angles.</li>
            <li>Determine if two segments are congruent.</li>
          </ol>
          <p className="mt-4 text-xs text-muted">
            Answers and scoring will save to your device via localStorage.
          </p>
        </PlaceholderCard>

        <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-sky-50/50 p-6">
          <AngleDiagram className="h-36 w-44" />
          <p className="mt-3 text-center text-xs text-muted">
            Diagrams support practice questions
          </p>
        </div>
      </div>
    </div>
  );
}
