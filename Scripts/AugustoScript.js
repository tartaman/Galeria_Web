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
    Title = ['Paisaje', 'Muelle', 'Inspiracion','Desde arriba','Palmera','Volando alto','New york','Sol desde arriba','Nubes coloridas','Montañas',
    'Campeche desde arriba','Arbol','Puerto','Campo','Arco de cabo san lucas']
    desc = ['Foto que tome en Mar azul', 'Atardecer en Mar azul','El mar se traga al sol','tome esta foto yendo a chiapas',
    'Tome esta foto en casa de mis abuelos me gusto como se veia coin la palmera','Tome esta foto durnate un viaje',
    'Esta foto la tome porque me gusto mucho como se veian los edificios','ME gusto como se veia el cielo con la lñuz que le llegaba',
    'Esta foto la tome porque me gusto como la luz chocaba con la nube','La poca luz del sol que se ve por encima de la montaña se ve bien',
    'esta foto la tome por que habia nubes separadas','Un arbol de flamboyan antes de empezar a tirar flores',
    'En la foto algunas nubes tapan al sol y distorcionan su forma','Las nubes subren casi todo el cielo',
    'En la epoca del año que la foto fue tomada el arco se cubre en agua por que sube la marea']
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