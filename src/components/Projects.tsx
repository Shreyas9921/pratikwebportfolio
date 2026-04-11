import { FolderOpen, Github } from "lucide-react";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 py-16 sm:py-20"
      aria-labelledby="projects-heading"
    >
      <h2
        id="projects-heading"
        className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Selected work
      </h2>
      <p className="text-muted mb-10 max-w-3xl text-base leading-relaxed lg:max-w-4xl">
        Hands-on work spanning REST APIs, Spring-style backends, and React/Next
        front ends — representative of how I build and document software in
        enterprise-style and product settings. Each card links to source on
        GitHub.
      </p>
      <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {projects.map((project) => (
          <li key={project.id}>
            <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-card/50 p-6 transition-colors hover:border-accent/40">
              <div className="mb-4 flex items-start justify-between gap-3">
                <FolderOpen
                  className="h-9 w-9 shrink-0 text-accent"
                  aria-hidden
                />
                <a
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent rounded-md p-1 transition-colors"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="text-muted flex-1 text-sm leading-relaxed">
                {project.description}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
