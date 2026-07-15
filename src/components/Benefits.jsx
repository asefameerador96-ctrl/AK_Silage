import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

const icons = {
  power: <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />,
  milk: <path d="M8 2h8v3l2 4v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9l2-4V2zm-2 11h12" />,
  taste: <path d="M12 21C7 17 4 13.5 4 10a8 8 0 0 1 16 0c0 3.5-3 7-8 11z" />,
  ease: <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14l-3-3" />,
  shield: <path d="M12 22s8-3 8-10V5l-8-3-8 3v7c0 7 8 10 8 10z" />,
  profit: <path d="M3 17l6-6 4 4 8-8M15 7h6v6" />,
}

export default function Benefits() {
  const t = useT()

  const items = [
    ['power', t('ভেতর থেকে শক্তি', 'Strength from within'), t('পুষ্টিতে ভরা সাইলেজ শুধু পেট ভরায় না — ভেতর থেকে এনে দেয় আসল শক্তি।', 'Nutrient-rich silage does more than fill the stomach — it builds real strength from within.')],
    ['milk', t('ঘন দুধ, বেশি ফ্যাট', 'Thicker milk, more fat'), t('দানাসহ পুরো ভুট্টার পুষ্টি কাজ করে — দুধ ঘন হয়, ফ্যাটের পরিমাণ বাড়ে।', 'Whole-corn nutrition with grain at work — milk gets thicker with higher fat content.')],
    ['taste', t('রুচি বাড়ায়', 'Boosts appetite'), t('মিষ্টি-টক গন্ধে গরু নিজেই এগিয়ে আসে। রুচি নেই এমন গরুও খেয়ে শেষ করে।', 'The sweet-sour aroma draws cattle in — even picky eaters finish every bite.')],
    ['ease', t('ঝামেলামুক্ত খামার', 'Hassle-free farming'), t('রোজ ঘাস কাটার ঝামেলা নেই, হঠাৎ খাবার সংকটের ভয় নেই।', 'No daily grass cutting, no fear of sudden feed shortages.')],
    ['shield', t('যেকোনো মৌসুমে নিশ্চিন্ত', 'Secure in every season'), t('বন্যা, খরা কিংবা যেকোনো মৌসুমে — বারো মাসের বিশ্বস্ত পুষ্টির জোগানদার।', 'Flood, drought or any season — a trusted supply of nutrition all twelve months.')],
    ['profit', t('লাভজনক খামার', 'Profitable farming'), t('সুস্থ গরু সাইলেজ খায়, লাভের পথে খামার যায়। উৎপাদন বাড়লে মুনাফা আসে।', 'Healthy cattle eat silage, and farms move toward profit. More production, more income.')],
  ]

  return (
    <section id="benefits" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
          {t('কেন এ কে সাইলেজ', 'Why AK Silage')}
        </p>
        <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-extrabold">
          {t('খামারের প্রতিদিনের পুষ্টি', 'Daily Nutrition for Your Farm')}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
          {t(
            'এ কে সাইলেজ দিন — গরুর পুষ্টির চিন্তাটা আমাদের উপর ছেড়ে দিন।',
            'Feed AK Silage — and leave the worry of cattle nutrition to us.'
          )}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(([icon, title, body], i) => (
          <Reveal key={title} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-2xl border border-ink/8 bg-white p-7 shadow-sm transition-shadow duration-200 hover:shadow-lg">
              <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {icons[icon]}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/65">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
