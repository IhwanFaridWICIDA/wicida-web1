// scripts/route-list.js  -> padanan "php artisan route:list" untuk Express
const app = require('../app');

const rows = [];

function walk(stack, prefix) {
  for (const layer of stack) {
    if (layer.route) {
      const paths = [].concat(layer.route.path); // path bisa berupa array, mis. ['/', '/profil']
      for (const p of paths) {
        let uri = (prefix + p).replace(/\/{2,}/g, '/');
        if (uri.length > 1 && uri.endsWith('/')) uri = uri.slice(0, -1);
        for (const method of Object.keys(layer.route.methods)) {
          rows.push({ METHOD: method.toUpperCase(), URI: uri || '/' });
        }
      }
    } else if (layer.handle && layer.handle.stack) {
      const mp = layer.handle.mountPath === '/' ? '' : layer.handle.mountPath || '';
      walk(layer.handle.stack, prefix + mp);
    }
  }
}

walk(app.router.stack, '');
console.table(rows);
