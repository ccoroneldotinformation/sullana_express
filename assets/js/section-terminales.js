$(document).ready(function (event) {
    // *********** arreglo para las ciudades
    const ciudad = [
        { id: 'sullana', mayuscula: 'SULLANA', titulo: 'Sullana' },
        { id: 'piura', mayuscula: 'PIURA', titulo: 'Piura' },
        { id: 'lima', mayuscula: 'LIMA', titulo: 'Lima' },
        { id: 'las-lomas', mayuscula: 'LAS LOMAS', titulo: 'Las Lomas' },
        {
            id: 'tambo-grande',
            mayuscula: 'TAMBO GRANDE',
            titulo: 'Tambo Grande',
        },
        { id: 'bajo-piura', mayuscula: 'BAJO PIURA', titulo: 'Bajo Piura' },
    ]

    // ************** arreglo para los terminales u oficinas
    const ubicaciones = [
        {
            ciudad: 'sullana',
            cardTitle: 'Sullana',
            cardSubTitle:
                '<span>Av. Panamericana 1223</span><br>Terminal la Perla del Chira.',
            cardText:
                '<span>Telf:</span> 073 215083<br><span>Cel:</span> 992915388',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.167977766085!2d-80.69920258523685!3d-4.911542896434008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTQnNDEuNiJTIDgwwrA0MSc0OS4zIlc!5e0!3m2!1ses!2spe!4v1621496473868!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'sullana',
            cardTitle: 'Sullana',
            cardSubTitle:
                '<span>Av. Loreto 1254 Centro Piura</span><br>Terminal Antiguo.',
            cardText: '<span>Cel:</span> 989323147',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3991350644724!2d-80.63335328523564!3d-5.199791396226969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTEnNTkuMyJTIDgwwrAzNyc1Mi4yIlc!5e0!3m2!1ses!2spe!4v1621496916419!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'tambo-grande',
            cardTitle: 'Tambo Grande',
            cardSubTitle: 'Terminal Terrestre Tambo Grande.',
            cardText:
                '<span>Telf:</span> 073 215083<br><span>Cel:</span> 987966351',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.5663460802857!2d-80.3384236335464!3d-4.91745773663025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTUnMDIuMyJTIDgwwrAyMCcxNC45Ilc!5e0!3m2!1ses!2spe!4v1621497462692!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'piura',
            cardTitle: 'Piura',
            cardSubTitle:
                '<span>Av. Loreto Sur 1254</span><br>Costado del Ovalo Bolognesi.',
            cardText:
                '<span>Telf:</span> 073 331437<br><span>Cel:</span> 989323142',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.3991350644724!2d-80.63335328523564!3d-5.199791396226969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTEnNTkuMyJTIDgwwrAzNyc1Mi4yIlc!5e0!3m2!1ses!2spe!4v1621496916419!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'bajo-piura',
            cardTitle: 'Sechura',
            cardSubTitle:
                '<span>Av. Bayovar con calle Restauración</span><br>Frente al semáforo del cementerio Sechura.',
            cardText: '',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.055339654924!2d-80.82104398523406!3d-5.558816395969611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzMnMzEuNyJTIDgwwrA0OScwNy45Ilc!5e0!3m2!1ses!2spe!4v1621498681920!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'bajo-piura',
            cardTitle: 'La Unión',
            cardSubTitle: '<span>Av. Lima N° 349</span><br>',
            cardText: '<span>Telf:</span> 073 374096',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.0823041850235!2d-80.74672608523476!3d-5.404432796080215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjQnMTYuMCJTIDgwwrA0NCc0MC4zIlc!5e0!3m2!1ses!2spe!4v1621498866924!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'bajo-piura',
            cardTitle: 'Catacaos',
            cardSubTitle: '<span>Av. Francisco Bolognesi 302</span><br>',
            cardText: '<span>Telf:</span> 073 410415',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.960543673513!2d-80.67504788523534!3d-5.268830796177449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMTYnMDcuOCJTIDgwwrA0MCcyMi4zIlc!5e0!3m2!1ses!2spe!4v1621499074893!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'bajo-piura',
            cardTitle: 'La Arena',
            cardSubTitle: '<span>Av. El Comercio s/n</span><br>',
            cardText: '<span>Telf:</span> 073 373147',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4430280205183!2d-80.71560578523497!3d-5.3491510961198445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjAnNTYuOSJTIDgwwrA0Mic0OC4zIlc!5e0!3m2!1ses!2spe!4v1621499230649!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'bajo-piura',
            cardTitle: 'Chato Grande',
            cardSubTitle: '<span>Av. El Ejército s/n</span><br>',
            cardText: '<span>Telf:</span> 989323144',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2998522016123!2d-80.61756038523488!3d-5.371160996104055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMjInMTYuMiJTIDgwwrAzNic1NS4zIlc!5e0!3m2!1ses!2spe!4v1621499405713!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'lima',
            cardTitle: 'Puente Piedra',
            cardSubTitle:
                '<span>Av. Leoncio Prado N° 640</span><br>Cruce de Ventanilla - Frente al grifo Vipusa',
            cardText: '',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.907298142346!2d-77.10442258518945!3d-11.841762491604056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUwJzMwLjMiUyA3N8KwMDYnMDguMCJX!5e0!3m2!1ses!2spe!4v1621499725402!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'lima',
            cardTitle: 'Terminal Plaza Norte',
            cardSubTitle:
                '<span>Stand N° 117</span><br>Frente a la entrada de embarque.',
            cardText: '<span>Telf:</span> 01 5332595',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.55354004202!2d-77.05709818599031!3d-12.005364008516652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzE5LjEiUyA3N8KwMDMnMTkuMyJX!5e0!3m2!1ses!2spe!4v1621500172778!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'lima',
            cardTitle: 'Lima Centro',
            cardSubTitle:
                '<span>Av. Luna Pizarro N° 496</span><br>Cruce con avenida Bauzate y Meza (a 2 cuadras de la plaza Manco Cápac).',
            cardText: '<span>Telf:</span> 01 4915211',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3901.7338357016824!2d-77.0295615196228!3d-12.061825399707956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8be0cae7841%3A0x53972c322c82080!2sJavier%20Luna%20Pizarro%20%26%20Jir%C3%B3n%20Garc%C3%ADa%20Naranjo%2C%20La%20Victoria%2015033!5e0!3m2!1ses!2spe!4v1621500413652!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
        {
            ciudad: 'las-lomas',
            cardTitle: 'Las Lomas',
            cardSubTitle:
                '<span>Av. Panamericana - A.A.H.H. Santa Rosa</span><br>Frente a la comisaría Camisea - Las Lomas.',
            cardText: '',
            iFrame: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6193917270703!2d-80.24669548523775!3d-4.661763196613728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzknNDIuNCJTIDgwwrAxNCc0MC4yIlc!5e0!3m2!1ses!2spe!4v1621500826922!5m2!1ses!2spe" class="w-100 h-100" allowfullscreen="" loading="lazy"></iframe>',
        },
    ]

    ciudad.forEach((item) => {
        $('.section-terminales .cards')[0].append(getCiudad(item))
    })

    $('.section-terminales .card-img-overlay').click(function (event) {
        // console.log('EVENTO')
        // console.log(event.target)
        if (!(event.target.id == 'undefined' || event.target.id == '')) {
            let address = []
            const idCiudad = event.target.id

            // console.log('idCiudad: ' + idCiudad)
            let indexCiudad = -1
            for (let index = 0; index < ciudad.length; index++) {
                if (ciudad[index].id == idCiudad) indexCiudad = index
            }

            // console.log('indiceCiudad: ' + indexCiudad)
            for (let index = 0; index < ubicaciones.length; index++) {
                if (ubicaciones[index].ciudad == idCiudad) {
                    address.push(ubicaciones[index])
                }
            }

            // console.log(ciudad[indexCiudad])
            // console.log(address)

            $('.section-ubication .row-location b')[0].innerHTML =
                ciudad[indexCiudad].mayuscula
            const nodeReference = $('.section-ubication .row-buttons')[0]
            let parentNode = $('.section-ubication .container')[0]

            for (let index = 0; index < address.length; index++) {
                const newNodo = getAddress(address[index])
                parentNode.insertBefore(newNodo, nodeReference)
            }

            // ********************************************
            $('.section-ubication').removeClass('d-none')
            $('.section-terminales').addClass('d-none')
        }
    })
    $('.section-ubication .btn-return').click(function (event) {
        $('.section-ubication .row-address').remove()
        $('.section-ubication').addClass('d-none')
        $('.section-terminales').removeClass('d-none')
    })
    $('.section-terminales .cards .card-img-overlay img').click(function (
        event
    ) {
        event.preventDefault()
        let targetId = event.target.parentNode.id
        let identificador = '.section-terminales #' + targetId
        // console.log(identificador)
        $(identificador).click()
    })
})

function getCiudad(ciudad) {
    const urlCiudad = 'assets/img/terminales/terminal-' + ciudad.id + '.jpg'
    return $(
        '<div class="col-xs-12 col-sm-6 col-md-4 my-1">' +
            '<div class="card">' +
            '<img src="' +
            urlCiudad +
            '" class="card-img-top" alt="' +
            ciudad.titulo +
            '">' +
            '<div id="' +
            ciudad.id +
            '" class="card-img-overlay">' +
            '<img src="assets/img/terminales_icono_tienda_blanco.svg" class="img-fluid w-50 h-50">' +
            '</div>' +
            '<div class="card-body text-center">' +
            '<p class="card-text text-secondary">' +
            ciudad.titulo +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>'
    )[0]
}

function getAddress(terminal) {
    return $(
        '<div class="row row-address my-4">' +
            '<div class="col-md-6 col-legend">' +
            '<div class="card border-0">' +
            '<div class="card-body">' +
            '<h5 class="card-title">' +
            terminal.cardTitle +
            '</h5>' +
            '<h6 class="card-subtitle mb-2 text-muted">' +
            terminal.cardSubTitle +
            '</h6>' +
            '<p class="card-text">' +
            terminal.cardText +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6 col-map">' +
            '<div class="card h-100 location-map overflow-hidden border-0">' +
            '<div class="card-body p-0">' +
            terminal.iFrame +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>'
    )[0]
}
