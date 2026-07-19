"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`${
        inView
          ? "motion-safe:animate-fade-up opacity-100"
          : "opacity-0"
      } motion-reduce:animate-none motion-reduce:opacity-100 ${className}`}
    >
      {children}
    </div>
  );
}
