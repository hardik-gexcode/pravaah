import { AlertCircle, MapPin, TrendingDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { problemStats, problemPoints } from "../data/content";

const icons = [AlertCircle, TrendingDown, MapPin];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Problem"
          title="Rural enterprise is thriving. Rural credit assessment is still standing still."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-px bg-[var(--color-line)] rounded-2xl overflow-hidden">
          {problemStats.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="bg-[var(--color-cream-deep)] p-8 md:p-10">
              <p className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-navy)] mb-4">{s.n}</p>
              <p className="text-[15px] text-[var(--color-mute)] leading-relaxed">{s.d}</p>
            </Reveal>
          ))}
        </div>

        <div className="hr-line my-16" />

        <div className="grid md:grid-cols-3 gap-10">
          {problemPoints.map((p, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-11 w-11 rounded-full bg-[var(--color-sand)] flex items-center justify-center">
                    <Icon size={19} strokeWidth={1.5} className="text-[var(--color-navy)]" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--color-navy)]">{p.title}</h3>
                </div>
                <p className="text-[15px] text-[var(--color-mute)] leading-relaxed">{p.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
