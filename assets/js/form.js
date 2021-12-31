//CONSUMO DE LA API DE FORMA PRIMITIVA

//CONSUMO DE LA API DE FORMA PRIMITIVA
//tabla general de regiones
$('#regiones').append(function(){
    $.ajax({
        type:"GET",
        url:"https://apis.digital.gob.cl/dpa/regiones",
        success: function(data){
            data.forEach(e => {
                $('#regiones').append($('<option>', {
                    value: e.codigo,
                    text: e.nombre
                }))
            });
        }
    })
});

$(document).on('change','#regiones', function() {
    limpiarComuna();
    limpiarInfoRegion();
});
//mostrar info segun el option de region
$(document).on('change','#regiones', function() {
    var idRegion= $('#regiones :selected').val();
    limpiarComuna()
    $("#comuna").addClass("d-none");
    if(idRegio=!null){
        $.ajax({
            type:"GET",
            url:`https://apis.digital.gob.cl/dpa/provincias`,
            success: function(data){
                limpiarProvincias()
                $('#provincias').append($('<option>', {
                    
                    text: 'selecciones un elemento'
                }))
                data.forEach(e => {
                    if (idRegion===e.codigo_padre) {
                        $('.provincias-div').even().removeClass('d-none');
                        $('#provincias').even().removeClass('d-none');
                        $('#provincias').append($('<option>', {
                            value: e.codigo,
                            text: e.nombre
                        }))                    
                    }
                });       
            }
        })
    } 
});

//mostrar info segun el option de region
$(document).on('change','#provincias', function() {
    var idProvincia= $('#provincias :selected').val();
    console.log('codigosssss:' + idProvincia);
    console.log(pagos)
    if(idRegio=!null){
        $.ajax({
            type:"GET",
            url:"https://apis.digital.gob.cl/dpa/comunas",
            success: function(data){
                limpiarComuna();
                $('#comuna').append($('<option>', {
                    text: 'selecciones un elemento'
                })) 
                data.forEach(e => {
                    if (idProvincia===e.codigo_padre) {
                        console.log("fgdfgfd", idProvincia, e.codigo_padre )
                        $('.comuna-div').even().removeClass('d-none');
                        $('#comuna').even().removeClass('d-none');
                        $('#comuna').append($('<option>', {
                            value: e.codigo,
                            text: e.nombre
                        }))                    
                    }
                }); 
            }
        });
    }
});
function limpiarComuna() {
    $('#comuna').empty()
}

function limpiarInfoRegion() {
    $('#region').empty();
}

function limpiarProvincias() {
    $('#provincias').empty()
}