self.addEventListener('install', (event) => {
  console.log('[SW] Instalado');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('[SW] Activado');
});

// Puedes eliminar esta si no manejas fetch
// self.addEventListener('fetch', (event) => {});
