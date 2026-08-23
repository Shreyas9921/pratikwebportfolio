"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  DrivePreviewNavLink,
  DrivePreviewNavLinkMobile,
} from "@/components/DrivePreviewNavLink";

const resumeViewUrl =
  "https://drive.google.com/file/d/1aPmJ5wa_3igAw4DBk_9QBN8BoIbLtQuh/view?usp=sharing";
const resumeFileId = "1xpcU2Ru2CHplCMJBoPGAO4_6vp-u6m1F";

const academiaViewUrl =
  "https://drive.google.com/file/d/1qT2-6n1C46NMMAVGQ_IKeh1CRfJXhkas/view?usp=sharing";
const academiaFileId = "1qT2-6n1C46NMMAVGQ_IKeh1CRfJXhkas";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function closeMenu(setOpen: (value: boolean) => void) {
  setOpen(false);
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display flex min-w-0 items-center gap-2 text-lg font-semibold italic text-foreground transition-opacity hover:opacity-90"
          onClick={() => closeMenu(setOpen)}
        >
          <Image
            src="/images/phoenix.jpg"
            alt="Pratik Gade portfolio logo"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
            priority
          />
          <span className="truncate text-base sm:text-lg">
            Pratik Gade
            <span className="text-muted font-normal"> · Portfolio</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:gap-2 xl:flex"
          aria-label="Primary"
        >
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-anchor">
              {link.label}
            </a>
          ))}
          <span className="mx-1 h-4 w-px bg-white/15" aria-hidden />
          <DrivePreviewNavLink
            label="Resume/CV"
            viewUrl={resumeViewUrl}
            fileId={resumeFileId}
            wide
          />
          <DrivePreviewNavLink
            label="Academia"
            viewUrl={academiaViewUrl}
            fileId={academiaFileId}
          />
        </nav>

        <button
          type="button"
          className="inline-flex rounded-md p-2 text-foreground xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4 xl:hidden"
          aria-label="Mobile"
        >
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-anchor px-1 py-2"
              onClick={() => closeMenu(setOpen)}
            >
              {link.label}
            </a>
          ))}
          <DrivePreviewNavLinkMobile
            label="Resume/CV"
            viewUrl={resumeViewUrl}
            fileId={resumeFileId}
          />
          <DrivePreviewNavLinkMobile
            label="Academia"
            viewUrl={academiaViewUrl}
            fileId={academiaFileId}
          />
        </nav>
      ) : null}
    </header>
  );
}
