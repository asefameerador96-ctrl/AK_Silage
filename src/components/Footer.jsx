import { useT } from '../i18n.jsx'

export default function Footer() {
  const t = useT()

  const links = [
    [t('সাইলেজ কী', 'What is Silage'), '#silage'],
    [t('পণ্য', 'Product'), '#product'],
    [t('উপকারিতা', 'Benefits'), '#benefits'],
    [t('গ্যালারি', 'Gallery'), '#gallery'],
    [t('যোগাযোগ', 'Contact'), '#contact'],
  ]

  return (
    <footer className="bg-ink py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
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
            {t('পলাশবাড়ী, রংপুর', 'Palashbari, Rangpur')}
          </p>
          <p className="mt-4 text-[15px] text-white/60">
            {t('আমাদের আরেকটি ব্র্যান্ড —', 'Also from our family —')}{' '}
            <a href="https://www.prantorsilage.com" className="font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline">
              {t('প্রান্তর সাইলেজ', 'Prantor Silage')}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm text-white/45 sm:px-6">
        © {new Date().getFullYear()} {t('এ.কে. হেরিটেজ এন্ড কর্পোরেশন। সর্বস্বত্ব সংরক্ষিত।', 'A.K. Heritage & Corporation. All rights reserved.')}
      </div>
    </footer>
  )
}
