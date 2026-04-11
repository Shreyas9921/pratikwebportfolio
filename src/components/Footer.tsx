import { Github, Linkedin } from "lucide-react";
import { SiHackerrank } from "react-icons/si";
import { formatFooterDate } from "@/lib/formatFooterDate";

const socialClass =
  "text-muted hover:text-foreground flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors";

export function Footer() {
  const formatted = formatFooterDate(new Date());

  return (
    <footer className="mt-auto border-t border-white/10 py-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-center text-sm text-muted">
          © Pratik Gade · {formatted}
        </p>
        <div className="flex items-center gap-2">
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
    </footer>
  );
}
