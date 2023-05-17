'use strict'

function leerModoActual() {
    let modo = window.localStorage.getItem("modoGuardado");

    if (!modo) {
        modo = "dia";
    }
    return modo;
}

var modo = leerModoActual();

if (modo == "dia") {
    ponerModoDia();
} else {
    ponerModoNoche();
}

function ponerModoDia() {
    let todo = document.getElementById("todo");
    let inicio = document.getElementById("inicio");
    window.localStorage.setItem("modoGuardado", "dia")
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

function ponerModoNoche() {
    let todo = document.getElementById("todo");
    let inicio = document.getElementById("inicio");
    window.localStorage.setItem("modoGuardado", "noche")
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}