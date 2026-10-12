// routes/dosen.js  (di-mount di /dosen)
const express = require('express');
const router = express.Router();
const { dosen, semuaKeahlian } = require('../data/dosen');

// GET /dosen atau /dosen?keahlian=Jaringan%20Komputer
router.get('/', (req, res) => {
  // kalau ?keahlian=a&keahlian=b, ambil yang pertama saja
  const raw = Array.isArray(req.query.keahlian) ? req.query.keahlian[0] : req.query.keahlian;
  const keahlian = typeof raw === 'string' ? raw.trim() : '';

  const hasil = keahlian
    ? dosen.filter((d) => d.keahlian.some((k) => k.toLowerCase() === keahlian.toLowerCase()))
    : dosen;

  res.render('dosen/index', {
    title: 'Daftar Dosen - STMIK Wicida',
    dosen: hasil,
    semuaKeahlian,
    keahlian,
  });
});

// GET /dosen/1112038801  -> NIDN harus tepat 10 digit angka, selain itu 404
router.get('/:nidn', (req, res, next) => {
  const { nidn } = req.params;
  if (!/^\d{10}$/.test(nidn)) return next(); // jatuh ke handler 404 kustom

  const data = dosen.find((d) => d.nidn === nidn);
  if (!data) return next(); // 10 digit tapi tidak ada di data -> 404 juga

  res.render('dosen/detail', { title: `${data.nama} - STMIK Wicida`, dosen: data });
});

module.exports = router;
