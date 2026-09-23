export interface StatItem {
  value: string;
  label: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export interface CaseStudyTier1 {
  id: string;
  client: string;
  categoryTag: string;
  subtitle: string;
  instagram: string;
  website?: string;
  challenge?: string;
  approach?: string;
  story: string;
  stats: StatItem[];
  services: string[];
  visualCueType: 'textile' | 'footwear' | 'architectural';
  imageUrl: string;
}

export interface CaseStudyTier2 {
  id: string;
  client: string;
  categoryTag: 'Ecommerce & Retail' | 'Lead Generation' | 'Home & Interiors' | 'Health & Wellness' | 'Education';
  summary: string;
  instagram: string;
  website?: string;
  highlightStat: string;
  stats: StatItem[];
  services?: string[];
  imageUrl: string;
}

export const CATEGORIES = [
  'All',
  'Ecommerce & Retail',
  'Lead Generation',
  'Home & Interiors',
  'Health & Wellness',
  'Education',
] as const;

export type CategoryFilter = (typeof CATEGORIES)[number];

export const TIER1_CASE_STUDIES: CaseStudyTier1[] = [
  {
    id: 'greenways',
    client: 'Greenways',
    categoryTag: 'Ecommerce & Retail',
    subtitle: 'Premium Ethnic Wear',
    instagram: 'instagram.com/greenwaysdelhi',
    website: 'greenways.co',
    challenge: 'The objective was to increase ecommerce sales while improving the overall efficiency of paid traffic.',
    approach: 'We combined paid social and search campaigns with a conversion-focused ecommerce strategy to reach relevant audiences and optimize towards purchases.',
    story: 'With a carefully crafted Meta & Google Ads strategy, Greenways — a premium ethnic wear brand — scaled new heights in July 2025. By targeting the right audience across platforms (82K+ sessions, 166K+ impressions on Google, 2.5L+ on Meta), Greenways achieved a powerful 9.31x ROAS with smartly optimised ad spend.',
    stats: [
      { value: '₹13,05,051+', label: 'Total Revenue', numericTarget: 13.05, prefix: '₹', suffix: 'L+', decimals: 2 },
      { value: '178', label: 'Confirmed Orders', numericTarget: 178, suffix: ' Orders', decimals: 0 },
      { value: '9.31x', label: 'Blended ROAS', numericTarget: 9.31, suffix: 'x', decimals: 2 },
      { value: '139%', label: 'Spike in Sessions', numericTarget: 139, prefix: '+', suffix: '%', decimals: 0 },
    ],
    services: ['Performance Marketing', 'Meta Ads', 'Google Ads', 'Ecommerce Marketing'],
    visualCueType: 'textile',
    imageUrl: 'https://images.unsplash.com/photo-1583391733958-6752466e7465?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sole-house',
    client: 'Sole House',
    categoryTag: 'Ecommerce & Retail',
    subtitle: "Women's Footwear",
    instagram: 'instagram.com/iheartsolehouse',
    website: 'solehouse.in',
    challenge: 'Increase online purchases and build a more efficient customer acquisition strategy.',
    approach: 'We leveraged targeted reach (80K+ views), precision shopping campaigns, and dynamic creative retargeting to maximize revenue per click.',
    story: "With a carefully designed Shopping Campaign, Sole House — a premium women's footwear brand — made every rupee work harder. By leveraging targeted reach (80K+ views) and optimizing ad spend, Sole House delivered a 3.41x return on ad spend, proving footwear fashion meets data-driven performance.",
    stats: [
      { value: '₹9,69,346', label: 'Online Sales', numericTarget: 9.69, prefix: '₹', suffix: 'L+', decimals: 2 },
      { value: '352', label: 'Orders in 4 Months', numericTarget: 352, suffix: ' Orders', decimals: 0 },
      { value: '3.41x', label: 'Return on Ad Spend', numericTarget: 3.41, suffix: 'x ROAS', decimals: 2 },
      { value: '125%', label: 'Conv. Rate Growth', numericTarget: 125, prefix: '+', suffix: '%', decimals: 0 },
    ],
    services: ['Performance Marketing', 'Meta Ads', 'Ecommerce Growth'],
    visualCueType: 'footwear',
    imageUrl: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'surface-by-sefar',
    client: 'Surface by Sefar',
    categoryTag: 'Lead Generation',
    subtitle: 'Tiles & Surfaces',
    instagram: 'instagram.com/surface_hyd',
    challenge: 'High cost per enquiry in premium architectural and surface segments.',
    approach: 'Consistent lead forms, hyper-local audience segmentation, and campaign scaling to drive cheaper qualified commercial leads.',
    story: 'With a focused lead generation strategy, Surface (tiles & surfaces) generated strong business between July 2025 – March 2026. Consistent lead forms, right-audience targeting, and campaign scaling drove cheaper qualified leads plus a strong boost in profile visits and brand visibility.',
    stats: [
      { value: '800+', label: 'Qualified Leads', numericTarget: 800, suffix: '+', decimals: 0 },
      { value: '₹7–8L+', label: 'Revenue Generated', numericTarget: 8, prefix: '₹', suffix: 'L+', decimals: 0 },
      { value: '₹100–₹115', label: 'Avg. Cost Per Lead', numericTarget: 108, prefix: '₹', suffix: ' CPL', decimals: 0 },
      { value: '5%', label: 'Conversion Rate', numericTarget: 5, suffix: '% Conv', decimals: 0 },
    ],
    services: ['Lead Generation', 'Performance Marketing'],
    visualCueType: 'architectural',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800'
  },
];

export const TIER2_CASE_STUDIES: CaseStudyTier2[] = [
  {
    id: 'gulab-wala',
    client: 'Gulab Wala',
    categoryTag: 'Ecommerce & Retail',
    summary: 'Gulab proves that with the right mix of festive demand + performance marketing, even traditional products can scale aggressively online.',
    instagram: 'instagram.com/gulabwala',
    website: 'gulabrewri.com',
    highlightStat: '11.78x ROAS',
    stats: [
      { value: '₹9,26,850+', label: 'Total Sales', numericTarget: 9.26, prefix: '₹', suffix: 'L+', decimals: 2 },
      { value: '351', label: 'Orders', numericTarget: 351, suffix: '', decimals: 0 },
      { value: '27.21%', label: 'Repeat Customers', numericTarget: 27.2, suffix: '%', decimals: 1 },
      { value: '11.78x', label: 'ROAS', numericTarget: 11.78, suffix: 'x', decimals: 2 },
    ],
    services: ['Meta Ads', 'Festive Scaling', 'Ecommerce Funnel'],
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'aple-lites',
    client: 'Aple Lites',
    categoryTag: 'Ecommerce & Retail',
    summary: 'Balanced Meta Ads strategy combining lead gen + engagement for strong growth.',
    instagram: 'instagram.com/aplelitesindia',
    website: 'aplelites.in',
    highlightStat: '750+ Leads',
    stats: [
      { value: '750+', label: 'Leads Generated', numericTarget: 750, suffix: '+', decimals: 0 },
      { value: '₹1.16L+', label: 'Ad Spend', numericTarget: 1.16, prefix: '₹', suffix: 'L+', decimals: 2 },
      { value: '~5%', label: 'Conv. Rate', numericTarget: 5, suffix: '%', decimals: 0 },
    ],
    services: ['Meta Ads', 'Lead Generation', 'Brand Reach'],
    imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'detailing-devils',
    client: 'Detailing Devils – Xclusive',
    categoryTag: 'Lead Generation',
    summary: 'Lead Gen + Instagram DM strategy converting ad spend into real business enquiries.',
    instagram: 'instagram.com/detailingdevils.xclusive',
    website: 'detailingdevils.com',
    highlightStat: '₹77 Avg. CPL',
    stats: [
      { value: '651', label: 'Form Leads', numericTarget: 651, suffix: '', decimals: 0 },
      { value: '5–6%', label: 'Lead Conversion', numericTarget: 5.5, suffix: '%', decimals: 1 },
      { value: '₹77', label: 'Cost / Lead', numericTarget: 77, prefix: '₹', suffix: '', decimals: 0 },
      { value: '191', label: 'IG Direct DMs', numericTarget: 191, suffix: ' DMs', decimals: 0 },
    ],
    services: ['Lead Generation', 'Instagram DM Ads', 'High-Ticket Funnel'],
    imageUrl: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'exotic-garden',
    client: 'Exotic Garden Centre',
    categoryTag: 'Lead Generation',
    summary: 'DM-first performance strategy turning conversations into direct plant sales.',
    instagram: 'instagram.com/exoticgardencenter',
    highlightStat: '830+ DMs',
    stats: [
      { value: '830+', label: 'IG Conversations', numericTarget: 830, suffix: '+', decimals: 0 },
      { value: '₹32–₹43', label: 'Avg. Cost / DM', numericTarget: 37, prefix: '₹', suffix: '', decimals: 0 },
      { value: '1.78L+', label: 'Targeted Reach', numericTarget: 1.78, suffix: 'L+', decimals: 2 },
    ],
    services: ['DM Automation', 'Meta Ads', 'Local Retail Growth'],
    imageUrl: 'https://images.unsplash.com/photo-1416879598555-2200dc3a9e38?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'karara-mujassme',
    client: 'Karara Mujassme',
    categoryTag: 'Home & Interiors',
    summary: 'Strategic Facebook DM campaign engaging directly with potential high-ticket luxury buyers.',
    instagram: 'instagram.com/kararamujassmeindia',
    website: 'kararamujassme.com',
    highlightStat: '2.71L+ Reach',
    stats: [
      { value: '322+', label: 'Campaign DMs', numericTarget: 322, suffix: '+', decimals: 0 },
      { value: '2–3%', label: 'Conversion Rate', numericTarget: 2.5, suffix: '%', decimals: 1 },
      { value: '2,71,000+', label: 'Impressions', numericTarget: 2.71, suffix: 'L+', decimals: 2 },
    ],
    services: ['Luxury Meta Ads', 'Direct Enquiries', 'Audience Building'],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ayurveda-yogashram',
    client: 'Ayurveda Yogashram',
    categoryTag: 'Health & Wellness',
    summary: 'Multiple domestic & international PPC campaigns (Search, Display, PMax, Shopping).',
    instagram: 'instagram.com/ayurvedayogashram',
    website: 'ayurvedayogashram.com',
    highlightStat: '5,000+ Conversions',
    stats: [
      { value: '5,000+', label: 'Conversions', numericTarget: 5000, suffix: '+', decimals: 0 },
      { value: '₹168', label: 'Cost / Conv.', numericTarget: 168, prefix: '₹', suffix: '', decimals: 0 },
      { value: '₹4,000', label: 'Avg. Value', numericTarget: 4000, prefix: '₹', suffix: '', decimals: 0 },
      { value: '₹7.0L', label: 'PPC Budget', numericTarget: 7, prefix: '₹', suffix: 'L', decimals: 1 },
    ],
    services: ['Google Search', 'Performance Max', 'Global Shopping'],
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'mee-help',
    client: 'Mee-Help',
    categoryTag: 'Lead Generation',
    summary: 'PPC app-install campaign driving high volume domestic service acquisitions.',
    instagram: 'instagram.com/meehelpofficial',
    website: 'meehelp.in',
    highlightStat: '₹2.49 / Install',
    stats: [
      { value: '15,000+', label: 'App Installs', numericTarget: 15, suffix: 'K+', decimals: 0 },
      { value: '₹2.49', label: 'Cost / Install', numericTarget: 2.49, prefix: '₹', suffix: '', decimals: 2 },
      { value: '₹40,000', label: 'Total Budget', numericTarget: 40, prefix: '₹', suffix: 'K', decimals: 0 },
    ],
    services: ['App Install Ads', 'Google UAC', 'Cost Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'ims-delhi',
    client: 'IMS Delhi',
    categoryTag: 'Education',
    summary: 'Highly targeted Meta Ads for student lead generation (CUET/IPM/Law prep).',
    instagram: 'instagram.com/imsdelhiug',
    website: 'imsindia.com',
    highlightStat: '1,000+ Leads',
    stats: [
      { value: '1,000+', label: 'Student Leads', numericTarget: 1000, suffix: '+', decimals: 0 },
      { value: '3.5%', label: 'Conv. Rate', numericTarget: 3.5, suffix: '%', decimals: 1 },
      { value: '6 Months', label: 'Campaign Window', numericTarget: 6, suffix: ' Mo', decimals: 0 },
    ],
    services: ['Education Meta Ads', 'High Intent Forms', 'Retargeting'],
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'grodd',
    client: 'Grodd E-Commerce',
    categoryTag: 'Ecommerce & Retail',
    summary: 'Expertly crafted ecommerce conversion campaigns on Meta Ads for smart accessories.',
    instagram: 'instagram.com/grodd_life',
    website: 'grodd.in',
    highlightStat: '60x ROAS',
    stats: [
      { value: '60x', label: 'Peak ROAS', numericTarget: 60, suffix: 'x', decimals: 0 },
      { value: 'Meta Ads', label: 'Primary Channel', numericTarget: 100, suffix: '% Paid', decimals: 0 },
      { value: 'Scale', label: 'High Velocity', numericTarget: 1, suffix: 'st Tier', decimals: 0 },
    ],
    services: ['Ecommerce Conversions', 'Video Creative Scaling', 'Meta Ads'],
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'aakav-gym',
    client: 'Aakav Gym Equipments',
    categoryTag: 'Lead Generation',
    summary: 'Lead gen campaigns driving full commercial gym-setup enterprise contracts.',
    instagram: 'instagram.com/aakavofficial',
    website: 'aakavfitness.com',
    highlightStat: '1.5% Full Gyms',
    stats: [
      { value: '500+', label: 'High-Quality Leads', numericTarget: 500, suffix: '+', decimals: 0 },
      { value: '6%', label: 'Conv. Rate', numericTarget: 6, suffix: '%', decimals: 0 },
      { value: '1.5%', label: 'Full Gym Setups', numericTarget: 1.5, suffix: '%', decimals: 1 },
    ],
    services: ['B2B Lead Generation', 'Commercial Sales', 'Meta Inquiries'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'deco-arte',
    client: 'Deco Arte',
    categoryTag: 'Home & Interiors',
    summary: 'Strategic Meta Ads campaigns for premium luxury commercial & residential interior leads.',
    instagram: 'instagram.com/studiodecoarte',
    website: 'deco-arte.in',
    highlightStat: '300+ Leads',
    stats: [
      { value: '300+', label: 'Commercial Leads', numericTarget: 300, suffix: '+', decimals: 0 },
      { value: '3%', label: 'Lead Conversion', numericTarget: 3, suffix: '%', decimals: 0 },
      { value: 'NCR Area', label: 'Geo-Targeted', numericTarget: 100, suffix: '% Local', decimals: 0 },
    ],
    services: ['Architectural Lead Gen', 'Meta Lead Ads', 'High Net Worth Reach'],
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'shop-kaseeda',
    client: 'Shop Kaseeda',
    categoryTag: 'Ecommerce & Retail',
    summary: "Optimised Meta Ads campaigns for handcrafted women's designer apparel and accessories.",
    instagram: 'instagram.com/shop_kaseeda',
    website: 'kaseeda.com',
    highlightStat: '5.07x ROAS',
    stats: [
      { value: '250+', label: 'Orders', numericTarget: 250, suffix: '+', decimals: 0 },
      { value: '₹5,000', label: 'Avg. Order Value', numericTarget: 5000, prefix: '₹', suffix: '', decimals: 0 },
      { value: '5.07x', label: 'Blended ROAS', numericTarget: 5.07, suffix: 'x', decimals: 2 },
    ],
    services: ['Fashion Meta Ads', 'Catalog Retargeting', 'Purchase Scaling'],
    imageUrl: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'style-n-flaunt',
    client: 'Style n Flaunt',
    categoryTag: 'Ecommerce & Retail',
    summary: 'Meta Ads ecommerce campaigns driving high ROAS auto lifestyle accessory volume.',
    instagram: 'instagram.com/style_n_flaunt',
    website: 'stylenflaunt.com',
    highlightStat: '19.07x ROAS',
    stats: [
      { value: '1,000+', label: 'Orders', numericTarget: 1000, suffix: '+', decimals: 0 },
      { value: '₹1,000', label: 'Avg. Value', numericTarget: 1000, prefix: '₹', suffix: '', decimals: 0 },
      { value: '19.07x', label: 'Return on Ads', numericTarget: 19.07, suffix: 'x', decimals: 2 },
    ],
    services: ['Meta Purchase Ads', 'Lookalike Scaling', 'AOV Optimization'],
    imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'surface-concept',
    client: 'Surface Concept',
    categoryTag: 'Lead Generation',
    summary: 'Highly effective Meta Ads lead campaigns for architectural laminates & veneers.',
    instagram: 'instagram.com/surfaceconcept_studio',
    website: 'surfaceconcepts.in',
    highlightStat: '12–15% Conv.',
    stats: [
      { value: '1,000+', label: 'Verified Leads', numericTarget: 1000, suffix: '+', decimals: 0 },
      { value: '12–15%', label: 'Conversion Rate', numericTarget: 13.5, suffix: '%', decimals: 1 },
      { value: 'B2B/Pro', label: 'Architect Focus', numericTarget: 100, suffix: '% Pro', decimals: 0 },
    ],
    services: ['Architect & Builder Lead Gen', 'Meta Forms', 'CPL Reduction'],
    imageUrl: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'snapkids',
    client: 'Snapkids',
    categoryTag: 'Ecommerce & Retail',
    summary: "B2B lead generation via Meta Ads for a specialized boys' denim manufacturer.",
    instagram: 'instagram.com/snapkidsboysdenim',
    highlightStat: '₹32 / B2B Lead',
    stats: [
      { value: '900+', label: 'B2B Wholesale Leads', numericTarget: 900, suffix: '+', decimals: 0 },
      { value: '₹32', label: 'Cost Per Lead', numericTarget: 32, prefix: '₹', suffix: '', decimals: 0 },
      { value: 'Wholesale', label: 'Retailer Outreach', numericTarget: 100, suffix: '% B2B', decimals: 0 },
    ],
    services: ['B2B Meta Ads', 'Wholesale Lead Gen', 'Lead Qualification'],
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=600'
  },
];

export const CLIENT_LOGOS = [
  { name: 'Greenways', label: 'GREENWAYS', category: 'Ethnic Wear' },
  { name: 'Sole House', label: 'SOLE HOUSE', category: 'Footwear' },
  { name: 'Surface by Sefar', label: 'SURFACE', category: 'Surfaces & Tiles' },
  { name: 'Gulab Wala', label: 'GULAB WALA', category: 'Sweets & Confectionery' },
  { name: 'Aple Lites', label: 'APLE LITES', category: 'Lighting' },
  { name: 'Detailing Devils', label: 'DETAILING DEVILS', category: 'Automotive Care' },
  { name: 'Karara Mujassme', label: 'KARARA MUJASSME', category: 'Home Décor' },
  { name: 'Ayurveda Yogashram', label: 'AYURVEDA YOGASHRAM', category: 'Health & Wellness' },
  { name: 'Mee-Help', label: 'MEE-HELP', category: 'Home Services' },
  { name: 'IMS Delhi', label: 'IMS DELHI', category: 'Education' },
  { name: 'Deco Arte', label: 'DECO ARTE', category: 'Interior Design' },
  { name: 'Shop Kaseeda', label: 'KASEEDA', category: 'Designer Wear' },
];
