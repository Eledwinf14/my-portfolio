'use strict'

$(document).ready(function () {
    $('body').on({
        'mousemove': function (e) {
            console.clear()
            let clientX = e.originalEvent.clientX;
            let clientY = e.originalEvent.clientY;
            $('#cursor').css({
                'left': (clientX - 40) + 'px',
                'top': (clientY - 40) + 'px'
            })
        }
    })
    $('.a').on({
        'mouseover': function () {
            $('#cursor').addclass('mini')
        },
        'mouseout': function () {
            $('#cursor').removeclass('mini')
        },
    })
})

function descargarPDF() {
  var url = "/ruta/al/archivo/archivo.pdf";
  var nombreArchivo = "archivo.pdf";
  var link = document.createElement("a");
  link.download = nombreArchivo;
  link.href = url;
  link.click();
}
