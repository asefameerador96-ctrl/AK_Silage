import { useRef } from 'react'
import Reveal from './Reveal.jsx'
import { useT } from '../i18n.jsx'

export default function Gallery() {
  const t = useT()
  const track = useRef(null)

  const shots = [
    ['g-silage-pile.webp', t('তাজা ভুট্টার সাইলেজ', 'Fresh corn silage')],
    ['g-farmer-dusk.webp', t('খামারির সন্ধ্যা', "A farmer's evening")],
    ['g-dairy-farm.webp', t('ডেইরি খামারে এ কে সাইলেজ', 'AK Silage at a dairy farm')],
    ['g-cow-closeup.webp', t('সুস্থ গরু, সাইলেজের গুণ', 'Healthy cattle, the power of silage')],
    ['g-sunset-field.webp', t('মাঠ থেকে খামার', 'From field to farm')],
    ['g-farm-day.webp', t('প্রতিদিনের খাদ্য, পুষ্টির সাথে', 'Daily feed, full of nutrition')],
    ['g-order-poster.webp', t('আজকেই অর্ডার করুন', 'Order today')],
    ['g-testimonial.webp', t('খামারিদের আস্থা', 'Trusted by farmers')],
  ]

  const scroll = (dir) => {
    track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="gallery" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
              {t('গ্যালারি', 'Gallery')}
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3.4rem)] leading-tight font-extrabold">
              {t('মাঠের গল্প', 'Stories from the Field')}
            </h2>
          </Reveal>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label={t('আগের ছবি', 'Previous images')}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-200 hover:bg-brand hover:border-brand hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label={t('পরের ছবি', 'Next images')}
              className="grid h-12 w-12 cursor-pointer place-items-center rounded-full border border-ink/15 text-ink transition-colors duration-200 hover:bg-brand hover:border-brand hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {shots.map(([img, caption]) => (
            <figure key={img} className="w-72 shrink-0 snap-start sm:w-80">
              <img
                src={`/img/${img}`}
                alt={caption}
                className="h-96 w-full rounded-2xl object-cover shadow-md"
                loading="lazy"
              />
              <figcaption className="mt-2.5 text-sm font-semibold text-ink/60">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
