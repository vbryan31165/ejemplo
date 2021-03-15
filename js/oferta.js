
var divtabla=document.getElementById('cuadro')// cuadro dentro de la tabla
var i=1;//contadora
var botonenviar=document.getElementById('btnagregar')
var botoneditar=document.getElementById('btneditar')
botoneditar.disabled = false;//no habilitado editar

var infoForm={}; //variabkle tipo

function procesar() { //calcula y agrega a la fila de la tabla

var base=document.getElementById('txtnume1').value;
var altura=document.getElementById('txtnume2').value;
///validacion de campos requeridos
if(base=="" || altura==""){
    alert("debe ingresar la informacion en todos los campos")
}else{
    if (document.getElementById('suma').checked){
        var area= parseFloat(base)+parseFloat(altura);
        alert(area)

    }
    if (document.getElementById('resta').checked){
        var area= parseFloat(base)-parseFloat(altura);
        alert(area)

    }
    if (document.getElementById('multiplicacion').checked){
        var area= parseFloat(base)*parseFloat(altura);
        alert(area)

    }
    if (document.getElementById('division').checked){
        var area= parseFloat(base)/parseFloat(altura);
        alert(area)

    }

   

//////////////////  cambio de formato

    infoForm ["id"]= i++;
    infoForm ["base"]= base;
    infoForm ["altura"]= altura;
    infoForm ["area"]= area;
////////////////

/////////////// insertar a la tabla
var tabla = document.getElementById("tbPorcentaje");
    var nuevaFila = tabla.insertRow(tabla.lenght);

    cell1 = nuevaFila.insertCell(0);
    cell1.innerHTML = infoForm.id;

    cell2 = nuevaFila.insertCell(1);
    cell2.innerHTML = infoForm.base;

    cell3 = nuevaFila.insertCell(2);
    cell3.innerHTML = infoForm.altura;

    cell4 = nuevaFila.insertCell(3);
    cell4.innerHTML = infoForm.area;

    cell4 = nuevaFila.insertCell(4);
    cell4.innerHTML =   `<a class="btn btn-warning mx-5 " onClick="onEdit(this)">Edit</a>
    <a class= "btn btn-danger " onClick="onDelete(this)">Delete</a>`;
//////////////


 ///limpia el formilario
 document.getElementById("miForm").reset();
/*  divtabla.style.display=''; */
///muestra la yabla ya que por lo menos se tiene un registro
}

}///fin de procesar



//////editar
function onEdit(td){
    ///cambio de botones
    botoneditar.disabled = false;
    botonenviar.disabled = true;
    selectedRow = td.parentElement.parentElement;
    document.getElementById("txtnume1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("txtnume2").value = selectedRow.cells[2].innerHTML;
    

}

////////


/////// actualizar datos
function actualizarfila() {
    base=document.getElementById('txtnume1').value;
    altura=document.getElementById('txtnume2').value;

    if(base=="" || altura==""){
        alert("debe ingresar la informacion en todos los campos")
    }else{
        if (document.getElementById('suma').checked){
            var area= parseFloat(base)+parseFloat(altura);
            alert(area)
    
        }
        if (document.getElementById('resta').checked){
            var area= parseFloat(base)-parseFloat(altura);
            alert(area)
    
        }
        if (document.getElementById('multiplicacion').checked){
            var area= parseFloat(base)*parseFloat(altura);
            alert(area)
    
        }
        if (document.getElementById('division').checked){
            var area= parseFloat(base)/parseFloat(altura);
            alert(area)
    
        }
    
        infoForm ["base"]= base;
        infoForm ["altura"]= altura;
        infoForm ["area"]= area;
        
       
        selectedRow.cells[1].innerHTML = infoForm.base;
        selectedRow.cells[2].innerHTML = infoForm.altura;
        selectedRow.cells[3].innerHTML = infoForm.area;
    
        
        botoneditar.disabled = true;
        botonenviar.disabled = false;
        alert("Fila editada exitosamente");
        document.getElementById("miForm").reset();
    }
     
    
    
}

//////////////


/////////eliminar
function onDelete(td){

    if (confirm('Estas seguro de esto? si lo borras perderas la informacion')){
        
        row = td.parentElement.parentElement;
        document.getElementById("tbPorcentaje").deleteRow(row.rowIndex);
        ///borrarForm();
        
        var num = document.getElementById('tbPorcentaje').rows.length;
       // alert(num)
        if(num==1){
            /* divtabla.style.display='none'; */
        }
    }



}
/////////////