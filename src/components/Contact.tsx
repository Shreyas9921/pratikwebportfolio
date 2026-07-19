"use client";

import { Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-shell pb-24"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal className="mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:max-w-3xl">
        <div className="accent-bar mx-auto" aria-hidden />
        <h2 id="contact-heading" className="section-heading mb-4">
          Let&apos;s talk
        </h2>
        <p className="text-muted mb-8 text-base leading-[1.75] sm:text-lg">
          If you&apos;re looking for a SDE full-stack, or agentic AI roles—especially around{" "}
          <strong className="font-semibold text-foreground/95">
            Java, Spring Boot, APIs, or BFSI platforms
          </strong>
          ? Send a brief note with the role and stack; I&apos;d like to hear about it and will reply with
          relevant experience and mutual interest.
        </p>
        <a
          href="mailto:pratikgade0102@gmail.com"
          className="btn-primary gap-2"
        >
          <Mail className="h-4 w-4" aria-hidden />
          Email Pratik
        </a>
      </ScrollReveal>
    </section>
  );
}
