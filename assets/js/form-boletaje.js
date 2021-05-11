const radioConRetorno = document.querySelector('#radioConRetorno')
const radioSinRetorno = document.querySelector('#radioSinRetorno')

resizeDataFormPasajes(true)

radioConRetorno.addEventListener('change', function (event) {
    resizeDataFormPasajes(true)
})
radioSinRetorno.addEventListener('change', function (event) {
    resizeDataFormPasajes(false)
})

function resizeDataFormPasajes(resize) {
    let labels = document.querySelectorAll(
        '.section-ticket>.row:nth-child(2)>*'
    )
    let inputs = document.querySelectorAll(
        '.section-ticket>.row:nth-child(3)>*'
    )
    let count = 0
    if (resize) {
        // console.log(labels)
        for (i = 0; i < labels.length; i++) {
            // console.log(labels[i])
            if (i == 0) {
                labels[i].style.width = '30%'
                inputs[i].style.width = '30%'
            } else {
                if (i == 2) {
                    labels[i].classList.toggle('d-none')
                    inputs[i].classList.toggle('d-none')
                }
                labels[i].style.width = '18%'
                inputs[i].style.width = '18%'
                if (i == 4) {
                    labels[i].style.width = '16%'
                    inputs[i].style.width = '16%'
                }
            }
        }
    } else {
        for (i = 0; i < labels.length; i++) {
            console.log(labels[i])
            if (i == 0) {
                labels[i].style.width = '30%'
                inputs[i].style.width = '30%'
            } else {
                if (i == 2) {
                    labels[i].classList.toggle('d-none')
                    inputs[i].classList.toggle('d-none')
                }
                labels[i].style.width = '30%'
                inputs[i].style.width = '30%'
                if (i == 4) {
                    labels[i].style.width = '10%'
                    inputs[i].style.width = '10%'
                }
            }
        }
    }
}
