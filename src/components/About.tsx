"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) setInView(true);
    const onMq = () => {
      if (mq.matches) setInView(true);
    };
    mq.addEventListener("change", onMq);

    const el = sectionRef.current;
    if (!el) return () => mq.removeEventListener("change", onMq);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => {
      mq.removeEventListener("change", onMq);
      io.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-16 sm:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-white/[0.03] blur-3xl"
        aria-hidden
      />

      <div className="relative">
        <div className="mb-3 h-1 w-12 rounded-full bg-accent" aria-hidden />
        <h2
          id="about-heading"
          className="mb-2 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl"
        >
          About
        </h2>
        <p className="text-muted mb-10 max-w-3xl text-sm leading-relaxed sm:text-base lg:max-w-4xl">
          Backend-first SDE work, full-stack delivery, and how I think about
          production systems.
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div
            className={`lg:col-span-7 ${
              inView
                ? "motion-safe:animate-about-in-left opacity-100"
                : "opacity-0"
            } motion-reduce:animate-none motion-reduce:opacity-100`}
          >
            <div className="space-y-6 border-l-2 border-accent/40 pl-5 sm:pl-6">
              <p className="text-base leading-[1.75] text-foreground/90 sm:text-lg">
                Software Development Engineer with experience designing and
                building scalable, reliable backend systems using{" "}
                <strong className="font-semibold text-foreground">Java</strong>{" "}
                and{" "}
                <strong className="font-semibold text-foreground">
                  Spring Boot
                </strong>
                . I develop RESTful APIs, improve database performance where it
                matters, and implement secure authentication patterns. I focus
                on clean, maintainable solutions and on continuously improving
                system performance, scalability, and code quality — including work
                in{" "}
                <strong className="font-semibold text-foreground">
                  cloud and ERP/SaaS
                </strong>{" "}
                contexts.
              </p>
              <p className="text-base leading-[1.75] text-foreground/90 sm:text-lg">
                With a strong foundation in computer engineering and full-stack
                fundamentals, I work across application logic, APIs, and
                user-facing components to deliver efficient, production-ready
                systems. I completed CDAC&apos;s{" "}
                <strong className="font-semibold text-foreground">
                  PG Diploma in Advanced Computing
                </strong>
                , strengthening software engineering, system design, and modern
                development practices. I keep growing in the{" "}
                <strong className="font-semibold text-foreground">
                  Java &amp; Spring ecosystem
                </strong>
                ,{" "}
                <strong className="font-semibold text-foreground">React</strong>,{" "}
                <strong className="font-semibold text-foreground">Next.js</strong>
                ,{" "}
                <strong className="font-semibold text-foreground">
                  SQL/NoSQL databases
                </strong>
                , and cloud technologies — applying new tools and best practices on
                real projects.
              </p>
              <p className="rounded-lg bg-card/60 py-4 pl-0 pr-4 text-base leading-[1.75] text-foreground/85 sm:text-lg">
                I aim for systems that are{" "}
                <span className="text-accent">observable</span>,{" "}
                <span className="text-accent">testable</span>, and straightforward
                to extend: clear service boundaries, thoughtful error handling, and
                documentation that helps the next engineer move fast without
                breaking production.
              </p>
            </div>
          </div>

          <div
            className={`relative lg:col-span-5 ${
              inView
                ? "motion-safe:animate-about-in-right opacity-100"
                : "opacity-0"
            } motion-reduce:animate-none motion-reduce:opacity-100`}
          >
            <div className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/40 via-white/10 to-transparent opacity-80 blur-sm"
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-card/30 shadow-2xl ring-1 ring-white/10">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/about.jpg"
                    alt="Pratik working and learning"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center grayscale transition-[filter,transform] duration-700 ease-out hover:scale-[1.03] hover:grayscale-0"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
                    aria-hidden
                  />
                </div>

                <div
                  className={`absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-white/20 bg-background/85 p-4 shadow-xl backdrop-blur-md ${
                    inView
                      ? "motion-safe:animate-window-pop opacity-100"
                      : "translate-y-4 scale-95 opacity-0"
                  } motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:animate-none motion-reduce:opacity-100`}
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-accent">
                    Snapshot
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    SDE · APIs · microservices · cloud
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
