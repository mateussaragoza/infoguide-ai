# InfoGuide AI (MVP)

AI-powered platform to generate structured learning guides.

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```
2. Copy environment variables
   ```bash
   cp .env.example .env.local
   ```
3. Run dev server
   ```bash
   npm run dev
   ```

## MVP Features

- Topic search page (`/`)
- API route to generate guides (`POST /api/generate-guide`)
- SEO guide page (`/guides/[slug]`)
- Supabase schema in `database/schema.sql`

## Notes

- If Supabase keys are not configured, the app uses in-memory storage to keep development unblocked.
- If `OPENAI_API_KEY` is not configured, the API returns a safe fallback guide template.
