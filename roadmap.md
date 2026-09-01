# Solaris Nutri — Task Roadmap

Running list. Update status as tasks move.

## Done this session
- [SEO] Heading-structure finding `agent_content:content` — scanner stale; verified pages conform + fixed Rhythm Calculator (one persistent H1 per step; question title H2). Marked fixed.
- Elevator pitch updated on Home (EN/ES/PT): "Solaris Nutri helps women stop fighting their bodies… using food, gut health and biological rhythms to create sustainable change through midlife."

## In progress / next up
- [Content] **Values, Vision & Mission page** (`/values`): RESPECT, KINDNESS, CURIOSITY, AUTONOMY, ALIGNMENT, INTEGRATION + mission/vision. User is exploring a 7th value: COMPASSION vs SELF-RESPECT vs NON-HARM (recommendation to be given). EN/ES/PT + route + nav + sitemap + structured data.

## To do — code-only (no external dependency)
- [Content] Dedicated Midlife Journey page (`/midlife-journey`): expand home pitch; stages of midlife + how Solaris Nutri supports each. EN/ES/PT. Add nav + sitemap + structured data.
- [Content] Write real blog posts on midlife nutrition, gut health, biological rhythms; wire into /blog with BlogPosting structured data. (Blog data + /blog & /blog/:slug routes already exist.)
- [Content] Booklet redesign: remove all "Quantum Rhythm Nutrition" wording (keep only Solaris Nutri); larger fonts, better icons, diagrams/images, more educative. Translate booklet to Spanish for the Spanish page.
- [Video] Add a circadian-rhythm basics video on the site (Home or dedicated section).
- [Lead magnet] Dedicated lead-magnet page for the circadian guide with a form that stores leads + emails the guide.
- [Contact] Ensure Contact page has email + Instagram links and a form that sends inquiries to inbox (qrnutrition4@gmail.com).
- [About] Real About page: story, mission, contact details + structured data in sitemap.

## To do — needs external infra / user action
- [Email] Wire email signup to actually deliver the free guide + confirmation email + immediate download link. Needs verified sending domain (notify.solarisnutri.com DNS pending) OR an email connector (Resend/Mailchimp). Instagram fallback exists.
- [GSC] Publish, then submit sitemap.xml + request indexing (home, Masterclasses, Program, blog posts) + verify ownership. Needs google_search_console OAuth connection authorized (card surfaced earlier).
- [Instagram] Create real IG profile (bio, pinned post, Stories linking to free e-book). NOTE: cannot be created by Lovable — user must build it on Instagram; site already links to @solarisnutri.
- [Template] Upgrade to latest Lovable template (TanStack Start SSR) for per-page OG tags. User-initiated via "/" → "Migrate to TanStack Start".
