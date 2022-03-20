var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/ImagenesVictor/Fuecoco.jpg',
'Images/ImagenesVictor/weisi.jpg',
'Images/ImagenesVictor/fondo.png',
'Images/ImagenesVictor/Uhoh.png',
'Images/ImagenesVictor/Bulletkin\'t.png']

function cambiarDesc(index){
    titleDoc = document.getElementById('title')
    descDoc = document.getElementById('desc')
    Title = ['Fuecoco', 'Hades','Spiderman:Into The Spiderverse','Terraria','Enter the Gungeon']
    desc = ['Esta imagen es de fuecoco',
     'Aqui una imagen en blaco y negro solo mostrando a zagreo y cerbero',
     'Esta imagen tiene los colores modificados con un ajuste de niveles y curvas',
     'Ya valiooo...',
    'Bulletkin\'t']
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