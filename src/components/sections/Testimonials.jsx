import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react'
import { SITE, TESTIMONIALS } from '../../data/site'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SafeImage from '../ui/SafeImage'

/* Jumlah slide terlihat sesuai lebar layar */
const usePerView = () => {
  const calc = () => (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1)
  const [v, setV] = useState(calc)
  useEffect(() => { const f = () => setV(calc()); window.addEventListener('resize', f); return () => window.removeEventListener('resize', f) }, [])
  return v
}

/* ===== SECTION 6: TESTIMONI (carousel) ===== */
export default function Testimonials() {
  const perView = usePerView()
  const max = TESTIMONIALS.length - perView
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (d) => setI((c) => Math.min(Math.max(c + d, 0), max))

  /* Autoplay, berhenti saat hover */
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((c) => (c >= max ? 0 : c + 1)), 4500)
    return () => clearInterval(t)
  }, [paused, max])

  return (
    <section id="testimoni" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="Kepuasan Pelanggan Nyata" title="Testimoni" />

        {/* Ringkasan rating */}
        <Reveal className="mb-12 flex flex-col items-center gap-2 text-center">
          <div className="flex items-center gap-3">
            <span className="font-display text-5xl font-semibold text-navy">{SITE.rating}</span>
            <span className="flex gap-0.5">{[...Array(5)].map((_, k) => <Star key={k} size={18} className="fill-amber-400 text-amber-400" />)}</span>
          </div>
          <p className="text-sm text-muted">Terverifikasi di Google Maps & WhatsApp pelanggan · Dipercaya {SITE.customers} pemilik mobil di Bandung & Cimahi</p>
          <a href={SITE.gmaps} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">Lihat ulasan Google Maps <ExternalLink size={14} /></a>
        </Reveal>

        {/* Carousel */}
        <Reveal variant="in">
          <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
            <div className="overflow-hidden">
              <motion.div className="flex" animate={{ x: `-${(i * 100) / perView}%` }} transition={{ type: 'spring', stiffness: 120, damping: 24 }}>
                {TESTIMONIALS.map((t) => (
                  <div key={t.src} className="shrink-0 px-2" style={{ width: `${100 / perView}%` }}>
                    <SafeImage src={t.src} alt={t.alt} className="aspect-[3/4] w-full rounded-2xl border border-slate-200 bg-page object-cover" />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="mt-8 flex items-center justify-center gap-4">
              <button onClick={() => go(-1)} disabled={i === 0} aria-label="Sebelumnya" className="rounded-full border border-slate-200 p-2.5 text-navy transition-colors hover:bg-lblue disabled:opacity-30"><ChevronLeft size={18} /></button>
              <div className="flex gap-1.5">
                {[...Array(max + 1)].map((_, k) => (
                  <button key={k} onClick={() => setI(k)} aria-label={`Slide ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-brand' : 'w-2 bg-slate-300'}`} />
                ))}
              </div>
              <button onClick={() => go(1)} disabled={i === max} aria-label="Berikutnya" className="rounded-full border border-slate-200 p-2.5 text-navy transition-colors hover:bg-lblue disabled:opacity-30"><ChevronRight size={18} /></button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
