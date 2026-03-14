import { TopicSearch } from "@/components/search/topic-search";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4 py-12">
      <header className="space-y-4 text-center">
        <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-700">
          InfoGuide AI MVP
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Learn Any Topic with an AI-Generated Guide
        </h1>
        <p className="text-lg text-slate-600">
          Search a topic and instantly generate a structured guide with roadmap,
          examples, mistakes, and resources.
        </p>
      </header>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <TopicSearch />
      </section>
    </main>
  );
}
