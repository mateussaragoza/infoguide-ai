import type { Guide } from "@/lib/db/types";
import { getSupabaseServerClient } from "@/lib/db/supabase-server";

const inMemoryGuides = new Map<string, Guide>();

export async function upsertGuide(guide: Omit<Guide, "id" | "created_at" | "updated_at">): Promise<Guide> {
  const client = getSupabaseServerClient();

  if (!client) {
    const now = new Date().toISOString();
    const existing = inMemoryGuides.get(guide.slug);

    const data: Guide = {
      id: existing?.id ?? crypto.randomUUID(),
      created_at: existing?.created_at ?? now,
      updated_at: now,
      ...guide,
    };

    inMemoryGuides.set(guide.slug, data);
    return data;
  }

  const { data, error } = await client
    .from("guides")
    .upsert(guide, { onConflict: "slug" })
    .select("id, slug, title, topic, content, created_at, updated_at")
    .single();

  if (error) {
    throw new Error(`Failed to save guide: ${error.message}`);
  }

  return data;
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  const client = getSupabaseServerClient();

  if (!client) {
    return inMemoryGuides.get(slug) ?? null;
  }

  const { data, error } = await client
    .from("guides")
    .select("id, slug, title, topic, content, created_at, updated_at")
    .eq("slug", slug)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      return null;
    }

    throw new Error(`Failed to fetch guide: ${error.message}`);
  }

  return data;
}
