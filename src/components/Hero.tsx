"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { SiHackerrank } from "react-icons/si";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center gap-8 py-12 sm:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/4 h-64 bg-accent/5 blur-3xl"
        aria-hidden
      />

      <ScrollReveal className="relative">
        <div className="relative mx-auto p-1">
          <div
            className="pointer-events-none absolute inset-0 rounded-full bg-accent/25 blur-2xl"
            aria-hidden
          />
          <div className="profile-glow relative">
            <Image
              src="/images/Profile-Pratik.jpeg"
              alt="Pratik Gade — professional headshot"
              width={280}
              height={280}
              priority
              sizes="(max-width: 640px) 200px, 280px"
              className="relative z-10 h-[200px] w-[200px] rounded-full border border-accent/50 object-cover sm:h-[280px] sm:w-[280px]"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal className="mx-auto w-full max-w-3xl text-center lg:max-w-4xl xl:max-w-5xl">
        <p className="text-accent mb-4 text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm">
          Java · Spring Boot · Agentic AI
        </p>
        <h1 className="font-display text-foreground mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m <span className="text-accent">Pratik</span>
        </h1>
        <p className="text-muted text-lg leading-[1.75] sm:text-xl">
          <strong className="font-semibold text-foreground/95">
            Software Development Engineer
          </strong>{" "}
          focused on{" "}
          <em className="italic text-foreground/90">scalable application systems</em>
          , REST APIs, and agentic AI platforms. I build with{" "}
          <strong className="font-semibold text-foreground/95">Java</strong> and{" "}
          <strong className="font-semibold text-foreground/95">
            Spring Boot
          </strong>
          —microservices, secure authentication, and database-driven
          architectures—and extend that foundation into multi-agent systems for
          BFSI and product workflows.
        </p>
        <p className="text-muted mt-4 text-base leading-[1.75] sm:text-lg">
          With a background in computer engineering and CDAC&apos;s{" "}
          <strong className="font-semibold text-foreground/95">
            PG Diploma in Advanced Computing
          </strong>
          , I connect{" "}
          <em className="italic text-foreground/90">
            application logic, APIs, and user-facing layers
          </em>{" "}
          to ship production-ready systems.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="#projects" className="btn-primary gap-2">
            View work
            <ArrowDown className="h-4 w-4" aria-hidden />
          </Link>
          <Link href="#contact" className="btn-secondary gap-2">
            <Mail className="h-4 w-4" aria-hidden />
            Contact
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Shreyas9921"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Github className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-gade-34530718b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.hackerrank.com/profile/pratikgade0102"
            aria-label="HackerRank"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill"
          >
            <SiHackerrank className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
