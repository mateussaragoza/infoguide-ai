import { z } from "zod";

export const generateGuideInputSchema = z.object({
  topic: z
    .string({ required_error: "Topic is required" })
    .trim()
    .min(2, "Topic must be at least 2 characters")
    .max(120, "Topic must be at most 120 characters"),
});

export type GenerateGuideInput = z.infer<typeof generateGuideInputSchema>;
