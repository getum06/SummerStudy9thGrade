interface PlaceholderCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function PlaceholderCard({
  title,
  children,
  className = "",
}: PlaceholderCardProps) {
  return (
    <section
      className={`rounded-2xl border border-border bg-card p-6 shadow-sm ${className}`}
    >
      <h2 className="mb-3 text-lg font-semibold text-slate-800">{title}</h2>
      <div className="text-sm leading-relaxed text-slate-600">{children}</div>
    </section>
  );
}
