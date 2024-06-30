let num = [0, 8, 7, 2]
num.sort()

for (let pos=0; pos<num.length; pos++){
    console.log(`Valor atual ${num[pos]}`)
}

for(let posi in num){
    console.log(num[posi])
}

console.log(`Valor pesquisado é ${num.indexOf(7)}`)