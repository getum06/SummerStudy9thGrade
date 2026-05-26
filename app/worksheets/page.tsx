import type { Metadata } from "next";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { WorksheetPlaceholder } from "@/components/worksheets/WorksheetPlaceholder";

export const metadata: Metadata = {
  title: "Worksheets",
};

const placeholderWorksheets = [
  { title: "Angles & Parallel Lines", unitId: "angles" },
  { title: "Triangle Properties", unitId: "triangles" },
  { title: "Circle Basics", unitId: "circles" },
];

export default function WorksheetsPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Worksheets"
        description="Printable PDF worksheets for offline practice."
      />

      <ComingSoonBanner />

      <ul className="mt-8 space-y-3">
        {placeholderWorksheets.map((sheet) => (
          <li key={sheet.title}>
            <WorksheetPlaceholder title={sheet.title} unitId={sheet.unitId} />
          </li>
        ))}
      </ul>
    </div>
  );
}
