$(document).ready(function () {
    $('#select2Origen').select2({
        placeholder: 'Desde',
        theme: 'bootstrap4',
    })
    $('#select2Destino').select2({
        placeholder: 'Hasta',
        theme: 'bootstrap4',
    })
    let select2Destino__arrow = $(
        '#select2-select2Destino-container + .select2-selection__arrow'
    )[0]
    select2Destino__arrow.innerHTML = '<i class="fas fa-bus"></i>'
    select2Destino__arrow.style.top = '20%'
    // console.log(select2Destino__arrow)
})
