// routes/index.js
const express = require('express');
const router = express.Router();

const navLinks = [
  { label: 'Beranda', href: '/profil' },
  { label: 'Dosen', href: '/dosen' },
  { label: 'Berita', href: '/berita' },
  { label: 'Kontak', href: '#kontak' },
];

router.get(['/', '/profil'], (req, res) => {
  res.render('profil', {
    title: 'Profil STMIK Wicida',
    navLinks,
    features: [
      {
        title: 'Laboratorium Canggih',
        desc: 'Laboratorium dengan perangkat modern untuk praktik pemrograman, jaringan komputer, multimedia, dan pengembangan sistem informasi.',
        tags: ['Lab Jaringan', 'Lab Pemrograman'],
        img: './images/lab.jpg',
      },
      {
        title: 'Perpustakaan Lengkap',
        desc: 'Koleksi buku, jurnal ilmiah, dan sumber belajar digital yang mendukung perkuliahan, penelitian, dan penyusunan tugas akhir.',
        tags: ['Buku Cetak', 'E-Journal'],
        img: './images/perpus.jpg',
      },
    ],
    prodi: [
      {
        name: 'Teknik Informatika',
        url: '/teknik-informatika',
        tags: ['Pemrograman', 'Jaringan', 'Kecerdasan Buatan'],
        desc: 'Mempelajari pengembangan perangkat lunak, jaringan komputer, basis data, dan teknologi cerdas untuk menjawab kebutuhan industri digital.',
        theme: {
          card: 'bg-[#e9e0ff] border border-purple-300 text-[#1b0a3c]',
          tag: 'border-[#1b0a3c]/40 text-[#1b0a3c]',
          btn: 'border-[#1b0a3c]/50 text-[#1b0a3c]',
          label: 'text-[#1b0a3c]/70',
        },
        img: './images/TIprofil.png',
        circle: false,
        tagsFirst: false,
      },
      {
        name: 'Sistem Informasi',
        url: null,
        tags: ['Analisis Sistem', 'Basis Data', 'ERP'],
        desc: 'Mempelajari analisis, perancangan, dan pengelolaan sistem informasi untuk mendukung proses bisnis dan pengambilan keputusan organisasi.',
        theme: {
          card: 'bg-[#8a8a14] text-white',
          tag: 'border-white/50 text-white',
          btn: 'border-white/60 text-white',
          label: 'text-white/70',
        },
        img: './images/SIprofil.png',
        circle: false,
        tagsFirst: false,
      },
      {
        name: 'Bisnis Digital',
        url: null,
        tags: ['E-Commerce', 'Digital Marketing', 'Startup'],
        desc: 'Mempelajari strategi bisnis berbasis teknologi, pemasaran digital, dan kewirausahaan untuk menciptakan peluang usaha di era digital.',
        theme: {
          card: 'bg-[#3f7d58] text-white',
          tag: 'border-white/50 text-white',
          btn: 'border-white/60 text-white',
          label: 'text-white/70',
        },
        img: './images/BISDIGprofil.png',
        circle: false,
        tagsFirst: false,
      },
    ],
    visi: 'Menjadi perguruan tinggi bidang teknologi informasi yang cerdas, teladan dan bermartabat untuk meningkatkan daya saing bangsa berbasis Imtak dan Iptek.',
    misi: [
      'Menyelenggarakan pendidikan berkualitas di bidang informatika yang sesuai dengan perkembangan teknologi terkini.',
      'Mengembangkan riset inovatif yang memberikan kontribusi pada ilmu pengetahuan dan masyarakat.',
      'Melaksanakan pengabdian masyarakat berbasis teknologi informasi.',
      'Menjalin kerjasama strategis dengan institusi nasional dan internasional.',
    ],
    about: [
      { title: 'Sejarah', sub: 'Awal berdirinya STMIK Wicida', href: '#' },
      { title: 'Visi, Misi dan Tujuan', sub: 'Arah dan cita-cita kampus', href: '#visi-misi' },
      { title: 'Center of Excellence', sub: 'Pusat Keunggulan Institusi', href: './teknik-informatika' },
      { title: 'Contact', sub: 'info@wicida.ac.id', href: '#kontak' },
    ],
  });
});

router.get('/pmb', (req, res) => {
  res.render('pmb', {
    title: 'PMB STMIK Wicida 2026',
    navLinks,
    sent: req.query.sent === '1',
    steps: [
      { n: 1, title: 'Gelombang I' },
      { n: 2, title: 'Gelombang II' },
      { n: 3, title: 'Ujian Saringan' },
      { n: 4, title: 'Registrasi Ulang' },
    ],
    advantages: [
      { title: 'Kampus Terakreditasi', desc: 'Program studi terakreditasi dan diakui secara nasional oleh BAN-PT.', tags: ['BAN-PT', 'Nasional'] },
      { title: 'Dosen Berpengalaman', desc: 'Dibimbing oleh akademisi dan praktisi yang kompeten di bidang teknologi informasi.', tags: ['Akademisi', 'Praktisi'] },
      { title: 'Laboratorium Lengkap', desc: 'Fasilitas laboratorium modern untuk menunjang praktik dan penelitian mahasiswa.', tags: ['Jaringan', 'Multimedia'] },
      { title: 'Kerja Sama Industri', desc: 'Kemitraan dengan perusahaan untuk magang, pelatihan, dan peluang karier.', tags: ['Magang', 'Karier'] },
    ],
    prodiOptions: ['Teknik Informatika', 'Sistem Informasi', 'Bisnis Digital'],
  });
});

router.post('/pmb', (req, res) => {
  console.log('Pendaftar baru:', req.body);
  res.redirect('/pmb?sent=1');
});

router.get('/teknik-informatika', (req, res) => {
  res.render('teknik-informatika', {
    title: 'Teknik Informatika - STMIK Wicida',
    sent: req.query.sent === '1',
    navLinks: [
      { label: 'BERANDA', href: '/profil' },
      { label: 'KONTAK', href: '#kontak' },
      { label: 'FASILITAS', href: '#' },
    ],
    kaprodi: {
      name: 'Rizki Galang Ramdhani, S.Kom., M.Kom',
      role: 'Ketua Program Studi Teknik Informatika',
    },
    welcome:
      'Teknik Informatika di STMIK Widya Cipta Dharma merupakan perpaduan dari Computer Engineering dan Computer Science. Dari sisi Computer Engineering mahasiswa dituntut mampu membuat sistem terintegrasi baik perangkat lunak maupun perangkat keras, sedangkan Computer Science mahasiswa diharapkan mampu mengenal teori dan konsep pengembangan aplikasi. Mahasiswa di program studi Teknik Informatika dapat fokus pada pengembangan perangkat lunak baik itu Web Developer, Mobile Developer, maupun yang berminat untuk menggeluti IoT (Internet of Thing) yang pada sisi perangkat keras.',
    gallery: [
      { img: './images/foto1.png', alt: 'Kegiatan mahasiswa 1' },
      { img: './images/foto2.png', alt: 'Kegiatan mahasiswa 2' },
      { img: './images/foto3.png', alt: 'Kegiatan mahasiswa 3' },
    ],
    visi: 'Menjadi Program Studi Teknik Informatika yang cerdas, teladan dan bermartabat di bidang Pengembangan Perangkat Lunak dan Sistem Cerdas untuk Meningkatkan Daya Saing Bangsa Berbasis Imtak dan Iptek',
    misi: [
      'Menyelenggarakan pendidikan berkualitas di bidang informatika yang sesuai dengan perkembangan teknologi terkini.',
      'Mengembangkan riset-riset inovatif dalam informatika dan teknologi komputer yang memberikan kontribusi pada ilmu pengetahuan dan masyarakat.',
      'Melaksanakan pengabdian masyarakat berbasis teknologi informasi untuk mendukung pembangunan berkelanjutan.',
      'Menjalin kerjasama strategis dengan berbagai institusi nasional dan internasional.',
    ],
    tujuan: [
      'Peningkatan kualitas lulusan yang kompetitif di pasar kerja dan mampu beradaptasi dengan perkembangan teknologi.',
      'Pengembangan kurikulum yang sesuai dengan tren teknologi terkini.',
      'Peningkatan layanan akademik melalui tata kelola berbasis IT.',
      'Penguatan penelitian inovatif yang berdampak pada perkembangan ilmu pengetahuan dan kebutuhan industri.',
      'Meningkatkan kualitas dan relevansi kegiatan pengabdian kepada masyarakat yang berbasis teknologi, serta berkolaborasi dengan berbagai pihak untuk mencapai dampak yang lebih luas.',
      'Menjalin kerjasama strategis dengan berbagai institusi nasional dan internasional.',
    ],
    footer: {
      address: 'Jl. M. Yamin No 25 Samarinda, Kalimantan Timur',
      phone: '0541 736071',
    },
  });
});

module.exports = router;