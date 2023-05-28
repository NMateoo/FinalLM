'use strict'

//DIA Y NOCHE
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

//AJUSTES DE COLOR
function aplicarCambios() {
    // Mostramos en consola los valores recogidos en la página
    var colorFondoDia1 = document.getElementsByName('colorElegido')[0].value;
    console.log('Color fondo día 1: ' + colorFondoDia1);
    var colorFondoDia2 = document.getElementsByName('colorElegido')[1].value;
    console.log('Color fondo día 2: ' + colorFondoDia2);
    var colorLetraDia1 = document.getElementsByName('colorElegido')[2].value;
    console.log('Color letra día 1: ' + colorLetraDia1);
    var colorLetraDia2 = document.getElementsByName('colorElegido')[3].value;
    console.log('Color letra día 2: ' + colorLetraDia2);

    // Aplicamos el color a todo el documento
    document.documentElement.style.setProperty("--colorFondo1", colorFondoDia1);
    document.documentElement.style.setProperty("--colorFondo", colorFondoDia2);
    document.documentElement.style.setProperty("--colorLetrasN", colorLetraDia1);
    document.documentElement.style.setProperty("--colorLetrasG", colorLetraDia2);

    // Guardamos los colores en el localStorage
    window.localStorage.setItem('colorFondo1', colorFondoDia1);
    window.localStorage.setItem('colorFondo2', colorFondoDia2);
    window.localStorage.setItem('colorLetras1', colorLetraDia1);
    window.localStorage.setItem('colorLetras2', colorLetraDia2);

    alert("Colores y usuario guardados correctamente")
}

// Leer los colores guardados en localStorage
function leerColoresGuardados() {
    var colorFondo1 = window.localStorage.getItem("colorFondo1");
    var colorFondo2 = window.localStorage.getItem("colorFondo2");
    var colorLetras1 = window.localStorage.getItem("colorLetras1");
    var colorLetras2 = window.localStorage.getItem("colorLetras2");

    if (colorFondo1 && colorFondo2 && colorLetras1 && colorLetras2) {
        document.documentElement.style.setProperty("--colorFondo1", colorFondo1);
        document.documentElement.style.setProperty("--colorFondo", colorFondo2);
        document.documentElement.style.setProperty("--colorLetrasN", colorLetras1);
        document.documentElement.style.setProperty("--colorLetrasG", colorLetras2);
    }
}

window.addEventListener('load', leerColoresGuardados);


//REINICIAR COLORES
document.getElementById("borrarLocalStorage").addEventListener("click", function() {
    // Borra todo el contenido del local storage
    localStorage.clear();

    location.reload();
    alert("Colores reseteados correctamente");
});

//FUNCION PARA ABRIR Y CERRAR EL MODAL
function abrirModal() {
    document.getElementById("modal").style.display="block";
}
    
function cerrarModal() {
    document.getElementById("modal").style.display="none";
}

function guardarUsuario() {
    var nombreUsuario = document.getElementById('nombreUsuarioCampo').value;
    document.getElementById('textoUsuario').textContent = nombreUsuario;

    sessionStorage.setItem('nombreUsuario', nombreUsuario);
    console.log("Usuario guardado: "+nombreUsuario)
}
