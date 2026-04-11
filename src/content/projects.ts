export type Project = {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Developer portfolio (this site)",
    description:
      "Production-oriented Next.js 15 App Router site with TypeScript, Tailwind, dynamic sections, and SEO (metadata, sitemap, OG). Demonstrates how I structure a real deployable frontend on Vercel.",
    gitHubLink: "https://github.com/Shreyas9921/pratik-web-portfolio",
  },
  {
    id: 2,
    title: "Books library API",
    description:
      "Spring Boot REST API for a book catalogue — controllers, persistence, and service-style layering as a foundation for CRUD and future auth or pagination.",
    gitHubLink: "https://github.com/Shreyas9921/book-store-appy",
  },
  {
    id: 3,
    title: "E-commerce UX study (DhiWise-inspired)",
    description:
      "Design-to-build exploration of a low-code style commerce flow: component hierarchy, screens, and UX decisions translated into a concrete UI codebase on GitHub.",
    gitHubLink: "https://github.com/Shreyas9921/DhiWise-Ecommerce",
  },
  {
    id: 4,
    title: "FarmFresh — CDAC e-commerce capstone",
    description:
      "Team-style full-stack slice: React + Bootstrap storefront with a Java/Spring Boot backend — inventory, orders, and integration patterns typical of a real MVP.",
    gitHubLink: "https://github.com/CDAC-Project-FarmFresh/farmfresh-project",
  },
];
