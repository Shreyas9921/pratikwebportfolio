"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

type DrivePreviewNavLinkProps = {
  label: string;
  viewUrl: string;
  fileId: string;
  /** Wider popover on large screens */
  wide?: boolean;
  className?: string;
};

export function DrivePreviewNavLink({
  label,
  viewUrl,
  fileId,
  wide = false,
  className = "",
}: DrivePreviewNavLinkProps) {
  const panelId = useId();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [peek, setPeek] = useState(false);
  const [pinned, setPinned] = useState(false);
  const open = peek || pinned;

  const previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;

  const closePinned = useCallback(() => setPinned(false), []);

  useEffect(() => {
    if (!pinned) return;
    const onDocPointerDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) closePinned();
    };
    document.addEventListener("pointerdown", onDocPointerDown);
    return () => document.removeEventListener("pointerdown", onDocPointerDown);
  }, [pinned, closePinned]);

  return (
    <div
      ref={wrapRef}
      className={`relative ${className}`}
      onMouseEnter={() => setPeek(true)}
      onMouseLeave={() => setPeek(false)}
    >
      <div className="flex items-center gap-1">
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-3 py-2 text-sm font-semibold text-background transition-colors hover:bg-foreground"
        >
          {label}
        </a>
        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-white/15 bg-background/80 text-foreground transition-colors hover:border-accent/50 hover:bg-white/5"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${label}: toggle preview`}
          onClick={(e) => {
            e.stopPropagation();
            setPinned((p) => !p);
          }}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>

      {open ? (
        <div
          id={panelId}
          className={`absolute left-0 top-[calc(100%+0.35rem)] z-[100] sm:left-auto sm:right-0 ${wide ? "w-[min(92vw,36rem)]" : "w-[min(92vw,28rem)]"}`}
        >
          <div
            className="overflow-hidden rounded-xl border border-white/15 bg-card shadow-2xl ring-1 ring-black/20"
            style={{ clipPath: "inset(0 round 0.75rem)" }}
          >
            <div className="flex items-center justify-between gap-2 border-b border-white/10 px-3 py-2">
              <span className="truncate text-xs font-medium text-muted">
                Preview
              </span>
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold text-accent hover:bg-white/5"
              >
                Open
                <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            </div>
            <div className="relative aspect-[4/3] w-full bg-black/40 sm:aspect-video">
              <iframe
                title={`${label} preview`}
                src={previewSrc}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function DrivePreviewNavLinkMobile({
  label,
  viewUrl,
  fileId,
}: Omit<DrivePreviewNavLinkProps, "wide" | "className">) {
  const panelId = useId();
  const [expanded, setExpanded] = useState(false);
  const previewSrc = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-background/40 p-3">
      <div className="flex items-center gap-2">
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-0 flex-1 rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-background"
          onClick={() => setExpanded(false)}
        >
          {label}
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/15 bg-background text-foreground"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={`${label}: toggle preview`}
          onClick={() => setExpanded((e) => !e)}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </div>
      {expanded ? (
        <div
          id={panelId}
          className="overflow-hidden rounded-xl border border-white/15 bg-card shadow-lg"
          style={{ clipPath: "inset(0 round 0.75rem)" }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <span className="text-xs text-muted">Preview</span>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-accent"
            >
              Open in Drive
              <ExternalLink className="h-3 w-3" aria-hidden />
            </a>
          </div>
          <div className="relative aspect-[3/4] w-full bg-black/40">
            <iframe
              title={`${label} preview`}
              src={previewSrc}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay"
              loading="lazy"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
