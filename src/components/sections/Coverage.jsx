import { Clock, Instagram, MapPin, Music2, Phone } from 'lucide-react'
import { SITE } from '../../data/site'
import { waLink } from '../../lib/whatsapp'
import Reveal from '../ui/Reveal'

/* ===== SECTION 10: JANGKAUAN LAYANAN + GOOGLE MAPS ===== */
export default function Coverage() {
  const rows = [
    { icon: MapPin, text: SITE.area },
    { icon: Clock, text: SITE.hours },
    { icon: Phone, text: SITE.phone, href: waLink() },
    { icon: Instagram, text: SITE.instagram.label, href: SITE.instagram.url },
    { icon: Music2, text: SITE.tiktok.label, href: SITE.tiktok.url },
  ]
  return (
    <section id="jangkauan" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <Reveal variant="left">
          <p className="mb-3 text-sm font-semibold text-brand">Jangkauan</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Jangkauan layanan</h2>
          <ul className="mt-8 space-y-4">
            {rows.map(({ icon: I, text, href }) => (
              <li key={text} className="flex items-center gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-lblue text-brand"><I size={18} /></span>
                {href ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand">{text}</a> : <span className="font-medium">{text}</span>}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal variant="right">
          <iframe title="Lokasi Service Dinamo Panggilan" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
            className="h-[380px] w-full rounded-3xl border border-slate-200" />
        </Reveal>
      </div>
    </section>
  )
}
