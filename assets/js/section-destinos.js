// $(document).ready(function (event) {
//     $(window).on('scroll', function () {
//         const up = $(this).scrollTop()
//         const down = up + $(this).height
//         cajas_left = $('.section-destinos .row-targets .container.ml-md-0')
//         cajas_right = $('.section-destinos .row-targets .container.mr-md-0')

// console.log('medida:' + cajas_left.offset().top)

// console.log(
//     'up:' + up + ', down:' + down + ', bottom_box:' + position_box
// )

// $.each(cajas_left, function (index, value) {
//     let position_box = value.offsetBottom()

//     if (up < position_box && position_box < down) {
//         if (!value.classList.contains('toRight'))
//             value.classList.add('toRight')
//     } else {
//         if (value.classList.contains('toRight'))
//             value.classList.remove('toRight')
//     }
// })
//     })
// })
