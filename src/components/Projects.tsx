"use client";

import { ExternalLink, FolderOpen, Github } from "lucide-react";
import { projects } from "@/content/projects";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="section-shell"
      aria-labelledby="projects-heading"
    >
      <ScrollReveal>
        <div className="accent-bar" aria-hidden />
        <h2 id="projects-heading" className="section-heading mb-2">
          Selected work
        </h2>
        <p className="section-intro">
          Representative work in BFSI market intelligence, agentic AI, and
          production frontends—each with source available on GitHub.
        </p>
      </ScrollReveal>

      <ul className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={project.featured ? "md:col-span-2" : undefined}
          >
            <ScrollReveal>
              <article
                className={`group flex h-full flex-col rounded-xl border border-white/10 bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-accent-glow ${
                  project.featured ? "md:p-8" : ""
                }`}
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <FolderOpen
                    className="h-9 w-9 shrink-0 text-accent"
                    aria-hidden
                  />
                  {project.status ? (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {project.status}
                    </span>
                  ) : null}
                </div>

                <h3
                  className={`font-display mb-1 font-semibold text-foreground ${
                    project.featured ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  {project.title}
                </h3>

                {project.pitch ? (
                  <p className="text-accent mb-3 text-sm font-medium">
                    {project.pitch}
                  </p>
                ) : null}

                <p className="text-muted flex-1 text-sm leading-relaxed sm:text-base">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <span className="rounded-md border border-white/10 bg-background/50 px-2.5 py-1 text-xs font-medium text-foreground/90">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                  >
                    <Github className="h-4 w-4" aria-hidden />
                    View on GitHub
                  </a>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden />
                      Live demo
                    </a>
                  ) : null}
                </div>
              </article>
            </ScrollReveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
