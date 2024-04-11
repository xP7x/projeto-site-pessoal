self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('meu-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/script.js',
          '/style.css',
          '/imagens/Logotipo.png',
          '/imagens/pessoal.jpg',
          '/imagens/upf_pedro_page-0001.jpg',
          '/imagens/curso_pedro_page-0001.jpg',
          '/manifest.json',
          '/fontes/Poppins-Regular.ttf',
          '/fontes/Poppins-Bold.ttf',
          '/fontes/Poppins-Italic.ttf',
          '/fontes/Poppins-BoldItalic.ttf',
          '/fontes/bootstrap-icons.woff2',
          '/fontes/bootstrap-icons.woff',
          '/fontes/bootstrap-icons.ttf',
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
  