var cambio = document.querySelector("cambio-modo").addEventListener("click", function cambiarModo(){})


function cambiarModo() {
  var header = document.querySelector("header")
  var footer = document.querySelector("footer")
  header.classList.toggle("blanco")
  footer.classList.toggle("blanco")
}