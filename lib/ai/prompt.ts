import type { GenerateGuideInput } from "@/lib/utils/validation";

export function buildGuidePrompt({ topic }: GenerateGuideInput): string {
  return `Generate a complete SEO-focused learning guide about ${topic}.\n\nStructure the response in markdown with the following sections:\n1) Introduction\n2) Core concepts\n3) Step-by-step learning roadmap\n4) Practical examples\n5) Common mistakes\n6) Resources\n\nRules:\n- Keep writing educational and actionable\n- Include clear headings and bullet points\n- Avoid unsafe or misleading advice\n- Link conceptually to adjacent related topics where possible`;
}
