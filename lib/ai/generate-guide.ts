import OpenAI from "openai";

import { buildGuidePrompt } from "@/lib/ai/prompt";
import type { GenerateGuideInput } from "@/lib/utils/validation";

const openai =
  process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.length > 0
    ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
    : null;

function fallbackGuide(topic: string): string {
  return `# Learn ${topic} – Complete Guide\n\n## Introduction\n${topic} is a valuable skill. Start with fundamentals and build through deliberate practice.\n\n## Core concepts\n- Vocabulary and foundational terms\n- Main principles and mental models\n- Common tools used in ${topic}\n\n## Learning roadmap\n1. Study the basics for 1 week\n2. Build one mini project\n3. Read intermediate material and practice daily\n4. Create a portfolio project\n\n## Practical examples\n- Recreate a known beginner project\n- Explain one concept in your own words\n\n## Common mistakes\n- Jumping to advanced content too quickly\n- Inconsistent practice\n- Ignoring feedback loops\n\n## Resources\n- Official documentation\n- Curated YouTube playlists\n- Community forums and Q&A`;
}

export async function generateGuideContent(input: GenerateGuideInput): Promise<string> {
  if (!openai) {
    return fallbackGuide(input.topic);
  }

  const response = await openai.responses.create({
    model: process.env.OPENAI_MODEL ?? "gpt-4.1-mini",
    input: buildGuidePrompt(input),
    temperature: 0.4,
  });

  return response.output_text?.trim() || fallbackGuide(input.topic);
}
