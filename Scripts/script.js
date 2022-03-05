var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/city.jpeg',
'Images/Tunel.jpeg']
function wao(){
    var imgdoc = document.getElementById('holamundo')
    i++
    if (i >= imgs.length){
        i = 0
    }
    imgdoc.src = imgs[i]
}
function waoRevers(){
    var imgdoc = document.getElementById('holamundo')
    i--
    if (i < 0){
        i = imgs.length - 1
    }
    imgdoc.src = imgs[i]
}
var count = 0
function claritoOscurito(){
    if (count % 2 == 0){
        var cambioBoton = document.getElementById('cambio-boton')
        cambioBoton.innerText= 'Clarito'
        var oscuros = document.querySelectorAll(['.link-light','.bg-dark','.btn-dark'])
        oscuros.forEach(element => {
            element.classList.remove('bg-dark','link-light','btn-dark')
            element.classList.add('bg-light','link-dark','btn-light')
        });
        count++
    } else {
        var cambioBoton = document.getElementById('cambio-boton')
        cambioBoton.innerText= 'Oscurito'
        var oscuros = document.querySelectorAll(['.link-dark','.bg-light', '.btn-light'])
        oscuros.forEach(element => {
            element.classList.remove('bg-light','link-dark','btn-light')
            element.classList.add('bg-dark','link-light','btn-dark')
        });
        count++
    }
    console.log(count,localStorage.getItem('clarito'))
}
function mostrala(){
}