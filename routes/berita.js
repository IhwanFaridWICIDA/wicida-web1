// routes/berita.js  (di-mount di /berita)
const express = require('express');
const router = express.Router();
const { berita, kategoriBerita } = require('../data/berita');

// GET /berita  atau  /berita/akademik
// Express 5: parameter opsional ditulis dengan {...}, bukan :kategori?
router.get('{/:kategori}', (req, res, next) => {
  const kategori = (req.params.kategori || 'terbaru').toLowerCase(); // default "terbaru"

  if (!kategoriBerita.includes(kategori)) return next(); // kategori tidak dikenal -> 404

  const urut = [...berita].sort((a, b) => b.tanggal.localeCompare(a.tanggal));
  const daftar = kategori === 'terbaru' ? urut : urut.filter((b) => b.kategori === kategori);

  res.render('berita/index', {
    title: `Berita ${kategori} - STMIK Wicida`,
    kategori,
    kategoriBerita,
    daftar,
  });
});

module.exports = router;
