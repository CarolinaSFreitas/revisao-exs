const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""

for(let i = num; i > 1; i = i - 1){
    if (i % 2 == 0){
        resposta = resposta + i + " "
    }
}

console.log(`Pares entre ${num} e 1: ${resposta}`)