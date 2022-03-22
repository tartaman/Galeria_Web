var i = 0
// Aqui van a poner sus imagenes :D
var imgs = ['Images/ImagenesVictor/Fuecoco.jpg',
'Images/ImagenesVictor/weisi.jpg',
'Images/ImagenesVictor/fondo.png',
'Images/ImagenesVictor/Uhoh.png',
'Images/ImagenesVictor/Bulletkin\'t.png',
'Images/ImagenesVictor/Yone.png',
'Images/ImagenesVictor/kirbyred.png',
'Images/ImagenesVictor/Dst.png',
'Images/ImagenesVictor/TBOIA.png']

function cambiarDesc(index){
    titleDoc = document.getElementById('title')
    descDoc = document.getElementById('desc')
    Title = ['Fuecoco', 'Hades','Spiderman:Into The Spiderverse','Terraria','Enter the Gungeon','League of Legends','Kirby','Don\'t starve together','The Binding of Isaac Afterbirth +']
    desc = ['Esta imagen es de fuecoco, se le ha alterado los niveles y se le aplico un paso alto para definir mejor a cada uno de los starters',
     'Aqui una imagen en blaco y negro solo mostrando a zagreo y cerbero',
     'Esta imagen tiene los colores modificados con un ajuste de niveles y curvas',
     'Ya valiooo...',
    'Bulletkin\'t',
    'Este es Yone un campeon del juego League Of Legends al cual se le dejaron las partes con más color para resaltarlas y lo demás se ha dejado en blanco y negro',
    'Se le cambiaron los ojos a rojos',
    'Se le aplico un filtro de curvas para aumentarle el brillo a el sol y la antorcha y todo lo demás se ha dejado en blanco y negro',
    'Esta imagen esta modificada con el tono que tu la veas']
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