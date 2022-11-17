const prompt = require("prompt-sync")()

let quase = 0
let feio = 0

const correto = Number(prompt("Número Correto: "))
let nome
let aposta

do {
    nome = prompt("Nome: ")
    aposta = Number(prompt("Aposta: "))

    const diferenca = Math.abs(aposta - correto)

    if (diferenca == 0) {
        console.log("Acertou!!")
    } else if (diferenca <= 10) {
        console.log("Quase!")
        quase = quase + 1
    } else {
        console.log("Errou feio!")
        feio = feio = 1
    }
} while (correto != aposta)

console.log("-".repeat(30))
console.log(`Acertou: ${nome}`)
console.log(`Quase acertaram: ${quase}`);
console.log(`Errraam feio: ${feio}`);