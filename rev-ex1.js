const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta1 = ""

for (let i = num + 1; i <= num + 5; i++) {
    resposta1 = resposta1 + i + " "
}
console.log(`Os 5 números posteriores são: ${resposta1}`)

let resposta2 = ""

for (let i = num - 1; i >= num - 5; i--) {
    resposta2 = resposta2 + i + " "
}
console.log(`Os 5 números anteriores são: ${resposta2}`)


