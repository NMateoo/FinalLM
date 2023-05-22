'use strict';

let contador=0;
let simbolo = "x";
let arrayPosiciones = [ [], [], [] ];

function hover(id) {
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(63, 63, 63)";
}

function desmarcar(id) {
    let cuadro=document.getElementById(id);
    cuadro.style.backgroundColor="rgb(236, 236, 236)"
}

function pintar(id) {
  let cuadro = document.getElementById(id);
  cuadro.innerHTML = simbolo;
  contador++;
  let fila = Math.ceil(id / 3) - 1;
  let columna = (id - 1) % 3;
  arrayPosiciones[fila][columna] = simbolo;

  if (contador == 3) {
    funcionBasica();
  }
}

function funcionBasica() {
  for (let i = 0; i < 3; i++) {
  // Revisa las filas
  if (arrayPosiciones[i][0] == arrayPosiciones[i][1] && arrayPosiciones[i][1] == arrayPosiciones[i][2] && arrayPosiciones[i][0] != null) {
  alert("¡Has ganado!");
  limpiarTablero();
  return;
  }
  // Revisa las columnas
  if (arrayPosiciones[0][i] == arrayPosiciones[1][i] && arrayPosiciones[1][i] == arrayPosiciones[2][i] && arrayPosiciones[0][i] != null) {
  alert("¡Has ganado!");
  limpiarTablero();
  return;
  }
  }
  // Revisa la diagonal principal
  if (arrayPosiciones[0][0] == arrayPosiciones[1][1] && arrayPosiciones[1][1] == arrayPosiciones[2][2] && arrayPosiciones[0][0] != null) {
  alert("¡Has ganado!");
  limpiarTablero();
  return;
  }
  // Revisa la diagonal secundaria
  if (arrayPosiciones[0][2] == arrayPosiciones[1][1] && arrayPosiciones[1][1] == arrayPosiciones[2][0] && arrayPosiciones[0][2] != null) {
  alert("¡Has ganado!");
  limpiarTablero();
  return;
  }
  // Si no hay ganador
  alert("Juego terminado. No hay ganador.");
  limpiarTablero();
}

function limpiarTablero() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  contador = 0;
  simbolo = "x";
  arrayPosiciones = [ [], [], [] ];
}