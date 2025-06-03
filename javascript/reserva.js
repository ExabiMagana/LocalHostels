function reserva(e) {
    e.preventDefault();

    var formReserva = document.getElementById("ReservaForm");

    const modal = document.getElementById("modal");
    const barra = document.getElementById("barraProgreso");
    
    modal.showModal();
    barra.value = 0;

    let progreso = 0;
    const intervalo = setInterval(() => {
        progreso += 10;
        barra.value = progreso;

        if (progreso >= 100) {
            clearInterval(intervalo);
            setTimeout(() => {
                alert("Reserva completada con éxito");
                modal.close();
                formReserva.submit();
            }, 500);
        }
    }, 500); 
}