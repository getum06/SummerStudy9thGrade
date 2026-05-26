import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { ProgressSummary } from "@/components/progress/ProgressSummary";

export const metadata: Metadata = {
  title: "Parent Dashboard",
};

export default function ParentDashboardPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Parent Dashboard"
        description="A simple overview of study activity — read-only summary from the student's device."
        badge="For parents"
      />

      <ComingSoonBanner />

      <div className="mt-8 space-y-6">
        <PlaceholderCard title="Student activity snapshot">
          <ProgressSummary />
        </PlaceholderCard>

        <PlaceholderCard title="Weekly goals (placeholder)">
          <ul className="list-inside list-disc space-y-1">
            <li>Complete 4 daily lessons</li>
            <li>Finish 2 practice sets</li>
            <li>Review all missed problems</li>
          </ul>
        </PlaceholderCard>
      </div>
    </div>
  );
}
