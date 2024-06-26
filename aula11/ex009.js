// var país = 'EUA'
// if(país == 'Brasil'){
//     console.log('Brasileiro')
// }else{
//     console.log('Estrangeiro')
// }

function verificar() {
    var país = window.document.getElementById('país').value
    res = window.document.getElementById('res')
    if (país == 'Brasil') {
        res.innerHTML = 'Brasileiro'
    } else {
        res.innerHTML = 'Estrangeiro'
    }
}