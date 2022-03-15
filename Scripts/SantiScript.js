var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['./Images/ImagenesSanti/2daytour2021.jpg','./Images/ImagenesSanti/TepitoStreets.jpg','./Images/ImagenesSanti/vanaertchampion.jpg','./Images/ImagenesSanti/victoryonthefortunato.jpg']

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