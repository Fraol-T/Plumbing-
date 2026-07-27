# Ethiopian Language Support (English/Amharic) — Reusable Module

## Scope
This isn't tied to one project — it's a reusable reference for any current or future project serving Ethiopian clients. It assumes a Next.js App Router project; the schema example in Step 2 uses Postgres/Supabase, but the underlying pattern (one value per locale, never a single string) applies regardless of what a given project's backend actually is.

## How to use this
Drop this into a project's AGENTS.md whenever that project needs Ethiopian-market language support, or hand it to Antigravity directly as a task for that session. Self-contained either way.

## Goal
Support English and Amharic — both the static UI (nav, buttons, section labels) and actual written content (bios, descriptions, any prose a visitor reads) — with room to add more Ethiopian languages later (Afaan Oromo, Tigrinya) without restructuring anything.

## Step 0 — Two different things need translating, handle them differently
1. **Static UI strings** — labels, buttons, headings. Fixed text, translated once, same for every visitor.
2. **Actual written content** — bios, descriptions, anything project-specific. This is content someone has to actually write in Amharic — the project needs a place to enter it, whether that's an admin panel, a CMS, or a content file.

Don't solve both with the same mechanism.

## Step 1 — UI strings: next-intl
The standard for this in the App Router, on any project using it.
```bash
npm install next-intl
```
- Locale-prefixed routes: `/en/...` and `/am/...` — pick a default per project (English is usually the safer default for anything mixing technical and Ethiopian audiences)
- `messages/en.json` and `messages/am.json` for every static string
- A language switcher in the header
- Handles hreflang tags per locale automatically — no separate SEO work needed

**Gotcha to confirm every time before implementing:** next-intl's locale detection runs through the file Next.js 16 renamed from `middleware.ts` to `proxy.ts`. If the agent (or you) reaches for the old filename out of habit, locale routing silently stops working rather than erroring loudly — worth checking on every project, not just once.

## Step 2 — Content: model translatable fields per-locale
Once you know which fields are user-facing written content (not tags, URLs, or IDs), store one value per locale instead of a single string. On Postgres/Supabase, that means `jsonb` keyed by locale:
```sql
-- illustrative — adapt table/column names to the actual project
alter table projects
  alter column title type jsonb using jsonb_build_object('en', title),
  alter column description type jsonb using jsonb_build_object('en', description);
```
The `using jsonb_build_object(...)` clause backfills existing English content into the new shape rather than wiping it. Leave tags, URLs, IDs, and other non-prose columns as-is. If a project uses a different backend, the principle is the same even if the mechanics differ — one value per locale, never a single string standing in for both languages.

## Step 3 — Amharic needs a font that actually supports it
Ge'ez/Ethiopic script isn't in most default web fonts (Inter, system-ui, etc.) — text will silently fall back to a generic font or render as boxes ("tofu"). Load a font with Ethiopic coverage — Noto Sans Ethiopic is the standard choice — applied specifically to Amharic content, alongside whatever the design uses for Latin text. Set `lang="am"` correctly per locale (`<html lang="am">`) — screen readers and browser translation tools depend on it, it's not cosmetic.

Amharic is left-to-right, same as English — no RTL handling needed.

## Step 4 — Wherever content gets entered, support both languages
If a project has an editable admin/CMS layer, every translatable field needs a way to enter both languages — a tab or side-by-side pair of inputs (English / Amharic), never a single field that gets overwritten. If there's no admin layer, the same principle still applies to wherever the content lives. Either way: if the Amharic value is empty, fall back to English rather than showing blank content.

## Verification
- Switch languages; confirm every static label changes, not just some
- Confirm Amharic content actually displays once that locale is selected, with Ethiopic characters rendering properly (not boxes)
- Leave an Amharic value blank somewhere; confirm it falls back to English instead of going blank
- Check the `lang` attribute in page source matches the active locale

## Out of scope
- Don't add languages beyond English/Amharic unless a specific project calls for it — the structure supports adding more later
- Don't machine-translate content as a substitute for writing it — auto-translated Amharic on anything client-facing is a real risk to how it reads

## Definition of done (per project)
- [ ] next-intl routing set up on the correct file (`proxy.ts`, not `middleware.ts`)
- [ ] Every static UI string exists in both `en.json` and `am.json`
- [ ] Translatable content fields modeled per-locale, existing content backfilled
- [ ] A way to enter both languages wherever content is managed
- [ ] Ethiopic font loads correctly — no tofu/boxes where Amharic text appears
- [ ] Language switcher works; `lang` attribute updates with it
- [ ] Missing Amharic content falls back to English, never blank
