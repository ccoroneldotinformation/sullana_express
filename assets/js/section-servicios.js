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

    let current_index_image_center = -1
    let carriers_lenght = 0
    let carriers = []
    let content_images = $('.section-gallery .content-images')

    $('.openGallery').click(function (event) {
        // ubicamos nombre del servicio
        let idServicio = event.target.id

        // ponemos la imagen del servicio
        $('.section-gallery .row-service img').attr(
            'src',
            'assets/img/servicios/servicio-' + idServicio + '-1.svg'
        )

        // separamos los items que corresponden a los servicios
        $.each(images, function (index, value) {
            if (value.servicio == idServicio) {
                carriers.push(value)
            }
        })

        const break_point_md = 768
        if ($(window)[0].innerWidth >= break_point_md) {
            // aniadimos solo 3 imagenes del servicio seleccionado
            carriers_lenght = carriers.length
            content_images[0].innerHTML = ''
            for (let index = 0; index < 3; index++) {
                content_images[0].append(boxImage(carriers, index))
            }

            current_index_image_center = 1
            content_images.css('width', '100%')
            $('.section-gallery .box-image').css('width', '33.33%')
        } else {
            carriers_lenght = carriers.length
            content_images.empty()
            content_images = $('.section-gallery .row-carriers')
            content_images[0].innerHTML = ''
            for (let index = 0; index < carriers_lenght; index++) {
                content_images[0].append(boxImage(carriers, index))
            }

            $('.section-gallery .contenedor').addClass('container')
            $('.section-gallery .row-content').addClass('row')
            $('.section-gallery .row-service').addClass([
                'd-flex',
                'justify-content-center',
                'align-items-center',
            ])
            $('.section-gallery .box-image').addClass([
                'col-xs-12',
                'col-sm-6',
                'my-4',
            ])
            $('.section-gallery .box-image img').addClass([
                'img-fluid',
                'rounded',
            ])
            $('.section-gallery .row-buttons').addClass([
                'd-flex',
                'justify-content-center',
                'align-items-center',
            ])
            $('.section-gallery .row-buttons button').addClass('w-50')
        }

        $('.section-gallery').removeClass('d-none')
        $('.section-servicio').addClass('d-none')
    })

    $('.closeGallery').click(function (event) {
        $('.section-gallery').addClass('d-none')
        $('.section-servicio').removeClass('d-none')
    })

    if ($(window)[0].innerWidth >= break_point_md) {
        $('.arrow').click(function (event) {
            let idSide = event.target.id
            let preview_index_image =
                (carriers_lenght + current_index_image_center - 2) %
                carriers_lenght
            let next_index_image =
                (current_index_image_center + 2) % carriers_lenght
            if (idSide == 'arrow-left') {
                let box_card = boxImage(carriers, preview_index_image)
                box_card.style.width = '33.33%'
                box_card.style.marginLeft = '-33.33%'
                content_images[0].prepend(box_card)
                let box_image = $('.section-gallery .box-image')
                box_image.addClass('animation-toRight')
                setTimeout(function (e) {
                    content_images[0].removeChild(box_image[3])
                    box_image = $('.section-gallery .box-image')
                    box_image.css('margin-left', '0%')
                    box_image.removeClass('animation-toRight')
                }, 800)
                current_index_image_center--
                current_index_image_center =
                    (carriers_lenght + current_index_image_center) %
                    carriers_lenght
            }
            if (idSide == 'arrow-right') {
                let box_card = boxImage(carriers, next_index_image)
                box_card.style.width = '33.33%'
                box_card.style.marginLeft = '0%'
                box_card.style.marginRight = '-33.33%'
                content_images[0].append(box_card)
                let box_image = $('.section-gallery .box-image')
                box_image.addClass('animation-toLeft')
                setTimeout(function (e) {
                    content_images[0].removeChild(box_image[0])
                    box_image = $('.section-gallery .box-image')
                    box_image.css('margin-right', '0%')
                    box_image.removeClass('animation-toLeft')
                }, 800)
                current_index_image_center++
                current_index_image_center =
                    current_index_image_center % carriers_lenght
            }
            // console.log(current_index_image_center)
        })

        $('.icon-row').click(function (event) {
            console.log(event.target.parentNode)
            event.target.parentNode.click()
        })
    }
})

function boxImage(carriers, index_carrier) {
    let carrier = carriers[index_carrier]
    return $(
        '<div class="box-image"><div class="card border-0">' +
            '<img src="assets/img/servicios/' +
            carrier.nombre +
            '.' +
            carrier.tipo +
            '" class="image-gallery" alt=""></div></div>'
    )[0]
}
