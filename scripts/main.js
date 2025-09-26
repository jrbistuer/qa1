console.log("Hola Mundo!");

var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");

var nombre = localStorage.getItem("nombreUser");
document.getElementById("nombre").innerText = "Hola " + nombre + "!";

function mostrarMensaje() {
    alert("Has hecho click en el botón");
}

function fillDiv() {
    div1.innerHTML = "Contenido cambiado!";
}

function mostrarMensaje2() {
    div2.innerHTML = "Hola Mundo!";
}

function cambiarEstilo() {
    // var div2 = document.getElementById("div2");
    div2.style.color = "red";
    div2.style.fontWeight = "bold";

    // document.getElementById("div2").style = "color: red; font-weight: bold;";
}

function enviarForm() {

    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
    var fecha = document.getElementById("fecha").value;
    var suscripcion = document.getElementById("suscripcion").checked;
    var terminos = document.getElementById("terminos").checked;
    var notificaciones = document.getElementById("notificaciones").checked;
    var opcion = document.querySelector('input[name="opciones"]:checked').value;
    var pais = document.getElementById("pais").value;
    var mensaje = document.getElementById("mensaje").value;

    console.log("Nombre: " + nombre);
    console.log("Contraseña: " + password);
    console.log("Fecha de nacimiento: " + fecha);
    console.log("Suscripción al boletín: " + suscripcion);
    console.log("Acepta términos y condiciones: " + terminos);
    console.log("Notificaciones por email: " + notificaciones);
    console.log("Opción seleccionada: " + opcion);
    console.log("País: " + pais);
    console.log("mensaje: " + mensaje);
}

function guardarDatos() {
    var dato = document.getElementById("datossss").value;
    // sessionStorage.setItem("miDato", dato);
    localStorage.setItem("nombreUser", dato);
}
