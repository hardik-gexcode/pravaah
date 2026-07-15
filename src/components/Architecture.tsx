import { PiggyBank, Waves, Store, CloudRain, ArrowRight, Settings2, User, Users } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const inputs = [
  { icon: PiggyBank, label: "Financial Ledger" },
  { icon: Waves, label: "UPI Proxy Signals" },
  { icon: Store, label: "Market Intelligence" },
  { icon: CloudRain, label: "Climate Data" },
];

const outputs = [
  { icon: User, label: "Udyami App", desc: "Risk alerts + suggestions for the enterprise" },
  { icon: Users, label: "Field Officer Console", desc: "Portfolio risk panel + forecast view" },
];

export default function Architecture() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="How It Works" title="From four raw signals to one field-ready decision" />

        <div className="mt-16 grid lg:grid-cols-[1fr_auto_1.1fr_auto_1fr] gap-6 items-center">
          {/* inputs */}
          <div className="space-y-3">
            {inputs.map((inp, i) => (
              <Reveal key={inp.label} delay={i * 0.06}>
                <div className="flex items-center gap-3 bg-[var(--color-cream-deep)] border border-[var(--color-line)] rounded-xl px-4 py-3.5">
                  <div className="h-9 w-9 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                    <inp.icon size={16} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-navy)]">{inp.label}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <ArrowRight className="hidden lg:block text-[var(--color-gold-light)] mx-auto" size={28} strokeWidth={1.25} />

          {/* engine */}
          <Reveal delay={0.15}>
            <div className="bg-[var(--color-sand)] border border-[var(--color-line)] rounded-2xl p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-gold)] mb-4">
                PRAVAAH AI Engine
              </p>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-11 w-11 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                  <Settings2 size={18} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                </div>
                <p className="text-[13px] text-[var(--color-mute)] leading-snug">
                  Feature fusion across ledgers, payments, market &amp; climate proxies
                </p>
              </div>
              <div className="hr-line mb-4" />
              <p className="text-sm font-semibold text-[var(--color-navy)]">Cash-Flow Forecasting Model</p>
              <p className="text-xs text-[var(--color-mute)] mb-4">3–6 month rolling prediction, per enterprise</p>
              <div className="hr-line mb-4" />
              <p className="text-sm font-semibold text-[var(--color-navy)]">Composite Risk Engine</p>
              <p className="text-xs text-[var(--color-mute)] mb-4">Sector-tuned liquidity, market &amp; climate risk</p>
              <p className="font-display font-semibold text-[var(--color-gold)]">→ PRAVAAH Score (0–100)</p>
            </div>
          </Reveal>

          <ArrowRight className="hidden lg:block text-[var(--color-gold-light)] mx-auto" size={28} strokeWidth={1.25} />

          {/* outputs */}
          <div className="space-y-4">
            {outputs.map((o, i) => (
              <Reveal key={o.label} delay={0.2 + i * 0.08}>
                <div className="bg-[var(--color-cream-deep)] border border-[var(--color-line)] rounded-xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-9 w-9 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center shrink-0">
                      <o.icon size={16} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                    </div>
                    <span className="text-sm font-semibold text-[var(--color-navy)]">{o.label}</span>
                  </div>
                  <p className="text-xs text-[var(--color-mute)] leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center text-sm italic text-[var(--color-mute)] max-w-2xl mx-auto">
            A continuous feedback loop: every repayment, alert response and season closes back into
            the model — the forecast sharpens with every cycle.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
