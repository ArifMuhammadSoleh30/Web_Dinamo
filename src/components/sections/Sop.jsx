import { SOP } from '../../data/site'
import Reveal, { Item } from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'

/* ===== SECTION 8: STANDAR PENGERJAAN (SOP, timeline) ===== */
export default function Sop() {
  return (
    <section className="bg-dnavy py-24">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading dark label="Prosedur Kerja Terukur" title="Standar pengerjaan" text="Prosedur yang jelas dan terukur untuk menjamin kualitas." />
        <Reveal stagger={0.12} className="relative space-y-8 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-px before:bg-white/15">
          {SOP.map((s, i) => (
            <Item key={s.title} className="relative flex gap-6">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-display text-sm font-semibold text-white">{i + 1}</span>
              <div className="pt-1.5">
                <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-1.5 leading-relaxed text-slate-300">{s.text}</p>
              </div>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
