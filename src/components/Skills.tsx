"use client";

import type { ReactNode } from "react";
import { FaDatabase, FaJava, FaPython } from "react-icons/fa";
import {
  SiAnthropic,
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiOpenai,
  SiReact,
  SiRedis,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import { ScrollReveal } from "@/components/ScrollReveal";

type Skill = {
  name: string;
  icon: ReactNode;
  hoverClass: string;
};

type SkillGroup = {
  title: string;
  skills: Skill[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        icon: <FaJava className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#ED8B00] hover:text-white",
      },
      {
        name: "Spring Boot",
        icon: <SiSpringboot className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#6DB33F] hover:text-white",
      },
      {
        name: "Spring",
        icon: <SiSpring className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#6DB33F] hover:text-white",
      },
      {
        name: "Oracle",
        icon: <FaDatabase className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#F80000] hover:text-white",
      },
    ],
  },
  {
    title: "AI & Agentic",
    skills: [
      {
        name: "Python",
        icon: <FaPython className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#3776AB] hover:text-white",
      },
      {
        name: "Spring AI",
        icon: <SiSpring className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#6DB33F] hover:text-white",
      },
      {
        name: "Agentic AI",
        icon: <SiOpenai className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#412991] hover:text-white",
      },
      {
        name: "Claude / LLM",
        icon: <SiAnthropic className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#D97757] hover:text-white",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#F7DF1E] hover:text-background",
      },
      {
        name: "React",
        icon: <SiReact className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#61DAFB] hover:text-background",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-foreground hover:text-background",
      },
    ],
  },
  {
    title: "Data & DevOps",
    skills: [
      {
        name: "Redis",
        icon: <SiRedis className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#DC382D] hover:text-white",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="h-7 w-7" aria-hidden />,
        hoverClass: "hover:bg-[#24292F] hover:text-white",
      },
    ],
  },
];

function SkillTile({ skill }: { skill: Skill }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-card px-4 py-4 text-foreground shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:shadow-accent-glow ${skill.hoverClass}`}
    >
      {skill.icon}
      <span className="font-medium">{skill.name}</span>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-shell"
      aria-labelledby="skills-heading"
    >
      <ScrollReveal>
        <div className="accent-bar" aria-hidden />
        <h2 id="skills-heading" className="section-heading mb-2">
          Stack &amp; tooling
        </h2>
        <p className="section-intro">
          Technologies I use across backend services, agentic AI platforms, modern
          web UIs, and data layers—grouped by role on projects such as{" "}
          <strong className="font-semibold text-foreground">MarketPulse</strong>{" "}
          and{" "}
          <strong className="font-semibold text-foreground">AXIS</strong>.
        </p>
      </ScrollReveal>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <ScrollReveal key={group.title}>
            <div>
              <h3 className="text-accent mb-4 text-sm font-semibold uppercase tracking-widest">
                {group.title}
              </h3>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <SkillTile skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
