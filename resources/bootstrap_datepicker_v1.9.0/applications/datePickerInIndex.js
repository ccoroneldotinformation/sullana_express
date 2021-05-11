$('.datepicker').datepicker({
    language: 'es',
    todayBtn: 'linked',
    todayHighlight: true,
    autoclose: true,
    startDate: '+0d',
})
$fechaIda = $('#fechaIda')
$fechaVuelta = $('#fechaVuelta')
$fechaIda.datepicker().on('changeDate', function (e) {
    $fechaVuelta.datepicker('setStartDate', e.date)
})

$('.section-ticket .inputs .input-append.date').on('click', function () {
    $(this).find('input')[0].focus()
})
