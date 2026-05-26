import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export const metadata: Metadata = {
  title: "Error Review",
};

export default function ErrorReviewPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Error Review"
        description="Revisit problems you missed — spaced review helps concepts stick."
      />

      <ComingSoonBanner />

      <PlaceholderCard title="Missed questions queue" className="mt-8">
        <p className="mb-4">
          When practice is built, incorrect answers will appear here automatically.
        </p>
        <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-muted">
          No errors to review yet — great job, or start practicing!
        </div>
      </PlaceholderCard>
    </div>
  );
}
