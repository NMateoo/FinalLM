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
    let hero = document.getElementsByClassName("hero-image");
    let artistas = document.getElementById("artistas");
    let horario = document.getElementById("horario");
    let entradas = document.getElementById("entradas");
    let noticias = document.getElementById("noticias");
    let localizacion = document.getElementById("localizacion");
    let contacto = document.getElementById("contacto");

    window.localStorage.setItem("modoGuardado", "dia");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

function ponerModoNoche() {
    let inicio = document.getElementById("inicio");
    let hero = document.getElementsByClassName("hero-image");
    let artistas = document.getElementById("artistas");
    let horario = document.getElementById("horario");
    let entradas = document.getElementById("entradas");
    let noticias = document.getElementById("noticias");
    let localizacion = document.getElementById("localizacion");
    let contacto = document.getElementById("contacto");

    inicio.style.color="white";
    inicio.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado", "noche")
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}