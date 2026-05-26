import Link from "next/link";
import { ComingSoonBanner } from "@/components/ComingSoonBanner";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderCard } from "@/components/PlaceholderCard";
import {
  CircleDiagram,
  DiagramRenderer,
  ParallelLinesDiagram,
  RightTriangleDiagram,
  TriangleDiagram,
} from "@/components/diagrams";
import { ProgressSummary } from "@/components/progress/ProgressSummary";
import { mainNavItems } from "@/data/navigation";

export default function DashboardPage() {
  const quickLinks = mainNavItems.filter((item) => item.href !== "/").slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Pick up where you left off or explore a new topic."
        badge="Summer study"
      />

      <ComingSoonBanner />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <PlaceholderCard title="Your progress">
          <ProgressSummary />
        </PlaceholderCard>

        <PlaceholderCard title="Sample diagrams">
          <p className="mb-4">
            SVG geometry diagrams scale for screen and print (black &amp; white).
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <TriangleDiagram
              className="max-h-36"
              sideLabels={{ AB: 7, BC: "x", CA: 9 }}
            />
            <RightTriangleDiagram
              className="max-h-36"
              sideLabels={{ AB: "c", BC: 6, CA: "?" }}
            />
            <CircleDiagram
              className="max-h-36"
              radiusLabel="r = 5"
              chordLabel="?"
            />
            <ParallelLinesDiagram
              className="max-h-36"
              angleLabels={{ "1": "x", "2": "65°", "7": "?", "8": "65°" }}
            />
          </div>
          <div className="mt-4">
            <DiagramRenderer
              className="max-h-40 max-w-sm"
              diagramType="coordinate-plane"
              diagramData={{
                showGrid: true,
                points: [
                  { label: "A", x: 2, y: 3 },
                  { label: "B", x: -1, y: 2 },
                ],
              }}
            />
          </div>
        </PlaceholderCard>
      </div>

      <section className="mt-8">
        <h2 className="mb-4 text-lg font-semibold text-slate-800">Quick links</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>
                {item.icon}
              </span>
              <div>
                <p className="font-medium text-slate-800">{item.label}</p>
                <p className="text-xs text-muted">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
