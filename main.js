$(document).ready(function () {
    $('#BotonVentana').click(function () {
        Swal.fire({
            title:'<h1>Cupón reclamado</h1>',
            icon:'info',
            html:'Muestra el codigo en caja <strong>CAFE-PA4-ISIL>',
            showCloseButton: true,
            confirmButtonText: 'Entendido',
            focusConfirm: false,
            showCancelButton: true,
            cancelButtonText: 'Cerrar'
        });
    });
});
