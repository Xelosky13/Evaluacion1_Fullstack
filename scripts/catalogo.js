
let totalItems=0;
let totalEsmeraldas=0;
let poloblue=0;
let pologreen=0;
let poloblack=0;
let polored=0;
let bigpony=0;
let libre=0;

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