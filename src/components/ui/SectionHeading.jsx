import Reveal from './Reveal'

/* Judul section: label kecil + judul + deskripsi opsional */
export default function SectionHeading({ label, title, text, dark = false }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <p className="mb-3 text-sm font-semibold text-brand">{label}</p>
      <h2 className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 leading-relaxed ${dark ? 'text-slate-300' : 'text-muted'}`}>{text}</p>}
    </Reveal>
  )
}
