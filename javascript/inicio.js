const paginas = ["santaAna.html","sonsonate.html","ahuachapan.html"];

// Función para abrir una página aleatoria
function paginaAleatoria() {
    const indice = Math.floor(Math.random() * paginas.length);
    const paginaSeleccionada = paginas[indice];
    window.location.href = paginaSeleccionada; // Redirecciona a la página
}