var lista = []

function inserirLista() {
    let numero = Number(document.getElementById('inserirNumero').value)
    let tamanho = document.getElementById('inserirNumero').value
    let selectLista = document.getElementById('listaNumeros')
    let resultado = document.getElementById('resultado')
    var item = document.createElement('option')

    if (tamanho.length == 0) {
        alert('[ERRO] Digite um valor válido!')
    } else if (lista.indexOf(numero) == -1) {
        lista.push(numero)
        resultado.innerHTML = `<p>${lista}</p>`
        selectLista.appendChild(item)
        item.text = `Adicionado ${numero}`

        window.document.getElementById('crescenteLista').disabled = false

    } else {
        alert('[ERRO] Valor já existe na lista!')
    }
}

function limparLista() {
    let selectLista = document.getElementById('listaNumeros')
    let resultado = document.getElementById('resultado')
    selectLista.innerHTML = ''
    lista = []
    resultado.innerHTML = ''
}

function crescenteLista() {
    let resultado = document.getElementById('resultado')
    lista.sort()
    resultado.innerHTML = `<p>${lista}</p>`
    window.document.getElementById('crescenteLista').disabled = true
    alert('Lista atualizada')
}