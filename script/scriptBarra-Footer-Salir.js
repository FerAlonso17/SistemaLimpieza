var salir = document.getElementById("salir");

salir.addEventListener("click", function(e) {
    // Evitar el comportamiento por defecto del enlace
    e.preventDefault();

    var destino = this.getAttribute("href");
    // Mostrar un mensaje de confirmación al usuario
    var confirmacion = window.confirm("¿Desea salir del sistema?");

    if (confirmacion) {
        window.location.href = destino;
    }
});

/*----------------------------MANTENER BARRA DE NAVEGACION Y FOOTER-----------------------------------*/

// petición AJAX y cargar el contenido
function loadPage(page) {
    // Crear un objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // Abrir una conexión GET con la página parcial
    xhr.open("GET", page);
    // Enviar la petición
    xhr.send();
    // Esperar a que se reciba la respuesta
    xhr.onload = function() {
        if (xhr.status == 200) {
            var container = document.getElementById("container__main");
            // Insertar el código HTML de la página parcial en el contenedor
            container.innerHTML = xhr.responseText;
        }
    };
  }

  // capturar el evento click de los items de la barra de navegación
  function handleClick(event) {
    event.preventDefault();
    var page = event.target.getAttribute("data-page");
    // Llamar a la función loadPage con la página parcial
    loadPage(page);
  }

  // asignar el evento click a cada item de la barra de navegación
  function init() {
    // Obtener todos los enlaces de la barra de navegación
    var links = document.querySelectorAll("nav a");
    // Recorrer cada enlace y asignarle el evento click
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", handleClick);
    }
  }

  // Llamar a la función init cuando se cargue la página
  window.onload = init;

