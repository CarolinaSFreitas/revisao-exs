const prompt = require("prompt-sync")()

// declara os vetores
const candidatos = []
const acertos = []

let continua

do {
    const x = prompt("Nome do candaidato: ")
    const y = Number(prompt("Nº de acertos: "))

    // adiciona aos vetores
    candidatos.push(x)
    acertos.push(y)

    continua = prompt("Continua (S/N): ").toUpperCase()
} while (continua == "S")

console.log()
const minimo = Number(prompt("Nº Mínimo de Acertos: "))

console.log("\nAprovados nesta fase")
console.log("-".repeat(30))

for (let i = 0; i < candidatos.length; i++) {
    if (acertos[i] >= minimo) {
        console.log(`${candidatos[i]} - ${acertos[i]}`)
    }
}