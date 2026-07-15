import { useEffect, useState } from 'react'
import { useLang, useT } from '../i18n.jsx'

export default function Navbar() {
  const t = useT()
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    [t('সাইলেজ কী', 'What is Silage'), '#silage'],
    [t('পণ্য', 'Product'), '#product'],
    [t('উপকারিতা', 'Benefits'), '#benefits'],
    [t('গ্যালারি', 'Gallery'), '#gallery'],
    [t('যোগাযোগ', 'Contact'), '#contact'],
  ]

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 shadow-lg shadow-black/20' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="AK Silage">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand font-display text-xl font-extrabold text-white">
            AK
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-white">
              {t('এ কে সাইলেজ', 'AK Silage')}
            </span>
            <span className="block text-[11px] font-medium tracking-wide text-white/70">
              {t('গুণগত মানসম্পন্ন পিট সাইলেজ', 'Quality-assured pit silage')}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-white/85 transition-colors duration-200 hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={toggle}
            className="flex cursor-pointer items-center overflow-hidden rounded-full border border-white/30 text-xs font-bold"
            aria-label={lang === 'bn' ? 'Switch to English' : 'বাংলায় দেখুন'}
          >
            <span className={`px-3 py-1.5 transition-colors duration-200 ${lang === 'bn' ? 'bg-brand text-white' : 'text-white/70'}`}>
              বাং
            </span>
            <span className={`px-3 py-1.5 transition-colors duration-200 ${lang === 'en' ? 'bg-brand text-white' : 'text-white/70'}`}>
              EN
            </span>
          </button>

          <a
            href="tel:+8801901244248"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-dark sm:block"
          >
            {t('অর্ডার করুন', 'Order Now')}
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer rounded-lg p-2 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-6 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-semibold text-white/85 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+8801901244248"
            className="mt-3 block rounded-full bg-brand px-5 py-3 text-center text-sm font-bold text-white"
          >
            {t('অর্ডার করুন — ০১৯০১২৪৪২৪৮', 'Order Now — 01901244248')}
          </a>
        </div>
      )}
    </header>
  )
}
