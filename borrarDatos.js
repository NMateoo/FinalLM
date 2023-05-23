'use strict'

document.getElementById("borrarLocalStorage").addEventListener("click", function() {
    // Borra todo el contenido del local storage
    localStorage.clear();
  
    // O bien, si solo deseas borrar una clave específica, utiliza:
    // localStorage.removeItem('nombreClave');
  
    // Mensaje de confirmación
    location.reload();
    alert("Colores reseteados correctamente");
  });
  