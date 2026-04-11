export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 py-16 pb-24 sm:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center lg:max-w-3xl">
        <h2
          id="contact-heading"
          className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Let&apos;s talk
        </h2>
        <p className="text-muted mb-8 text-base leading-relaxed sm:text-lg">
          If you&apos;re hiring for backend, full-stack, or platform-facing SDE
          work — especially around Java, Spring Boot, APIs, or cloud — I&apos;d
          like to hear from you. Send a brief note with the role and tech stack;
          I&apos;ll reply with availability and relevant experience. General
          questions welcome in the same inbox.
        </p>
        <a
          href="mailto:pratikgade0102@gmail.com"
          className="rounded-md bg-accent px-6 py-3 text-base font-semibold text-background transition-colors hover:bg-foreground"
        >
          Email Pratik
        </a>
      </div>
    </section>
  );
}
