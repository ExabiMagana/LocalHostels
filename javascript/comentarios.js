var comentarios = [
  { nombre: "Maria Martínez", mensaje: "Las vistas, el restaurante muy bueno, el personal amable!!.", fecha: "25/3/2025", hora: "10:30:34 a. m." },
  { nombre: "Carlos Pérez", mensaje: "Una ubicacion increible.", fecha: "26/3/2025", hora: "01:00:23 p. m." },
  { nombre: "Elena Gutiérrez", mensaje: "Las habitaciones muy bonitas y comodas.", fecha: "27/3/2025", hora: "03:26:56 p. m." }
];

function renderComentarios() {
  var contenedor = document.getElementById("lista-comentarios");
  contenedor.innerHTML = "";

  comentarios.forEach(comentario => {
    var div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = '<strong>' + comentario.nombre + '</strong><br>' +
      comentario.mensaje + '<br>' + '<em><span class="fecha"> ' + comentario.fecha + '</span><span class="hora">' + comentario.hora + '</span></em>';
    contenedor.appendChild(div);
  });
}

function obtenerFechaYHora() {
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString(); 
  const hora = ahora.toLocaleTimeString();  
  return { fecha, hora };
}

document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault();

  var nombre = document.getElementById("name").value.trim();
  var mensaje = document.getElementById("message").value.trim();

  if (nombre && mensaje) {
    var { fecha, hora } = obtenerFechaYHora();
    comentarios.push({ nombre, mensaje, fecha, hora });
    renderComentarios();
    document.getElementById("comment-form").reset();
  }
});

renderComentarios();
