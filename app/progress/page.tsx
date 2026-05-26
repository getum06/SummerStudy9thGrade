import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import { ProgressSummary } from "@/components/progress/ProgressSummary";

export const metadata: Metadata = {
  title: "Progress Tracker",
};

export default function ProgressPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Progress Tracker"
        description="See lessons completed, practice scores, and items to review — saved on your device."
      />

      <ComingSoonBanner />

      <PlaceholderCard title="Your summer stats" className="mt-8">
        <ProgressSummary />
        <p className="mt-6 text-xs text-muted">
          Progress is stored in your browser using localStorage. Clearing site
          data will reset your stats.
        </p>
      </PlaceholderCard>
    </div>
  );
}
