create extension if not exists "pgcrypto";

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  date date not null,
  author text not null,
  category text not null,
  read_time text not null,
  excerpt text not null,
  sections jsonb not null default '[]'::jsonb,
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

create or replace function public.is_blog_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.blog_admins
    where user_id = auth.uid()
  );
$$;

alter table public.blog_posts enable row level security;
alter table public.blog_admins enable row level security;

drop policy if exists "Published blog posts are public" on public.blog_posts;
create policy "Published blog posts are public"
on public.blog_posts for select
using (status = 'published');

drop policy if exists "Admins can manage blog posts" on public.blog_posts;
create policy "Admins can manage blog posts"
on public.blog_posts for all
using (public.is_blog_admin())
with check (public.is_blog_admin());

drop policy if exists "Admins can read own admin record" on public.blog_admins;
create policy "Admins can read own admin record"
on public.blog_admins for select
using (user_id = auth.uid());

insert into public.blog_posts (slug, title, date, author, category, read_time, excerpt, status, sections)
values
(
  'condo-board-budget-planning',
  'Condo Board Budget Planning: What to Review Before Year-End',
  '2026-05-02',
  'May Moses',
  'Board Resources',
  '4 min read',
  'A practical checklist for reviewing operating budgets, reserve contributions, service contracts, and community priorities before the next fiscal year.',
  'published',
  '[
    {
      "heading": "Start with the current-year actuals",
      "body": [
        "Before adjusting next year''s budget, compare year-to-date actuals against the approved budget. The most useful review separates recurring operating costs from one-time expenses so the board can see what is truly changing.",
        "Pay close attention to utilities, insurance, cleaning, security, landscaping, snow removal, and repair categories. These are often where small assumptions create meaningful changes over a full year."
      ]
    },
    {
      "heading": "Review contracts before renewal dates",
      "body": [
        "Budget season is also the right time to confirm which vendor agreements renew soon, which services need updated scopes, and which contracts should be tendered before pricing is locked in.",
        "Boards should ask whether the current scope still matches the property''s needs, whether service levels are documented clearly, and whether recent performance issues should affect renewal decisions."
      ]
    },
    {
      "heading": "Connect the operating budget to the reserve plan",
      "body": [
        "Operating decisions should not be made in isolation from capital planning. Upcoming reserve projects can affect staffing, communications, temporary services, and insurance considerations.",
        "A clear budget package should help directors understand what is routine, what is project-related, and what needs a board decision before notices are issued to owners."
      ]
    }
  ]'::jsonb
),
(
  'better-board-meeting-packages',
  'What Makes a Better Condominium Board Meeting Package',
  '2026-04-18',
  'May Moses',
  'Governance',
  '3 min read',
  'A stronger meeting package helps directors focus on decisions instead of hunting through attachments, emails, and disconnected updates.',
  'published',
  '[
    {
      "heading": "Lead with decisions",
      "body": [
        "A board package should make the required decisions obvious. Each decision item should include the recommendation, relevant context, cost impact, and any deadline the board needs to consider.",
        "Information-only updates still matter, but they should not bury motions, approvals, or time-sensitive issues."
      ]
    },
    {
      "heading": "Keep action items visible",
      "body": [
        "A simple action register improves accountability between meetings. It should identify the owner, next step, target date, and current status for each open item.",
        "When action items are tracked consistently, recurring issues become easier to spot and fewer decisions are reopened unnecessarily."
      ]
    },
    {
      "heading": "Use attachments with intent",
      "body": [
        "Attachments should support the decision in front of the board. Large document sets are easier to review when the package explains why each attachment is included and what directors should look for."
      ]
    }
  ]'::jsonb
),
(
  'resident-communication-during-maintenance',
  'Resident Communication During Building Maintenance',
  '2026-03-27',
  'May Moses',
  'Community Operations',
  '5 min read',
  'Clear maintenance notices reduce confusion, improve access, and help residents understand how work will affect their day.',
  'published',
  '[
    {
      "heading": "Explain the impact, not just the work",
      "body": [
        "Residents need to know what is happening, but they also need to know how it affects them. A useful notice states the location, dates, expected noise, service interruptions, access requirements, and contact path for questions.",
        "The best notices are direct, specific, and written in plain language. They avoid technical detail unless it helps residents prepare."
      ]
    },
    {
      "heading": "Send reminders at the right moments",
      "body": [
        "For disruptive work, one notice is rarely enough. A first notice gives residents time to plan, a reminder keeps the work visible, and a same-day update helps prevent missed access or avoidable calls."
      ]
    },
    {
      "heading": "Close the loop after completion",
      "body": [
        "When work is complete, a short follow-up can confirm the outcome, thank residents for cooperation, and identify any next steps. This helps build trust and reduces uncertainty around recurring projects."
      ]
    }
  ]'::jsonb
)
on conflict (slug) do update
set title = excluded.title,
    date = excluded.date,
    author = excluded.author,
    category = excluded.category,
    read_time = excluded.read_time,
    excerpt = excluded.excerpt,
    status = excluded.status,
    sections = excluded.sections,
    updated_at = now();

-- After creating a Supabase Auth user, make that user an admin by replacing both values:
-- insert into public.blog_admins (user_id, email)
-- values ('00000000-0000-0000-0000-000000000000', 'admin@example.com');

