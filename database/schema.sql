-- Supabase schema for InfoGuide AI MVP

create extension if not exists pgcrypto;

create table if not exists public.guides (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  topic text not null,
  content text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists guides_topic_idx on public.guides (topic);
create index if not exists guides_created_at_idx on public.guides (created_at desc);

create table if not exists public.topics (
  id uuid primary key default gen_random_uuid(),
  topic_name text not null unique,
  category text,
  priority int not null default 0,
  created_at timestamptz not null default now()
);

create index if not exists topics_priority_idx on public.topics (priority desc);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists guides_set_updated_at on public.guides;
create trigger guides_set_updated_at
before update on public.guides
for each row execute function public.set_updated_at();

alter table public.guides enable row level security;
alter table public.topics enable row level security;

-- Public read for SEO pages
create policy "Allow read access to guides"
on public.guides
for select
using (true);

-- Service role writes guides/topics from API and automation.
