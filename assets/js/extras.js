$('a[data-toggle="tab"]').on('click', function () {
    if ($(this).parent('li').hasClass('disabled')) {
        return false;
    }
});

function obtenerID(x) {
    var row = x.parentElement.parentElement.parentElement.parentElement.rowIndex;
    var id = document.getElementById("conjHab").rows[row].cells[0].innerHTML;

    document.getElementById("hab").setAttribute('value', id.trim());
}

function alphaOnly(event) {
    var key = event.keyCode;
    return ((key >= 65 && key <= 90) || key == 8 || key == 32);
}

function numberOnly(event) {
    var key = event.keyCode;
    return ((key >= 48 && key <= 57) || (key >= 95 && key <= 122) || key == 8);
}

window.onload = function () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("ingreso").setAttribute("min", today);
    document.getElementById("salida").setAttribute("min", today);
}

function enablePeople() {
    document.getElementById("people").removeAttribute("disabled");
}

function disablePeople() {
    if (!document.getElementById("people").hasAttribute("disabled")) {
        document.getElementById("people").setAttribute("disabled", "true");
        document.getElementById("people").setAttribute("value", "0");
    }
}