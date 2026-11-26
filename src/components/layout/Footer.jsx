import { SITE } from '../../data/site'

/* ===== FOOTER ===== */
export default function Footer() {
  return (
    <footer className="bg-dnavy py-8 text-center text-sm text-slate-400">
      <p>© {new Date().getFullYear()} Service Dinamo Mobil Panggilan · {SITE.name}</p>
    </footer>
  )
}
