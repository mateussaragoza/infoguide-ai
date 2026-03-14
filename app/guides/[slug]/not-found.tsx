import Link from "next/link";

export default function GuideNotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-2xl flex-col items-center justify-center gap-4 px-4">
      <h1 className="text-3xl font-bold">Guide not found</h1>
      <p className="text-center text-slate-600">
        We could not find this guide yet. Try searching a topic to generate it.
      </p>
      <Link href="/" className="font-medium text-brand-700 hover:underline">
        Go to topic search
      </Link>
    </main>
  );
}
