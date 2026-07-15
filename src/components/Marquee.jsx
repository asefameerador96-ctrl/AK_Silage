import { useT } from '../i18n.jsx'

export default function Marquee() {
  const t = useT()
  const items = [
    t('গরুর পুষ্টি, খামারের স্বস্তি', "Cattle nutrition, farmer's peace of mind"),
    t('দুধ উৎপাদন বৃদ্ধি', 'Higher milk production'),
    t('সারাবছর নিশ্চিত জোগান', 'Guaranteed supply all year round'),
    t('ফুড-গ্রেড এয়ারটাইট প্যাকেজিং', 'Food-grade airtight packaging'),
    t('সুস্থ গরু, লাভজনক খামার', 'Healthy cattle, profitable farms'),
  ]
  const row = [...items, ...items]

  return (
    <div className="overflow-hidden bg-brand py-3.5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-bold text-white">
            {item}
            <svg className="h-4 w-4 shrink-0 text-white/70" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4-6.2-4.6-6.2 4.6 2.4-7.4L2 9.4h7.6z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  )
}
