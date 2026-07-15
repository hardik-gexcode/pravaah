export const sectors = [
  {
    id: "dairy",
    name: "Dairy",
    enterprise: "Lakshmi Dairy SHG",
    location: "Ajmer, Rajasthan",
    factor: "Fodder cost swings & milk yield seasonality",
    score: 74,
    band: "Watch",
    forecast: [42, 38, 45, 33, 29, 47],
    liquidity: 68,
    market: 61,
    climate: 52,
    note: "Fodder prices are trending up ahead of a dry spell — buffer is thinning into Month 5.",
  },
  {
    id: "poultry",
    name: "Poultry",
    enterprise: "Suryodaya Poultry Unit",
    location: "Bikaner, Rajasthan",
    factor: "Feed price volatility & disease-cycle exposure",
    score: 58,
    band: "At Risk",
    forecast: [30, 26, 22, 19, 24, 28],
    liquidity: 44,
    market: 50,
    climate: 66,
    note: "Feed cost spike plus a regional disease advisory has pushed the score into the at-risk band.",
  },
  {
    id: "food",
    name: "Food Processing",
    enterprise: "Anaaj Foods FPO",
    location: "Kota, Rajasthan",
    factor: "Raw material sourcing & perishability windows",
    score: 81,
    band: "Healthy",
    forecast: [50, 55, 58, 54, 60, 63],
    liquidity: 79,
    market: 74,
    climate: 85,
    note: "Strong repayment cadence and stable mandi prices keep this profile in the healthy band.",
  },
  {
    id: "handicrafts",
    name: "Handicrafts",
    enterprise: "Rangrez Handicrafts Collective",
    location: "Jodhpur, Rajasthan",
    factor: "Demand seasonality & export order cycles",
    score: 66,
    band: "Watch",
    forecast: [36, 40, 44, 31, 27, 39],
    liquidity: 60,
    market: 55,
    climate: 88,
    note: "Export order cycle dips post-festival season — cash buffer needs attention before Month 5.",
  },
  {
    id: "retail",
    name: "Rural Retail",
    enterprise: "Gramin Kirana Network",
    location: "Alwar, Rajasthan",
    factor: "Footfall trends & local purchasing power shifts",
    score: 70,
    band: "Watch",
    forecast: [33, 35, 37, 34, 36, 41],
    liquidity: 65,
    market: 58,
    climate: 90,
    note: "Purchasing power dipped slightly with delayed crop payouts in the surrounding villages.",
  },
];

export const dataSources = [
  {
    id: "financial",
    title: "Financial Records",
    desc: "Savings, loan and repayment ledgers",
    icon: "PiggyBank",
  },
  {
    id: "upi",
    title: "Digital Payment Proxies",
    desc: "UPI frequency & volume trends — no personal data",
    icon: "Waves",
  },
  {
    id: "market",
    title: "Market Intelligence",
    desc: "Commodity prices, demand & crop yield data",
    icon: "Store",
  },
  {
    id: "climate",
    title: "Climate Signals",
    desc: "Rainfall, weather shocks & seasonal patterns",
    icon: "CloudRain",
  },
];

export const problemStats = [
  { n: "6.3 Cr+", d: "rural micro enterprises, SHGs and FPOs operating across India today" },
  { n: "~80%", d: "have thin or no formal credit history visible to banks and RRBs" },
  { n: "Manual", d: "field-officer monitoring is the norm — slow, subjective, hard to scale" },
];

export const problemPoints = [
  { title: "No integrated signal", desc: "Financial data, UPI trends, mandi prices and climate risk sit in separate silos — nobody fuses them into one forecast." },
  { title: "Warnings arrive too late", desc: "Stress shows up only after a missed repayment, when liquidity has already broken down." },
  { title: "One-size-fits-all risk", desc: "A dairy SHG and a handicraft unit face entirely different shocks, but are scored the same way." },
];

export const inclusiveFeatures = [
  { title: "Offline-First Sync", desc: "A progressive web app that queues entries locally and syncs the moment signal returns — no data loss in low-network pockets.", icon: "WifiOff" },
  { title: "USSD / IVR Fallback", desc: "For feature phones with no data connection, savings and expense entry works over a simple voice or USSD flow.", icon: "PhoneCall" },
  { title: "Multilingual By Design", desc: "Hindi-first interface with regional language packs, so the field officer's own dialect is never a barrier.", icon: "Globe2" },
  { title: "No Sensitive PII", desc: "UPI signals are used only as aggregated, category-level trends — never raw personal transaction data.", icon: "ShieldCheck" },
];

export const businessModel = [
  { title: "Institutional SaaS", desc: "Per-enterprise-profiled subscription licensed to RRBs, cooperative banks and MFIs for the Field Officer Console.", icon: "Landmark" },
  { title: "Freemium for Enterprises", desc: "The Udyami App stays free for SHGs and FPOs — adoption at the base funds trust and data density at the top.", icon: "HandCoins" },
  { title: "NABARD Refinance Channel", desc: "Bundled as a value-add within NABARD-refinanced credit lines, reducing appraisal cost for partner institutions.", icon: "BadgeCheck" },
];

export const impactPoints = [
  { title: "Enhanced Credit Flow", desc: "Reliable forecasts strengthen bank credit appraisal — improving formal credit access for underserved enterprises." },
  { title: "Credit-Led Rural Development", desc: "Enterprises demonstrate repayment capacity, shifting from grant dependence to institutional finance for growth." },
  { title: "A Digital Public Good", desc: "One shared infrastructure for enterprise profiling, cash-flow assessment and risk monitoring across partner institutions." },
  { title: "Better Beneficiary Outcomes", desc: "NABARD-supported enterprises get actionable, real-time insight into their own business and market risk." },
];

export const roadmap = [
  { phase: "Now", title: "Idea Submission", desc: "PRAVAAH concept, data architecture and scoring design." },
  { phase: "Aug 2026", title: "Working Prototype", desc: "Udyami App + Field Officer Console on simulated financial, UPI, market & climate data." },
  { phase: "Sep 2026", title: "Live Demo, GFF", desc: "Full prototype demonstration with sector-tuned scoring, live at the Grand Finale." },
  { phase: "Beyond", title: "NABARD Pilot", desc: "Deployment with a partner RRB or cooperative bank on a real enterprise cohort." },
];

export const fieldOfficerPortfolio = sectors.map((s) => ({
  name: s.enterprise,
  sector: s.name,
  location: s.location,
  score: s.score,
  band: s.band,
}));
