var url
var step = 1
var objForm = null

cargarPasos()

/*
Función que se lanza para cargar el contenido en cada paso en concreto. 
Jugamos con los estilos del DOM para mostrar u ocultar los contenidos de los pasos.
Además reseteamos los estilos de activo o no activo para que el menú muestre activo el 
item del paso con el que estamos actalmente
*/
function cargarPasos(){
     
    switch(step){
        case 1:  
        //Activamos el contenido del paso 1 y el item del menu
        document.getElementById("paso1").style.display = "block"
        document.getElementById("li_n1").classList.add("active"); 
        //Desactivamos el contenido del paso 2
        document.getElementById("paso2").style.display = "none" 
        document.getElementById("li_n2").classList.remove("active");
        break;
        case 2: 
        //Desactiavmos
        document.getElementById("paso1").style.display = "none" 
        document.getElementById("li_n1").classList.remove("active"); 
        document.getElementById("paso3").style.display = "none" 
        document.getElementById("li_n3").classList.remove("active"); 
        //Activamos
        document.getElementById("paso2").style.display = "block"
        document.getElementById("li_n2").classList.add("active"); 
        document.getElementById("btn-sig").disabled = true
        break;
        case 3: 
        
        mostrarConfirmacion()
        //Descativamos
        document.getElementById("paso2").style.display = "none" 
        document.getElementById("li_n2").classList.remove("active");  
        document.getElementById("paso4").style.display = "none" 
        document.getElementById("li_n4").classList.remove("active"); 
        //Activamos
        document.getElementById("paso3").style.display = "block"
        document.getElementById("li_n3").classList.add("active");
        break;
        case 4: 
        document.getElementById("paso3").style.display = "none" 
        document.getElementById("li_n3").classList.remove("active"); 
        document.getElementById("paso4").style.display = "block"
        document.getElementById("li_n4").classList.add("active");
        break;
    }
        
  
}
/*
Funciónes que se lanza con el click del botón siguiente o naterior
Aumenta o dismiuye en 1 la variable global paso, para saber en todo momento en que paso estamos y volvemos 
a cargar los pasos para resetear las vistas.
*/
function clickSig(){
    step++;
    cargarPasos()
}
function clickAnt(){
    step--;
    cargarPasos()
}
/*
Función que se lanza con el evento onchange de la caja de texto de la URL (PASO 1)
Si está vacia, null, o no definida bloquea el botón siguiente, si no está lo desbloquea.
El valor de la variable se queda guardado en una variable global
*/
function validarUrl(){
    url = document.getElementById("input_url").value
 
    
    if(url != undefined && url != null && url != ""){
        
        document.getElementById("btn-sig").disabled = false
    }else{
        document.getElementById("btn-sig").disabled = true
    }
}

function guardarFormulario(){
   let nombre = document.getElementById("nombre").value;
   let fecha = document.getElementById("fecha").value;
   let direccion = document.getElementById("direccion").value;
   let cp = document.getElementById("cp").value;
   let prov_element = document.getElementById("provincia");
   var provincia = prov_element.options[prov_element.selectedIndex].text;
   let municipio = document.getElementById("municipio").value;

   let vacio = false;
   let mensaje = "<p>Revisa los campos obligatorios:</p><ul>";
    if(nombre == ""){
        vacio = true;
        mensaje+="<li>Nombre</li>";
    }
    if(fecha == ""){
    vacio = true;
    mensaje+="<li>Fecha de nacimiento</li>";
    }
    if(cp == ""){
    vacio = true;
    mensaje+="<li>Codigo postal</li>";
    }
    if(provincia == ""){
    vacio = true;
    mensaje+="<li>Provincia</li>";
    }
    if(municipio == ""){
    vacio = true;
    mensaje+="<li>Municipio</li>";
    }

    mensaje+="</ul>";
  if(vacio){
    document.getElementById("mensaje-error").innerHTML = mensaje; 
    document.getElementById("mensaje-error").style.display = "block"
  }else{
    document.getElementById("mensaje-error").innerHTML = ""; 
    document.getElementById("mensaje-error").style.display = "none"
 
    document.getElementById("btn-sig").disabled = false

    objForm = {
        'nombre': nombre,
        'fecha_nac': fecha,
        'direccion': direccion,
        'cp': cp,
        'provincia': provincia,
        'municipio': municipio
    }

  }
}

function mostrarConfirmacion(){
 
     
    if(objForm != null){
       
       let element = document.getElementById("mostrar_nombre");
       let contenido = document.createTextNode(objForm.nombre);
       element.appendChild(contenido);

       let element2 = document.getElementById("mostrar_fecha");
       let contenido2 = document.createTextNode(objForm.fecha_nac);
       element2.appendChild(contenido2);

       let element3 = document.getElementById("mostrar_dir");
       let contenido3 = document.createTextNode(objForm.direccion);
       element3.appendChild(contenido3);

       let element4 = document.getElementById("mostrar_cp");
       let contenido4 = document.createTextNode(objForm.cp);
       element4.appendChild(contenido4);

       let element5 = document.getElementById("mostrar_provincia");
       let contenido5 = document.createTextNode(objForm.provincia);
       element5.appendChild(contenido5);

       let element6 = document.getElementById("mostrar_municipio");
       let contenido6 = document.createTextNode(objForm.municipio);
       element6.appendChild(contenido6);
    }
}

 