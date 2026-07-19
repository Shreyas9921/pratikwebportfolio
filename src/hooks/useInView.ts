"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const { threshold = 0.08, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setInView(true);
    }

    const onMq = () => {
      if (mq.matches) {
        setInView(true);
      }
    };
    mq.addEventListener("change", onMq);

    const el = ref.current;
    if (!el) {
      return () => mq.removeEventListener("change", onMq);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);

    return () => {
      mq.removeEventListener("change", onMq);
      io.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref, inView };
}
