// data/dosen.js
// DATA CONTOH. Ganti nama, NIDN, dan keahlian dengan data dosen asli prodi kamu.
// NIDN harus 10 digit angka.
const dosen = [
  { nidn: '1112038801', nama: 'Ahmad Abul Khair S.Kom, M.T.', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Teknik Informatika'], email: 'ahmad@wicida.ac.id' },
  { nidn: '1115048502', nama: 'Andi Yusika Rangan S.Kom., M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Jaringan Komputer'], email: 'andi@wicida.ac.id' },
  { nidn: '1120079003', nama: 'Dr. Heny Pratiwi S.Kom., M.Pd., M.TI', jabatan: 'Wakil Ketua I / Lektor', keahlian: ['Sistem Informasi', 'Kecerdasan Buatan'], email: 'dr.@wicida.ac.id' },
  { nidn: '1108068204', nama: 'Kusnandar SE, M.Pd. M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Bisnis Digital'], email: 'kusnandar@wicida.ac.id' },
  { nidn: '1125118705', nama: 'Siti Lailiyah S.Kom.,M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Rekayasa Perangkat Lunak'], email: 'siti@wicida.ac.id' },
  { nidn: '1130098106', nama: 'Eka Arriyanti S.Pd., M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Bisnis Digital'], email: 'eka@wicida.ac.id' },
  { nidn: '1103017807', nama: 'Dr. H. Nursobah S.Kom., M.Kom.', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Basis Data'], email: 'dr.@wicida.ac.id' },
  { nidn: '1118089208', nama: 'Aisyah Fajriantini M.Pd', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Manajemen Pendidikan'], email: 'aisyah@wicida.ac.id' },
  { nidn: '1112038801', nama: 'H. Pajar Pahrudin S.Kom.,MH', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Hukum Siber'], email: 'h.@wicida.ac.id' },
  { nidn: '1115048502', nama: 'Vilianty Rafida S.T., M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Jaringan Komputer'], email: 'vilianty@wicida.ac.id' },
  { nidn: '1120079003', nama: 'Muhammad Ibnu Saad S.Kom., M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Pemrograman Web'], email: 'muhammad@wicida.ac.id' },
  { nidn: '1108068204', nama: 'Ulfa Nurfadhila M.Pd', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Pendidikan'], email: 'ulfa@wicida.ac.id' },
  { nidn: '1125118705', nama: 'Drs. Azahari M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Sistem Informasi'], email: 'drs.@wicida.ac.id' },
  { nidn: '1130098106', nama: 'Ita Arfyanti S,Kom., M.M.', jabatan: 'Kepala Bagian / Dosen Tetap', keahlian: ['Sistem Informasi', 'Manajemen Bisnis'], email: 'ita@wicida.ac.id' },
  { nidn: '1103017807', nama: 'Yoseph Goran Tokan S.Fil.', jabatan: 'Dosen Tetap', keahlian: ['Filsafat', 'Etika Profesi'], email: 'yoseph@wicida.ac.id' },
  { nidn: '1118089208', nama: 'Muhammad Fahmi S.Kom., M.Kom', jabatan: 'Asisten Ahli', keahlian: ['Sistem Informasi', 'Analisis Trafik Jaringan'] },
  { nidn: '1112038801', nama: 'Yunita S.E., MM', jabatan: 'Dosen Tetap', keahlian: ['Bisnis Digital', 'Manajemen Keuangan'], email: 'yunita@wicida.ac.id' },
  { nidn: '1115048502', nama: 'Yulindawati SH.M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Hukum & Teknologi'], email: 'yulindawati@wicida.ac.id' },
  { nidn: '1120079003', nama: 'H. Tommy Bustomi S.Kom., M.Kom.', jabatan: 'Ketua STMIK WICIDA', keahlian: ['Teknik Informatika', 'Sistem Informasi'], email: 'h.@wicida.ac.id' },
  { nidn: '1108068204', nama: 'Wahyuni S.Kom., M.Kom', jabatan: 'Asisten Ahli', keahlian: ['Teknik Informatika', 'Keamanan Jaringan & Deep Learning'], email: 'wahyuni@wicida.ac.id' },
  { nidn: '1125118705', nama: 'Dr Syamsuddin Mallala M.Pd.', jabatan: 'Dosen Tetap', keahlian: ['Pendidikan', 'Sistem Informasi'], email: 'dr@wicida.ac.id' },
  { nidn: '1130098106', nama: 'DR. Darius Samaliiong, S. Pd. K, M. Pd. K', jabatan: 'Dosen Tetap', keahlian: ['Pendidikan Agama', 'Manajemen'], email: 'dr.@wicida.ac.id' },
  { nidn: '1103017807', nama: 'Amelia Yusnita S.Kom.,M.Kom', jabatan: 'Ka. Bagian Administrasi Akademik', keahlian: ['Sistem Informasi', 'Analisis Data'], email: 'amelia@wicida.ac.id' },
  { nidn: '1118089208', nama: 'Ahmad fajri S.Kom.,M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Sistem Informasi', 'Pemrograman'], email: 'ahmad@wicida.ac.id' },
  { nidn: '1112038801', nama: 'Kadek Subagiada S.Si., M.Si', jabatan: 'Dosen Tetap', keahlian: ['Sains Data', 'Matematika Komputasi'], email: 'kadek@wicida.ac.id' },
  { nidn: '1115048502', nama: 'Salmon S.Kom.,M.Kom', jabatan: 'Dosen Tetap', keahlian: ['Teknik Informatika', 'Jaringan Komputer'], email: 'salmon@wicida.ac.id' }
];

// daftar keahlian unik, untuk tombol filter
const semuaKeahlian = [...new Set(dosen.flatMap((d) => d.keahlian))].sort();

module.exports = { dosen, semuaKeahlian };
