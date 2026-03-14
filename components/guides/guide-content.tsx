type GuideContentProps = {
  title: string;
  topic: string;
  content: string;
};

export function GuideContent({ title, topic, content }: GuideContentProps) {
  return (
    <article className="prose prose-slate max-w-none rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="not-prose mb-6 border-b border-slate-200 pb-4">
        <p className="text-sm font-medium uppercase tracking-wide text-brand-700">Topic</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
        <p className="mt-2 text-slate-600">A structured learning plan for {topic}.</p>
      </header>

      <div className="whitespace-pre-wrap text-slate-800">{content}</div>
    </article>
  );
}
