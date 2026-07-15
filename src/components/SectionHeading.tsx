import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)] mb-4">
        {eyebrow}
      </p>
      <h2
        className={`font-display font-semibold text-3xl md:text-[2.6rem] leading-[1.08] tracking-tight text-balance ${
          light ? "text-[var(--color-cream)]" : "text-[var(--color-navy)]"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? "text-[var(--color-cream)]/80" : "text-[var(--color-ink)]/85"}`}>
          {desc}
        </p>
      )}
    </Reveal>
  );
}
