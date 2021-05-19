$(document).ready(function (event) {
    // conjunto de imagenes para todas las galerias
    let images = [
        { servicio: 'black', nombre: 'black-1', tipo: 'jpg' },
        { servicio: 'black', nombre: 'black-2', tipo: 'jpg' },
        { servicio: 'black', nombre: 'black-3', tipo: 'jpg' },
        { servicio: 'black', nombre: 'black-4', tipo: 'jpg' },
        { servicio: 'black', nombre: 'black-5', tipo: 'jpg' },
        { servicio: 'imperial', nombre: 'imperial-1', tipo: 'jpg' },
        { servicio: 'imperial', nombre: 'imperial-2', tipo: 'jpg' },
        { servicio: 'imperial', nombre: 'imperial-3', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-1', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-2', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-3', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-4', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-5', tipo: 'jpg' },
        { servicio: 'plus', nombre: 'plus-6', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-1', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-2', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-3', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-4', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-5', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-6', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-7', tipo: 'jpg' },
        { servicio: 'suite', nombre: 'suite-8', tipo: 'jpg' },
    ]

    $('.openGallery').click(function (event) {
        let target = event.target.id
        let carriers = []
        $.each(images, function (index, value) {
            if (value.servicio == target) {
                carriers.push(value)
            }
        })

        const n = carriers.length

        let content_images = $('.section-gallery .content-images')
        content_images[0].innerHTML = ''
        $.each(carriers, function (index, value) {
            content_images[0].innerHTML +=
                '<div class="box-image"><div class="card border-0">' +
                '<img src="assets/img/servicios/' +
                value.nombre +
                '.' +
                value.tipo +
                '" class="" alt="">' +
                '</div></div>'
        })

        content_images.css('width', 'calc(33.3% * ' + n)
        $('.section-gallery .box-image').css('width', 'calc(100% / ' + n)

        // if (n <= 3) {
        //     $('.section-gallery .row-carriers .arrow').css('display', 'none')
        // } else {
        //     $('.section-gallery .row-carriers .arrow-right').addClass('d-flex')
        //     $('.section-gallery .row-carriers .arrow-left').addClass('d-none')
        // }

        $('.section-gallery').removeClass('d-none')
        $('.section-servicio').addClass('d-none')
    })
    $('.closeGallery').click(function (event) {
        $('.section-gallery').addClass('d-none')
        $('.section-servicio').removeClass('d-none')
    })

    $('.arrow').click(function (event) {
        let idSide = event.target.id
    })
})

// section-gallery
