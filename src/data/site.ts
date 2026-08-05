// ============================================================
//  BRAYDENSTRONG — EDITABLE SITE CONTENT
//  All site copy lives in this one file. Agents build the vessels;
//  the operator owns the words.
//
//  Two kinds of content:
//   1. Awareness/medical copy — drafted from the CURRENT CDC Naegleria
//      fowleri pages (see `cdc` block for sources + review date). Verify
//      against CDC again before publish.
//   2. Personal/memorial copy — the operator's to author and approve.
//      Marked `PLACEHOLDER` and rendered inside a dashed placeholder box
//      until real content is dropped in.
// ============================================================

export const PLACEHOLDER = 'PLACEHOLDER' as const;

export const site = {
  name: 'BraydenStrong',
  tagline: 'Turning loss into prevention.',
  description:
    'BraydenStrong honors Brayden and raises awareness of Naegleria fowleri — the rare, nearly always fatal "brain-eating ameba" — so fewer families ever go through the same loss.',
  url: 'https://braydenstrong.org',

  // Contact — operator to confirm the public inbox before the Contact page is revealed.
  email: 'PLACEHOLDER@braydenstrong.org', // [Operator: confirm public contact address]

  // Social — leave '#' until real profiles exist.
  facebookUrl: '#', // [Operator: add Facebook URL or remove]
  instagramUrl: '#', // [Operator: add Instagram URL or remove]

  // Merch — the Brayden Strong store exists on Printful but is brand new and
  // has no products yet, so the shop ships in a "coming soon" state. When the
  // store is stocked, drop the public storefront URL here and flip the flag.
  merchComingSoon: true,
  storeUrl: '#', // [Operator: public storefront URL for the Brayden Strong store]
};

// Primary navigation — Contact is intentionally NOT listed (built but hidden at launch).
export const nav = [
  { label: 'Home', href: '/' },
  { label: "Brayden's Story", href: '/brayden' },
  { label: 'About the Amoeba', href: '/about-naegleria-fowleri' },
  { label: 'Prevention', href: '/prevention' },
  { label: 'How to Help', href: '/how-to-help' },
  { label: 'Remember', href: '/remember' },
];

// ── Home ────────────────────────────────────────────────────
export const home = {
  hero: {
    eyebrow: 'A movement in Brayden’s name',
    headline: 'BraydenStrong',
    lede:
      'We lost Brayden to a rare infection almost no one had heard of. BraydenStrong exists so more people know the risk, take a few simple steps, and never have to learn his name the way we did.',
    primaryCta: { label: "Read Brayden's Story", href: '/brayden' },
    secondaryCta: { label: 'Learn the Prevention', href: '/prevention' },
  },
  // Short teaser that leads into the memorial. Full story is operator-authored on /brayden.
  storyHook: {
    heading: 'This started with our son.',
    body: PLACEHOLDER, // [Operator: 2–3 sentence teaser about Brayden that invites people in]
    cta: { label: 'Meet Brayden', href: '/brayden' },
  },
  paths: [
    {
      title: 'Know the risk',
      body: 'What Naegleria fowleri is, where it lives, and how infection actually happens.',
      cta: { label: 'About the amoeba', href: '/about-naegleria-fowleri' },
    },
    {
      title: 'Take the steps',
      body: 'Simple precautions in warm fresh water — and the warning signs no one should miss.',
      cta: { label: 'Prevention & warning signs', href: '/prevention' },
    },
    {
      title: 'Carry it forward',
      body: 'Share the message, support the mission, and help us reach one more family.',
      cta: { label: 'How to help', href: '/how-to-help' },
    },
  ],
};

// ── Brayden's Story (operator-authored memorial) ────────────
export const brayden = {
  heading: "Brayden's Story",
  subheading: 'Who he was, and why we keep going.',
  // Everything below is the operator's to write. Kept as placeholders on purpose.
  dedication: PLACEHOLDER, // [Operator: dedication line / opening words]
  story: PLACEHOLDER, // [Operator: the full story — who Brayden was, 2020, the loss, in your words]
  keyDates: PLACEHOLDER, // [Operator: dates you want remembered, if any]
  photos: [] as { src: string; alt: string }[], // [Operator: photos of Brayden — supply files + alt text]
};

// ── About the Amoeba (CDC-sourced) ──────────────────────────
export const amoeba = {
  heading: 'About the Amoeba',
  subheading: 'What Naegleria fowleri is — in plain terms.',
  lede:
    'Naegleria fowleri is a free-living ameba: a single-celled organism that lives in soil and warm fresh water around the world. It is often called the "brain-eating ameba" because, in rare cases, it can infect and destroy brain tissue. The infection is very rare — but it is almost always fatal, and that is exactly why awareness matters.',
  whatItIs: [
    'It is a naturally occurring ameba that thrives in heat — it is part of the environment, not a sign of pollution.',
    'It causes a brain infection called primary amebic meningoencephalitis (PAM).',
    'Infection is rare: typically fewer than 10 people a year get PAM in the United States.',
    'Between 1962 and 2024 there were 167 reported U.S. cases — only 4 people survived.',
  ],
  whereItLives: [
    'Warm fresh water — lakes, rivers, ponds, and hot springs',
    'Soil, including the sediment at the bottom of lakes, rivers, and ponds',
    'Naturally hot (geothermal) water, such as hot springs',
    'Swimming pools, splash pads, and surf parks that are poorly maintained or under-chlorinated',
    'Warm water discharged from industrial or power plants, and even water heaters',
    'Tap water, in some cases',
  ],
  howInfection:
    'Infection happens in only one way: when water containing the ameba goes up the nose and travels to the brain. It usually happens while swimming or diving in warm fresh water — most often after long stretches of hot weather, when water is warmer and levels are lower. A few infections have come from tap water used to rinse the sinuses or nasal passages.',
  cannotGetFrom: [
    'Swallowing or drinking water that contains the ameba',
    'A properly cleaned, maintained, and chlorinated pool',
    'Another person — it is not contagious and does not cause outbreaks',
    'Shower mist, humidifier vapor, or other water vapor (there is no evidence of spread this way)',
  ],
  whoAtRisk:
    'Most people who have gotten PAM in the United States have been young boys — possibly because of activities like diving and playing in shallow sediment. Historically most cases were in southern states, but the map is shifting north: since 2010, cases have been confirmed as far north as Nebraska, Iowa, Minnesota, Indiana, Maryland, and northern California. Warming waters may be part of why.',
};

// ── Prevention & Warning Signs (CDC-sourced) ────────────────
export const prevention = {
  heading: 'Prevention & Warning Signs',
  subheading: 'A few simple habits — and the symptoms to never ignore.',
  lede:
    'You cannot see, smell, or taste Naegleria fowleri, so the safest approach is to assume it could be present any time you are in warm fresh water and take the same simple steps every time. The single thing that matters most: keep warm fresh water from going up your nose.',
  swimmingSteps: [
    'Hold your nose shut or wear a nose clip when jumping or diving into warm fresh water.',
    'Keep your head above water in hot springs and other untreated geothermal water.',
    'Avoid stirring up or digging in the sediment in shallow, warm fresh water — the ameba is more likely to live there.',
    'Take extra care during hot spells, when water is warmer and lower — the conditions the ameba likes best.',
  ],
  sinusSteps: [
    'Use distilled or sterile water for sinus rinses, neti pots, and nasal cleansing.',
    'If you use tap water, boil it first and let it cool before rinsing.',
    'Never rinse your sinuses with untreated tap water straight from the faucet.',
  ],
  // Note for build: CDC's dedicated "How to Safely Rinse Sinuses" page has extra
  // specifics (boil times, filter ratings, disinfection). Reconcile at publish.
  warningSignsEarly: ['Headache', 'Fever', 'Nausea', 'Vomiting'],
  warningSignsLater: [
    'Stiff neck',
    'Confusion',
    'Loss of balance',
    'Inattention to people and surroundings',
    'Seizures',
    'Hallucinations',
    'Coma',
  ],
  timeline:
    'Early symptoms usually begin about 5 days after exposure, but can appear anywhere from 1 to 12 days. Once symptoms start, PAM progresses very quickly — death typically occurs about 5 days after symptoms begin, with a reported range of 1 to 18 days.',
  emergency:
    'Get medical care right away if you suddenly develop fever, headache, vomiting, or a stiff neck — especially if you have recently been in warm fresh water. Tell the doctor about that exposure, or about any nasal rinsing, so they can consider this rare infection. Because PAM is so rare and moves so fast, saying it out loud can save time that matters.',
};

// ── How to Help ─────────────────────────────────────────────
export const howToHelp = {
  heading: 'How to Help',
  subheading: 'Awareness is the prevention. Here is how you carry it forward.',
  share: {
    heading: 'Spread the word',
    body:
      'The most powerful thing you can do costs nothing: tell someone. Share Brayden’s story and the prevention steps with the swimmers, parents, and campers in your life. Awareness is what saves lives here.',
    shareMessage:
      'Learn about Naegleria fowleri and a few simple steps that can prevent a rare but deadly infection: https://braydenstrong.org',
  },
  shop: {
    heading: 'Wear it, share it',
    bodyComingSoon:
      'BraydenStrong merch is on the way. Wearing his colors starts conversations — and every conversation is a chance to reach one more family. Check back soon.',
    bodyLive:
      'Grab BraydenStrong gear and wear his colors. Every piece starts a conversation — and every conversation is a chance to reach one more family.',
    cta: { label: 'Visit the shop', href: '#' }, // href replaced by site.storeUrl at build
  },
  // Honest about status: no charity exists yet, so this is a "someday" note, not a promise.
  future:
    'We hope to do more in Brayden’s name over time. Anything formal — including a registered non-profit — will be shared here openly if and when it happens.',
};

// ── Remember (operator-curated tribute) ─────────────────────
export const remember = {
  heading: 'Remember',
  subheading: 'Memories, photos, and words we hold onto.',
  lede: PLACEHOLDER, // [Operator: a short intro to the tribute wall, in your words]
  // Curated by the operator. No guestbook, nothing auto-posts. Each entry is
  // one the operator chose to place here.
  tributes: [] as { name?: string; words: string; photo?: string; alt?: string }[],
};

// ── Contact / Press (BUILT BUT HIDDEN AT LAUNCH) ────────────
// This page ships with noindex, is left out of nav and the sitemap, and is
// revealed later on the operator's say-so.
export const contact = {
  heading: 'Contact & Press',
  subheading: 'For families, media, and health organizations.',
  intro:
    'If BraydenStrong can help your family, your reporting, or your outreach, we would like to hear from you.',
  audiences: [
    'Families who have been affected and want to connect',
    'Journalists and media covering Naegleria fowleri awareness',
    'Health organizations and educators who want to share prevention materials',
  ],
  note: 'We read every message. Please be patient — this is run by a family, not a call center.',
};

// ── Footer ──────────────────────────────────────────────────
export const footer = {
  // HONESTY GUARDRAIL: no charity is formed. Never imply donations or tax
  // deductibility. This note states the status plainly.
  statusNote:
    'BraydenStrong is a family-led awareness effort. It is not a registered non-profit, and purchases are ordinary sales, not tax-deductible donations.',
  copyright: `© ${'2020'}–present BraydenStrong. In loving memory of Brayden.`,
};

// ── CDC sources (for the awareness pages' citation) ─────────
export const cdc = {
  reviewedOn: '2026-08-04', // date this site last checked the CDC pages
  note:
    'Medical and prevention information on this site is drawn from the U.S. Centers for Disease Control and Prevention (CDC). Always follow current CDC guidance and consult a medical professional.',
  sources: [
    { label: 'CDC — About Naegleria fowleri Infections', url: 'https://www.cdc.gov/naegleria/about/index.html' },
    { label: 'CDC — How People Get Naegleria fowleri Infection', url: 'https://www.cdc.gov/naegleria/causes/index.html' },
    { label: 'CDC — Symptoms of Naegleria fowleri Infection', url: 'https://www.cdc.gov/naegleria/signs-symptoms/index.html' },
    { label: 'CDC — How to Prevent Naegleria fowleri Infection', url: 'https://www.cdc.gov/naegleria/prevention/index.html' },
  ],
};
