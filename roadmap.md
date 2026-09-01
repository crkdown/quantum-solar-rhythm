# Solaris Nutri — Task Roadmap

Running list. Update status as tasks move.

## Done this session
- [SEO] Heading-structure finding `agent_content:content` — fixed Rhythm Calculator (persistent H1 per step; question title H2) + Footer headings h4→h2 (was causing a site-wide 2→4 skip). Verified: one H1 & no skips on /, /masterclasses, /rhythm-calculator, /values. Marked fixed.
- [Content] **Values, Vision & Mission page** (`/values`) — built: mission + vision + 6 values (RESPECT, KINDNESS, CURIOSITY, AUTONOMY, ALIGNMENT, INTEGRATION). EN/ES/PT. Route + nav link + sitemap entry + JSON-LD WebPage. Icons via lucide. Verified renders with clean heading hierarchy.
- Elevator pitch updated on Home (EN/ES/PT): "Solaris Nutri helps women stop fighting their bodies… using food, gut health and biological rhythms to create sustainable change through midlife."

## Open decision
- [Values] 7th value: COMPASSION vs SELF-RESPECT vs NON-HARM. The `/values` page now carries an "An Open Question" section presenting all three candidates (strengths + tensions) and inviting reflection. Solaris Nutri's lean = Non-Harm as the floor, with Compassion & Self-Respect woven through it. Awaiting user's final word before promoting one to the main values grid.

## Done this session (continued)
- [Values] Mission rewritten to the full 3-paragraph statement (midlife awareness; respond to body signals + sustainable habits + early warning signs; not another restrictive diet; digestive/metabolic/overall health + type 2 diabetes risk reduction). EN/ES/PT.
- [Values] Vision replaced with user-provided copy: people no longer fight their bodies in pursuit of health; understand, nourish, respect — harmony with biology, rhythms, environment. EN/ES/PT.
- [Template migration] User re-requested migrating to the latest Lovable template (TanStack Start SSR) so per-page OG/social previews render live. This is user-initiated via the composer "/" → "Migrate to TanStack Start" (Lovable cannot self-trigger the migration).

## In progress / next up (code-only)
- [Content] Dedicated Midlife Journey page (`/midlife-journey`): expand home pitch; stages of midlife + how Solaris Nutri supports each. EN/ES/PT. Add nav + sitemap + structured data.
- [Content] Write real blog posts on midlife nutrition, gut health, biological rhythms; wire into /blog with BlogPosting structured data. (Blog data + /blog & /blog/:slug routes already exist.)
- [Content] Booklet redesign: remove all "Quantum Rhythm Nutrition" wording (keep only Solaris Nutri); larger fonts, better icons, diagrams/images, more educative. Translate booklet to Spanish for the Spanish page.
- [Video] Add a circadian-rhythm basics video on the site (Home or dedicated section).
- [Lead magnet] Dedicated lead-magnet page for the circadian guide with a form that stores leads + emails the guide.
- [Contact] Ensure Contact page has email + Instagram links and a form that sends inquiries to inbox (qrnutrition4@gmail.com).
- [About] Real About page: story, mission, contact details + structured data in sitemap.

## Needs external infra / user action
- [Email] Wire email signup to actually deliver the free guide + confirmation email + immediate download link. Needs verified sending domain (notify.solarisnutri.com DNS pending) OR an email connector (Resend/Mailchimp). Instagram fallback exists.
- [GSC] Publish, then submit sitemap.xml + request indexing (home, Masterclasses, Program, blog posts) + verify ownership. Needs google_search_console OAuth connection authorized (card surfaced earlier).
- [Instagram] Create real IG profile (bio, pinned post, Stories linking to free e-book). NOTE: cannot be created by Lovable — user must build it on Instagram; site already links to @solarisnutri.
- [Template] Upgrade to latest Lovable template (TanStack Start SSR) for per-page OG tags. User-initiated via "/" → "Migrate to TanStack Start".

## To do — code-only (no external dependency)
- [Content] Dedicated Midlife Journey page (`/midlife-journey`): expand home pitch; stages of midlife + how Solaris Nutri supports each. EN/ES/PT. Add nav + sitemap + structured data.
- [Content] Write real blog posts on midlife nutrition, gut health, biological rhythms; wire into /blog with BlogPosting structured data. (Blog data + /blog & /blog/:slug routes already exist.)
- [Content] Booklet redesign: remove all "Quantum Rhythm Nutrition" wording (keep only Solaris Nutri); larger fonts, better icons, diagrams/images, more educative. Translate booklet to Spanish for the Spanish page.
- [Video] Add a circadian-rhythm basics video on the site (Home or dedicated section).
- [Lead magnet] Dedicated lead-magnet page for the circadian guide with a form that stores leads + emails the guide.
- [Contact] Ensure Contact page has email + Instagram links and a form that sends inquiries to inbox (qrnutrition4@gmail.com).
- [Contact] **Wire contact form to real email delivery** via `send-transactional-email` Edge Function: notification to Solaris Nutri + confirmation to submitter. Replace `mailto:` fallback. (Email domain DNS pending; scaffolds now, sends after verification.)
- [About] Real About page: story, mission, contact details + structured data in sitemap.

## To do — needs external infra / user action
- [Email] Wire email signup to actually deliver the free guide + confirmation email + immediate download link. Needs verified sending domain (notify.solarisnutri.com DNS pending) OR an email connector (Resend/Mailchimp). Instagram fallback exists.
- [GSC] Publish, then submit sitemap.xml + request indexing (home, Masterclasses, Program, blog posts) + verify ownership. Needs google_search_console OAuth connection authorized (card surfaced earlier).
- [Instagram] Create real IG profile (bio, pinned post, Stories linking to free e-book). NOTE: cannot be created by Lovable — user must build it on Instagram; site already links to @solarisnutri.
- [Template] Upgrade to latest Lovable template (TanStack Start SSR) for per-page OG tags. User-initiated via "/" → "Migrate to TanStack Start".
