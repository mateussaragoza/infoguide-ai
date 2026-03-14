import { NextResponse } from "next/server";

import { generateGuideContent } from "@/lib/ai/generate-guide";
import { upsertGuide } from "@/lib/db/guides";
import { toGuideSlug } from "@/lib/utils/slug";
import { generateGuideInputSchema } from "@/lib/utils/validation";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parseResult = generateGuideInputSchema.safeParse(json);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: "Invalid request body",
          details: parseResult.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { topic } = parseResult.data;
    const slug = `learn-${toGuideSlug(topic)}`;

    const content = await generateGuideContent({ topic });

    const guide = await upsertGuide({
      slug,
      topic,
      title: `Learn ${topic} – Complete Guide`,
      content,
    });

    return NextResponse.json(
      {
        id: guide.id,
        slug: guide.slug,
        title: guide.title,
        topic: guide.topic,
        content: guide.content,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate guide" },
      { status: 500 },
    );
  }
}
