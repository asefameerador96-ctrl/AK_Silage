import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useT } from '../i18n.jsx'

export default function Hero() {
  const t = useT()
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yBg = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 170])
  const scaleBg = useTransform(scrollY, [0, 700], [1, reduce ? 1 : 1.12])
  const yContent = useTransform(scrollY, [0, 550], [0, reduce ? 0 : -70])
  const fadeContent = useTransform(scrollY, [0, 500], [1, reduce ? 1 : 0.1])

  const stats = [
    [t('৫০ কেজি', '50 kg'), t('ফুড-গ্রেড এয়ারটাইট প্যাক', 'Food-grade airtight pack')],
    [t('৬৫–৭৫%', '65–75%'), t('TDN — মোট হজমযোগ্য পুষ্টি', 'TDN — total digestible nutrients')],
    [t('১২ মাস', '12 months'), t('সারাবছর নিশ্চিত সরবরাহ', 'Guaranteed year-round supply')],
  ]

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-ink">
      <motion.div className="absolute inset-0" style={{ y: yBg, scale: scaleBg }}>
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/quality-silage.mp4"
          poster="/img/hero-cover.webp"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/30" />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-16 sm:px-6 sm:pb-20"
        style={{ y: yContent, opacity: fadeContent }}
      >
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm"
        >
          {t('এ.কে. হেরিটেজ এন্ড কর্পোরেশন — রংপুর', 'A.K. Heritage & Corporation — Rangpur')}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl font-display text-[clamp(2.4rem,7vw,5.2rem)] leading-[1.08] font-extrabold text-white"
        >
          {t('একমাত্র গুণগত মানসম্মত', 'The Only Quality-Assured')}{' '}
          <span className="text-brand" style={{ textShadow: '0 2px 24px rgba(0,0,0,.6)' }}>
            {t('পিট সাইলেজ', 'Pit Silage')}
          </span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {t(
            'বাংলাদেশের খামারিদের জন্য তৈরি সেরা মানের ভুট্টার সাইলেজ। দানাসহ সঠিকভাবে গ্রাইন্ড ও ফার্মেন্ট করা, ফুড-গ্রেড ব্যাগে এয়ারটাইট প্যাকেজিং — আপনার গরুর জন্য সবচেয়ে ভালো খাবারটা এখন হাতের কাছে।',
            'Premium corn silage made for the farmers of Bangladesh. Ground and fermented whole with the grain, sealed airtight in food-grade bags — the best feed for your cattle is now within reach.'
          )}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center gap-3.5"
        >
          <a
            href="tel:+8801901244248"
            className="rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/40 transition-colors duration-200 hover:bg-brand-dark"
          >
            {t('আজই অর্ডার করুন', 'Order Today')}
          </a>
          <a
            href="#silage"
            className="rounded-full border-2 border-white/60 px-8 py-[14px] text-base font-bold text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-ink"
          >
            {t('বিস্তারিত জানুন', 'Learn More')}
          </a>
        </motion.div>

        <motion.dl
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {stats.map(([num, label]) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-2xl font-extrabold text-white">{num}</dd>
              <dd className="mt-0.5 text-[13px] font-medium text-white/75">{label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <div className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 sm:block" aria-hidden="true">
        <svg className="animate-bounce-soft h-7 w-7 text-white/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}
