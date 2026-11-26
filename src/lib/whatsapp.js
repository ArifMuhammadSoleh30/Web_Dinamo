import { SITE } from '../data/site'

/* Membuat link WhatsApp Click to Chat */
export const waLink = (msg = 'Halo Kang, saya ingin tanya layanan Service Dinamo Panggilan. Mobil saya ada kendala, bisa bantu?') =>
  `https://wa.me/${SITE.wa}?text=${encodeURIComponent(msg)}`
