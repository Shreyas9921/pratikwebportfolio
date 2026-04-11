import type { ReactNode } from "react";
import { FaJava } from "react-icons/fa";
import {
  SiGithub,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";

type Skill = {
  name: string;
  icon: ReactNode;
  hoverClass: string;
};

const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-[#E34F26] hover:text-white",
  },
  {
    name: "React",
    icon: <SiReact className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-[#264DE4] hover:text-white",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-foreground hover:text-background",
  },
  {
    name: "Java",
    icon: <FaJava className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-[#61DAFB] hover:text-background",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-[#339933] hover:text-white",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="h-7 w-7" aria-hidden />,
    hoverClass: "hover:bg-[#3776AB] hover:text-white",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-16 sm:py-20"
      aria-labelledby="skills-heading"
    >
      <h2
        id="skills-heading"
        className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Stack &amp; tooling
      </h2>
      <p className="text-muted mb-10 max-w-3xl text-base leading-relaxed lg:max-w-4xl">
        Technologies behind my SDE work: backend services and APIs, data
        layers, modern web UIs, and day-to-day delivery with GitHub — aligned
        with Java/Spring, microservices, and cloud-oriented workflows.
      </p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
        {skills.map((skill) => (
          <li key={skill.name}>
            <div
              className={`flex items-center justify-center gap-3 rounded-xl bg-foreground px-4 py-4 text-background shadow-lg transition-transform duration-300 hover:-translate-y-0.5 ${skill.hoverClass}`}
            >
              {skill.icon}
              <span className="font-medium">{skill.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
