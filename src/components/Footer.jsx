import { Link, useLocation } from 'react-router-dom'
import { useT } from '../i18n.jsx'
import { GUIDES } from '../content/guides.js'
import { SISTER_SITE } from '../seo/routeMeta.js'

export default function Footer() {
  const t = useT()
  const { pathname } = useLocation()
  const onHome = pathname === '/'
  const section = (hash) => (onHome ? hash : `/${hash}`)

  const links = [
    [t('সাইলেজ কী', 'What is Silage'), section('#silage')],
    [t('পণ্য', 'Product'), section('#product')],
    [t('উপকারিতা', 'Benefits'), section('#benefits')],
    [t('গ্যালারি', 'Gallery'), section('#gallery')],
    [t('যোগাযোগ', 'Contact'), section('#contact')],
  ]

  return (
    <footer className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand font-display text-xl font-extrabold">AK</span>
            <span className="font-display text-lg font-bold">{t('এ কে সাইলেজ', 'AK Silage')}</span>
          </div>
          <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">
            {t(
              'একমাত্র গুণগত মানসম্পন্ন পিট সাইলেজ — খামারের বারো মাসের বিশ্বস্ত পুষ্টির জোগানদার।',
              'The only quality-assured pit silage — your farm’s trusted source of nutrition, twelve months a year.'
            )}
          </p>
        </div>

        <nav aria-label={t('ফুটার লিংক', 'Footer links')}>
          <h3 className="font-display text-sm font-bold tracking-widest text-white/50 uppercase">
            {t('লিংক', 'Links')}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="text-[15px] font-medium text-white/75 transition-colors duration-200 hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t('গাইড', 'Guides')}>
          <h3 className="font-display text-sm font-bold tracking-widest text-white/50 uppercase">
            {t('খামারির গাইড', 'Farmer’s guide')}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {GUIDES.map((g) => (
              <li key={g.slug}>
                <Link
                  to={`/guide/${g.slug}`}
                  className="text-[15px] font-medium text-white/75 transition-colors duration-200 hover:text-white"
                >
                  {g.title(t)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold tracking-widest text-white/50 uppercase">
            {t('যোগাযোগ', 'Contact')}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-white/75">
            {t('হটলাইন:', 'Hotline:')}{' '}
            <a href="tel:+8801901244248" className="font-bold text-white hover:text-brand">
              {t('০১৯০১২৪৪২৪৮', '01901244248')}
            </a>
            <br />
            {t('এ.কে. হেরিটেজ এন্ড কর্পোরেশন', 'A.K. Heritage & Corporation')}
            <br />
            {t('পাগলাপীর, রংপুর', 'Paglapir, Rangpur')}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span>
          © {new Date().getFullYear()}{' '}
          {t('এ.কে. হেরিটেজ এন্ড কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।', 'A.K. Heritage & Corporation. All rights reserved.')}
        </span>
        <span>
          {t('আমাদের সহযোগী ব্র্যান্ড:', 'Our sister brand:')}{' '}
          <a
            href={SISTER_SITE.url}
            className="font-semibold text-white/75 underline-offset-2 hover:text-white hover:underline"
          >
            {t(SISTER_SITE.nameBn, SISTER_SITE.nameEn)}
          </a>
        </span>
      </div>
    </footer>
  )
}
