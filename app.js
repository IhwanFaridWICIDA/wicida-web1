// app.js
const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const dosenRoutes = require('./routes/dosen');
const beritaRoutes = require('./routes/berita');
const adminRoutes = require('./routes/admin');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// navbar untuk halaman baru (halaman lama tetap pakai navLinks miliknya sendiri)
app.locals.navLinks = [
  { label: 'Beranda', href: '/profil' },
  { label: 'Dosen', href: '/dosen' },
  { label: 'Berita', href: '/berita' },
  { label: 'PMB', href: '/pmb' },
];

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// helper mount: simpan prefix di router supaya bisa dibaca script route-list
function mount(prefix, router) {
  router.mountPath = prefix;
  app.use(prefix, router);
}

mount('/', routes);           // /, /profil, /pmb, /teknik-informatika
mount('/dosen', dosenRoutes); // /dosen, /dosen/:nidn
mount('/berita', beritaRoutes); // /berita{/:kategori}
mount('/admin', adminRoutes); // /admin/dashboard, /admin/pengaturan
mount('/api', apiRoutes);     // /api/dosen

// 404 kustom: HARUS paling bawah, setelah semua route
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Halaman Tidak Ditemukan',
    pesan: 'Alamat yang kamu buka tidak ada atau sudah dipindahkan.',
    url: req.originalUrl,
  });
});

// handler error 500
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Terjadi kesalahan pada server.');
});

// listen hanya kalau dijalankan langsung (node app.js), supaya script/ bisa require(app)
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
}

module.exports = app;
