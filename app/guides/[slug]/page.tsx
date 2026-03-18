import Link from "next/link";
import { notFound } from "next/navigation";

import { GuideContent } from "@/components/guides/guide-content";
import { getGuideBySlug } from "@/lib/db/guides";

type GuidePageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 60 * 60 * 24;

export default async function GuidePage({ params }: GuidePageProps) {
  const guide = await getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-10">
      <Link href="/" className="mb-6 text-sm font-medium text-brand-700 hover:underline">
        ← Search another topic
      </Link>

      <GuideContent title={guide.title} topic={guide.topic} content={guide.content} />
    </main>
  );
}
