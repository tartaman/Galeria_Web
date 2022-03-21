cuenta = 0
function claritoOscurito(){
    if (cuenta % 2 == 0){
        var cambioBoton = document.getElementById('cambio-boton')
        cambioBoton.innerText= 'Claro'
        document.getElementById('logo').src ='Images/Logo.png'
        var oscuros = document.querySelectorAll(['.link-light','.bg-dark','.btn-dark'])
        oscuros.forEach(element => {
            element.classList.remove('bg-dark','link-light','btn-dark')
            element.classList.add('bg-light','link-dark','btn-light')
        });
        cuenta++
    } else {
        var cambioBoton = document.getElementById('cambio-boton')
        cambioBoton.innerText= 'Oscuro'
        document.getElementById('logo').src ='Images/LogoBlanco.png'
        var oscuros = document.querySelectorAll(['.link-dark','.bg-light', '.btn-light'])
        oscuros.forEach(element => {
            element.classList.remove('bg-light','link-dark','btn-light')
            element.classList.add('bg-dark','link-light','btn-dark')
        });
        cuenta++
    }
    return cuenta
}