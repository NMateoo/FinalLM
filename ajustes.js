'use strict'

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var colorFondoDia = document.getElementsByName('colorElegido')[0];
    console.log('Color fondo dia: ' + colorFondoDia.value);
    var colorLetraDia = document.getElementsByName('colorElegido')[1];
    console.log('Color letra dia: ' + colorLetraDia.value);

    var colorFondoNoche = document.getElementsByName('colorElegido')[2];
    console.log('Color fondo noche: ' + colorFondoNoche.value);
    var colorLetraNoche = document.getElementsByName('colorElegido')[3];
    console.log('Color letra noche: ' + colorLetraNoche.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    // aplicamos el color y el tamaño a todo el documento
    document.documentElement.style.fontSize = parseFloat(tamelegido) + "rem";
    document.documentElement.style.setProperty("--colorFondo", colorFondoDia.value);
    //document.documentElement.style.setProperty("--colorFondo", colorLetraDia.value);

}