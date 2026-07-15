import { TrendingUp, Handshake, Database, Target } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { impactPoints } from "../data/content";

const icons = [TrendingUp, Handshake, Database, Target];

export default function Impact() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why NABARD Wins Too" title="From grant-based support to credit-led development" />

        <div className="mt-14 grid md:grid-cols-2 gap-x-10 gap-y-10">
          {impactPoints.map((v, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={v.title} delay={i * 0.07} className="flex gap-5">
                <div className="h-12 w-12 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center shrink-0">
                  <Icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-navy)] mb-1.5">{v.title}</h3>
                  <p className="text-sm text-[var(--color-mute)] leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
