function mostrarTabuada() {
    var numero = Number(window.document.getElementById('numeroTabuada').value)
    var resultado = window.document.getElementById('res')
    resultado.innerHTML = ''

    for (var count = 0; count<=10 ; count++){
        resultado.innerHTML += ` ${count} x ${numero} </br>`
        var item = window.document.createElement('option')
        item.text = ` ${numero} x ${count} = ${numero*count}`
        resultado.appendChild(item)
    }
}