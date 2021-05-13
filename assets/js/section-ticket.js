const break_point_md = 768
let ancho_ventana = 0
// let section_ticket_parent = null
let superior_a_md = true

$(document).ready(function (event) {
    ancho_ventana = $(window)[0].innerWidth
    superior_a_md = ancho_ventana < 768 ? false : true
    // ancho_ventana_inicial = ancho_ventana

    setPositionSectionTicket(superior_a_md)

    const radioConRetorno = $('#radioConRetorno')
    const radioSinRetorno = $('#radioSinRetorno')
    showFormFechaVuelta(true)
    radioConRetorno.change(function (event) {
        showFormFechaVuelta(true)
    })
    radioSinRetorno.change(function (event) {
        showFormFechaVuelta(false)
    })
})

function showFormFechaVuelta(show) {
    // console.log(window.innerWidth)
    let labels = document.querySelectorAll(
        '.section-ticket>.row:nth-child(2)>*'
    )
    let inputs = document.querySelectorAll(
        '.section-ticket>.row:nth-child(3)>*'
    )
    let count = 0
    if (show) {
        // console.log(ancho_ventana)
        if (labels[2].classList.contains('d-none')) {
            labels[2].classList.toggle('d-none')
            inputs[2].classList.toggle('d-none')
        }

        if (!(ancho_ventana < break_point_md)) {
            for (i = 0; i < labels.length; i++) {
                // console.log(labels[i])
                if (i == 0) {
                    labels[i].style.width = '30%'
                    inputs[i].style.width = '30%'
                } else {
                    labels[i].style.width = '18%'
                    inputs[i].style.width = '18%'
                    if (i == 4) {
                        labels[i].style.width = '16%'
                        inputs[i].style.width = '16%'
                    }
                }
            }
        }
        // else {
        //     labels.removeAttr('style')
        //     inputs.removeAttr('style')
        // }
    } else {
        if (!labels[2].classList.contains('d-none')) {
            labels[2].classList.toggle('d-none')
            inputs[2].classList.toggle('d-none')
        }
        if (!(ancho_ventana < break_point_md)) {
            for (i = 0; i < labels.length; i++) {
                // console.log(labels[i])
                if (i == 0) {
                    labels[i].style.width = '30%'
                    inputs[i].style.width = '30%'
                } else {
                    labels[i].style.width = '26%'
                    inputs[i].style.width = '26%'
                    if (i == 4) {
                        labels[i].style.width = '18%'
                        inputs[i].style.width = '18%'
                    }
                }
            }
        }
        // else {
        //     labels.removeAttr('style')
        //     inputs.removeAttr('style')
        // }
    }
}

function clearStyleInPositionRelative() {
    let labels = document.querySelectorAll(
        '.section-ticket>.row:nth-child(2)>*'
    )
    let inputs = document.querySelectorAll(
        '.section-ticket>.row:nth-child(3)>*'
    )

    if (ancho_ventana < break_point_md) {
        for (i = 0; i < labels.length; i++) {
            // console.log(labels[i])
            labels[i].removeAttribute('style')
            inputs[i].removeAttribute('style')
        }
    }
}

function setPositionSectionTicket(position) {
    let section_ticket_parent = $('.section-slide .card-img-overlay')
    if (!position) {
        section_ticket_parent.addClass('position-relative')
        clearStyleInPositionRelative()
    } else {
        section_ticket_parent.removeClass('position-relative')
    }
}

$(window).resize(function (event) {
    ancho_ventana = $(this)[0].innerWidth
    let variacion = ancho_ventana - break_point_md
    if (variacion >= 0 && superior_a_md == false) {
        superior_a_md = true
        setPositionSectionTicket(superior_a_md)
        showFormFechaVuelta($('#radioConRetorno').is(':checked'))
    }
    if (variacion < 0 && superior_a_md == true) {
        superior_a_md = false
        setPositionSectionTicket(superior_a_md)
        showFormFechaVuelta($('#radioConRetorno').is(':checked'))
    }
})
