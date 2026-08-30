export const SITE = 'https://www.aksilage.com'
export const SITE_NAME = 'AK সাইলেজ'
export const DEFAULT_IMAGE = `${SITE}/img/hero-cover.webp`

/** The sister brand — linked from the footer and declared in JSON-LD. */
export const SISTER_SITE = {
  url: 'https://www.prantorsilage.com',
  nameBn: 'প্রান্তর সাইলেজ',
  nameEn: 'Prantor Silage',
}

/**
 * Per-route metadata, in Bengali because that is what the audience searches in.
 *
 * scripts/generate-sitemap.mjs and scripts/prerender.mjs both read this file, so a
 * route added here is automatically crawled, prerendered and listed in the sitemap.
 */
export const ROUTE_META = {
  '/': {
    title: 'AK সাইলেজ | একমাত্র গুণগত মানসম্পন্ন পিট সাইলেজ — ভুট্টার সাইলেজ ৫০ কেজি',
    description:
      'AK সাইলেজ — বাংলাদেশের খামারিদের জন্য সেরা মানের ভুট্টার সাইলেজ। দানাসহ গ্রাইন্ড ও ফার্মেন্ট, ফুড-গ্রেড ব্যাগে এয়ারটাইট প্যাকেজিং, TDN ৬৫–৭৫%। সারাবছর সরবরাহ, সারাদেশে কুরিয়ার ডেলিভারি। অর্ডার: ০১৯০১২৪৪২৪৮',
  },
  '/guide': {
    title: 'খামারির গাইড — সাইলেজ নিয়ে সব প্রশ্নের উত্তর',
    description:
      'গরুকে দিনে কত সাইলেজ খাওয়াবেন, সাইলেজ কতদিন ভালো থাকে, কাঁচা ঘাসের সাথে পার্থক্য কী — খামারিদের সবচেয়ে বেশি করা প্রশ্নগুলোর বিস্তারিত উত্তর।',
  },
  '/guide/what-is-silage': {
    title: 'সাইলেজ কী এবং কীভাবে তৈরি হয়',
    description:
      'সাইলেজ কী, কীভাবে ফার্মেন্টেশনে তৈরি হয়, খড়ের সাথে পার্থক্য কোথায়, আর ভালো সাইলেজ চেনার সহজ উপায় — রঙ, গন্ধ ও গঠন দেখে।',
  },
  '/guide/how-much-silage-per-cow': {
    title: 'গরুকে দিনে কত সাইলেজ খাওয়াবেন',
    description:
      'প্রতি ১০০ কেজি ওজনের জন্য দিনে ৫–৭ কেজি সাইলেজ। ৩০০ কেজি গাভীর জন্য ১৫–২১ কেজি। কীভাবে ধীরে ধীরে শুরু করবেন, সাথে আর কী কী খাওয়াতে হবে, আর বাছুরের ক্ষেত্রে কী নিয়ম।',
  },
  '/guide/silage-vs-green-grass': {
    title: 'সাইলেজ না কাঁচা ঘাস — কোনটা ভালো',
    description:
      'কাঁচা ঘাস আর সাইলেজের পাশাপাশি তুলনা: সারাবছর প্রাপ্যতা, পুষ্টির ধারাবাহিকতা, দৈনিক পরিশ্রম ও সংরক্ষণ। খরচের হিসাবটা আসলে কীভাবে করবেন।',
  },
  '/guide/storage-and-shelf-life': {
    title: 'সাইলেজ কতদিন থাকে ও কীভাবে সংরক্ষণ করবেন',
    description:
      'সিল করা ব্যাগ মাসের পর মাস ভালো থাকে; খোলার পর ৩–৫ দিনে শেষ করুন। নষ্ট সাইলেজ চেনার উপায় — ছত্রাক, দুর্গন্ধ, পিচ্ছিল ভাব ও অস্বাভাবিক গরম।',
  },
  '/guide/price-and-ordering': {
    title: 'সাইলেজের দাম ও অর্ডার করার নিয়ম',
    description:
      'AK সাইলেজের বর্তমান দর জানতে ০১৯০১২৪৪২৪৮ নম্বরে কল করুন। ৫০ কেজি ফুড-গ্রেড ব্যাগ, সারাদেশে কুরিয়ার ডেলিভারি, পাইকারি পরিমাণে আলাদা দর।',
  },
}

/** Emitted on every indexable page. */
export const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AK Silage',
  alternateName: 'এ কে সাইলেজ',
  url: SITE,
  description:
    'Corn silage for cattle farmers in Bangladesh, produced by A.K. Heritage & Corporation in Paglapir, Rangpur.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Paglapir',
    addressRegion: 'Rangpur',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+8801901244248',
    contactType: 'sales',
    areaServed: 'BD',
    availableLanguage: ['bn', 'en'],
  },
  // Declares the sister brand as a related entity rather than only linking to it.
  sameAs: [SISTER_SITE.url],
}
