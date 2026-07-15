import { Milk, Egg, Factory, Flower2, Store } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Milk, name: "Dairy", desc: "Fodder cost swings & milk yield seasonality" },
  { icon: Egg, name: "Poultry", desc: "Feed price volatility & disease-cycle exposure" },
  { icon: Factory, name: "Food Processing", desc: "Raw material sourcing & perishability windows" },
  { icon: Flower2, name: "Handicrafts", desc: "Demand seasonality & export order cycles" },
  { icon: Store, name: "Rural Retail", desc: "Footfall trends & local purchasing power shifts" },
];

export default function Sectors() {
  return (
    <section id="sectors" className="relative py-24 md:py-32 px-6 md:px-10 bg-[var(--color-sand)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Precision, Not Averages" title="Risk that understands the sector it's scoring" />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.name} delay={i * 0.06}>
              <div
                data-cursor-hover
                className={`h-full rounded-2xl p-6 border border-[var(--color-line)] hover:-translate-y-1.5 transition-transform duration-300 ${
                  i % 2 === 0 ? "bg-[var(--color-cream)]" : "bg-[var(--color-cream-deep)]"
                }`}
              >
                <div className="h-12 w-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center mb-5">
                  <it.icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                </div>
                <h3 className="font-display text-base font-semibold text-[var(--color-navy)] mb-2">{it.name}</h3>
                <p className="text-[13px] text-[var(--color-mute)] leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-center font-medium text-[var(--color-gold)] italic">
            Each sector carries its own feature weights and alert thresholds inside the same
            PRAVAAH Score — no generic, one-size-fits-all model.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
