import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQ } from '../../data/site'
import Reveal, { Item } from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/* ===== SECTION 7: FAQ (accordion) ===== */
export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading label="Transparan & Tanpa Ragu" title="Pertanyaan umum" text="Menyerahkan mobil butuh pertimbangan. Berikut jawaban atas pertanyaan yang paling sering diajukan." />
        <Reveal stagger={0.06} className="space-y-3">
          {FAQ.map((f, i) => (
            <Item key={f.q}>
              <div className={`rounded-2xl border bg-white transition-colors ${open === i ? 'border-brand/40' : 'border-slate-200'}`}>
                <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-navy">
                  {f.q}
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-brand"><Plus size={20} /></motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-5 pb-5 leading-relaxed text-muted">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
