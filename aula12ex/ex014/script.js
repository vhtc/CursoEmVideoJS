function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var segundos = data.getSeconds()
    var minutos = data.getMinutes()
    var horaCalculo = data.getHours()
    var hora = `${horaCalculo}:` + `${minutos}:` + `${segundos}`
    var dia = `${data.getDate()}/` + `${data.getMonth() + 1}/` + `${data.getFullYear()}`
    msg.innerHTML = `<p>${dia}</p><p>${hora}</p>`

    if (horaCalculo >= 4 && horaCalculo <= 12) {
        // msg.innerHTML += `<p>Bom dia</p>`
        img.src = './img/manha.jpg'
        document.body.style.background = 'rgb(15, 130, 218)'
    } else if (horaCalculo > 12 && horaCalculo < 18) {
        img.src = './img/tarde.jpg'
        document.body.style.background = 'rgb(212, 216, 154)'
    } else {
        img.src = './img/noite.jpg'
        document.body.style.background = 'rgb(2, 2, 50)'
        // window.document.getElementById('h1header').style.color = 'white'
        document.body.style.color = 'purple'
    }
}