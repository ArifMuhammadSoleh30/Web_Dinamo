import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { waLink } from '../../lib/whatsapp'

/* ===== TOMBOL MELAYANG: Chat Montir + Back to Top ===== */
export default function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const f = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.a href="#beranda" aria-label="Kembali ke atas" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
            className="grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-soft hover:bg-lblue"><ArrowUp size={18} /></motion.a>
        )}
      </AnimatePresence>
      <motion.a href={waLink()} target="_blank" rel="noopener noreferrer" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.05 }} className="flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft">
        <MessageCircle size={18} /> Chat Montir
      </motion.a>
    </div>
  )
}
