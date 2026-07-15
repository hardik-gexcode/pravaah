import { useState } from "react";
import { Bell, Wallet, TrendingUp, Plus, Minus, Wifi, Battery, Signal, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { sectors, fieldOfficerPortfolio } from "../data/content";

const bandColor: Record<string, string> = {
  Healthy: "#4C7A5E",
  Watch: "#A97A2F",
  "At Risk": "#A3512E",
};

function PhoneMock() {
  const me = sectors[0];
  return (
    <div className="mx-auto w-[300px] rounded-[2.5rem] border-[10px] border-[var(--color-navy)] bg-[var(--color-cream)] shadow-[0_30px_60px_-25px_rgba(27,42,74,0.35)] overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-[var(--color-navy)]">
        <span className="font-mono-data">9:41</span>
        <div className="flex items-center gap-1">
          <Signal size={11} /> <Wifi size={11} /> <Battery size={11} />
        </div>
      </div>
      <div className="px-5 pt-3 pb-6">
        <p className="text-[11px] text-[var(--color-mute)]">नमस्ते, Lakshmi Dairy SHG</p>
        <h4 className="font-display text-lg font-semibold text-[var(--color-navy)] mb-4">Udyami App</h4>

        <div className="rounded-2xl bg-[var(--color-sand)] p-4 mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[11px] text-[var(--color-mute)]">Your PRAVAAH Score</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: `${bandColor[me.band]}22`, color: bandColor[me.band] }}>
              {me.band}
            </span>
          </div>
          <p className="font-display text-3xl font-semibold text-[var(--color-navy)]">{me.score}</p>
        </div>

        <div className="rounded-2xl border border-[var(--color-terracotta)]/30 bg-[var(--color-terracotta)]/[0.06] p-4 mb-3 flex gap-3">
          <Bell size={16} className="text-[var(--color-terracotta)] shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="text-[12px] font-semibold text-[var(--color-navy)] mb-0.5">Buffer looks thin for August</p>
            <p className="text-[11px] text-[var(--color-mute)] leading-snug">
              Fodder costs are rising. Consider a smaller withdrawal this cycle.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <button data-cursor-hover className="flex items-center justify-center gap-1.5 rounded-xl bg-[var(--color-navy)] text-[var(--color-cream)] text-[11px] font-medium py-2.5">
            <Plus size={13} /> Add Savings
          </button>
          <button data-cursor-hover className="flex items-center justify-center gap-1.5 rounded-xl border border-[var(--color-line)] text-[var(--color-navy)] text-[11px] font-medium py-2.5">
            <Minus size={13} /> Add Expense
          </button>
        </div>

        <div className="flex items-center gap-2.5 text-[11px] text-[var(--color-mute)]">
          <Wallet size={13} /> <span>Voice entry available in Hindi</span>
        </div>
      </div>
    </div>
  );
}

function ConsoleMock() {
  const [sel, setSel] = useState(fieldOfficerPortfolio[0].name);
  const detail = sectors.find((s) => s.enterprise === sel)!;

  return (
    <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] shadow-[0_30px_60px_-25px_rgba(27,42,74,0.2)] overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-line)]">
        <div>
          <p className="text-[11px] text-[var(--color-mute)] uppercase tracking-wide">Field Officer Console</p>
          <h4 className="font-display text-lg font-semibold text-[var(--color-navy)]">Portfolio Overview</h4>
        </div>
        <TrendingUp size={20} className="text-[var(--color-gold)]" strokeWidth={1.5} />
      </div>

      <div className="grid md:grid-cols-[1.3fr_1fr]">
        <div className="divide-y divide-[var(--color-line)]">
          {fieldOfficerPortfolio.map((row) => (
            <button
              key={row.name}
              data-cursor-hover
              onClick={() => setSel(row.name)}
              className={`w-full flex items-center justify-between px-6 py-3.5 text-left transition-colors ${
                sel === row.name ? "bg-[var(--color-sand)]" : "hover:bg-[var(--color-sand)]/50"
              }`}
            >
              <div>
                <p className="text-[13px] font-medium text-[var(--color-navy)]">{row.name}</p>
                <p className="text-[11px] text-[var(--color-mute)]">{row.sector} · {row.location}</p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="text-[11px] px-2.5 py-1 rounded-full font-semibold"
                  style={{ backgroundColor: `${bandColor[row.band]}1A`, color: bandColor[row.band] }}
                >
                  {row.score}
                </span>
                <ChevronRight size={14} className="text-[var(--color-mute)]" />
              </div>
            </button>
          ))}
        </div>

        <div className="p-6 bg-[var(--color-sand)]/40 border-t md:border-t-0 md:border-l border-[var(--color-line)]">
          <p className="text-[11px] uppercase tracking-wide text-[var(--color-mute)] mb-1">Enterprise Profile</p>
          <h5 className="font-display text-base font-semibold text-[var(--color-navy)] mb-3">{detail.enterprise}</h5>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-2xl font-semibold text-[var(--color-navy)]">{detail.score}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: `${bandColor[detail.band]}1A`, color: bandColor[detail.band] }}>
              {detail.band}
            </span>
          </div>
          <p className="text-[12.5px] text-[var(--color-ink)]/80 leading-relaxed italic">{detail.note}</p>
        </div>
      </div>
    </div>
  );
}

export default function Interfaces() {
  const [tab, setTab] = useState<"app" | "console">("app");

  return (
    <section id="interfaces" className="relative py-24 md:py-32 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Two Sides Of The Same Current" title="Built for the enterprise. Built for the bank." />

        <Reveal delay={0.1} className="mt-10 inline-flex rounded-full border border-[var(--color-line)] p-1 bg-[var(--color-cream-deep)]">
          <button
            data-cursor-hover
            onClick={() => setTab("app")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "app" ? "bg-[var(--color-navy)] text-[var(--color-cream)]" : "text-[var(--color-navy)]"
            }`}
          >
            Udyami App
          </button>
          <button
            data-cursor-hover
            onClick={() => setTab("console")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              tab === "console" ? "bg-[var(--color-navy)] text-[var(--color-cream)]" : "text-[var(--color-navy)]"
            }`}
          >
            Field Officer Console
          </button>
        </Reveal>

        <div className="mt-12">
          {tab === "app" ? (
            <Reveal>
              <PhoneMock />
              <p className="max-w-md mx-auto text-center mt-8 text-sm text-[var(--color-mute)] leading-relaxed">
                Voice / low-literacy friendly entry, plain-language alerts, and actionable
                suggestions — not just warnings. Works over App, SMS, or an IVR call.
              </p>
            </Reveal>
          ) : (
            <Reveal>
              <ConsoleMock />
              <p className="max-w-md mx-auto text-center mt-8 text-sm text-[var(--color-mute)] leading-relaxed">
                Click any enterprise on the left — the profile panel updates instantly with its
                live score and PRAVAAH note.
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
