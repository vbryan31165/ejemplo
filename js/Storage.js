function Almacenar() {
	alert("Datos ingresados")
	var datos1 = [];
	var nombre = document.forms.Listas.nombre.value;
	var apellido = document.forms.Listas.apellido.value;
	var correo = document.forms.Listas.correo.value;
	var celular = document.forms.Listas.celular.value;


	var personJSONFromLS = localStorage.getItem("person"); //creacion de la llave del localStorage
	var personFromLS = JSON.parse(personJSONFromLS); //asigna el valor del array del objeto

	if (personJSONFromLS !== null) { //si esta no esta vacio agrega lo de localStorage
		datos1 = personFromLS;
	}


	var compra = new datos(nombre, apellido, correo, celular); //crea un array de objetos, por cada datos

	datos1.push(compra); //agrega los datos capturados
	/* console.log(datos1); */
	var jsonPerson = JSON.stringify(datos1); // Convierte JS Object a JSON Object.
	localStorage.setItem("person", jsonPerson);	//Convierte JSON Object a JS Object.



	doShowAll(); //pinta la tabla en el html




}
function SaveDataToLocalStorage(nombre, apellido, correo, celular) {
	var a = new Object();
	a = JSON.parse(localStorage.getItem('transito')) || [];



	a.push(nombre, apellido, correo, celular);
	console.log(a);
	//alert(a); 
	localStorage.setItem('transito', JSON.stringify(a));
	var DataDelLocalStorage = JSON.parse(localStorage.getItem('id'));


}


function datos(nombre, apellido, correo, celular) { //para armar el array de objetos
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

function ClearAll() { //elimina el localStorage
	localStorage.clear();
	doShowAll();
}


function doShowAll() { // pinta la tabla dinamica
	if (CheckBrowser()) {// verificar si el navegador sea compatible con localStorage
		var key = "";
		var list = "<tr><th>Nro</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Celular</th><th>Opciones</th></tr>\n";
		var i = 0;


		if (localStorage.getItem("person")) { //verifica si existe en localStorage
			var personJSONFromLS = localStorage.getItem("person");
			var personFromLS = JSON.parse(personJSONFromLS);
			//		console.log(personFromLS);
			opciones1 = '<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>';
			opciones2 = '<a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>';
			for (x of personFromLS) { //recorre para mostrar
				list += "<tr><td>" + " " + "</td>\n<td>"
					+ x.nombre_l + "</td>\n<td>"
					+ x.apellido_l + "</td>\n<td>"
					+ x.correo_l + "</td>\n<td>"
					+ x.celular_l + "</td>\n<td>"
					+ opciones1 + "  " + + "</td></tr>";
			}
		} else {
			if (list == "<tr><th>Nro</th><th>Nombre</th><th>Apellido</th><th>Correo</th><th>Celular</th></tr>\n") {
				list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
			}
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store shopping list as your browser do not support local storage');
	}
}



 
function CheckBrowser() {
			if ('localStorage' in window && window['localStorage'] !== null) {
				// we can use localStorage object to store data
				return true;
			} else {
				return false;
			}
		}