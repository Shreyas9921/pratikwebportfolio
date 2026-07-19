import { Github, Linkedin } from "lucide-react";
import { SiHackerrank } from "react-icons/si";
import { formatFooterDate } from "@/lib/formatFooterDate";

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
            className="social-pill h-10 w-10"
          >
            <Github className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-gade-34530718b"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill h-10 w-10"
          >
            <Linkedin className="h-5 w-5" aria-hidden />
          </a>
          <a
            href="https://www.hackerrank.com/profile/pratikgade0102"
            aria-label="HackerRank"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill h-10 w-10"
          >
            <SiHackerrank className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
