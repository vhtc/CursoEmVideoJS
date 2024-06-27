function gerarContador() {
    var inicio = Number(window.document.getElementById('inicioCount').value)
    var final = Number(window.document.getElementById('finalCount').value)
    var count = Number(window.document.getElementById('count').value)
    var resultado = window.document.getElementById('res')
    var soma = inicio
    resultado.innerHTML = 'Escolha os itens acima para mostrar resultado!'

    if (inicio == 0 || final == 0 || count == 0) {
        alert('[ERRO] Valor precisa ser diferente de 0')
    } else if (final > inicio) {
        resultado.innerHTML = `🚩`
        while (soma < final) {
            // resultado.innerHTML += `${cont}`
            resultado.innerHTML += ` ${soma} 🚓`
            var soma = soma + count
        }
        resultado.innerHTML += ` ${final} 🏁`
    } else {
        alert('[ERRO] Final precisa ser maior que Inicio')
    }
}

1 