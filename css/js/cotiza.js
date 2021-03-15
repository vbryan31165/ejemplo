miespacio = window.localStorage;

var prod_D =[ {/// prudctos
    "prod": "Cereales"},{
    "prod": "Frutos_secos"},{
    "prod": "Arroz"},{
    "prod": "Granos"},{
    "prod": "Gaseosa"},{
    "prod": "Jugos_Naturales"},{
    "prod": "Licores"},{
    "prod": "Yogures"},{
    "prod": "Comida_de_pets"},{
    "prod": "Juegos"},{
    "prod": "Pañales"} 
]
let prod_p =[ { // precio
    "pre": 5000},{
    "pre": 2000},{
    "pre": 1250},{
    "pre": 1200},{
    "pre": 1500},{
    "pre": 1700},{
    "pre": 27450},{
    "pre": 2100},{
    "pre": 13500},{
    "pre": 1600},{
    "pre": 2500} 
]

function Busprecio(){// funcion cotizar
    var product = document.getElementById('txt_prod').value;
    alert("se cotizo: "+product)
    var tbcotizacion = "<tr><th>Producto</th><th>cantidad</th><th>descuento</th><th>total a pagar</th></tr>\n";
    for(i = 0; i<=prod_D.length; i++ ){
        if (product == prod_D[i].prod){
            var valor = prod_p[i].pre;
            miespacio.setItem('val',valor);///Te guarda el valor en mi espacio.
            /* var res = document.getElementById('res'); */
            /* res.innerHTML = "Este es el producto: "+product+" el precio es: "+valor; */
        }
    }
}

function validarcampos(){
    var cantida = document.getElementById('txtcant').value;
    var ele = document.getElementsByName('pocentaje'); 
    var e = document.getElementById("txt_prod");
    var producto = e.options[e.selectedIndex].text;
    
    alert(producto)        
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) 
          porcentaje = ele[i].value; 
          alert(prod_D)
    } 
    var tbcotizacion = "<tr><th>Producto</th><th>cantidad</th><th>descuento</th><th>total a pagar</th></tr>\n";
    
    for (var x=0;x<prod_D.length;x++) {
        tbcotizacion += "<tr><td>"+ prod_D[i].prod + "</td>\n<td>"
                          + prod_p[i].pre + "</td>\n<td>"
                          + "</td></tr>";
      }
    console.log(tbcotizacion);
    alert(cantida);
      var res = document.getElementById('tbcotizacion'); 
     res.innerHTML = tbcotizacion
}




function limpiar(){//limpia form
    document.getElementById('form').reset();
}



function producto(producto, cantidad, correo, celular) { 
	this.nombre_l = nombre;
	this.apellido_l = apellido;
	this.correo_l = correo;
	this.celular_l = celular;

}