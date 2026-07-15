import { useEffect, useState } from "react";

const LINKS = [
  { href: "#opportunity", label: "Opportunity" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#demo", label: "Live Demo" },
  { href: "#model", label: "Business Model" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[var(--color-cream)]/90 backdrop-blur-md border-b border-[var(--color-line)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a href="#top" data-cursor-hover className="font-display text-xl md:text-2xl font-semibold text-[var(--color-navy)] tracking-tight">
          PRAVAAH
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-cursor-hover
              className="text-[13px] uppercase tracking-[0.12em] text-[var(--color-ink)]/75 hover:text-[var(--color-navy)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#demo"
          data-cursor-hover
          className="text-[13px] font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] hover:bg-[var(--color-navy-deep)] transition-colors"
        >
          See It Work
        </a>
      </div>
    </header>
  );
}
