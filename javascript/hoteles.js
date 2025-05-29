var hoteles = [
  /*1*/
  { 
    nombre: "Casa 1800 Cerro Verde",
    descripcion: `Casa 1800 Cerro Verde dispone de jardín, terraza, restaurante y bar en Cerro Verde. 
                Este hotel de 5 estrellas tiene wifi gratis, servicio de habitaciones 
                y mostrador de información turística. Hay parking privado gratis 
                y el alojamiento ofrece servicio de traslado de pago para ir o volver del aeropuerto.`,
    servicios:["Parking gratuito", "Traslado al aeropuerto", "Adaptado para personas con movilidad reducida",
                "Bar", "Servicio de limpieza", "Wifi gratis", "Información turística", "Servicio de habitaciones"],
    imagen: "../../recursos/imagenes/img_santaana/casa1800.jpg",
    enlace: "../hoteles/Casa_1800_Cerro_Verde.html"
  },
  /*2*/
  {
    nombre: "El Cairo Ruta de las flores",
    descripcion: `Descubre comodidad y elegancia en cada rincón.
                El Cairo Ruta de Las Flores se encuentra en Ahuachapán y ofrece piscina privada.
                Este alojamiento con aire acondicionado está a 28 km del Parque Nacional
                El Imposible y ofrece wifi gratis y estacionamiento privado en el mismo establecimiento.`,
    servicios:["Piscina", "Wifi gratis", "Terrazas con vistas", "Habitaciones sin humo", "Aire acondicionado",
                "Mascotas permitidas", "Cocina totalmente equipada", "Lavadora", "Servicio de limpieza",
                "Parking gratuito", "Servicio de habitaciones"],
    imagen: "../../recursos/imagenes/img_ahuachapan/cairo1.jpg",
    enlace: "../hoteles/El_Cairo_Ruta_de_las_Flores.html"
  },
  /*3*/
  {
    nombre: "Hostal Casa Verde",
    descripcion: `Descubre comodidad y elegancia en cada rincón
                Hostal casa verde es el lugar exacto para el viajero que busque lo mejor. 
                Conocenos, sera un placer para nosotros y para ti tambien.`,
    servicios:["Habitaciones hipoalergénicas", "Parking gratis", "Wifi gratis", "Habitaciones insonorizadas",
                "Cocina totalmente equipada", "Aire acondicionado", "Servicio de limpieza", "Recepción 24h",
                "Piscina", "Bar", "Bicicletas", "Libros", "DVD", "Música para niños", "Traslado al aeropuerto"],
    imagen: "../../recursos/imagenes/img_santaana/casaVerde1.jpg",
    enlace: "../hoteles/Hostal_Casa_Verde.html"
  },
  /*4*/
  {
    nombre: "Hostal Sunset Town",
    descripcion: `Descubre comodidad y elegancia en cada rincón
                Hostal Sunset Town está en Ahuachapán, a 27 km de Parque Nacional El Imposible, 
                y dispone de alojamiento con aire acondicionado y terraza. 
                Este alojamiento ofrece restaurante, cocina compartida y salón de uso común, 
                además de wifi gratis en todo el alojamiento.`,
    servicios:["Wifi gratis", "Restaurante", "Cocina totalmente equipada", "Baño privado", "Habitaciones dobles",
                "Aire acondicionado", "Habitaciones sin humo", "Recepción 24h", "Desayuno"],
    imagen: "../../recursos/imagenes/img_ahuachapan/cairo1.jpg",
    enlace: "../hoteles/Hostal_Sunset_Town.html"
  },
  /*5*/
  {
    nombre: "Hostal Tolteka Plaza",
    descripcion: `Como hotel, te ofrecemos amplios espacios y 8 salones con diferentes dimensiones y 
                capacidades para la realización de eventos sociales desde bodas, baby shower, graduaciones, 
                primera comunión, cumpleaños, bautizos, etc. o corporativos como ruedas de negocios, 
                capacitaciones, ferias y exposiciones, convenciones y congresos, cenas, etc. 
                Te ofrecemos un menú completo para cualquier tipo de eventos con coffee break, 
                sonido, entre otros servicios.`,
    servicios:["Salones de convenciones", "Recepción 24h", "Habitaciones dobles", "Aire acondicionado",
                "Wifi gratis", "Piscina"],
    imagen: "../../recursos/imagenes/img_santaana/tolteka3.jpg",
    enlace: "../hoteles/Hotel_Tolteka_Plaza.html"
  },
  /*6*/
  {
    nombre: "La Casa de Miapán",
    descripcion: `Descubre comodidad y elegancia en cada rincón
                La Casa de Mamapán Hotel Colonial Ahuachapan está en Ahuachapán, 
                a 26 km de Parque Nacional El Imposible, y tiene terraza, 
                habitaciones hipoalergénicas y wifi gratis en todo el alojamiento. 
                Se ofrece traslado para ir o volver del aeropuerto.`,
    servicios:["Wifi gratis", "Cocina americana", "Baño privado", "Recepción 24h", "Habitaciones hipoalergénicas",
                "Habitaciones dobles", "Aire acondicionado", "Habitaciones sin humo", "Desayuno"
    ],
    imagen: "../../recursos/imagenes/img_ahuachapan/mamapan1.jpg",
    enlace: "../hoteles/La_Casa_de_Miapan.html"
  },
  /*7*/
  {
    nombre: "Marsella",
    descripcion: `Para los propietarios de coches hay una plaza de parking. Las habitaciones convienen solo
                para no fumadores. Los huéspedes pueden solicitar traslado del/al aeropuerto. Se permite
                el alojamiento con sus mascotas, pero esto hay que acordar con la administración de antemano.
                Para cualquier consulta puede ponerse en contacto con la recepción 24 horas. Aquí siempre son 
                bienvenidos los viajeros extranjeros, el personal de servicio domina español. Se permite pagar 
                los servicios en el lugar de alojamiento con tarjetas de tipo Visa, Mastercard.`,
    servicios:["Traslado al aeropuerto", "Recepción 24h", "Habitaciones sin humo", "Aire acondicionado",
                "Parking gratis", "Transporte"],
    imagen: "../../recursos/imagenes/img_sonsonate/comfortable_presentacion.jpg",
    enlace: "../hoteles/Marsella.html"
  },
  /*8*/
  {
    nombre: "La Casa del Pinito",
    descripcion: `Descubre comodidad y confort en cada rincón.`,
    servicios:["Baño privado", "Wifi gratis", "Parking gratis", "Habitaciones familiares", "Cocina totalmente equipada",
                "Nevera", "Bañera", "Lavadora", "Jardín"],
    imagen: "../../recursos/imagenes/img_sonsonate/comfortable_presentacion.jpg",
    enlace: "../hoteles/La_Casa_Del_Pinito.html"
  },
  /*9*/
  {
    nombre: "Lali Beach Hotel Boutique",
    descripcion: `Descubre comodidad y confort en cada rincón.`,
    servicios:["Servicio de limpieza", "Guarda equipaje", "Lavandería", "Traslado al aeropuerto", 
                "Servicio de habitaciones", "Información turística"],
    imagen: "../../recursos/imagenes/img_sonsonate/lali_presentacion.jpg",
    enlace: "../hoteles/Lali_Beach_Hotel_Boutique.html"
  },
];

var contenedor = document.querySelector(".hoteles");
var servicioBuscado = document.title;
contenedor.innerHTML = "";

var filtrados = hoteles.filter(hotel =>
  hotel.servicios.includes(servicioBuscado)
);

filtrados.forEach(hotel => {
  var tarjeta = document.createElement("div");
  tarjeta.className = "hotel";
  tarjeta.innerHTML = `
    <img src="${hotel.imagen}" alt="${hotel.nombre}">
    <h3>${hotel.nombre}</h3>
    <p>${hotel.descripcion}</p>
    <a href="${hotel.enlace}" class="btn">Ver más</a>
  `;
  contenedor.appendChild(tarjeta);
});

document.querySelector("h2 span").textContent = filtrados.length;