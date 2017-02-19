var arrayHabs = [];

function obtenerID(x) {
    var row = x.parentElement.parentElement.parentElement.parentElement.rowIndex;
    var id = document.getElementById("conjHab").rows[row].cells[0].innerHTML;

    if (x.checked) {
        arrayHabs.push(id.trim());
    } else {
        arrayHabs.splice(arrayHabs.indexOf(id), 1);
    }
    
    console.log(arrayHabs);
    
    console.log(arrayHabs.length);
    if (arrayHabs.length == 0) {
        $('#nextStep').prop("disabled", true);
    } else {
        $('#nextStep').prop("disabled", false);
    }

    //document.getElementById("hab").setAttribute('value', id.trim());
}

$(document).ready(function (e) {



    var oTable = $('#conjHab').DataTable({
        columns: [
            {
                data: "id_habitacion"
            },
            {
                data: "piso"
            },
            {
                data: "tipo"
            },
            {
                data: "desayuno"
            },
            {
                data: "wifi"
            },
            {
                data: "buena_vista"
            },
            {
                data: "precio"
            },
            {
                data: "seleccionar"
            }
  ],
        "columnDefs": [
            {
                "className": "dt-center",
                "targets": "_all"
            }
      ],
    });

    $('#buscarHab').click(function (e) {
        e.preventDefault();
        $.ajax({
            url: '/Habitacion/Buscar/',
            type: "post",
            data: {
                maxPrice: document.forms['CritSearch']['maxPrice'].value,
                fechaIngreso: document.forms['CritSearch']['fechaIngreso'].value,
                fechaSalida: document.forms['CritSearch']['fechaSalida'].value,
                roomType: document.forms['CritSearch']['roomType'].value
            },
            error: function (msg) {
                alert(msg);
                console.log(msg);
                return msg;
            },
            success: function (data, textStatus, jqXHR) {
                oTable.clear();
                if (data && data.length > 0) {
                    $.each(data, function (index, item) {
                        var desayuno;
                        var wifi;
                        var buena_vista;

                        if (item.desayuno == 1) {
                            desayuno = 'Incluido';
                        } else {
                            desayuno = 'No incluido';
                        }

                        if (item.wifi == 1) {
                            wifi = 'Sí';
                        } else {
                            wifi = 'No';
                        }

                        if (item.buena_vista == 1) {
                            buena_vista = 'Sí';
                        } else {
                            buena_vista = 'No';
                        }

                        var final = {
                            id_habitacion: item.id_habitacion,
                            piso: item.piso,
                            tipo: item.tipo,
                            desayuno: desayuno,
                            wifi: wifi,
                            buena_vista: buena_vista,
                            precio: item.precio,
                            seleccionar: '<div class="checkbox"><label><input type="checkbox" onclick="obtenerID(this);"></label></div>'
                        }

                        oTable.row.add(final).draw();
                    });
                } else {
                    oTable.clear().draw();
                    $('#nextStep').prop("disabled", true);
                }
            }
        });
    });



    var dTable = $('#conjDat').DataTable({
        columns: [
            {
                data: "nombres"
            },
            {
                data: "apellidos"
            },
            {
                data: "cedula"
            },
            {
                data: "email"
            },
            {
                data: "direccion"
            },
            {
                data: "telefono"
            }
  ],
        "columnDefs": [
            {
                "className": "dt-center",
                "targets": "_all"
            }
      ],
    });

    $('#cargarCli').click(function (e) {
        e.preventDefault();

        var cliente = {
            nombres: document.forms['DatPers']['nombres'].value,
            apellidos: document.forms['DatPers']['apellidos'].value,
            cedula: document.forms['DatPers']['cedula'].value,
            email: document.forms['DatPers']['email'].value,
            direccion: document.forms['DatPers']['direccion'].value,
            telefono: document.forms['DatPers']['telefono'].value,
        }

        dTable.row.add(cliente).draw();
        $('#limpiarCli').click();

        if (dTable.data().count()) {
            $('#nextStep').prop("disabled", false);
        }
    });

});