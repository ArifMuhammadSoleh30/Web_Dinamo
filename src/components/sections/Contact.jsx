import { SITE } from '../../data/site'
import Reveal from '../ui/Reveal'
import WhatsAppButton from '../ui/Button'

/* ===== SECTION 9: HUBUNGI KAMI ===== */
export default function Contact() {
  return (
    <section id="kontak" className="py-24">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold text-brand">Hubungi</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Hubungi kami</h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">Jaga kenyamanan dan keamanan berkendara Anda. Dapatkan solusi perbaikan dinamo yang presisi, langsung di tempat Anda.</p>
        <WhatsAppButton className="mt-8 !px-9 !py-4 text-base">{SITE.phone}</WhatsAppButton>
        <p className="mt-5 text-sm text-muted">Konsultasi via WhatsApp · Pengerjaan setelah harga cocok · Area Bandung & Cimahi</p>
      </Reveal>
    </section>
  )
}
