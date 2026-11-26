import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { HERO_IMAGE, HERO_PERKS, SITE } from '../../data/site'
import { stagger, fadeUp } from '../../lib/motion'
import WhatsAppButton from '../ui/Button'
import Icon from '../ui/Icon'
import SafeImage from '../ui/SafeImage'

/* ===== SECTION 1: HERO / BERANDA ===== */
export default function Hero() {
  const words = 'Service Dinamo Mobil Panggilan Bandung & Cimahi'.split(' ')
  return (
    <section id="beranda" className="relative overflow-hidden bg-dnavy pt-28 text-white">
      {/* Gambar latar: scale halus saat load */}
      <motion.div initial={{ scale: 1.12, opacity: 0 }} animate={{ scale: 1, opacity: 0.28 }} transition={{ duration: 1.6, ease: 'easeOut' }} className="absolute inset-0">
        <SafeImage src={HERO_IMAGE} alt="Montir dinamo bekerja di lokasi" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-dnavy/40 to-dnavy" />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-10 sm:pt-16">
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show" className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-200">
            <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5"><Star size={14} className="fill-amber-400 text-amber-400" /> Rating {SITE.rating} ({SITE.reviews} Ulasan)</span>
            <span className="rounded-full bg-white/10 px-3.5 py-1.5">Spesialis Sejak {SITE.since}</span>
          </motion.div>

          {/* Headline: stagger per kata */}
          <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span className="inline-block" initial={{ y: '100%' }} animate={{ y: 0 }} transition={{ delay: 0.2 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>{w}</motion.span>
              </span>
            ))}
          </h1>

          <motion.p variants={fadeUp} className="mt-6 text-lg font-medium text-white">Mobil sulit distarter? Aki sering tekor? Mesin cepat panas? Atau wiper macet?</motion.p>
          <motion.p variants={fadeUp} className="mt-3 max-w-xl leading-relaxed text-slate-300">
            Kami datang ke rumah atau kantor Anda. Pengerjaan dilakukan di tempat, transparan, dan bergaransi, tanpa perlu repot ke bengkel.
          </motion.p>

          {/* CTA berurutan */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <WhatsAppButton message="Halo Kang, Mobil Saya Butuh Perbaikan, Bisa Datang Ke Lokasi Saya?">Panggil Montir Sekarang</WhatsAppButton>
            <a href="#layanan" className="inline-flex items-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10">Lihat Layanan</a>
          </motion.div>
          <motion.p variants={fadeUp} className="mt-5 text-sm text-slate-400">Konsultasi & estimasi awal via WA · Dikerjakan di tempat Anda · Montir pengalaman 20+ tahun</motion.p>
        </motion.div>

        {/* Perks */}
        <motion.ul variants={stagger(0.1, 1)} initial="hidden" animate="show" className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO_PERKS.map((p) => (
            <motion.li key={p.title} variants={fadeUp} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand/20 text-blue-300"><Icon name={p.icon} size={20} /></span>
              <div><p className="text-sm font-semibold">{p.title}</p><p className="text-xs text-slate-400">{p.text}</p></div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
