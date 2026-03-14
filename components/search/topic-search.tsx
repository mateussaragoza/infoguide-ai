"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type GenerateGuideResponse = {
  slug: string;
};

export function TopicSearch() {
  const router = useRouter();
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate-guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate guide.");
      }

      const data: GenerateGuideResponse = await response.json();
      router.push(`/guides/${data.slug}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <label className="block space-y-2" htmlFor="topic">
        <span className="text-sm font-medium text-slate-700">Topic</span>
        <input
          id="topic"
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-base outline-none ring-brand-500 transition focus:ring-2"
          placeholder="e.g., Python, Calculus, Investing"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
          required
          minLength={2}
          maxLength={120}
        />
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-lg bg-brand-500 px-4 py-3 font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading ? "Generating..." : "Generate Learning Guide"}
      </button>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
