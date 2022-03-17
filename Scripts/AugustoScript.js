var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/ImagenesAugusto/Augusto1.jfif',
 'Images/ImagenesAugusto/Augusto2.jfif',
 'Images/ImagenesAugusto/Augusto3.jfif',
 'Images/ImagenesAugusto/Augusto4.jfif',
 'Images/ImagenesAugusto/Augusto5.jfif',
 'Images/ImagenesAugusto/Augusto6.jfif',
 'Images/ImagenesAugusto/Augusto7.jfif',
 'Images/ImagenesAugusto/Augusto8.jfif',
 'Images/ImagenesAugusto/Augusto9.jfif',
 'Images/ImagenesAugusto/Augusto10.jfif',
 'Images/ImagenesAugusto/Augusto11.jfif',
 'Images/ImagenesAugusto/Augusto12.jfif',
 'Images/ImagenesAugusto/Augusto13.jfif',
 'Images/ImagenesAugusto/Augusto14.jfif',
 'Images/ImagenesAugusto/Augusto15.jfif']


function cambiarDesc(index){
    titleDoc = document.getElementById('title')
    descDoc = document.getElementById('desc')
    Title = ['Paisaje', 'nubes?']
    desc = ['aAaAAAaaAAa', 'Imagen2']
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