
let totalItems=0;
let totalEsmeraldas=0;
let poloblue=0;
let pologreen=0;
let poloblack=0;
let polored=0;
let bigpony=0;
let libre=0;
let productos = [
  {
    id: 1,
    img: "/imagenes/263-Polo-Blue.webp",
    nombre: "POLO BLUE",
    precio: 1,
    descripcion: "Perfume fresco y elegante, ideal para el uso diario."
  },
  {
    id: 2,
    img: "/imagenes/267-Polo-Green.webp",
    nombre: "POLO GREEN",
    precio: 1
  },
  {
    id: 3,
    img: "/imagenes/269-Polo-Black.webp",
    nombre: "POLO BLACK",
    precio: 1
  },
  {
    id: 4,
    img: "/imagenes/272-Polo-Red.webp",
    nombre: "POLO RED",
    precio: 1
  },
  {
    id: 5,
    img: "/imagenes/274-Big-Pony.webp",
    nombre: "POLO BIG",
    precio: 1

  },
  {
    id: 6,
    img: "/imagenes/275-Libre.webp",
    nombre: "LIBRE LXS",
    precio: 1
  }
];
function agregarAlCarro(tipoObjeto, precioObjeto) {
  if (tipoObjeto === 'poloblue') {
    if (poloblue >= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    poloblue++;// Le suma 1 a la cantidad de pociones
    document.getElementById("cant-poloblue").innerText = poloblue;// Actualiza el numero en pantalla
  }
  if (tipoObjeto === 'pologreen') {
    if (pologreen >= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    pologreen++;
    document.getElementById("cant-pologreen").innerText = pologreen;
  }
  if (tipoObjeto === 'poloblack') {
    if (poloblack >= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    poloblack++;
    document.getElementById("cant-poloblack").innerText = poloblack;
  }
  if (tipoObjeto === 'polored') {
    if (polored >= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    polored++;
    document.getElementById("cant-polored").innerText = polored;
  }
  if (tipoObjeto === 'bigpony') {
    if (bigpony>= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    bigpony++;
    document.getElementById("cant-bigpony").innerText = bigpony;
  }
  if (tipoObjeto === 'libre') {
    if (libre >= 64) {
      alert("¡Inventario lleno para este objeto!");
      return;
    }
    libre++;
    document.getElementById("cant-libre").innerText = libre;
  }
  totalItems += 1;
  totalEsmeraldas += precioObjeto;
  document.getElementById("total-items").innerText = totalItems;
  document.getElementById("total-esmeraldas").innerText = totalEsmeraldas;
}

function mostrarProducto() {
  let urlParams = new URLSearchParams(window.location.search);
  let id = urlParams.get("id");

  let producto = productos.find(productoBuscado => productoBuscado.id == id);

  if (producto) {
    let detalle = document.getElementById("producto");

    detalle.innerHTML = `
      <div>
        <p>
          <img class="imagen-detalle" src="${producto.img}" alt="${producto.nombre}">
        </p>
      </div>

      <div class="cuadro-detalle">
        <h2>${producto.nombre}</h2>
        <hr>
        <p><strong>PRECIO:</strong> ${producto.precio} Esmeralda</p>
        <p><strong>DESCRIPCIÓN:</strong></p>
        <p>${producto.descripcion}</p>
      </div>
    `;
}
}
  if (document.getElementById("producto")) {
  mostrarProducto();
  }