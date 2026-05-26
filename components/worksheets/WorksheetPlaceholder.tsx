interface WorksheetPlaceholderProps {
  title: string;
  unitId: string;
}

export function WorksheetPlaceholder({ title, unitId }: WorksheetPlaceholderProps) {
  return (
    <article className="flex items-start justify-between gap-4 rounded-xl border border-border bg-slate-50/50 p-4">
      <div>
        <h3 className="font-medium text-slate-800">{title}</h3>
        <p className="mt-1 text-xs text-muted">Unit: {unitId} · PDF coming soon</p>
      </div>
      <button
        type="button"
        disabled
        className="shrink-0 cursor-not-allowed rounded-lg bg-slate-200 px-3 py-1.5 text-xs font-medium text-slate-500"
      >
        Download
      </button>
    </article>
  );
}
