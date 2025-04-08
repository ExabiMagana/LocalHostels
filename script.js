var progreso = document.getElementById("barraProgreso");
var progresoActual = 0;

var intervalo = setInterval(() => {
    progresoActual +=10;
    progreso.value = progresoActual;

    if (progresoActual >= progreso.max) {
        clearInterval(intervalo);
        setTimeout(() => {
            alert("Tarea Completada");
            document.getElementById("parrafo").style.display = "none"
        }, 200);
    }
    
},1000);