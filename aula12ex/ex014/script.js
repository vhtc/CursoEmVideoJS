function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = `${data.getHours()}:` + `${data.getMinutes()}`
    var dia = `${data.getDate()}/` + `${data.getMonth() + 1}/` + `${data.getFullYear()}`
    msg.innerHTML = `<p>${dia}</p><p>${hora}</p>`
}