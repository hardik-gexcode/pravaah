import { WifiOff, PhoneCall, Globe2, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { inclusiveFeatures } from "../data/content";

const iconMap: Record<string, any> = { WifiOff, PhoneCall, Globe2, ShieldCheck };

export default function Offline() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Designed For The Last Mile" title="Built for Bharat: offline-first, privacy-first" />

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {inclusiveFeatures.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal key={f.title} delay={i * 0.07}>
                <div className="flex gap-5 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream-deep)] p-6 md:p-7">
                  <div className="h-12 w-12 rounded-full bg-[var(--color-navy)] flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={1.5} className="text-[var(--color-cream)]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--color-navy)] mb-1.5">{f.title}</h3>
                    <p className="text-sm text-[var(--color-mute)] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
