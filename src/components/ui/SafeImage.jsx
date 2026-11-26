import { useState } from 'react'
import { Wrench } from 'lucide-react'

/* Gambar dengan fallback bila file belum ditaruh di /public/images */
export default function SafeImage({ src, alt, className = '' }) {
  const [err, setErr] = useState(false)
  if (err) return <div className={`flex items-center justify-center bg-navy/90 text-white/30 ${className}`}><Wrench size={32} /></div>
  return <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={className} />
}
