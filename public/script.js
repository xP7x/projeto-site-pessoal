// Função para trocar a imagem ao passar o mouse sobre o elemento
function trocarImagemMouse(elemento, imagemOriginal, imagemAlternativa) {
    var mouseSobre = false;

    elemento.addEventListener("mouseover", function() {
        mouseSobre = true;
    });

    elemento.addEventListener("mouseout", function() {
        mouseSobre = false;
    });

    setInterval(function() {
        if (!mouseSobre) {
            var imagemAtual = elemento.style.backgroundImage;

            if (imagemAtual === `url("${imagemOriginal}")`) {
                trocarImagem(elemento, imagemAlternativa);
            } else {
                trocarImagem(elemento, imagemOriginal);
            }
        }
    }, 5000); // 5 segundos
}

// Função para trocar a imagem
function trocarImagem(elemento, novaImagem) {
    elemento.style.opacity = "0"; // Define a opacidade como 0 para criar uma transição suave
    setTimeout(function() {
        elemento.style.backgroundImage = "url(" + novaImagem + ")";
        elemento.style.opacity = "1"; // Define a opacidade de volta para 1 para mostrar a nova imagem
    }, 300); // Aguarda 300ms antes de alterar a imagem para permitir que a transição CSS ocorra
}

// Adicionando manipuladores de evento para cada elemento img-port
document.addEventListener("DOMContentLoaded", function() {
    var imgPort1 = document.querySelector('.img-port:nth-child(1)');
    var imgPort2 = document.querySelector('.img-port:nth-child(2)');
    
    trocarImagemMouse(imgPort1, 'images/upf_pedro_page-0001.jpg', 'images/upf_pedro_page-0002.jpg');
    trocarImagemMouse(imgPort2, 'images/curso_pedro_page-0001.jpg', 'images/curso_pedro_page-0002.jpg');
});
