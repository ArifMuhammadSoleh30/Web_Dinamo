import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { waLink } from '../../lib/whatsapp'

/* Tombol CTA WhatsApp. variant: primary | light | outline */
export default function WhatsAppButton({ children, message, variant = 'primary', className = '' }) {
  const styles = {
    primary: 'bg-brand text-white hover:bg-blue-700',
    light: 'bg-white text-navy hover:bg-lblue',
    outline: 'border border-white/30 text-white hover:bg-white/10',
  }
  return (
    <motion.a href={waLink(message)} target="_blank" rel="noopener noreferrer" whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-colors ${styles[variant]} ${className}`}>
      <MessageCircle size={18} /> {children}
    </motion.a>
  )
}
