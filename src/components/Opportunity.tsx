import { PiggyBank, Waves, Store, CloudRain, Plus } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { dataSources } from "../data/content";

const iconMap: Record<string, any> = { PiggyBank, Waves, Store, CloudRain };

export default function Opportunity() {
  return (
    <section id="opportunity" className="relative py-24 md:py-32 px-6 md:px-10 bg-[var(--color-sand)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Opportunity"
          title="The data ecosystem already exists. No one has made it flow together."
          desc="UPI has turned even the smallest rural transaction into a digital footprint. Mandi prices, crop productivity records and weather advisories are publicly available. What is missing isn't data — it is a system that reads all four streams as one story."
        />

        <div className="mt-14 flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
          {dataSources.map((d, i) => {
            const Icon = iconMap[d.icon];
            return (
              <div key={d.id} className="flex items-center gap-2 flex-1">
                <Reveal delay={i * 0.08} className="flex-1">
                  <div
                    data-cursor-hover
                    className="h-full bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-7 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(27,42,74,0.25)] transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center mb-6">
                      <Icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[var(--color-navy)] mb-2">{d.title}</h3>
                    <p className="text-sm text-[var(--color-mute)] leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
                {i < dataSources.length - 1 && (
                  <Plus size={20} strokeWidth={1.5} className="hidden md:block text-[var(--color-gold)] shrink-0" />
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center font-display italic text-lg text-[var(--color-terracotta)]">
          Four streams. One converged forecast — PRAVAAH.
        </p>
      </div>
    </section>
  );
}
