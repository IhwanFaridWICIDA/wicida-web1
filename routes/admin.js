// routes/admin.js  (di-mount di /admin -> grup dengan prefix admin)
const express = require('express');
const router = express.Router();
const { dosen } = require('../data/dosen');
const { berita } = require('../data/berita');

// GET /admin/dashboard
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard', {
    title: 'Dashboard Admin - STMIK Wicida',
    stats: [
      { label: 'Total Dosen', value: dosen.length },
      { label: 'Total Berita', value: berita.length },
      { label: 'Program Studi', value: 3 },
    ],
  });
});

// GET /admin/pengaturan
router.get('/pengaturan', (req, res) => {
  res.render('admin/pengaturan', {
    title: 'Pengaturan - STMIK Wicida',
    pengaturan: [
      { label: 'Nama Website', value: 'Profil Program Studi STMIK Wicida' },
      { label: 'Alamat', value: 'Jl. M. Yamin No 25 Samarinda, Kalimantan Timur' },
      { label: 'Telepon', value: '0541 736071' },
      { label: 'Mode', value: process.env.NODE_ENV || 'development' },
    ],
  });
});

module.exports = router;
