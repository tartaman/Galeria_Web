var i = 0
function wao(){
    var imgdoc = document.getElementById('holamundo')
    var imgs = ['Images/city.jpeg',
                'Images/Tunel.jpeg']
    i++
    if (i >= imgs.length){
        i = 0
    }
    imgdoc.src = imgs[i]
}
function waoRevers(){
    var imgdoc = document.getElementById('holamundo')
    var imgs = ['Images/city.jpeg',
                'Images/Tunel.jpeg']
    i--
    if (i < 0){
        i = imgs.length - 1
    }
    imgdoc.src = imgs[i]
}
