const btnPagar = document.querySelector('#pagar')
const nombre = document.querySelector('#nombre')
const lasName = document.querySelector('#apellido')
const email = document.querySelector('#email');
const form = document.querySelector('#mensaje--error')
const formularioEnviar = document.querySelector('#form')
const selectRegiones = document.getElementById('regiones')
const selectProvincias = document.getElementById('provincias')
const selectComuna = document.getElementById('comuna')
const direccion =document.getElementById('direccion')
let campo=false; let campoDos=false;

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
    nombre.addEventListener('blur', validarFormulario);
    lasName.addEventListener('blur', validarFormulario);
    email.addEventListener('blur', validarFormulario);
    direccion.addEventListener('blur', validarFormulario);
    selectRegiones.addEventListener('blur',validarFormulario)
    selectRegiones.addEventListener('blur',validarFormulario)
    formularioEnviar.addEventListener('submit',enviarCompra)

    
}
function inicioApp() {
    btnPagar.disabled = true;
    btnPagar.classList.add('no-drop', 'opacidad-50')
}


function validarFormulario(e) {
    console.log('gato', campo)
    console.log('gato', campoDos)
    let selectPro=''
    
   if (e.target.value.length>0) {
    let  error = document.querySelector('p.error');
        if (error){
            error.remove();
            console.log('holitas',error)
        }
       e.target.classList.add ('border-green')
       e.target.classList.remove ('border-red')
       
   } else {
    e.target.classList.add ('border-red')
    e.target.classList.remove ('border-green')
    errorMensaje('todos los campos con un simbolo * son obligatorios')
   }
   if(e.target.type==='email'){
        
       if (er.test(e.target.value)){
        const error = document.querySelector('p.error');
        if (error){
            error.remove();
        }

        e.target.classList.add ('border-green')
        e.target.classList.remove ('border-red')
    } else {
        
        e.target.classList.remove ('border-green')
        e.target.classList.add ('border-red')
        errorMensaje('email no valido')
    }
    }
    if (campo===true) {
        selectProvincias.addEventListener('change',function(){
      selectPro = this.options[selectProvincias.selectedIndex];
      if (selectPro.value>=1){
        selectProvincias.classList.add ('border-green')
        selectProvincias.classList.remove ('border-red')
        error = document.querySelector('p.error');
        if (error) {
            error.remove();

        }
      } else {
        selectProvincias.classList.add ('border-red')
        selectProvincias.classList.remove ('border-green')
        errorMensaje('Provincias es obligatorio')
       
      }
      
    });
    } else  if (campo!=false){
        console.log('andrea', e)
        selectRegiones.classList.add ('border-red')
        selectRegiones.classList.remove ('border-green')
        errorMensaje('Regiones es obligatorio')
    }

    if (campo===true) {
        selectProvincias.addEventListener('change',function(){
      selectPro = this.options[selectProvincias.selectedIndex];
      if (selectPro.value>=1){
        console.log('gatitos', selectPro.value)
        selectProvincias.classList.add ('border-green')
        selectProvincias.classList.remove ('border-red')
        selectComuna.classList.remove ('border-red','border-green')
        error = document.querySelector('p.error');
        
        if (error) {
            error.remove();

        }
      } else {
        selectProvincias.classList.add ('border-red')
        selectProvincias.classList.remove ('border-green')
        campoDos=false
        errorMensaje('Provincias es obligatorio')
       
      }
      
    });
    }
    
    if (er.test(email.value)&& nombre.value!==''&&lasName.value!==''&&selectRegiones.value!==''&&selectProvincias.value!==''&&selectComuna.value!==''){
        btnPagar.disabled = false;
        btnPagar.classList.remove('no-drop', 'opacidad-50')
    } 
}
function errorMensaje (mensaje) {
    const mensajeError =document.createElement('p')
    mensajeError.textContent=mensaje
    mensajeError.classList.add('alert-red','error')
    console.log('errror verificar')
    const errores = document.querySelectorAll('.error') 
        if (errores.length<1){
            form.appendChild(mensajeError);
        }
    
}
function enviarCompra(e) {
    e.preventDefault();
}

let errorDivergente;
    selectRegiones.addEventListener('change',
    function(){
        
      var select = this.options[selectRegiones.selectedIndex];
      if (errorDivergente!=false&errorDivergente!=select.value){
        console.log('daaaarrrrrr',errorDivergente, select.value)
        selectProvincias.classList.remove ('border-green')
    }
      if (select.value!='selecciones un elemento'){
        campo= true
        
        console.log('divergente',errorDivergente)
        console.log('divergentesss',select.value)
        
      } else {
          campo=false
          selectProvincias.classList.remove ('border-red')
          selectProvincias.classList.remove ('border-green')
      }
      errorDivergente= select.value 
    });

    selectProvincias.addEventListener('change',
    function(){
      var select = this.options[selectProvincias.selectedIndex];
      if (select.value!='selecciones un elemento'){
        campoDos= true
        if(campoDos===true){
            selectComuna.addEventListener('change',
            function(){
                var select = this.options[selectComuna.selectedIndex];
                if (select.value!='selecciones un elemento'){
                    selectComuna.classList.remove ('border-red')
                    selectComuna.classList.add ('border-green')
                    
                } else {
                    selectComuna.classList.add ('border-red')
                    selectComuna.classList.remove ('border-green')
                    errorMensaje('Comuna es obligatorio')
                    const errores = document.querySelectorAll('.error') 
                    if (errores.length<1){
                        form.appendChild(mensajeError);
                    }
                }

            });
      } 
    }
    else {
        campoDos= false
      }
      
    });