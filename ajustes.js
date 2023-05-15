'use strict'

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    //document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    //document.documentElement.style.setProperty("--colorNormal", color.value);
    //document.getElementById('mensaje').innerHTML = "APLICADO";

}