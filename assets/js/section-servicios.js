$(document).ready(function (event) {
    $('#openGallery').click(function (event) {
        $('.section-gallery').removeClass('d-none')
        $('.section-servicio').addClass('d-none')
    })
    $('#closeGallery').click(function (event) {
        $('.section-gallery').addClass('d-none')
        $('.section-servicio').removeClass('d-none')
    })
})
