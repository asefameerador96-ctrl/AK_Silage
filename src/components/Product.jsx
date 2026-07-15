import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

export default function Product() {
  const t = useT()

  const rows = [
    [t('ড্রাই ম্যাটার', 'Dry matter'), t('৩০–৩৫%', '30–35%')],
    [t('ক্রুড প্রোটিন', 'Crude protein'), t('৮–১২%', '8–12%')],
    [t('ক্রুড ফাইবার', 'Crude fibre'), t('৩৫–৫০%', '35–50%')],
    [t('আর্দ্রতা', 'Moisture'), t('৬৫–৭০%', '65–70%')],
    [t('ক্রুড ফ্যাট', 'Crude fat'), t('২–৩%', '2–3%')],
    ['TDN', t('৬৫–৭৫%', '65–75%')],
    [t('অ্যাশ', 'Ash'), t('৩–৫%', '3–5%')],
  ]

  const points = [
    t('দানাসহ পুরো ভুট্টা গাছ — সঠিকভাবে গ্রাইন্ড ও ফার্মেন্ট করা', 'Whole corn plant with grain — properly ground and fermented'),
    t('ফুড-গ্রেড ব্যাগে এয়ারটাইট প্যাকেজিং', 'Airtight packaging in food-grade bags'),
    t('সারাবছর পাওয়া যায় — বন্যা, খরা কিংবা যেকোনো মৌসুমে', 'Available all year — flood, drought or any season'),
  ]

  return (
    <section id="product" className="scroll-mt-20 bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <img
            src="/img/bag-red.webp"
            alt={t('এ কে সাইলেজ ৫০ কেজি ব্যাগ', 'AK Silage 50 kg bag')}
            className="mx-auto w-full max-w-md rounded-3xl shadow-2xl shadow-brand/30"
            loading="lazy"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
              {t('আমাদের পণ্য', 'Our product')}
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-extrabold">
              {t('ভুট্টার সাইলেজ', 'Corn Silage')}
              <span className="mt-1 block text-xl font-bold text-white/60 sm:text-2xl">
                {t('৫০ কেজি ফুড-গ্রেড প্যাক', '50 kg food-grade pack')}
              </span>
            </h2>

            <ul className="mt-6 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] leading-relaxed text-white/85">
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-white/12 bg-white/5">
              <div className="flex items-center justify-between bg-brand px-5 py-3">
                <h3 className="font-display text-base font-bold">{t('পুষ্টি উপাদান', 'Nutrition Facts')}</h3>
                <span className="text-xs font-semibold text-white/85">{t('(% ড্রাই ম্যাটার বেসিস)', '(% dry matter basis)')}</span>
              </div>
              <table className="w-full text-[15px]">
                <tbody>
                  {rows.map(([k, v], i) => (
                    <tr key={k} className={i % 2 ? 'bg-white/4' : ''}>
                      <td className="px-5 py-2.5 font-medium text-white/80">{k}</td>
                      <td className="px-5 py-2.5 text-right font-display font-bold">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-white/50">
              {t('* শুধুমাত্র পশুখাদ্য হিসেবে ব্যবহার্য', '* For use as animal feed only')}
            </p>

            <a
              href="tel:+8801901244248"
              className="mt-7 inline-block rounded-full bg-brand px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand/30 transition-colors duration-200 hover:bg-brand-dark"
            >
              {t('অর্ডার করুন — ০১৯০১২৪৪২৪৮', 'Order — 01901244248')}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
