"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export function About() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="about"
      className="section-shell relative overflow-hidden"
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
        <div className="accent-bar" aria-hidden />
        <h2 id="about-heading" className="section-heading mb-2">
          About
        </h2>
        <p className="section-intro">
          SDE contribution to full-stack delivery, and design of software systems built to scale with robust and observable capabilities.
        </p>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div
            className={`lg:col-span-7 ${
              inView
                ? "motion-safe:animate-about-in-left opacity-100"
                : "opacity-0"
            } motion-reduce:animate-none motion-reduce:opacity-100`}
          >
            <div className="space-y-8 border-l-2 border-accent/30 pl-5 sm:pl-7">
              <p className="about-lead">
                I&apos;m a Software Development Engineer who builds{" "}
                <strong className="font-semibold">API Services</strong> and{" "}
                <strong className="font-semibold">agentic AI platforms</strong>
                and connects them to modern UI, along with secure and efficient data layers,
                all tuned for production workloads.
              </p>

              <p className="about-body">
                Trained in computer science engineering and CDAC&apos;s{" "}
                <strong className="font-semibold text-foreground">
                  certification in Advanced Computing
                </strong>
                , I work comfortably from service logic through to user-facing
                layers in <em className="italic">cloud and SaaS</em>{" "}
                environments—prioritizing maintainability, performance, and
                clear system boundaries.
              </p>

              <p className="about-body">
                My current focus is{" "}
                <strong className="font-semibold text-foreground">
                  agentic AI engineering
                </strong>
                : multi-agent platforms such as{" "}
                <strong className="font-semibold text-foreground">AXIS</strong>{" "}
                and BFSI market intelligence with{" "}
                <strong className="font-semibold text-foreground">
                  MarketPulse
                </strong>
                , where explainability, audit trails, and resilient service
                design carry equal weight with model capability.
              </p>

              <blockquote className="about-principle">
                <p className="about-principle-label">How I build</p>
                <p className="about-body mb-0 text-foreground/90">
                  Systems should be{" "}
                  <span className="font-display font-semibold text-accent">
                    observable
                  </span>
                  ,{" "}
                  <span className="font-display font-semibold text-accent">
                    testable
                  </span>
                  , and straightforward to extend—through thoughtful error
                  handling, clean service boundaries, and documentation the next
                  engineer can trust.
                </p>
              </blockquote>
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
              <div className="photo-glow-frame relative overflow-hidden rounded-2xl border border-accent/30 bg-card/30 shadow-2xl ring-1 ring-accent/25">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4] lg:aspect-[4/5]">
                  <Image
                    src="/images/about.jpg"
                    alt="Pratik at work — coding and learning"
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
                  className={`absolute bottom-4 left-4 right-4 z-10 rounded-xl border border-accent/25 bg-background/90 p-4 shadow-xl backdrop-blur-md ${
                    inView
                      ? "motion-safe:animate-window-pop opacity-100"
                      : "translate-y-4 scale-95 opacity-0"
                  } motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:animate-none motion-reduce:opacity-100`}
                >
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                    Snapshot
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    SDE · APIs · Agentic AI · BFSI
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
