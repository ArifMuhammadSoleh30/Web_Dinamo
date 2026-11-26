import { WHY } from '../../data/site'
import Reveal, { Item } from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Icon from '../ui/Icon'

/* ===== SECTION 3: MENGAPA KAMI (Tentang Kami) ===== */
export default function WhyUs() {
  return (
    <section id="tentang" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading label="Standar Kualitas Kami" title="Mengapa mempercayakan kendaraan pada kami?" />
        <Reveal stagger={0.08} className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <Item key={w.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lblue text-brand"><Icon name={w.icon} size={20} /></span>
              <div>
                <h3 className="font-display font-semibold text-navy">{w.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{w.text}</p>
              </div>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
