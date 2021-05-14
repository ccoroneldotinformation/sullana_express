$(document).ready(function (event) {
    $('.section-terminales .card-img-overlay').click(function (event) {
        $('.section-ubication').removeClass('d-none')
        $('.section-terminales').addClass('d-none')
    })
    $('.section-ubication .btn-return').click(function (event) {
        $('.section-ubication').addClass('d-none')
        $('.section-terminales').removeClass('d-none')
    })
})
