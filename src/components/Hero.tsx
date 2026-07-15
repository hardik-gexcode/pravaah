import HeroScene from "./HeroScene";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 opacity-90">
        <HeroScene />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[var(--color-cream)]/10 via-transparent to-[var(--color-cream)]" />

      <div className="relative mx-auto max-w-7xl w-full px-6 md:px-10">
        <p className="text-[12px] md:text-[13px] font-medium uppercase tracking-[0.28em] text-[var(--color-gold)] mb-6">
          NABARD Hackathon &nbsp;·&nbsp; Global FinTech Fest 2026
        </p>
        <h1 className="font-display font-semibold text-[15vw] leading-[0.92] md:text-[7.2rem] text-[var(--color-navy)] tracking-tight">
          PRAVAAH
        </h1>
        <p className="font-display italic text-2xl md:text-3xl text-[var(--color-gold)] mt-2 mb-6">प्रवाह</p>

        <div className="max-w-2xl">
          <p className="text-lg md:text-xl text-[var(--color-ink)] leading-relaxed mb-3">
            AI-driven cash flow prediction &amp; risk flagging intelligence for rural micro
            enterprises.
          </p>
          <p className="text-[15px] md:text-base italic text-[var(--color-terracotta)] leading-relaxed">
            Where financial ledgers, digital payment signals, market intelligence and climate
            data converge into one trusted current of insight.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#demo"
            data-cursor-hover
            className="px-6 py-3.5 rounded-full bg-[var(--color-navy)] text-[var(--color-cream)] text-sm font-medium tracking-wide hover:bg-[var(--color-navy-deep)] transition-colors"
          >
            Explore The Live Demo
          </a>
          <a
            href="#how-it-works"
            data-cursor-hover
            className="px-6 py-3.5 rounded-full border border-[var(--color-navy)]/30 text-[var(--color-navy)] text-sm font-medium tracking-wide hover:border-[var(--color-navy)] transition-colors"
          >
            How It Works
          </a>
        </div>

        <div className="mt-14 flex items-center gap-3 text-[13px] text-[var(--color-mute)] font-mono-data">
          <span>Team PRAVAAH — Hardik Gupta (Lead) · Mishika Sharma · Makshita Saini · Hanish Jain</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--color-mute)] animate-bounce">
        <ChevronDown size={18} strokeWidth={1.5} />
      </div>
    </section>
  );
}
