const paginas = ["santaAna.html","sonsonate.html","ahuachapan.html"];

// Función para abrir una página aleatoria
function paginaAleatoria() {
    const indice = Math.floor(Math.random() * paginas.length);
    const paginaSeleccionada = paginas[indice];
    window.location.href = paginaSeleccionada; // Redirecciona a la página
}

// Activar tarjetas en pantallas táctiles
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Cierra otras tarjetas activas
        document.querySelectorAll('.flip-card.active').forEach(activeCard => {
            if (activeCard !== card) {
                activeCard.classList.remove('active');
            }
        });
        // Alterna la clase en la tarjeta actual
        this.classList.toggle('active');
        e.stopPropagation();
    });
});

// Cierra la tarjeta si se hace clic fuera
document.addEventListener('click', function () {
    document.querySelectorAll('.flip-card.active').forEach(card => {
        card.classList.remove('active');
    });
});