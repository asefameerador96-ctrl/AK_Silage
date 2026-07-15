import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

const icons = {
  nutrition: <path d="M12 2C7 7 4 10.5 4 14.5A8 8 0 0 0 20 14.5C20 10.5 17 7 12 2z" />,
  digest: <path d="M20 6L9 17l-5-5" />,
  milk: <path d="M8 2h8v3l2 4v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l2-4V2zm0 9h8" />,
  calendar: <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />,
}

export default function WhatIs() {
  const t = useT()

  const cards = [
    ['nutrition', t('উচ্চ পুষ্টিমান', 'High nutrition'), t('শুকনো খড়ে যে পুষ্টি নষ্ট হয়, সাইলেজে সেটা থেকে যায়', 'The nutrients lost in dry straw stay preserved in silage')],
    ['digest', t('সহজ পাচ্য', 'Easy to digest'), t('গরু সহজে হজম করতে পারে, খেতেও পছন্দ করে', 'Cattle digest it easily — and love the taste')],
    ['milk', t('দুধ উৎপাদন বৃদ্ধি', 'More milk'), t('সঠিক পুষ্টিতে দুধ ঘন হয়, ফ্যাটের পরিমাণ বাড়ে', 'Proper nutrition gives thicker milk with more fat')],
    ['calendar', t('সারাবছর নিশ্চয়তা', 'Year-round assurance'), t('বন্যা বা খরা — যেকোনো মৌসুমে মানসম্পন্ন খাবার', 'Flood or drought — quality feed in every season')],
  ]

  return (
    <section id="silage" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
            {t('জেনে নিন', 'Get to know')}
          </p>
          <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-extrabold">
            {t('সাইলেজ কী?', 'What is Silage?')}
          </h2>
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-ink/75">
            <p>
              {t(
                'সহজ ভাষায় — কাঁচা ঘাস বা ভুট্টা গাছ কেটে এয়ারটাইট করে রাখলে ভেতরে ফার্মেন্টেশন হয়। এই প্রক্রিয়ায় তৈরি হয় সাইলেজ।',
                'Simply put — when fresh grass or whole corn plants are chopped and sealed airtight, natural fermentation takes place inside. That process creates silage.'
              )}
            </p>
            <p>
              {t(
                'শুকনো খড়ে যে পুষ্টি নষ্ট হয়ে যায়, সাইলেজে সেটা থাকে। গরু সহজে হজম করতে পারে, খেতেও পছন্দ করে।',
                'The nutrition that is lost in dry straw remains locked in silage. Cattle digest it easily and genuinely enjoy eating it.'
              )}
            </p>
            <p className="font-semibold text-ink">
              {t(
                'বন্যায় ঘাস নেই। খরায় ঘাস নেই। সাইলেজ থাকলে সারাবছর সমস্যা নেই।',
                'No grass in floods. No grass in drought. With silage, there is no problem all year round.'
              )}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <img
            src="/img/factory-scene.webp"
            alt={t('এ কে সাইলেজ উৎপাদন — তাজা ভুট্টা প্রক্রিয়াজাত হচ্ছে', 'AK Silage production — fresh corn being processed')}
            className="w-full rounded-3xl object-cover shadow-2xl shadow-black/20"
            loading="lazy"
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map(([icon, title, body], i) => (
          <Reveal key={title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-ink/8 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icons[icon]}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{title}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink/65">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
