interface PageHeaderProps {
  title: string;
  description: string;
  badge?: string;
}

export function PageHeader({ title, description, badge }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {badge ? (
        <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800">
          {badge}
        </span>
      ) : null}
      <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h1>
      <p className="mt-2 max-w-2xl text-base text-muted">{description}</p>
    </header>
  );
}
