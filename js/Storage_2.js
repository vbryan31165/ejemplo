
function Almacenar() {
	alert("Datos ingresados")
    var datos1 = [];
	var nombre = document.forms.Listas.nombre.value;
	var apellido = document.forms.Listas.apellido.value;
	var correo = document.forms.Listas.correo.value;	
	var celular = document.forms.Listas.celular.value;
		

		var personJSONFromLS = localStorage.getItem("person");
		var personFromLS = JSON.parse(personJSONFromLS);
		
		if(personJSONFromLS !== null) {
		   datos1 = personFromLS;
		}

	
    var compra  = new datos(nombre, apellido, correo, celular);
	
    datos1.push(compra);
	console.log(datos1);
	var jsonPerson = JSON.stringify(datos1);
	localStorage.setItem("person", jsonPerson);	
	

/*	
 let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))
	   
	
*/
	
//    SaveDataToLocalStorage(nombre, apellido, correo, celular) ;
//    localStorage.setItem("datos",JSON.stringify(datos1));
//     console.log( localStorage.setItem("datos",datos1) );

	  doShowAll();


	
}

 function SaveDataToLocalStorage(nombre, apellido, correo, celular) { 
 var a = new Object(); 
 a = JSON.parse(localStorage.getItem('transito')) || []; 
 

   
 a.push(nombre, apellido, correo, celular); 
    console.log( a ); 
 //alert(a); 
  localStorage.setItem('transito', JSON.stringify(a)); 
 var DataDelLocalStorage = JSON.parse(localStorage.getItem('id')); 


 }
 

function datos(nombre, apellido, correo, celular) { 
	this.nombre_l = nombre;
	this.apellido_l = apellido;
	this.correo_l = correo;
	this.celular_l = celular;

}


function ModifyItem() {
	var nombre = document.forms.Listas.nombre.value;
	document.forms.Listas.nombre.value = localStorage.getItem(nombre);
	doShowAll();
}

function RemoveItem() {
	var nombre = document.forms.Listas.nombre.value;
	document.forms.Listas.nombre.value = localStorage.removeItem(nombre);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Nro</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Celular</th><th>Opciones</th></tr>\n";
		var i = 0;


if(localStorage.getItem("person")) {
		var personJSONFromLS = localStorage.getItem("person");
		var personFromLS = JSON.parse(personJSONFromLS);
//		console.log(personFromLS);
        opciones1 = '<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>';
		opciones2 = '<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>';
		for (x of personFromLS) {
		  list += "<tr><td>"+ " " + "</td>\n<td>"
		                    + x.nombre_l + "</td>\n<td>"
							+ x.apellido_l + "</td>\n<td>"
							+ x.correo_l + "</td>\n<td>"
							+ x.celular_l + "</td>\n<td>"
							+ opciones1 + "  " +      + "</td></tr>";
		}
}  else {
		if (list == "<tr><th>Nro</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Celular</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
}		
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}

/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}