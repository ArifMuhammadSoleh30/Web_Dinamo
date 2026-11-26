import { motion } from 'framer-motion'
import { fadeUp, fadeIn, slideLeft, slideRight, stagger, viewport } from '../../lib/motion'

const variants = { up: fadeUp, in: fadeIn, left: slideLeft, right: slideRight }

/* Scroll reveal. variant: up | in | left | right. Isi `stagger` (mis. 0.08) untuk wrapper anak-anak */
export default function Reveal({ variant = 'up', stagger: gap, className = '', children }) {
  return (
    <motion.div className={className} variants={gap ? stagger(gap) : variants[variant]} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </motion.div>
  )
}

/* Item anak untuk wrapper stagger */
export const Item = ({ className = '', children }) => (
  <motion.div variants={fadeUp} className={className}>{children}</motion.div>
)
