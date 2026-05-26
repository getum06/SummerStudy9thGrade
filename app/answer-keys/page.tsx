import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";

export const metadata: Metadata = {
  title: "Answer Keys",
};

export default function AnswerKeysPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Answer Keys"
        description="Check your worksheet and practice answers after you try on your own."
      />

      <ComingSoonBanner />

      <div className="mt-8 space-y-4">
        <PlaceholderCard title="Worksheet answer keys">
          <p>
            Answer keys will be organized by unit and worksheet number. Parents
            can use this section to support review without giving away hints too
            early.
          </p>
        </PlaceholderCard>

        <PlaceholderCard title="Practice solutions">
          <p>
            Step-by-step solutions for practice problems will appear here with
            links back to related lessons.
          </p>
        </PlaceholderCard>
      </div>
    </div>
  );
}
