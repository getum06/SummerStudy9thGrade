import Link from "next/link";
import { Navigation } from "@/components/Navigation";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-full flex-col lg:flex-row">
      <aside className="border-b border-border bg-sidebar lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 px-4 py-5 lg:px-5">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-lg text-white shadow-sm"
            aria-hidden
          >
            △
          </div>
          <div>
            <Link href="/" className="block">
              <span className="font-display text-base font-bold leading-tight text-slate-900">
                Geometry Summer Prep
              </span>
            </Link>
            <p className="text-xs text-muted">9th Grade · Summer 2026</p>
          </div>
        </div>
        <Navigation />
      </aside>

      <div className="flex flex-1 flex-col">
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        <footer className="border-t border-border px-4 py-4 text-center text-xs text-muted sm:px-6">
          Geometry Summer Prep — placeholder build. Content coming soon.
        </footer>
      </div>
    </div>
  );
}
