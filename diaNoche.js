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
    document.documentElement.style.setProperty('--colorFondo1', '#f1f1f1')
    document.documentElement.style.setProperty('--colorLetrasN', '#000')
    document.documentElement.style.setProperty('--colorFondo', '#ffffff')
    document.documentElement.style.setProperty('--colorLetrasG', '#888888')

    window.localStorage.setItem("modoGuardado", "dia");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

function ponerModoNoche() {
    document.documentElement.style.setProperty('--colorFondo1', '#222222')
    document.documentElement.style.setProperty('--colorLetrasN', '#ffffff')
    document.documentElement.style.setProperty('--colorFondo', '#333333')
    document.documentElement.style.setProperty('--colorLetrasG', '#aaaaaa')

    window.localStorage.setItem("modoGuardado", "noche")
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}