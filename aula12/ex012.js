var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

if (hora >= 4 && hora <= 12) {
    console.log('Bom Dia')
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa Tarde')
}else{
    console.log('Boa Noite')
}

console.log(`Agora são ${hora} horas e ${minuto} minutos`)