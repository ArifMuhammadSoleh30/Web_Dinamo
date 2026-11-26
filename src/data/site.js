/* ===== DATA: INFO BISNIS (ubah di sini) ===== */
export const SITE = {
  name: 'MontirDinamo.com',
  phone: '0899 0099 301',
  wa: '628990099301',
  since: 2004,
  rating: '4.9',
  reviews: '80+',
  customers: '1.300+',
  hours: 'Senin - Minggu, 09.00 - 17.00',
  area: 'Kota Bandung, Cimahi, dan Kab. Bandung',
  instagram: { label: '@servicedinamomobilpanggilan', url: 'https://www.instagram.com/servicedinamomobilpanggilan/' },
  tiktok: { label: '@servicedinamobandung', url: 'https://www.tiktok.com/@servicedinamobandung' },
  gmaps: 'https://maps.app.goo.gl/ug6BbHgKWEnTFroj8',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506887.5698852999!2d107.5569075!3d-7.0023186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e92cf4b6c571%3A0x196b1bd24ec69259!2sService%20Dinamo%20Panggilan%20-%20MONTIRDINAMO.COM!5e0!3m2!1sid!2sid!4v1683787850738!5m2!1sid!2sid',
}

/* ===== DATA: NAVIGASI ===== */
export const NAV = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
]

/* ===== DATA: LAYANAN (icon = nama ikon Lucide) ===== */
export const SERVICES = [
  { id: 'starter', icon: 'Zap', title: 'Dinamo Starter', short: 'Solusi mobil sulit distarter atau hanya bunyi cetak-cetek.',
    about: ['Dinamo starter adalah motor listrik yang menyalakan mesin. Saat kunci diputar, aki mengirim arus ke starter untuk menggerakkan crankshaft, piston, dan part mesin lain hingga pembakaran dimulai.',
            'Gejalanya mirip aki lemah. Untuk membedakan, coba nyalakan lampu, radio, dan klakson. Jika semuanya menyala, kemungkinan besar yang bermasalah adalah starter.'],
    symptoms: ['Hanya bunyi cetak-cetek saat kunci diputar', 'Mesin sulit atau tidak mau menyala', 'Lampu, radio, dan klakson masih normal'] },
  { id: 'alternator', icon: 'BatteryCharging', title: 'Dinamo Alternator', short: 'Atasi aki sering tekor, indikator aki menyala & lampu redup.',
    about: ['Alternator (dinamo ampere) mengisi daya ke aki saat mesin hidup. Jika bermasalah, mobil hanya berjalan selama daya aki masih ada, lalu tidak bisa distarter.',
            'Tegangan aki yang diukur dengan voltmeter biasanya berada di bawah 12,5 Volt.'],
    symptoms: ['Aki mati dan tidak punya setrum', 'Lampu peringatan aki menyala di dashboard', 'Lampu mobil redup', 'Sound system, power window, dan power lock tidak berfungsi', 'Mesin mati saat kabel positif aki dilepas'] },
  { id: 'extra', icon: 'Fan', title: 'Extra Fan Radiator', short: 'Cegah mesin overheat saat macet & jaga AC tetap dingin.',
    about: ['Extra fan mendinginkan air radiator dan kondensor AC. Kipas bekerja otomatis, misalnya saat suhu mesin melewati 84°C atau saat AC dinyalakan.',
            'Jika kipas mati, suhu mesin naik dan AC tidak dingin secara bersamaan.'],
    symptoms: ['AC tidak dingin', 'Mesin overheat', 'Lampu check engine menyala', 'Lampu peringatan temperatur menyala', 'Sekring kipas putus'] },
  { id: 'wiper', icon: 'CloudRain', title: 'Motor Wiper', short: 'Perbaikan sapuan kaca macet atau lemah demi keselamatan.',
    about: ['Wiper membersihkan kaca depan (dan belakang pada beberapa tipe) dari kotoran dan air hujan. Sistem ini berkaitan langsung dengan keselamatan berkendara.',
            'Saat hujan deras, wiper yang mati membuat pandangan terhalang dan risiko kecelakaan meningkat.'],
    symptoms: ['Wiper macet atau tidak bergerak', 'Sapuan lemah atau tersendat', 'Wiper berhenti di tengah kaca'] },
]

/* ===== DATA: KEUNGGULAN HERO ===== */
export const HERO_PERKS = [
  { icon: 'Home', title: 'Home Service', text: 'Datang ke Lokasi' },
  { icon: 'PackageCheck', title: 'Terima Beres', text: 'Alat & Part Siap' },
  { icon: 'Car', title: 'Jepang & Korea', text: 'Semua Jenis Mobil' },
  { icon: 'ShieldCheck', title: 'Bergaransi', text: 'Jaminan Kualitas' },
]

/* ===== DATA: MENGAPA KAMI ===== */
export const WHY = [
  { icon: 'Award', title: 'Berpengalaman Sejak 2004', text: 'Pengalaman sejak 2004 mengasah akurasi diagnosa kami dalam menangani berbagai masalah dinamo.' },
  { icon: 'MapPin', title: 'Layanan Kunjungan Lokasi', text: 'Tanpa derek atau ke bengkel. Kami datang dan memperbaiki langsung di tempat Anda dengan alat lengkap.' },
  { icon: 'Cog', title: 'Sparepart Berkualitas', text: 'Komponen teruji demi ketahanan jangka panjang agar kendala tidak berulang.' },
  { icon: 'ShieldCheck', title: 'Garansi Hingga 1 Tahun', text: 'Setiap pekerjaan dilengkapi garansi service hingga 1 tahun sebagai komitmen kualitas kami.' },
  { icon: 'Receipt', title: 'Estimasi Biaya Transparan', text: 'Estimasi awal via WhatsApp. Biaya final dipastikan jujur setelah pengecekan fisik di lokasi.' },
  { icon: 'Timer', title: 'Respon Cepat & Sigap', text: 'Setiap panggilan ditanggapi cepat agar mobil segera kembali beroperasi normal.' },
]

/* ===== DATA: FAQ ===== */
export const FAQ = [
  { q: 'Berapa perkiraan biayanya?', a: 'Estimasi awal diberikan via WhatsApp. Biaya final dipastikan setelah inspeksi fisik di lokasi. Pengerjaan hanya dilakukan setelah Anda setuju dengan total biaya.' },
  { q: 'Perlu beli sparepart sendiri?', a: 'Tidak. Kami menerapkan sistem Terima Beres: semua sparepart dan peralatan sudah kami siapkan. Anda cukup menunggu hasilnya.' },
  { q: 'Diperbaiki di mana?', a: 'Pengerjaan dilakukan langsung di tempat Anda (rumah/kantor) agar transparan. Anda berhak memantau seluruh proses kerja.' },
  { q: 'Melayani area mana saja?', a: 'Seluruh wilayah Kota Bandung, Kab. Bandung, dan Cimahi.' },
  { q: 'Apa spesialisasi kami?', a: 'Sejak 2004 kami fokus pada kelistrikan mobil: Dinamo Starter, Alternator, Extra Fan, dan Wiper.' },
  { q: 'Jenis mobil apa yang ditangani?', a: 'Berbagai kendaraan, dari mobil Asia hingga Eropa, dengan standar penanganan yang sama.' },
  { q: 'Apakah ada garansi?', a: 'Ada. Garansi service hingga 1 tahun (sesuai S&K).' },
  { q: 'Bagaimana jika batal service?', a: 'Jika setelah inspeksi fisik Anda menunda atau membatalkan, dikenakan Biaya Inspeksi & Kunjungan sebagai kompensasi operasional teknis.' },
]

/* ===== DATA: SOP ===== */
export const SOP = [
  { title: 'Diagnosa Awal', text: 'Pengecekan dengan multitester/battery tester agar penggantian part tepat sasaran.' },
  { title: 'Pembongkaran & Penjelasan', text: 'Unit dibongkar hati-hati. Kondisi komponen rusak diperlihatkan sebelum tindakan lanjut.' },
  { title: 'Perbaikan / Penggantian', text: 'Komponen aus diganti part berkualitas. Debu karbon dan oli dibersihkan.' },
  { title: 'Pemasangan Presisi', text: 'Kabel dirapikan, baut dikencangkan, soket dikunci sempurna.' },
  { title: 'Final Check & Serah Terima', text: 'Tes menyeluruh: starter, pengisian alternator, putaran extra fan, atau gerakan wiper.' },
]

/* ===== DATA: GAMBAR (taruh file di /public/images) ===== */
export const PORTFOLIO = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/portfolio-${i + 1}.jpg`, alt: `Pengerjaan service dinamo di lokasi pelanggan ${i + 1}`,
}))
export const TESTIMONIALS = Array.from({ length: 8 }, (_, i) => ({
  src: `/images/testimoni-${i + 1}.png`, alt: `Testimoni pelanggan ${i + 1}`,
}))
export const HERO_IMAGE = '/images/hero.jpg'
