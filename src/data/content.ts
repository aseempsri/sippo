import { publicAsset } from '../utils/paths';

export const company = {
  name: 'Sippo',
  domain: 'sippo.com',
  partnerOf: 'Elevest',
  partnerUrl: 'https://www.elevest.in/',
  phone: '+91 92117 59888',
  email: 'hello@sippo.com',
  tagline: 'One Platform. Every Financial Product.',
  amfiNote:
    'Mutual fund investments are offered through AMFI-registered distribution infrastructure. Mutual Fund Investments are subject to market risks.',
  privacyNote: 'We do not share your mobile number or email ID.',
  complianceNote:
    'Mutual Fund Investments are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future performance.',
  partnershipNote: 'In partnership with Elevest',
};

export const openingQuote =
  'Build a financial life with clarity — Mutual Funds, FDs, Bonds, and Loans in one place, guided by Sippo’s expert-led, smart, swift, and secure growth approach.';

export const stats = [
  { value: '4', label: 'Product Categories' },
  { value: '2-min', label: 'Digital Onboarding' },
  { value: 'Free', label: 'Consultation' },
  { value: 'AMFI', label: 'Compliant Network' },
];

export const heroBadges = [
  'Expert-Led Guidance',
  'Smart · Swift · Secure',
];

export const aboutStory = {
  intro:
    'Sippo is your one-stop destination for financial growth — Mutual Funds, Fixed Deposits, Bonds, and Personal Loans — with clear guidance, modern tools, and transparent support built around you.',
  origin:
    'We combine personalised advice with a seamless digital experience: goal-based planning, instant SIPs, portfolio clarity, and products matched to your life stage — so growing wealth feels simple and confident.',
  today:
    'Whether you are starting your first SIP or planning retirement, Sippo gives you expert-led, smart, swift, and secure solutions designed for households and individuals — not for selling to other advisors.',
  closing:
    'At its core, Sippo is about disciplined planning, the right product mix, and enduring client relationships that last beyond market cycles.',
};

export const philosophyBlend = [
  'The trust and personalisation of a dedicated local expert',
  'One-stop, smart, swift, and secure growth solutions for every client',
];

export const approachPoints = [
  {
    icon: '🎯',
    title: 'Goal-aligned investing',
    text: 'Aligning investments with clearly defined financial goals — so every rupee has a purpose.',
  },
  {
    icon: '📊',
    title: 'Multi-product portfolios',
    text: 'Mutual Funds, FDs, Bonds, and Loans — the right mix for risk, horizon, and life stage.',
  },
  {
    icon: '🌊',
    title: 'Discipline through volatility',
    text: 'Encouraging disciplined investing through market ups and downs — staying the course when it matters most.',
  },
  {
    icon: '🛡️',
    title: 'Compliance & transparency',
    text: 'Upholding regulatory standards and transparent processes in every client interaction.',
  },
];

export const vision =
  'To be every client’s one-stop destination for expert-led, smart, swift, and secure financial growth — one platform, every product, guidance that lasts beyond market cycles.';

export const goal =
  'To deliver disciplined, compliant, and goal-oriented solutions for every client — with clarity, speed, and care at every step.';

export const missionPillars = [
  {
    number: '01',
    title: 'Client-Centric, Goal-Based Planning',
    text: 'Personalized solutions aligned with each client’s financial goals, risk profile, and investment horizon.',
  },
  {
    number: '02',
    title: 'Complete Product Access',
    text: 'Mutual Funds, Fixed Deposits, Bonds, and Personal Loans on one platform — more ways to meet every need.',
  },
  {
    number: '03',
    title: 'Technology-Driven Experience',
    text: 'Clear dashboards, instant UPI SIPs, and easy digital journeys — built for modern Indian households.',
  },
  {
    number: '04',
    title: 'Financial Literacy & Awareness',
    text: 'Education that empowers clients to make informed, confident decisions.',
  },
  {
    number: '05',
    title: 'Compliance, Transparency & Ethics',
    text: 'Strict adherence to regulatory standards with clear communication in every interaction.',
  },
];

export const products = [
  {
    title: 'Mutual Funds',
    description:
      'Start SIPs, lumpsum investments, and switches with expert guidance — build long-term wealth across equity, debt, and hybrid categories.',
    tag: 'Invest',
  },
  {
    title: 'Bonds',
    description:
      'Access SEBI-regulated Bonds and explore attractive returns from AAA-rated Corporate and Government Issuers.',
    tag: 'Income',
  },
  {
    title: 'Fixed Deposit',
    description:
      'Choose curated FDs from leading NBFCs at competitive interest rates — a low-friction, high-trust option for stability.',
    tag: 'Stability',
  },
  {
    title: 'Personal Loans',
    description:
      'Apply for instant Personal Loans with minimal documentation — when you need liquidity without disrupting your investments.',
    tag: 'Credit',
  },
];

/** Retirement Freedom Suite — Golden Horizon planners */
export const goldenHorizon = {
  suiteName: 'Retirement Freedom Suite',
  brand: 'Golden Horizon',
  url: 'https://aseempsri.github.io/Golden-Horizon/',
  repoUrl: 'https://github.com/aseempsri/Golden-Horizon',
  guideUrl: 'https://aseempsri.github.io/Golden-Horizon/#/guide',
  tagline: 'Two planners under one roof — find when you can stop depending on salary.',
  note: 'Both planners use liquid corpus only. Rental income, pension, business income, and non-liquid assets are excluded.',
};

export const goldenHorizonProducts = [
  {
    id: 'freedom-meridian',
    title: 'Freedom Meridian',
    theme: 'Gold',
    tag: 'Retirement Age',
    description:
      'Discover the earliest age you can fully retire on your liquid corpus — with portfolio splits across FD, savings, equity stocks, equity MF, and debt MF.',
    highlights: [
      'Pre-retirement salary surplus modelling',
      'Inflation-adjusted post-retirement withdrawals',
      'Own home vs rental, cars & travel plans',
      'Nominee legacy projection at age 90',
    ],
    href: 'https://aseempsri.github.io/Golden-Horizon/',
  },
  {
    id: 'estate-sovereign',
    title: 'Estate Sovereign',
    theme: 'Teal & Copper',
    tag: 'Salary-Free Living',
    description:
      'Plan inflation-proof passive income, three-bucket savings, and a full estate lifestyle — then find the earliest age to eliminate salary dependency.',
    highlights: [
      'Passive income floor with 5%+ inflation protection',
      'Inflation, contingency & leisure savings buckets',
      'Staff, holidays & inheritance-trip lifestyle planning',
      'Periodic replacements: car, white goods, furnishings',
    ],
    href: 'https://aseempsri.github.io/Golden-Horizon/',
  },
];

export const platformFeatures = [
  {
    title: 'Unified Portfolio View',
    description: 'SIP, FD, Bond & Loan on one screen — see your entire financial picture clearly.',
  },
  {
    title: 'UPI-mandate SIP in 60 Sec',
    description: 'Start SIPs via UPI mandate instantly — less friction, faster progress.',
  },
  {
    title: 'Transparent Tracking',
    description: 'Follow holdings, contributions, and progress toward your goals with clarity.',
  },
  {
    title: 'Easy Plan Sharing',
    description: 'Share product details and plans securely when you need a second opinion or family alignment.',
  },
];

export const lifeStages = [
  {
    id: 'growing',
    title: 'Growing Years',
    age: '35–54',
    description:
      'Building wealth with discipline — SIP strategies, family protection, and goal-based portfolios designed for professionals and business owners.',
    icon: '🌱',
    focus: ['SIP & goal-based investing', 'Family protection planning', 'Tax-efficient portfolios'],
  },
  {
    id: 'transitioning',
    title: 'Transitioning Years',
    age: '55–69',
    description:
      'Approaching retirement with a clear plan — balancing equity, debt, FDs, and hybrid solutions for emotional and financial confidence.',
    icon: '🌿',
    focus: ['Retirement corpus planning', 'Balanced equity-debt mix', 'Income & stability focus'],
  },
  {
    id: 'aging',
    title: 'Aging Years',
    age: '70+',
    description:
      'Preserving family wealth across generations — thoughtful portfolio management focused on stability, income, and legacy.',
    icon: '🌳',
    focus: ['Wealth preservation', 'Regular income strategies', 'Legacy & estate planning'],
  },
];

export const services = [
  {
    title: 'Goal-Based Mutual Fund Planning',
    description:
      'Every engagement starts with your goals — not products. We align equity, debt, and hybrid mutual fund solutions with your risk profile and investment horizon.',
    tag: 'Start Here',
  },
  {
    title: 'SIP & Systematic Investing',
    description:
      'Disciplined SIP strategies with UPI-mandate convenience — building wealth steadily across market cycles.',
    tag: 'Invest',
  },
  {
    title: 'FDs, Bonds & Loans',
    description:
      'Go beyond mutual funds — curated Fixed Deposits, SEBI-regulated Bonds, and Personal Loans for complete financial coverage.',
    tag: 'Products',
  },
  {
    title: 'Portfolio Construction & Rebalancing',
    description:
      'Technology-driven portfolio construction, monitoring, and rebalancing — keeping investments aligned as markets evolve.',
    tag: 'Manage',
  },
  {
    title: 'Financial Literacy & Awareness',
    description:
      'Investor education that empowers informed decisions — because an educated investor is a confident investor.',
    tag: 'Learn',
  },
  {
    title: 'Ongoing Client Support',
    description:
      'Regular reviews, clear reporting, and responsive guidance — so you never feel alone with your money decisions.',
    tag: 'Support',
  },
];

export const testimonials = [
  {
    quote:
      'What impressed us most was the clarity across products. Mutual funds, FDs, and bonds in one place — and guidance that stayed calm when markets were noisy.',
    name: 'Rajesh & Sunita V.',
    detail: 'SIP Investors',
    emoji: '🙏',
  },
  {
    quote:
      'The team took time to understand our family’s goals before suggesting anything. No pressure, complete transparency — exactly the kind of advisor we were looking for.',
    name: 'Amit K.',
    detail: 'Goal-Based Planning',
    emoji: '💚',
  },
  {
    quote:
      'Onboarding and SIPs were remarkably smooth. The process-driven approach and clear communication give us real peace of mind.',
    name: 'Priya M.',
    detail: 'Long-Term Client',
    emoji: '🌟',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Understand Your Goals',
    description: 'Define financial goals, carry out risk profiling, and establish your investment horizon together.',
  },
  {
    step: '02',
    title: 'Choose Your Products',
    description: 'Select from Mutual Funds, FDs, Bonds, and Loans — matched to your needs and risk profile.',
  },
  {
    step: '03',
    title: 'Compliance & KYC',
    description: 'Complete KYC formalities and regulatory registrations — fully compliant, fully transparent.',
  },
  {
    step: '04',
    title: 'Execute Digitally',
    description: 'Implement via SIPs, lump-sum, or product applications — with clear, guided digital flows.',
  },
  {
    step: '05',
    title: 'Monitor & Rebalance',
    description: 'Technology-driven monitoring and rebalancing to keep you aligned with your goals.',
  },
  {
    step: '06',
    title: 'Stay the Course',
    description: 'Regular reviews to manage emotions, avoid impulsive decisions, and stay invested through volatility.',
  },
  {
    step: '07',
    title: 'Tax & Reporting',
    description: 'Capital gains statements and holdings reports for seamless ITR filing at year-end.',
  },
  {
    step: '08',
    title: 'Grow Together',
    description: 'Long-term relationship building focused on enduring wealth creation beyond market cycles.',
  },
];

export const calculators = [
  { id: 'sip', name: 'SIP Calculator', desc: 'See how disciplined monthly investing builds wealth over time.' },
  { id: 'retirement', name: 'Retirement Calculator', desc: 'Plan the retirement you deserve with clarity and confidence.' },
  { id: 'education', name: 'Education Calculator', desc: 'Prepare for your child’s education goals systematically.' },
  { id: 'lumpsum', name: 'Lumpsum Calculator', desc: 'Understand what a one-time investment can grow into.' },
  { id: 'emi', name: 'EMI Calculator', desc: 'Plan loans wisely — keep room for your investment goals.' },
  { id: 'delay', name: 'Cost of Delay', desc: 'See why starting your SIP today makes a real difference.' },
  { id: 'hlv', name: 'Human Life Value', desc: 'Calculate the life cover your family needs.' },
  { id: 'topup', name: 'SIP Top-Up', desc: 'Grow your SIP as your income grows each year.' },
  { id: 'marriage', name: 'Marriage Calculator', desc: 'Plan and save for life’s celebrations without stress.' },
];

export const resources = [
  {
    title: 'Understanding Mutual Fund Categories',
    description: 'Equity, debt, and hybrid — know what each category offers and when to use it.',
    category: 'Investing',
  },
  {
    title: 'The Power of SIP Discipline',
    description: 'Why systematic investing through market cycles beats timing the market.',
    category: 'SIP',
  },
  {
    title: 'FDs, Bonds & Loans Explained',
    description: 'How Fixed Deposits, Bonds, and Personal Loans fit into a complete financial plan.',
    category: 'Products',
  },
  {
    title: 'Risk Profiling Explained',
    description: 'How we match your portfolio to your comfort with risk and your time horizon.',
    category: 'Planning',
    href: '#documents',
  },
];

export type DocumentCategoryId = 'suitability' | 'privacy' | 'feedback';

export interface ClientDocument {
  id: string;
  title: string;
  description: string;
  howToUse: string;
  file: string;
  category: DocumentCategoryId;
}

export const documentCategories: {
  id: DocumentCategoryId;
  label: string;
  icon: string;
  intro: string;
}[] = [
  {
    id: 'suitability',
    label: 'Risk & Suitability',
    icon: '📋',
    intro:
      'Complete these before or during onboarding so we can recommend investments aligned with your profile — or document your choice when you proceed independently.',
  },
  {
    id: 'privacy',
    label: 'Privacy & Data',
    icon: '🔒',
    intro:
      'Understand how your personal and financial data is collected, protected, and shared — and provide the consent required before we begin our services.',
  },
  {
    id: 'feedback',
    label: 'Feedback & Grievances',
    icon: '💬',
    intro:
      'Share your experience or raise a concern. Your feedback helps us improve, and every complaint is tracked until resolution.',
  },
];

export const clientDocuments: ClientDocument[] = [
  {
    id: 'risk-profiler',
    title: 'Client Risk Profiling Form',
    description:
      'A structured questionnaire covering your financial profile, income, dependents, goals, and risk tolerance — used to determine a suitable investment approach.',
    howToUse:
      'Download, fill in your details, and complete all sections honestly. Submit the signed form to your advisor before your first investment recommendation.',
    file: publicAsset('downloads/risk-profiler.docx'),
    category: 'suitability',
  },
  {
    id: 'suitability-framework',
    title: 'Product Suitability Framework',
    description:
      'Our guide explaining how we assess whether a product fits your age, income, and risk profile — including when a product may be marked unsuitable.',
    howToUse:
      'Read this to understand how Sippo evaluates product suitability and why certain schemes may require additional declarations before proceeding.',
    file: publicAsset('downloads/product-suitability-framework.docx'),
    category: 'suitability',
  },
  {
    id: 'execution-only',
    title: 'Execution-Only Declaration',
    description:
      'Use when you initiate a transaction on your own without seeking investment advice — confirming the firm acts only as a facilitator, not an advisor.',
    howToUse:
      'Download, fill in transaction details, sign the declaration, and submit before any execution-only purchase, switch, SIP, or redemption.',
    file: publicAsset('downloads/execution-only-declaration.docx'),
    category: 'suitability',
  },
  {
    id: 'unsuitable-product',
    title: 'Unsuitable Product Declaration',
    description:
      'Required when you choose to invest in a product assessed as not suitable for your risk profile — documenting that risks were explained and you proceed at your own discretion.',
    howToUse:
      'Complete after your advisor flags a mismatch. Sign to acknowledge you understand the risks and wish to proceed despite the suitability assessment.',
    file: publicAsset('downloads/suitability-declaration.docx'),
    category: 'suitability',
  },
  {
    id: 'data-privacy-sop',
    title: 'Data Sharing & Privacy Compliance SOP',
    description:
      'Our standard operating procedure for collecting, classifying, storing, and sharing client data in compliance with applicable regulations.',
    howToUse:
      'Review to see how your KYC, financial, and client data is handled — including who can access it and when it may be shared with AMCs or regulators.',
    file: publicAsset('downloads/data-privacy-sop.docx'),
    category: 'privacy',
  },
  {
    id: 'data-consent',
    title: 'Client Data Consent Form',
    description:
      'Explicit consent for collection, processing, storage, and sharing of your personal and financial data for our services and regulatory compliance.',
    howToUse:
      'Download, read the purpose and sharing clauses, sign, and return before onboarding. No consent means we cannot collect or process your data.',
    file: publicAsset('downloads/data-consent-form.docx'),
    category: 'privacy',
  },
  {
    id: 'staff-privacy-sop',
    title: 'Staff Data Privacy SOP (Do\'s & Don\'ts)',
    description:
      'The mandatory practices our team follows when handling your data — including access controls, security measures, and breach reporting protocols.',
    howToUse:
      'Review for transparency on how Sippo staff are required to protect your information and respect your data rights.',
    file: publicAsset('downloads/staff-data-privacy-sop.docx'),
    category: 'privacy',
  },
  {
    id: 'feedback',
    title: 'Client Satisfaction Survey',
    description:
      'Rate your overall experience, advisor quality, onboarding process, and communication — helping us measure and improve client satisfaction.',
    howToUse:
      'Download, complete all sections after a service interaction, and submit to your advisor or email us. Takes about 5 minutes.',
    file: publicAsset('downloads/customer-feedback-form.docx'),
    category: 'feedback',
  },
  {
    id: 'complaint',
    title: 'Client Complaint & Grievance Form',
    description:
      'Formal channel to register complaints about delays, advice, portfolio performance, fees, documentation, or service quality — with expected resolution tracking.',
    howToUse:
      'Download, describe your issue in detail, attach supporting documents if available, and submit. We will acknowledge and track your complaint to resolution.',
    file: publicAsset('downloads/customer-complaint-form.docx'),
    category: 'feedback',
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#platform', label: 'Platform' },
  { href: '#services', label: 'Services' },
  { href: '#retirement', label: 'Retirement' },
  { href: '#calculators', label: 'Calculators' },
  { href: '#contact', label: 'Contact' },
];

export const faqs = [
  {
    question: 'What is Sippo?',
    answer:
      'Sippo is a client-focused financial platform helping individuals and families grow wealth with Mutual Funds, Fixed Deposits, Bonds, and Personal Loans — guided by expert-led, smart, swift, and secure advice.',
  },
  {
    question: 'What products can I access through Sippo?',
    answer:
      'Mutual Funds, Fixed Deposits (FDs), Corporate Bonds, and Personal Loans — all in one place with clear guidance.',
  },
  {
    question: 'Is the first consultation free?',
    answer:
      'Yes. You can book a complimentary conversation to discuss your goals, risk profile, and the right product mix for you.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Reach out via the contact form or call us. We complete a quick digital onboarding, understand your goals, and help you begin — often in minutes.',
  },
  {
    question: 'What is the Retirement Freedom Suite?',
    answer:
      'Golden Horizon includes two planners: Freedom Meridian (earliest full retirement age on liquid corpus) and Estate Sovereign (inflation-proof passive income and salary-free estate living). Open them from the Retirement section on this site.',
  },
];
