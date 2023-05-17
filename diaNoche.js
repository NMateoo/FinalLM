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

    todo.style.color="black";
    todo.style.backgroundColor="white";
    inicio.style.color="black";
    inicio.style.backgroundColor="#f1f1f1";
    contacto.style.color="#242323";
    contacto.style.backgroundColor="#f1f1f1";
    window.localStorage.setItem("modoGuardado", "dia");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "block";
}

function ponerModoNoche() {
    let todo = document.getElementById("todo");
    let inicio = document.getElementById("inicio");
    let hero = document.getElementsByClassName('hero-image');
    let artistas = document.getElementById("artistas");
    let horario = document.getElementById("horario");
    let entradas = document.getElementById("entradas");
    let noticias = document.getElementById("noticias");
    let localizacion = document.getElementById("localizacion");
    let contacto = document.getElementById("contacto");

    todo.style.color="white";
    todo.style.backgroundColor="black";
    inicio.style.color="white";
    inicio.style.backgroundColor="#242323";
    hero.style.color="white";
    hero.style.backgroundColor="black";
    contacto.style.color="white";
    contacto.style.backgroundColor="#242323";
    localizacion.style.color="white";
    localizacion.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado", "noche")
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display = "block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display = "none";
}