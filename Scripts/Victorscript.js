var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/ImagenesVictor/Fuecoco.jpg',
'Images/ImagenesVictor/weisi.jpg']

function cambiarDesc(index){
    titleDoc = document.getElementById('title')
    descDoc = document.getElementById('desc')
    Title = ['Fuecoco', 'Hades']
    desc = ['Esta imagen es de fuecoco', 'Aqui una imagen en blaco y negro solo mostrando a zagreo y cerbero']
    titleDoc.innerText =`${Title[index]}`
    descDoc.innerText = `${desc[index]}`
}
function wao(){
    var imgdoc = document.getElementById('holamundo')
    i++
    if (i >= imgs.length){
        i = 0
    }
    imgdoc.src = imgs[i]
    cambiarDesc(i)
    return i
}
function waoRevers(){
    var imgdoc = document.getElementById('holamundo')
    i--
    if (i < 0){
        i = imgs.length - 1
    }
    imgdoc.src = imgs[i]
    cambiarDesc(i)
    return i
}
count = 0
function claritoOscurito(){
    localStorage.setItem('count', count)
    cuenta = localStorage.getItem('count')
    if (cuenta % 2 == 0){
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
    console.log(localStorage.getItem('count'))
}
function mostrala(){
    divPrincipal = document.getElementById('mjm')
    divPrincipal.classList.remove('d-none')
    image = document.createElement('img')
    image.src = `${imgs[i]}`
    image.classList.add('ouyea')
    divPrincipal.appendChild(image)
    return image
}
function non(){
    divPrincipal = document.getElementById('mjm')
    divPrincipal.classList.add('d-none')
    divPrincipal.removeChild(image)
}