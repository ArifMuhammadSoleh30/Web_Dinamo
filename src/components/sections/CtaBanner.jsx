import Reveal from '../ui/Reveal'
import WhatsAppButton from '../ui/Button'

/* ===== SECTION 4: HEADLINE / CTA BANNER ===== */
export default function CtaBanner() {
  return (
    <section className="bg-navy py-20 text-white">
      <Reveal variant="left" className="mx-auto max-w-4xl px-5 text-center">
        <p className="font-display text-xl font-medium leading-relaxed sm:text-2xl">
          Pastikan perjalanan Anda selalu aman dan nyaman. Perbaikan tepat waktu pada sistem kelistrikan menjaga performa mobil tetap prima dan mencegah kerusakan merembet.
        </p>
        <WhatsAppButton variant="light" className="mt-9">Hubungi Kami</WhatsAppButton>
      </Reveal>
    </section>
  )
}
