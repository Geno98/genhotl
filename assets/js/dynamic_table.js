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
                            seleccionar: '<div class="checkbox"><label><input type="checkbox" value=""></label></div>'
                        }

                        oTable.row.add(final).draw();
                    });
                } else {
                    oTable.clear();
                }
            }
        });
    });

});