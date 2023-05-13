var header = document.querySelector("header");
var footer = document.querySelector("footer");
var form = document.querySelector("form");
var botonModo = document.querySelector("button");

var cambiarColor = function() {
  header.classList.toggle("blanco")
  footer.classList.toggle("blanco")
  form.classList.toggle("formulario-blanco")
};
botonModo.addEventListener("click", cambiarColor);