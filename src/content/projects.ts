export type Project = {
  id: number;
  title: string;
  pitch?: string;
  description: string;
  tags?: string[];
  gitHubLink: string;
  liveUrl?: string;
  featured?: boolean;
  status?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "MarketPulse — Agentic Market Intelligence & Risk Copilot",
    pitch: "BFSI market intelligence platform with a streaming data foundation",
    description:
      "Agentic market intelligence for banking and financial services workflows. Phase 1 complete: Finnhub ingestion through a Spring Boot core API into Oracle and Redis, with SSE-driven live prices and a Next.js analyst dashboard. Phase 2 will add Spring AI agent workers with explainability and audit-trail patterns.",
    tags: [
      "Java",
      "Spring Boot",
      "Oracle",
      "Redis",
      "Next.js",
      "SSE",
      "Agentic AI",
    ],
    gitHubLink:
      "https://github.com/Agentic-X-platform-Intelligence-System/marketpulse",
    featured: true,
    status: "Phase 1 complete · Phase 2 in planning",
  },
  {
    id: 2,
    title: "AXIS — Agentic X-platform Intelligence System",
    pitch: "Org-level agentic AI platform; Jarvis is the flagship orchestrator",
    description:
      "Python monorepo for agentic AI under the AXIS organization. Jarvis orchestrates shared stem kernel modules—hybrid LLM routing, a Pydantic tool registry, agent loop, and memory—with sub-projects for voice (Aura), RAG (Edith), research (Friday), and more. Current focus: M1 milestone (stem kernel and Jarvis CLI).",
    tags: [
      "Python",
      "Pydantic",
      "Claude",
      "Tool Use",
      "Hybrid LLM Router",
      "Voice",
    ],
    gitHubLink:
      "https://github.com/Agentic-X-platform-Intelligence-System/jarvis",
    status: "M1 in active development",
  },
  {
    id: 3,
    title: "Developer portfolio (this site)",
    pitch: "Production Next.js site deployed on Vercel",
    description:
      "This portfolio site: Next.js 15 App Router, TypeScript, Tailwind, dynamic sections, SEO metadata, sitemap, and OG image generation. Shows how I structure a deployable frontend with accessible, responsive UI.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    gitHubLink: "https://github.com/Shreyas9921/pratik-web-portfolio",
  },
];
