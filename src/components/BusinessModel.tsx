import { Landmark, HandCoins, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { businessModel } from "../data/content";

const iconMap: Record<string, any> = { Landmark, HandCoins, BadgeCheck };

export default function BusinessModel() {
  return (
    <section id="model" className="relative py-24 md:py-32 px-6 md:px-10 bg-[var(--color-sand)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Path To Scale"
          title="A lean SaaS layer, not a rip-and-replace system"
          desc="PRAVAAH sits on top of existing banking correspondent and core-banking rails — priced and packaged to move from a NABARD-backed pilot to self-sustaining institutional revenue."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {businessModel.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="h-12 w-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[var(--color-navy)] mb-2">{b.title}</h3>
                <p className="text-sm text-[var(--color-mute)] leading-relaxed">{b.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="hr-line my-14" />
        <Reveal className="max-w-3xl">
          <p className="italic text-[var(--color-mute)] leading-relaxed">
            Commercial logic: every basis point of reduced credit-appraisal cost and every
            prevented default is a measurable, billable outcome for the partner institution.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
