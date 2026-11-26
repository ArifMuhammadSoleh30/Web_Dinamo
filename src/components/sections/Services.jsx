import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'
import { SERVICES } from '../../data/site'
import Reveal, { Item } from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import WhatsAppButton from '../ui/Button'
import Icon from '../ui/Icon'

/* ===== SECTION 2: LAYANAN (kartu + modal "Cek Gejala") ===== */
export default function Services() {
  const [active, setActive] = useState(null)

  return (
    <section id="layanan" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="Layanan Kami" title="Spesialis kelistrikan mobil" text="Empat komponen yang paling sering bermasalah, kami tangani langsung di lokasi Anda." />

        <Reveal stagger={0.1} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <Item key={s.id}>
              <motion.article whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/50 hover:shadow-soft">
                {/* Ikon beranimasi saat hover */}
                <motion.span whileHover={{ rotate: 12, scale: 1.1 }} className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-lblue text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon name={s.icon} size={22} />
                </motion.span>
                <h3 className="font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.short}</p>
                <button onClick={() => setActive(s)} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Cek Gejala <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </motion.article>
            </Item>
          ))}
        </Reveal>
      </div>
      <ServiceModal service={active} onClose={() => setActive(null)} />
    </section>
  )
}

/* Modal detail layanan */
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [onClose])

  return (
    <AnimatePresence>
      {service && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
          className="fixed inset-0 z-50 grid place-items-center bg-dnavy/70 p-4 backdrop-blur-sm">
          <motion.div role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
            className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl bg-white p-7 sm:p-9">
            <div className="mb-5 flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-semibold text-navy">{service.title}</h3>
              <button onClick={onClose} aria-label="Tutup" className="rounded-full p-1.5 text-muted hover:bg-page"><X size={20} /></button>
            </div>
            {service.about.map((p, i) => <p key={i} className="mb-3 leading-relaxed text-muted">{p}</p>)}
            <p className="mb-3 mt-6 text-sm font-semibold text-navy">Gejala yang perlu diperhatikan</p>
            <ul className="space-y-2.5">
              {service.symptoms.map((t) => (
                <li key={t} className="flex gap-3 text-sm"><Check size={18} className="mt-0.5 shrink-0 text-brand" />{t}</li>
              ))}
            </ul>
            <WhatsAppButton className="mt-8 w-full" message={`Halo Kang, saya ingin tanya service ${service.title}. Mobil saya ada kendala, bisa bantu?`}>Konsultasi via WhatsApp</WhatsAppButton>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
