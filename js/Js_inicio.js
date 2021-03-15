miespacio = window.localStorage;
//var div = document.getElementById('formulario_2');
var dts= [];

function validar(){
    fetch('./json/info_user.json')
       .then( respuesta => respuesta.json())
       .then(usuarios => {
           dts = usuarios;
           var txtuser = document.getElementById('txtuser').value;
           var txtpassw = document.getElementById('txtcontra').value;
           for(i = 0; i<=dts.length; i++ ){
               var v = false;
               if (txtuser == dts[i].user){
                   console.log("entro");
                   v = true;
                   var c = false
                   if (txtpassw == dts[i].passw){
                       c  = true
                       var nom = dts[i].name;
                       var ape = dts[i].lastname;
                       var ti = dts[i].Tipo;
                       miespacio.setItem('nomb',nom);
                       miespacio.setItem('apel',ape);
                       miespacio.setItem('tip',ti);
                       alert("Tipo de usuario "+ti);
                       if (ti == "Invitado"){
                           alert("No tiene acceso al formulario de quejas");
                        }
                       location.href="html/Pprincipal.html";

                    }
                    else{
                        if (v == false){
                            document.getElementById('res').innerHTML="Nota: el usuario "+txtuser+" es incorrecto "; 
                        }

                        limpiar();
                    } 
                }
                else{
                    if (c == false){
                        document.getElementById('res').innerHTML="Nota: la contraseña del usuario "+txtuser+" es incorrecta ";
                    }

                    limpiar();
                }//cliclo else 

            }//cliclo for

        })//then-user
    
}//close fun
function validarcampos(){
    var txtuser1 = document.getElementById('txtuser').value;
    var txtpassw2 = document.getElementById('txtcontra').value;
    console.log(txtuser.length);
    if(txtuser1.length  >= 4 && txtpassw2.length > 0 ){
        validar()
    }
    else{
        document.getElementById('res').innerHTML="Nota: el usuario debe ser mayor a 4 caracteres";
        limpiar();
    }
    if (txtuser1.length == 0){
        document.getElementById('res').innerHTML="Nota: el campo de usuario no puede estar vacio";
        limpiar();
    }
    if(txtpassw2.length == 0){
        document.getElementById('res').innerHTML="Nota: el campo de contraseña no puede estar vacio";
        limpiar();
    }
    if (txtuser1.length == 0 && txtpassw2.length == 0){
        document.getElementById('res').innerHTML="Nota: los campos usuario y contraseña no puede estar vacios";
        limpiar();
    }

}


function limpiar(){
    document.getElementById('Form_inicio').reset();
}
//cargarusuarios();
