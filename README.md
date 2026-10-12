# WICIDA Web — Profil Program Studi STMIK Widya Cipta Dharma

Website profil program studi **STMIK Widya Cipta Dharma (Wicida) Samarinda**, dibangun dengan **Node.js**, **Express 5**, dan **EJS**. Proyek ini mencakup halaman profil kampus, daftar dosen, berita, pendaftaran mahasiswa baru (PMB), panel admin sederhana, dan endpoint API JSON.

> Data dosen dan berita bersifat **data contoh** (`data/`). Ganti dengan data asli sebelum dipakai.

## Fitur

- **Profil kampus** — visi, misi, program studi (Teknik Informatika, Sistem Informasi, Bisnis Digital), fasilitas
- **Teknik Informatika** — sambutan kaprodi, galeri, visi, misi, dan tujuan prodi
- **Daftar dosen** — filter berdasarkan keahlian dan halaman detail per NIDN
- **Berita** — kategori `terbaru`, `akademik`, `kemahasiswaan`, `pengumuman`
- **PMB 2026** — alur pendaftaran dan formulir pendaftar
- **Admin** — dashboard statistik dan halaman pengaturan
- **REST API** — data dosen dalam format JSON
- **Halaman 404 kustom** dan handler error 500
- **Script bantu** — daftar route dan pengecekan environment

## Teknologi

| Komponen | Keterangan |
| --- | --- |
| Runtime | Node.js |
| Framework | Express `^5.3.0` |
| Template engine | EJS `^7.0.1` |
| Styling | Tailwind CSS (CDN), Google Fonts (Montserrat, Instrument Serif) |

## Struktur Proyek

```
wicida-web/
├── app.js                 # Entry point & konfigurasi Express
├── package.json
├── data/
│   ├── dosen.js           # Data dosen & daftar keahlian
│   └── berita.js          # Data berita & kategori
├── routes/
│   ├── index.js           # /, /profil, /pmb, /teknik-informatika
│   ├── dosen.js           # /dosen, /dosen/:nidn
│   ├── berita.js          # /berita{/:kategori}
│   ├── admin.js           # /admin/dashboard, /admin/pengaturan
│   └── api.js             # /api/dosen
├── views/                 # Template EJS
│   ├── partials/          # header, footer, admin-nav
│   ├── admin/
│   ├── berita/
│   └── dosen/
├── public/images/         # Aset gambar
└── scripts/
    ├── route-list.js      # Menampilkan semua route
    └── cek-environment.js # Cek versi Node, npm, dependensi
```

## Prasyarat

- [Node.js](https://nodejs.org/) (disarankan versi LTS terbaru; `npm run dev` memakai `node --watch`, butuh Node 18+)
- npm

## Instalasi & Menjalankan

```bash
# 1. Clone repository
git clone https://github.com/<username>/<nama-repo>.git
cd <nama-repo>

# 2. Install dependensi
npm install

# 3. Jalankan server
npm start
```

Buka **http://localhost:3000** di browser.

Port bisa diubah lewat environment variable:

```bash
PORT=8080 npm start
```

## Script npm

| Perintah | Fungsi |
| --- | --- |
| `npm start` | Menjalankan server (`node app.js`) |
| `npm run dev` | Mode development dengan auto-reload (`node --watch app.js`) |
| `npm run routes` | Menampilkan daftar semua route (method & URI) |
| `npm run cek-env` | Mengecek versi Node.js, npm, Express, EJS, dan OS |

## Daftar Route

### Halaman

| Method | URL | Deskripsi |
| --- | --- | --- |
| GET | `/` , `/profil` | Beranda / profil STMIK Wicida |
| GET | `/teknik-informatika` | Profil prodi Teknik Informatika |
| GET | `/pmb` | Halaman PMB & formulir pendaftaran |
| POST | `/pmb` | Submit formulir pendaftaran |
| GET | `/dosen` | Daftar dosen (opsional `?keahlian=...`) |
| GET | `/dosen/:nidn` | Detail dosen (NIDN 10 digit angka) |
| GET | `/berita` | Berita terbaru |
| GET | `/berita/:kategori` | Berita per kategori |
| GET | `/admin/dashboard` | Dashboard admin |
| GET | `/admin/pengaturan` | Pengaturan website |

### API

| Method | URL | Deskripsi |
| --- | --- | --- |
| GET | `/api/dosen` | Daftar dosen dalam JSON (opsional `?keahlian=...`) |

Contoh:

```bash
curl "http://localhost:3000/api/dosen?keahlian=Jaringan%20Komputer"
```

```json
{
  "success": true,
  "total": 1,
  "data": [
    {
      "nidn": "1115048502",
      "nama": "Andi Yusika Rangan S.Kom., M.Kom",
      "jabatan": "Dosen Tetap",
      "keahlian": ["Teknik Informatika", "Jaringan Komputer"],
      "email": "andi@wicida.ac.id"
    }
  ]
}
```

## Catatan

- Data tersimpan di file JavaScript (`data/`), belum memakai database.
- Formulir PMB saat ini hanya mencetak data pendaftar ke console server.
- Halaman `/admin/*` belum memiliki autentikasi.
- Tailwind CSS dimuat lewat CDN, sehingga halaman membutuhkan koneksi internet.
