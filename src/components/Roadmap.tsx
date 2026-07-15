import { Lightbulb, Settings2, Rocket, Flag } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { roadmap } from "../data/content";

const icons = [Lightbulb, Settings2, Rocket, Flag];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 md:py-32 px-6 md:px-10 bg-[var(--color-sand)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Roadmap & The Ask" title="From idea to a live pilot with NABARD" />

        <div className="mt-16 grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-[var(--color-gold-light)]" />
          {roadmap.map((r, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-12 w-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center mb-5 relative z-10">
                  <Icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-gold)] font-semibold mb-1.5">{r.phase}</p>
                <h3 className="font-display text-base font-semibold text-[var(--color-navy)] mb-2 leading-snug">{r.title}</h3>
                <p className="text-[13px] text-[var(--color-mute)] leading-relaxed">{r.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="hr-line my-16" />

        <Reveal className="max-w-3xl">
          <p className="font-display italic text-xl md:text-2xl text-[var(--color-navy)] leading-snug">
            PRAVAAH is a currency of trust — turning data rural India already generates into
            credit rural India has always deserved.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
