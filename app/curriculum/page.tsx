import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { curriculumUnits } from "@/data/curriculum-placeholder";

export const metadata: Metadata = {
  title: "Curriculum",
};

export default function CurriculumPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Curriculum"
        description="Overview of all geometry units planned for summer prep."
      />

      <ComingSoonBanner />

      <ul className="mt-8 space-y-4">
        {curriculumUnits.map((unit) => (
          <li key={unit.id}>
            <PlaceholderCard title={unit.title}>
              <p className="mb-2 text-xs text-muted">
                {unit.lessonCount} lessons · Unit ID: {unit.id}
              </p>
              <ul className="list-inside list-disc space-y-1">
                {unit.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </PlaceholderCard>
          </li>
        ))}
      </ul>
    </div>
  );
}
