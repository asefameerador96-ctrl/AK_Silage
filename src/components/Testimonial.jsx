import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

export default function Testimonial() {
  const t = useT()

  return (
    <section className="bg-brand-deep py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <img
            src="/img/g-testimonial.webp"
            alt={t('সন্তুষ্ট খামারি', 'A satisfied farmer')}
            className="mx-auto w-full max-w-sm rounded-3xl shadow-2xl shadow-black/40"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-3">
          <svg className="h-12 w-12 text-brand" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10 8v6a4 4 0 0 1-4 4H5a1 1 0 0 1 0-2h1a2 2 0 0 0 2-2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2zm11 0v6a4 4 0 0 1-4 4h-1a1 1 0 0 1 0-2h1a2 2 0 0 0 2-2h-3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z" />
          </svg>
          <blockquote className="mt-5">
            <p className="font-display text-[clamp(1.5rem,3vw,2.2rem)] leading-snug font-bold">
              {t(
                '“খাওয়ানোর পর গরুর দুধ আগের চেয়ে বেশি পাচ্ছি।”',
                '“Since feeding it, I am getting more milk than before.”'
              )}
            </p>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">
              {t(
                '“আগে রোজ ঘাসের পেছনে সময় যেত। বর্ষায় ঘাস পেতাম না। এ কে সাইলেজ শুরু করার পর থেকে গরু নিয়মিত খাচ্ছে। শরীর ভালো, দুধও ভালো। আমার কাছে এটাই যথেষ্ট।”',
                '“I used to spend hours every day chasing grass, and in monsoon there was none to find. Since starting AK Silage, my cattle eat regularly. Their health is better, the milk is better. For me, that is enough.”'
              )}
            </p>
          </blockquote>
          <p className="mt-6 font-display text-lg font-bold">
            {t('মোঃ রফিকুল ইসলাম', 'Md. Rafiqul Islam')}
            <span className="ml-2 font-body text-sm font-medium text-white/60">
              {t('দুগ্ধ খামারি, পিরোজপুর', 'Dairy farmer, Pirojpur')}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
