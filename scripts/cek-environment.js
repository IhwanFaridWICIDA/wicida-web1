// scripts/cek-environment.js  -> padanan "cek-environment" untuk Express
const { execSync } = require('child_process');
const pkg = require('../package.json');

const ver = (cmd) => { try { return execSync(cmd).toString().trim(); } catch { return 'tidak ditemukan'; } };
const fs = require('fs');
const path = require('path');
const dep = (n) => { try { return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'node_modules', n, 'package.json'), 'utf8')).version; } catch { return 'belum terinstall (jalankan npm install)'; } };

console.log('=== Cek Environment ===');
console.log('Proyek      :', pkg.name);
console.log('Node.js     :', process.version);
console.log('npm         :', ver('npm -v'));
console.log('Express     :', dep('express'));
console.log('EJS         :', dep('ejs'));
console.log('OS          :', process.platform, process.arch);
console.log('Folder      :', process.cwd());
console.log('Port        :', process.env.PORT || 3000);
