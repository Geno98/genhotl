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

var dTable = $('#conjDat').DataTable({
    columns: [
        {
            data: "habitacion"
            },
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
            },
        {
            data: "editar"
            },
        {
            data: "eliminar"
            }
  ],
    "columnDefs": [
        {
            "className": "dt-center",
            "targets": "_all"
            }
      ],
});

var oTableFinal = $('#conjHabFinal').DataTable({
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
            }
  ],
    "columnDefs": [
        {
            "className": "dt-center",
            "targets": "_all"
            }
      ],
});

var dTableFinal = $('#conjDatFinal').DataTable({
    columns: [
        {
            data: "habitacion"
            },
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

var rTableFinal = $('#conjResFinal').DataTable({
    columns: [
        {
            data: "fecha_ingreso"
            },
        {
            data: "fecha_salida"
            },
        {
            data: "num_tarjeta"
            }
  ],
    "columnDefs": [
        {
            "className": "dt-center",
            "targets": "_all"
            }
      ],
});

var detOTableFinal = $('#detHabFinal').DataTable({
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
            }
  ],
    "columnDefs": [
        {
            "className": "dt-center",
            "targets": "_all"
            }
      ],
});

var detRTableFinal = $('#detResFinal').DataTable({
    columns: [
        {
            data: "fecha_ingreso"
            },
        {
            data: "fecha_salida"
            },
        {
            data: "num_tarjeta"
            },
        {
            data: "hab_reservada"
            }
  ],
    "columnDefs": [
        {
            "className": "dt-center",
            "targets": "_all"
            }
      ],
});

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
}

function editarCliente(x) {
    var row = x.parentElement.parentElement.rowIndex;
    var table = document.getElementById("conjDat").rows[row];

    $("#roomSel").val(table.cells[0].innerHTML);
    $('#noms').attr('value', table.cells[1].innerHTML);
    $('#apes').attr('value', table.cells[2].innerHTML);
    $('#ced').attr('value', table.cells[3].innerHTML);
    $('#mail').attr('value', table.cells[4].innerHTML);
    $('#dir').attr('value', table.cells[5].innerHTML);
    $('#tel').attr('value', table.cells[6].innerHTML);
    $('#id_cli').attr('value', row);

    $('#editarCliB').prop("disabled", false);
    $('#cargarCli').prop("disabled", true);
    $('#limpiarCli').prop("disabled", true);
}

function eliminarCliente(x) {
    var rowE = x.parentElement.parentElement.rowIndex;
    dTable.row(rowE - 1).remove().draw();

    if (!dTable.data().count()) {
        $('#cargarPago').prop("disabled", true);
    }
}

function check_cedula(cedula) {
    var cedula = cedula;
    array = cedula.split("");
    num = array.length;
    if (num == 10) {
        total = 0;
        digito = (array[9] * 1);
        for (i = 0; i < (num - 1); i++) {
            mult = 0;
            if ((i % 2) != 0) {
                total = total + (array[i] * 1);
            } else {
                mult = array[i] * 2;
                if (mult > 9)
                    total = total + (mult - 9);
                else
                    total = total + mult;
            }
        }
        decena = total / 10;
        decena = Math.floor(decena);
        decena = (decena + 1) * 10;
        final = (decena - total);
        if ((final == 10 && digito == 0) || (final == digito)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

var checkLuhn = function (cardNo) {
    var s = 0;
    var doubleDigit = false;
    for (var i = cardNo.length - 1; i >= 0; i--) {
        var digit = +cardNo[i];
        if (doubleDigit) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        s += digit;
        doubleDigit = !doubleDigit;
    }
    return s % 10 == 0;
}

var validateCardNo = function (no) {
    return (no && checkLuhn(no) &&
        no.length == 16 && (no[0] == 4 || no[0] == 5 && no[1] >= 1 && no[1] <= 5 ||
            (no.indexOf("6011") == 0 || no.indexOf("65") == 0)) ||
        no.length == 15 && (no.indexOf("34") == 0 || no.indexOf("37") == 0) ||
        no.length == 13 && no[0] == 4)
}

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        return (true);
    }
    return (false);
}

$(document).ready(function (e) {

    $('#buscarHab').click(function (e) {
        e.preventDefault();

        if (document.forms['CritSearch']['maxPrice'].value == '' || document.forms['CritSearch']['fechaIngreso'].value == '' || document.forms['CritSearch']['fechaSalida'].value == '' || document.forms['CritSearch']['roomType'].value == '') {
            alert('Debe llenar todos los campos')
        } else {
            var tipoH;
            if (document.forms['CritSearch']['roomType'].value == 'Cualquiera') {
                tipoH = '';
            } else {
                tipoH = document.forms['CritSearch']['roomType'].value;
            }

            $.ajax({
                url: '/Habitacion/Buscar/',
                type: "post",
                data: {
                    maxPrice: document.forms['CritSearch']['maxPrice'].value,
                    fechaIngreso: document.forms['CritSearch']['fechaIngreso'].value,
                    fechaSalida: document.forms['CritSearch']['fechaSalida'].value,
                    roomType: tipoH
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
        }
    });

    $('#cargarCli').click(function (e) {
        e.preventDefault();

        if (document.forms['DatPers']['nombres'].value == '' || document.forms['DatPers']['apellidos'].value == '' || document.forms['DatPers']['cedula'].value == '' || document.forms['DatPers']['email'].value == '' || document.forms['DatPers']['direccion'].value == '' || document.forms['DatPers']['telefono'].value == '') {
            alert('Debe llenar todos los campos.');
        } else if (!check_cedula(document.forms['DatPers']['cedula'].value)) {
            alert('La cédula no es válida.');
        } else if (!ValidateEmail(document.forms['DatPers']['email'].value)) {
            alert('El email no es válido.');
        } else {
            var cliente = {
                habitacion: document.forms['DatPers']['room'].value,
                nombres: document.forms['DatPers']['nombres'].value,
                apellidos: document.forms['DatPers']['apellidos'].value,
                cedula: document.forms['DatPers']['cedula'].value,
                email: document.forms['DatPers']['email'].value,
                direccion: document.forms['DatPers']['direccion'].value,
                telefono: document.forms['DatPers']['telefono'].value,
                editar: '<button class="btn btn-success btn-xs" id="editarCli" onclick="editarCliente(this);">Editar</button>',
                eliminar: '<button class="btn btn-danger btn-xs" id="eliminarCli" onclick="eliminarCliente(this);">Eliminar</button>'
            }

            dTable.row.add(cliente).draw();
            $('#limpiarCli').click();

            if (dTable.data().count()) {
                $('#cargarPago').prop("disabled", false);
            }
        }
    });

    $('#editarCliB').click(function (e) {
        e.preventDefault();

        if (document.forms['DatPers']['nombres'].value == '' || document.forms['DatPers']['apellidos'].value == '' || document.forms['DatPers']['cedula'].value == '' || document.forms['DatPers']['email'].value == '' || document.forms['DatPers']['direccion'].value == '' || document.forms['DatPers']['telefono'].value == '') {
            alert('Debe llenar todos los campos.');
        } else if (!check_cedula(document.forms['DatPers']['cedula'].value)) {
            alert('La cédula no es válida.');
        } else if (!ValidateEmail(document.forms['DatPers']['email'].value)) {
            alert('El email no es válido.');
        } else {
            var cliente = {
                habitacion: document.forms['DatPers']['room'].value,
                nombres: document.forms['DatPers']['nombres'].value,
                apellidos: document.forms['DatPers']['apellidos'].value,
                cedula: document.forms['DatPers']['cedula'].value,
                email: document.forms['DatPers']['email'].value,
                direccion: document.forms['DatPers']['direccion'].value,
                telefono: document.forms['DatPers']['telefono'].value,
                editar: '<button class="btn btn-success btn-xs" id="editarCli" onclick="editarCliente(this);">Editar</button>',
                eliminar: '<button class="btn btn-danger btn-xs" id="eliminarCli" onclick="eliminarCliente(this);">Eliminar</button>'
            }

            dTable.row(document.forms['DatPers']['id_cliente'].value - 1).data(cliente).draw();
            $('#editarCliB').prop("disabled", true);
            $('#cargarCli').prop("disabled", false);
            $('#limpiarCli').prop("disabled", false);

            $('#noms').attr('value', '');
            $('#apes').attr('value', '');
            $('#ced').attr('value', '');
            $('#mail').attr('value', '');
            $('#dir').attr('value', '');
            $('#tel').attr('value', '');
            $('#id_cli').attr('value', '');

            $('#limpiarCli').click();
        }
    });

    $('#cargarPago').click(function (e) {
        e.preventDefault();

        if (document.forms['PagoCli']['num_tarjeta'].value == '') {
            alert('Debe ingresar un número de tarjeta de crédito.');
        } else if (!validateCardNo(document.forms['PagoCli']['num_tarjeta'].value)) {
            alert('Su número de tarjeta de crédito no es válido.');
        } else {
            $('#tab_datos').removeClass('active');
            $('#tab_registro').removeClass('disabled');
            $('#tab_datos').addClass('disabled');
            $('#tab_registro').addClass('active');

            $('#datos').removeClass('in active');
            $('#registrar').addClass('in active');

            oTableFinal.clear();
            for (var i = 0; i < arrayHabs.length; i++) {
                $.ajax({
                    url: '/Habitacion/Seleccionadas/',
                    type: "post",
                    data: {
                        id_habitacion: arrayHabs[i]
                    },
                    error: function (msg) {
                        alert(msg);
                        console.log(msg);
                        return msg;
                    },
                    success: function (data, textStatus, jqXHR) {
                        if (data) {
                            var desayuno;
                            var wifi;
                            var buena_vista;

                            if (data.desayuno == 1) {
                                desayuno = 'Incluido';
                            } else {
                                desayuno = 'No incluido';
                            }

                            if (data.wifi == 1) {
                                wifi = 'Sí';
                            } else {
                                wifi = 'No';
                            }

                            if (data.buena_vista == 1) {
                                buena_vista = 'Sí';
                            } else {
                                buena_vista = 'No';
                            }

                            var final = {
                                id_habitacion: data.id_habitacion,
                                piso: data.piso,
                                tipo: data.tipo,
                                desayuno: desayuno,
                                wifi: wifi,
                                buena_vista: buena_vista,
                                precio: data.precio,
                            }
                            oTableFinal.row.add(final).draw();
                        }
                    }
                });
            }


            for (var i = 1; i <= dTable.data().count(); i++) {
                var tableCli = document.getElementById("conjDat").rows[i];
                var clienteFinal = {
                    habitacion: tableCli.cells[0].innerHTML,
                    nombres: tableCli.cells[1].innerHTML,
                    apellidos: tableCli.cells[2].innerHTML,
                    cedula: tableCli.cells[3].innerHTML,
                    email: tableCli.cells[4].innerHTML,
                    direccion: tableCli.cells[5].innerHTML,
                    telefono: tableCli.cells[6].innerHTML,
                }

                dTableFinal.row.add(clienteFinal).draw();
            }

            var reservaFinal = {
                fecha_ingreso: document.forms['CritSearch']['fechaIngreso'].value,
                fecha_salida: document.forms['CritSearch']['fechaSalida'].value,
                num_tarjeta: document.forms['PagoCli']['num_tarjeta'].value
            }

            rTableFinal.row.add(reservaFinal).draw();
        }
    });

    $('#nextStep').click(function (e) {
        //e.preventDefault();

        $('#tab_selec').removeClass('active');
        $('#tab_datos').removeClass('disabled');
        $('#tab_selec').addClass('disabled');
        $('#tab_datos').addClass('active');

        $('#seleccion').removeClass('in active');
        $('#datos').addClass('in active');

        var option = '';
        for (var i = 0; i < arrayHabs.length; i++) {
            option += '<option value="' + arrayHabs[i] + '">' + arrayHabs[i] + '</option>';
        }
        $('#roomSel').append(option);
    });
    
    $('#atrasPago').click(function (e) {
        //e.preventDefault();

        $('#tab_datos').removeClass('active');
        $('#tab_selec').removeClass('disabled');
        $('#tab_datos').addClass('disabled');
        $('#tab_selec').addClass('active');

        $('#datos').removeClass('in active');
        $('#seleccion').addClass('in active');

        $('#roomSel').empty();
    });

    $('#regRes').click(function (e) {
        e.preventDefault();

        var tableRes = document.getElementById('conjResFinal').rows[1];

        $.ajax({
            url: '/Reservacion/CrearReservacion/',
            type: "post",
            data: {
                fecha_ingreso: tableRes.cells[0].innerHTML,
                fecha_salida: tableRes.cells[1].innerHTML,
                num_tarjeta: tableRes.cells[2].innerHTML
            },
            error: function (msg) {
                alert(msg);
                console.log(msg);
                return msg;
            },
            success: function (data, textStatus, jqXHR) {
                if (data) {
                    for (var i = 1; i <= dTableFinal.data().count(); i++) {
                        var tableCli = document.getElementById("conjDatFinal").rows[i];

                        $.ajax({
                            url: '/Clientes/CrearCliente/',
                            type: "post",
                            data: {
                                id_reserva: data.id_reservacion,
                                id_habitacion: tableCli.cells[0].innerHTML,
                                nombres: tableCli.cells[1].innerHTML,
                                apellidos: tableCli.cells[2].innerHTML,
                                cedula: tableCli.cells[3].innerHTML,
                                email: tableCli.cells[4].innerHTML,
                                direccion: tableCli.cells[5].innerHTML,
                                telefono: tableCli.cells[6].innerHTML
                            },
                            error: function (msg) {
                                alert(msg);
                                console.log(msg);
                                return msg;
                            },
                            success: function (data, textStatus, jqXHR) {
                                if (data) {
                                    alert('Reservación Registrada Exitosamente');
                                }
                            }
                        });
                    }
                }
            }
        });
    });

    $('#buscarRes').click(function (e) {
        e.preventDefault();

        if (document.forms['DetSearch']['cedula'].value == '') {
            alert('Debe ingresar una cédula')
        } else if (!check_cedula(document.forms['DetSearch']['cedula'].value)) {
            alert('La cédula no es válida.');
        } else {
            $.ajax({
                url: '/Clientes/BuscarCliente/',
                type: "post",
                data: {
                    cedula: document.forms['DetSearch']['cedula'].value
                },
                error: function (msg) {
                    alert(msg);
                    console.log(msg);
                    return msg;
                },
                success: function (data, textStatus, jqXHR) {
                    detOTableFinal.clear();
                    detRTableFinal.clear();
                    console.log(data);
                    if (data) {
                        $.each(data, function (index, item) {
                            console.log(item);
                            $.ajax({
                                url: '/Habitacion/Seleccionadas/',
                                type: "post",
                                data: {
                                    id_habitacion: item.id_habitacion
                                },
                                error: function (msg) {
                                    alert(msg);
                                    console.log(msg);
                                    return msg;
                                },
                                success: function (data, textStatus, jqXHR) {
                                    if (data) {
                                        var desayuno;
                                        var wifi;
                                        var buena_vista;

                                        if (data.desayuno == 1) {
                                            desayuno = 'Incluido';
                                        } else {
                                            desayuno = 'No incluido';
                                        }

                                        if (data.wifi == 1) {
                                            wifi = 'Sí';
                                        } else {
                                            wifi = 'No';
                                        }

                                        if (data.buena_vista == 1) {
                                            buena_vista = 'Sí';
                                        } else {
                                            buena_vista = 'No';
                                        }

                                        var final = {
                                            id_habitacion: data.id_habitacion,
                                            piso: data.piso,
                                            tipo: data.tipo,
                                            desayuno: desayuno,
                                            wifi: wifi,
                                            buena_vista: buena_vista,
                                            precio: data.precio,
                                        }
                                        detOTableFinal.row.add(final).draw();
                                    }
                                }
                            });

                            $.ajax({
                                url: '/Reservacion/BuscarReservacion/',
                                type: "post",
                                data: {
                                    id_reservacion: item.id_reserva
                                },
                                error: function (msg) {
                                    alert(msg);
                                    console.log(msg);
                                    return msg;
                                },
                                success: function (data, textStatus, jqXHR) {
                                    if (data) {
                                        var final = {
                                            fecha_ingreso: data.fecha_ingreso.substr(0, 10),
                                            fecha_salida: data.fecha_salida.substr(0, 10),
                                            num_tarjeta: data.num_tarjeta,
                                            hab_reservada: item.id_habitacion
                                        }
                                        detRTableFinal.row.add(final).draw();
                                    }
                                }
                            });
                        });

                        $('#limpiarRes').click();
                    } else {
                        detOTableFinal.clear().draw();
                        detRTableFinal.clear().draw();
                    }
                }
            });
        }
    });
});