import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'
import { NAV, SITE } from '../../data/site'
import { waLink } from '../../lib/whatsapp'

/* ===== NAVBAR: sticky, background berubah saat scroll, menu mobile slide ===== */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${solid ? 'bg-white/90 shadow-soft backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#beranda" className={`flex items-center gap-2 font-display font-semibold transition-colors ${solid ? 'text-navy' : 'text-white'}`}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-white"><Zap size={16} /></span>
          {SITE.name}
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={`text-sm font-medium transition-colors hover:text-brand ${scrolled ? 'text-ink' : 'text-white/85'}`}>{n.label}</a>
            </li>
          ))}
          <li>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">Kontak</a>
          </li>
        </ul>

        <button onClick={() => setOpen(!open)} aria-label="Buka menu" className={`md:hidden ${solid ? 'text-navy' : 'text-white'}`}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Menu mobile (slide) */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }} className="overflow-hidden border-t border-slate-100 bg-white md:hidden">
            <ul className="space-y-1 px-5 py-4">
              {NAV.map((n, i) => (
                <motion.li key={n.href} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  <a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 font-medium text-ink hover:bg-lblue">{n.label}</a>
                </motion.li>
              ))}
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-full bg-brand py-3 text-center font-semibold text-white">Chat Montir</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

