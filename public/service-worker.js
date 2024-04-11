self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('my-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/script.js',
          '/style.css',
          '/images/Logotipo.png',
          '/images/pessoal.jpg',
          '/images/upf_pedro_page-0001.jpg',
          '/images/curso_pedro_page-0001.jpg',
          '/manifest.json',
          '/fonts/Poppins-Regular.ttf',
          '/fonts/Poppins-Bold.ttf',
          '/fonts/Poppins-Italic.ttf',
          '/fonts/Poppins-BoldItalic.ttf',
          '/fonts/bootstrap-icons.woff2',
          '/fonts/bootstrap-icons.woff',
          '/fonts/bootstrap-icons.ttf',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  