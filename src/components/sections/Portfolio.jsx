import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { PORTFOLIO } from '../../data/site'
import Reveal, { Item } from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import SafeImage from '../ui/SafeImage'

/* ===== SECTION 5: PORTOFOLIO (grid + lightbox) ===== */
export default function Portfolio() {
  const [index, setIndex] = useState(null)
  const n = PORTFOLIO.length
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n])
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n])

  /* Keyboard: Esc, panah kiri/kanan */
  useEffect(() => {
    if (index === null) return
    const k = (e) => { if (e.key === 'Escape') setIndex(null); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev() }
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [index, next, prev])

  return (
    <section id="portofolio" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="Bukti Pengerjaan di Lokasi" title="Portofolio" />

        <Reveal stagger={0.05} className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {PORTFOLIO.map((p, i) => (
            <Item key={p.src}>
              <button onClick={() => setIndex(i)} aria-label={`Buka ${p.alt}`} className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-slate-200">
                <SafeImage src={p.src} alt={p.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <span className="absolute inset-0 grid place-items-center bg-dnavy/0 text-white opacity-0 transition-all duration-300 group-hover:bg-dnavy/40 group-hover:opacity-100"><Maximize2 size={22} /></span>
              </button>
            </Item>
          ))}
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dnavy/95 p-4">
            <button onClick={() => setIndex(null)} aria-label="Tutup" className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"><X /></button>
            <button onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Sebelumnya" className="absolute left-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"><ChevronLeft /></button>
            <AnimatePresence mode="wait">
              <motion.div key={index} initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} onClick={(e) => e.stopPropagation()}>
                <SafeImage src={PORTFOLIO[index].src} alt={PORTFOLIO[index].alt} className="max-h-[80vh] max-w-[88vw] rounded-xl object-contain" />
                <p className="mt-3 text-center text-sm text-slate-400">{index + 1} / {n}</p>
              </motion.div>
            </AnimatePresence>
            <button onClick={(e) => { e.stopPropagation(); next() }} aria-label="Berikutnya" className="absolute right-3 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
