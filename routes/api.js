// routes/api.js  (di-mount di /api)
const express = require('express');
const router = express.Router();
const { dosen } = require('../data/dosen');

// GET /api/dosen  -> response JSON (opsional: ?keahlian=...)
router.get('/dosen', (req, res) => {
  const raw = Array.isArray(req.query.keahlian) ? req.query.keahlian[0] : req.query.keahlian;
  const keahlian = typeof raw === 'string' ? raw.trim() : '';

  const hasil = keahlian
    ? dosen.filter((d) => d.keahlian.some((k) => k.toLowerCase() === keahlian.toLowerCase()))
    : dosen;

  res.json({ success: true, total: hasil.length, data: hasil });
});

module.exports = router;
