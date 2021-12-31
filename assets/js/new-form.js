const formulario = document.getElementById('formulario');
const selectPrincipal = document.getElementById('regiones');
const selectSecundario = document.getElementById('provincias');
const selecttres = document.getElementById('comunas');
const boton = document.getElementById('btnSubmit');

selectPrincipal.addEventListener('change', function(){
    if(selectPrincipal.value == 'si') {
        selectSecundario.disabled = false;
        selectSecundario.required = true;
    } else {
        selectSecundario.disabled = true;
        selectSecundario.required = false;
    }
});

formulario.addEventListener('submit', function(e){
  alert('formulario enviado');
});

boton.addEventListener('click',() => {
  if (!formulario.checkValidity()) {
    alert('El formulario no es válido, no se hará submit');
    selectSecundario.classList.add ('border-green')
  }
});