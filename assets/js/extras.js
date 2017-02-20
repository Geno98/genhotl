$('a[data-toggle="tab"]').on('click', function () {
    if ($(this).parent('li').hasClass('disabled')) {
        return false;
    }
});

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

function outLimit() {
    var limit = document.getElementById("ingreso").value;
    document.getElementById("salida").valueAsDate = null;
    document.getElementById("salida").setAttribute("min", limit);
}