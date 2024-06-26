var kmCarro = 60
var kmEstrada = 60
console.log(`Velocidade da via ${kmEstrada}Km/h, você está a ${kmCarro}Km/h`)

if (kmCarro > kmEstrada) {
    console.log(`Você está acima da velocidade permitida. [MULTADO]`)
}else{
    console.log('Você está na velocidade permitida.')
}
