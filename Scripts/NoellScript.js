var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/ImagenesNoell/Noell1.jfif',
    'Images/ImagenesNoell/Noell2.jfif',
    'Images/ImagenesNoell/Noell3.jfif',
    'Images/ImagenesNoell/Noell4.jfif',
    'Images/ImagenesNoell/Noell5.jfif',
    'Images/ImagenesNoell/Noell6.jfif',
    'Images/ImagenesNoell/Noell7.jfif',
    'Images/ImagenesNoell/Noell8.jfif',
    'Images/ImagenesNoell/Noell9.jfif',
    'Images/ImagenesNoell/Noell10.jfif',
    'Images/ImagenesNoell/Noell11.jfif',
    'Images/ImagenesNoell/Noell12.jfif',
    'Images/ImagenesNoell/Noell13.jfif',
    'Images/ImagenesNoell/Noell14.jfif',
    'Images/ImagenesNoell/Noell15.jfif',
    'Images/ImagenesNoell/Noell16.jfif',
    'Images/ImagenesNoell/Noell17.jfif',
    'Images/ImagenesNoell/Noell18.jfif']
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