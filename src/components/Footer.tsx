export default function Footer() {
  return (
    <footer className="relative px-6 md:px-10 py-14 border-t border-[var(--color-line)]">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-semibold text-[var(--color-navy)] mb-1">PRAVAAH</p>
          <p className="text-[13px] text-[var(--color-mute)]">
            NABARD Hackathon @ Global FinTech Fest 2026 · AI-Driven Cash Flow Prediction &amp; Risk
            Flagging for Rural Micro Enterprises
          </p>
        </div>
        <div className="text-[13px] text-[var(--color-mute)] md:text-right">
          <p className="text-[var(--color-navy)] font-medium mb-1">
            Hardik Gupta (Lead) · Mishika Sharma · Makshita Saini · Hanish Jain
          </p>
          <p>JECRC Foundation, Jaipur</p>
        </div>
      </div>
    </footer>
  );
}
