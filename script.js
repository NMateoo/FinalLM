'use strict'
function guardar() {
    var texto=document.getElementById("nombreUsuarioCampo").value;
    var usuario=sessionStorage.setItem("usuarioGuardado",texto);
    sessionStorage.setItem("usuarioGuardado",texto);
    alert("Usuario guardado");
    document.getElementById("nombreUsuario").innerText=texto;
}

function guardarUsuario() {

}