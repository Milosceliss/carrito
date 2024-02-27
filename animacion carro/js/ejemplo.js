/* var colorTexto = document.querySelector(".titulo2")

colorTexto.addEventListener('click', cambiarColor)


function cambiarColor(){    
    colorTexto.style.color = '#FF00FF'
}

var titulo = document.querySelector(".titulo")
var imagen1 = document.querySelector(".imagen1")

titulo.addEventListener('click', muestraImagen)

function muestraImagen(){
    imagen1.classList.remove('oculto')
} */


var fondomover = document.querySelector(".padre")
var humo = document.querySelector(".humo")
var luz = document.querySelector(".luces")
var rueda = document.querySelector(".llantas")
var ruedita = document.querySelector(".llantas2")


fondomover.addEventListener('click',dad)

function dad() {

    fondomover.classList.add("padrecito");
    humo.classList.remove('oculto')
    humo.classList.add("humito");
    luz.classList.remove('oculto')
    luz.classList.add("luces_mover");
    rueda.classList.add("llantas_uno");
    ruedita.classList.add("llantas_dos");
    
}


