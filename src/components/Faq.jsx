import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

export default function Faq() {
  const t = useT()
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(0)

  const items = [
    [
      t('সাইলেজ কী?', 'What is silage?'),
      t(
        'কাঁচা ঘাস বা ভুট্টা গাছ কেটে এয়ারটাইট করে রাখলে ভেতরে ফার্মেন্টেশন হয় — এই প্রক্রিয়ায় তৈরি খাদ্যই সাইলেজ। শুকনো খড়ে যে পুষ্টি নষ্ট হয়, সাইলেজে সেটা থেকে যায়; গরু সহজে হজম করে, খেতেও পছন্দ করে।',
        'When fresh grass or whole corn plants are chopped and sealed airtight, fermentation takes place inside — the feed created by that process is silage. The nutrition lost in dry straw stays preserved; cattle digest it easily and love the taste.'
      ),
    ],
    [
      t('এ কে সাইলেজ কীভাবে অর্ডার করব?', 'How do I order AK Silage?'),
      t(
        '০১৯০১২৪৪২৪৮ নম্বরে কল করুন অথবা আমাদের ফেসবুক পেজে মেসেজ দিন — আজই অর্ডার প্রসেস করা হবে। সারাদেশে কুরিয়ারে ডেলিভারি হয়।',
        'Call 01901244248 or message our Facebook page — your order will be processed the same day. Courier delivery is available nationwide.'
      ),
    ],
    [
      t('কত কেজির প্যাক পাওয়া যায়?', 'What pack sizes are available?'),
      t(
        '৫০ কেজি ফুড-গ্রেড ব্যাগে এয়ারটাইট প্যাকেজিং-এ পাওয়া যায়। এতে সাইলেজের মান ও পুষ্টি দীর্ঘদিন অটুট থাকে।',
        'It comes in 50 kg food-grade bags with airtight packaging, which keeps the quality and nutrition intact for a long time.'
      ),
    ],
    [
      t('গরুকে সাইলেজ খাওয়ালে কী উপকার হয়?', 'What are the benefits of feeding silage?'),
      t(
        'দুধ ঘন হয় ও ফ্যাটের পরিমাণ বাড়ে, রুচি বাড়ে, হজম সহজ হয় এবং গরু সুস্থ থাকে। সুস্থ গরু সাইলেজ খায়, লাভের পথে খামার যায়।',
        'Milk gets thicker with more fat, appetite improves, digestion becomes easier and cattle stay healthy. Healthy cattle eat silage — and farms move toward profit.'
      ),
    ],
    [
      t('সারাবছর কি এ কে সাইলেজ পাওয়া যায়?', 'Is AK Silage available all year round?'),
      t(
        'হ্যাঁ। বন্যা, খরা কিংবা যেকোনো মৌসুমে — এ কে সাইলেজ বারো মাসই পাওয়া যায়। আপনার খামারের বারো মাসের বিশ্বস্ত পুষ্টির জোগানদার।',
        'Yes. Flood, drought or any season — AK Silage is available all twelve months. Your farm’s trusted year-round source of nutrition.'
      ),
    ],
  ]

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
            {t('সাধারণ প্রশ্ন', 'FAQ')}
          </p>
          <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-extrabold">
            {t('প্রশ্ন ও উত্তর', 'Questions & Answers')}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3.5">
          {items.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <Reveal key={q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-ink/10 bg-paper">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-4.5 text-left"
                  >
                    <span className="font-display text-[17px] font-bold">{q}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: reduce ? 0 : 0.25 }}
                      className="h-5 w-5 shrink-0 text-brand"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-[15px] leading-relaxed text-ink/70">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
