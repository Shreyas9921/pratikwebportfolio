import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { SiHackerrank } from "react-icons/si";

const socialClass =
  "text-muted hover:text-accent flex h-11 w-11 items-center justify-center rounded-full border border-white/10 transition-colors";

export function Hero() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center gap-8 py-12 sm:py-16">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" aria-hidden />
        <Image
          src="/images/Pratik-Profile.jpeg"
          alt="Pratik — professional headshot"
          width={280}
          height={280}
          priority
          sizes="(max-width: 640px) 200px, 280px"
          className="relative z-10 h-[200px] w-[200px] rounded-full border-2 border-white/20 object-cover shadow-xl sm:h-[280px] sm:w-[280px]"
        />
      </div>
      <div className="mx-auto w-full max-w-3xl text-center lg:max-w-4xl xl:max-w-5xl">
        <p className="text-accent mb-4 text-[0.65rem] font-semibold uppercase leading-snug tracking-wide sm:text-xs md:text-sm">
          Software Development Engineer | Java | Spring Boot | Microservices |
          REST APIs | Cloud
        </p>
        <h1 className="text-foreground mb-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Hi, I&apos;m Pratik 👋
        </h1>
        <p className="text-muted text-lg leading-relaxed sm:text-xl">
          I&apos;m a Software Development Engineer focused on{" "}
          <span className="text-foreground/90">
            scalable backend systems and full-stack applications
          </span>
          . My work centers on Java, Spring Boot, REST APIs, and
          database-driven architectures — including microservices patterns,
          performance tuning, and secure authentication — with the same rigor I
          bring to cloud and ERP/SaaS-style delivery.
        </p>
        <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
          With a computer engineering background and CDAC&apos;s PG Diploma in
          Advanced Computing, I bridge{" "}
          <span className="text-foreground/90">
            application logic, APIs, and user-facing layers
          </span>{" "}
          to ship production-ready systems.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/Shreyas9921"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <Github className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-gade-34530718b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.hackerrank.com/profile/pratikgade0102"
            aria-label="HackerRank"
            target="_blank"
            rel="noopener noreferrer"
            className={socialClass}
          >
            <SiHackerrank className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
