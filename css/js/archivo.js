/* Pagina catalogo ALERTA DE QUE ENVIO CORRECTAMENTE EL FORMULARIO*/
function mensaje(){
    alert("Se a enviado correctamenta la informacion a nuestra base de datos")
}

/* carrusel */
var myIndex=0;
carousel();

function carousel(){
  var i;
  var x = document.getElementsByClassName("mySlides");

  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length){myIndex = 1}

  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000);
}
/* -------------------- */


