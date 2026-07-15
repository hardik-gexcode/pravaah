import { useMemo, useState } from "react";
import { PiggyBank, Store, CloudRain } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { sectors } from "../data/content";

const bandColor: Record<string, string> = {
  Healthy: "#4C7A5E",
  Watch: "#A97A2F",
  "At Risk": "#A3512E",
};

function Bar({ label, value, icon: Icon }: { label: string; value: number; icon: any }) {
  const color = value >= 70 ? "#4C7A5E" : value >= 50 ? "#A97A2F" : "#A3512E";
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Icon size={14} strokeWidth={1.5} className="text-[var(--color-navy)]" />
          <span className="text-[13px] text-[var(--color-ink)]">{label}</span>
        </div>
        <span className="text-[13px] font-mono-data text-[var(--color-mute)]">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-[var(--color-sand-deep)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function ScoreEngine() {
  const [active, setActive] = useState(sectors[0].id);
  const sector = useMemo(() => sectors.find((s) => s.id === active)!, [active]);

  const chartData = sector.forecast.map((v, i) => ({
    month: `M${i + 1}`,
    forecast: v,
    threshold: 30,
  }));

  return (
    <section id="demo" className="relative py-24 md:py-32 px-6 md:px-10 bg-[var(--color-sand)]/50">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="The Intelligence Layer — Live Demo"
          title="The PRAVAAH Score: pick an enterprise, watch the forecast update"
          desc="This is the actual scoring mechanic — select any of the five sample enterprise profiles below and every number updates: the composite score, the risk breakdown, and the 6-month forecast."
        />

        {/* sector selector */}
        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2.5">
          {sectors.map((s) => (
            <button
              key={s.id}
              data-cursor-hover
              onClick={() => setActive(s.id)}
              className={`px-4 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                active === s.id
                  ? "bg-[var(--color-navy)] text-[var(--color-cream)] border-[var(--color-navy)]"
                  : "bg-transparent text-[var(--color-navy)] border-[var(--color-line)] hover:border-[var(--color-navy)]/50"
              }`}
            >
              {s.name}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
          {/* score card */}
          <Reveal delay={0.15}>
            <div className="h-full bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-7 md:p-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-mute)] mb-1">{sector.location}</p>
              <h3 className="font-display text-xl font-semibold text-[var(--color-navy)] mb-6">{sector.enterprise}</h3>

              <div className="flex items-end gap-4 mb-2">
                <span className="font-display text-6xl font-semibold text-[var(--color-navy)] tabular-nums">
                  {sector.score}
                </span>
                <span
                  className="mb-2 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: `${bandColor[sector.band]}1A`, color: bandColor[sector.band] }}
                >
                  {sector.band}
                </span>
              </div>
              <p className="text-xs text-[var(--color-mute)] mb-7">PRAVAAH Score — out of 100</p>

              <div className="hr-line mb-6" />

              <Bar label="Liquidity Risk" value={sector.liquidity} icon={PiggyBank} />
              <Bar label="Market Risk" value={sector.market} icon={Store} />
              <Bar label="Climate Risk" value={sector.climate} icon={CloudRain} />

              <div className="hr-line my-6" />
              <p className="text-[13px] leading-relaxed text-[var(--color-ink)]/85 italic">{sector.note}</p>
            </div>
          </Reveal>

          {/* chart */}
          <Reveal delay={0.2}>
            <div className="h-full bg-[var(--color-cream)] border border-[var(--color-line)] rounded-2xl p-7 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-semibold text-[var(--color-navy)]">
                  6-Month Cash-Flow Forecast <span className="text-[var(--color-mute)] font-normal">(₹ '000)</span>
                </h4>
                <div className="flex items-center gap-4 text-[11px] text-[var(--color-mute)]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-[3px] w-4 rounded bg-[var(--color-gold)] inline-block" /> Predicted
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-[3px] w-4 rounded bg-[var(--color-mute)]/50 inline-block" /> Threshold
                  </span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={chartData} margin={{ top: 5, right: 10, left: -18, bottom: 0 }}>
                  <CartesianGrid stroke="#DED0AC" strokeDasharray="0" vertical={false} />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#706A5C" }} axisLine={{ stroke: "#DED0AC" }} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "#706A5C" }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      background: "#FBF7EF",
                      border: "1px solid #DED0AC",
                      borderRadius: 10,
                      fontSize: 12,
                    }}
                  />
                  <ReferenceLine y={30} stroke="#706A5C" strokeDasharray="4 4" strokeOpacity={0.5} />
                  <Line
                    type="monotone"
                    dataKey="forecast"
                    stroke="#A97A2F"
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: "#A97A2F" }}
                    activeDot={{ r: 6 }}
                    animationDuration={650}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="mt-2 text-[13px] italic text-[var(--color-mute)] leading-relaxed">
                {sector.band === "Healthy"
                  ? "Forecast stays comfortably above the early-warning threshold across the horizon."
                  : "Dip below or near the threshold is flagged months in advance — giving the field officer time to act."}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
