const paginas = [
    "hoteles/La_Casa_Del_Pinito.html",
    "hoteles/Lali_Beach_Hotel_Boutique.html",
    "hoteles/Marsella.html",
    "hoteles/Casa_1800_Cerro_Verde.html",
    "hoteles/La_Casa_de_Miapan.html",
    "hoteles/Hotel_Tolteka_Plaza.html",
    "hoteles/Hostal_Sunset_Town.html",
    "hoteles/Hostal_Casa_Verde.html",
    "hoteles/El_Cairo_Ruta_de_las_Flores.html"
];

// Función para abrir una página aleatoria
function paginaAleatoria() {
    const indice = Math.floor(Math.random() * paginas.length);
    const paginaSeleccionada = paginas[indice];
    window.location.href = paginaSeleccionada;
}

// Activar tarjetas
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Cierra otras tarjetas activas
        document.querySelectorAll('.flip-card.active').forEach(activeCard => {
            if (activeCard !== card) {
                activeCard.classList.remove('active');
            }
        });
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
    "la casa del pinito": "hoteles/La_Casa_Del_Pinito.html",
    "lali beach hotel boutique": "hoteles/Lali_Beach_Hotel_Boutique.html",
    "marsella": "hoteles/Marsella.html",
    "casa 1800 cerro verde": "hoteles/Casa_1800_Cerro_Verde.html",
    "la casa de mamapan": "hoteles/La_Casa_de_Miapan.html",
    "hotel tolteka plaza": "hoteles/Hotel_Tolteka_Plaza.html",
    "hostal sunset town": "hoteles/Hostal_Sunset_Town.html",
    "hostal casa verde": "hoteles/Hostal_Casa_Verde.html",
    "el cairo ruta de las flores": "hoteles/El_Cairo_Ruta_de_las_Flores.html",
    "santa ana": "ciudades/CiudadSantaAna.html",
    "sonsonate": "ciudades/CiudadSonsonate.html",
    "ahuachapán": "ciudades/CiudadAhuachapan.html",
    "ahuachapan": "ciudades/CiudadAhuachapan.html"
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

function marcarActivo(a){
    var bloques = document.querySelectorAll(".bloque-letra");
    bloques.forEach(b => b.classList.remove("activo"));

    var marcador = document.getElementById(a);
    marcador.classList.add("activo");
}   