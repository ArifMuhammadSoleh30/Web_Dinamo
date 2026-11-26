import * as Lucide from 'lucide-react'

/* Render ikon Lucide dari nama string (dipakai oleh data/site.js) */
export default function Icon({ name, ...props }) {
  const C = Lucide[name] || Lucide.Wrench
  return <C {...props} />
}
