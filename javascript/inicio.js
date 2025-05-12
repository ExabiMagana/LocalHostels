const paginas = ["La_Casa_Del_Pinito.html","Lali_Beach_Hotel_Boutique.html","Marsella.html"];

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


//Para la búsqueda
const hospedajes = {
    "la casa del pinito": "La_Casa_Del_Pinito.html",
    "lali beach hotel boutique": "Lali_Beach_Hotel_Boutique.html",
    "marsella": "Marsella.html",
    "santa ana": "CiudadSantaAna.html",
    "sonsonate": "CiudadSonsonate.html",
    "ahuachapán": "CiudadAhuachapan.html",
    "ahuachapan": "CiudadAhuachapan.html"
};

function buscarHospedaje() {
    const input = document.getElementById("busqueda").value.trim().toLowerCase();

    if (input === "") {
        alert("Por favor, escribe el nombre de un hospedaje para buscar.");
        return;
    }
    if (input.length < 2) {
        alert("Por favor, escribe al menos 2 caracteres para la búsqueda.");
        return;
    }

    let encontrado = null;
    for (const nombre in hospedajes) {
        if (nombre.includes(input)) {
            encontrado = hospedajes[nombre];
            break;
        }
    }

    if (encontrado) {
       setTimeout(function() {
            window.location.href = encontrado;
        }, 1000);
    } else {
        alert("No se encontraron coincidencias.");
    }
}

document.getElementById("busqueda").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        buscarHospedaje();
    }
});