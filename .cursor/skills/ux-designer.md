You are enhancing my developer portfolio site (Next.js 15, App Router, 
TypeScript, Tailwind, deployed on Vercel — repo currently open in this 
workspace). This is a UX/visual/content upgrade pass, not a rebuild — 
preserve the existing tech stack and deployment setup.

═══════════════════════════════════════
STEP 1 — GATHER CONTEXT FOR NEW PROJECT ENTRIES
═══════════════════════════════════════
Before touching the "Selected work" section, read:
- docs/MarketPulse-Blueprint.docx (or docs/architecture.md) from the 
  MarketPulse project — pull the elevator pitch, tech stack, and the 
  BFSI-specific differentiators (explainability, audit trail, 
  Resilience4j, multi-agent design) for use in the project card copy.
- README and any docs in the AXIS project workspace (Agentic X-platform 
  Intelligence System) — pull its actual purpose, stack, and current 
  build state. If AXIS's README is sparse or outdated, ask me for a 
  2-3 line description rather than inventing details about it.
- The actual GitHub repo URLs for both projects, so project cards link 
  correctly (not placeholder links).

Do not fabricate metrics, completion status, or features for either 
project. If MarketPulse is currently Phase 1 (in progress), the card 
copy must say so honestly ("in active development, Phase 1") rather 
than implying a finished product — an interviewer or recruiter clicking 
through will check the repo, and overstated copy reads worse than 
honest in-progress framing.

═══════════════════════════════════════
STEP 2 — REPLACE PROJECT CARDS
═══════════════════════════════════════
In the "Selected work" section, replace the current four project cards 
with these two as the lead entries (drop the "FarmFresh",
"Books library API" and "E-commerce UX study" cards, as they read as 
minor/practice projects next to MarketPulse and AXIS):

1. MarketPulse — lead card, most prominent placement
   - Title: "MarketPulse — Agentic Market Intelligence & Risk Copilot"
   - Copy should cover: Java/Spring Boot + Spring AI multi-agent 
     architecture, BFSI-targeted (explainability, audit trails, 
     risk/anomaly signals), current phase status, link to GitHub repo
   - Tag chips: Java, Spring Boot, Spring AI, PostgreSQL, Next.js, 
     Agentic AI (adjust based on actual blueprint tech stack)

2. AXIS (Agentic X-platform Intelligence System) — second card
   - Pull actual description from its README/docs as gathered in Step 1
   - If it's an umbrella/org-level project rather than a single 
     product, frame the copy accordingly — don't force it into the 
     same "single app" template as MarketPulse if it doesn't fit

Card structure per project (keep consistent with existing card 
pattern, just deepen the content): title, one-line pitch, 2-3 sentence 
description, tech tag chips, GitHub link, and — if a live demo/deploy 
exists — a second link for that.

═══════════════════════════════════════
STEP 3 — CONTENT IMPROVEMENTS ELSEWHERE ON THE SITE
═══════════════════════════════════════
- Hero subtitle: update to reflect the Agentic AI direction alongside 
  existing Java/Spring/microservices framing — don't drop the backend 
  identity, add to it (e.g. "...Java | Spring Boot | Agentic AI" style, adjust to fit existing tone).
- About section: add 1-2 sentences on the shift toward Agentic AI / AI 
  engineering, BFSI portfolio direction, 
  without discarding the existing backend-strength narrative.
- Stack & tooling section: add Spring AI, PostgreSQL/pgvector, and any 
  other technologies now relevant given MarketPulse/AXIS, alongside 
  the existing list — don't just replace, extend, and reorganize if 
  the list gets long (group by Backend / AI-Agentic / Frontend / 
  Data-Cloud rather than one flat list).

═══════════════════════════════════════
STEP 4 — UX & VISUAL DESIGN ENHANCEMENT
═══════════════════════════════════════
Review current look and feel (colors, typography, spacing, section 
transitions, card design, responsiveness) and improve it with 
intentional design choices — avoid generic template defaults. 
Specifically:

- Typography: check current font pairing/hierarchy; improve contrast 
  between headings and body text if the current setup feels flat.
- Project cards: add subtle hover states (lift/shadow/border-glow — 
  pick one consistent treatment), ensure tech tag chips have clear 
  visual grouping, and make the GitHub link an obvious clickable 
  element (icon + text, not just a bare URL as currently rendered).
- Section rhythm: review spacing between Hero → About → Stack → 
  Selected Work → Contact — ensure consistent vertical rhythm, not 
  cramped or unevenly spaced.
- Dark/light mode: if not already implemented, note it as an 
  optional enhancement (do not implement unless asked — flag as a 
  suggestion in your summary instead).
- Mobile responsiveness: verify project cards, nav, and hero image 
  degrade cleanly on narrow viewports — this is often the weakest 
  point in template-based portfolio sites.
- Accessibility: check color contrast ratios meet WCAG AA, ensure 
  all images have meaningful alt text (the current headshot/about 
  images should be checked), and interactive elements are keyboard-
  navigable.

Keep the existing design language recognizable — this is a refinement 
pass, not a redesign from scratch. Don't introduce a new color palette 
or layout system unless the current one has a genuine usability problem 
worth flagging first.

═══════════════════════════════════════
STEP 5 — SEO / METADATA CONSISTENCY
═══════════════════════════════════════
Update meta description, OG tags, and page title to reflect the 
updated positioning (Agentic AI direction alongside existing 
Java/Spring SDE framing)

═══════════════════════════════════════
OUTPUT
═══════════════════════════════════════
After changes, summarize: files touched, content decisions made (and 
any assumptions taken where I didn't specify), and a short list of 
optional enhancements you didn't implement but would recommend (e.g. 
dark mode, subtle scroll animations) so I can decide on those separately.