// data/berita.js
// DATA CONTOH. Ganti dengan berita asli kampus.
const kategoriBerita = ['terbaru', 'akademik', 'kemahasiswaan', 'pengumuman'];

const berita = [
  { id: 1, kategori: 'pengumuman', judul: 'Pendaftaran Mahasiswa Baru Gelombang II Dibuka', ringkas: 'Pendaftaran gelombang II dibuka hingga akhir bulan. Segera lengkapi berkas pendaftaranmu.', tanggal: '2026-10-05' },
  { id: 2, kategori: 'akademik', judul: 'Jadwal UTS Semester Ganjil Telah Terbit', ringkas: 'Jadwal ujian tengah semester sudah bisa dilihat di portal akademik masing-masing prodi.', tanggal: '2026-10-02' },
  { id: 3, kategori: 'kemahasiswaan', judul: 'Mahasiswa TI Juara Lomba Web Development', ringkas: 'Tim mahasiswa Teknik Informatika meraih juara pada lomba pengembangan web tingkat regional.', tanggal: '2026-09-28' },
  { id: 4, kategori: 'akademik', judul: 'Workshop Dasar Jaringan Komputer di Laboratorium', ringkas: 'Workshop praktik konfigurasi jaringan terbuka untuk semua mahasiswa semester awal.', tanggal: '2026-09-20' },
  { id: 5, kategori: 'kemahasiswaan', judul: 'Open Recruitment Organisasi Mahasiswa', ringkas: 'Organisasi mahasiswa membuka pendaftaran anggota baru periode ini.', tanggal: '2026-09-15' },
];

module.exports = { berita, kategoriBerita };
