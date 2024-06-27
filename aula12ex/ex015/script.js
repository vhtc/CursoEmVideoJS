function verificar() {
    var dataAtual = new Date()
    var anoAtual = dataAtual.getFullYear()
    var anoNascimento = Number(window.document.getElementById('txtano').value)
    var sexo = window.document.getElementsByName('radsex')
    var idade = anoAtual - anoNascimento
    var resultado = document.getElementById('res')
    var genero = ''

    if (anoNascimento <= 0 || anoNascimento > anoAtual) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var foto = document.getElementById('foto')
        if (sexo[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 4) {
                img.setAttribute('src', './img/bebeHomem.jpg')
            } else if (idade > 4 && idade <= 13) {
                img.setAttribute('src', './img/criançaMenino.jpg')
            } else if (idade > 13 && idade <= 20) {
                img.setAttribute('src', './img/meninoJovem.jpg')
            } else if (idade > 20 && idade <= 60) {
                img.setAttribute('src', './img/adultoHomem.jpg')
            } else if (idade > 60 && idade <= 130) {
                img.setAttribute('src', './img/idosoHomem.jpg')
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 4) {
                img.setAttribute('src', './img/bebeMulher.jpg')
            } else if (idade > 4 && idade <= 13) {
                img.setAttribute('src', './img/criançaMenina.jpg')
            } else if (idade > 13 && idade <= 20) {
                img.setAttribute('src', './img/meninaJovem.jpg')
            } else if (idade > 20 && idade <= 60) {
                img.setAttribute('src', './img/adultoMulher.jpg')
            } else if (idade > 60 && idade <= 130) {
                img.setAttribute('src', './img/idosoMulher.jpg')
            }
        }
        resultado.innerHTML = (`<p>${genero} com ${idade} anos.</p>`)
        resultado.append(img)
    }
}