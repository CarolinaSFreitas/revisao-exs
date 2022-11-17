const prompt = require("prompt-sync")()

const numeros = []
let resposta = ""

for (let i = 0; i <= 4; i++) {
    numeros[i] = Number(prompt(`${i + 1}º Número: `))
    resposta = resposta + numeros[i] + " "
}

let foraOrdem = 0

for (let i = 0; i < 4; i++) {
    if (numeros[i] > numeros[i + 1]) {
        foraOrdem = 1
    }
}


console.log(`Números: ${resposta}`);
if (foraOrdem == 0) {
    console.log("Os números estão em ordem")
} else {
    console.log("Os números não estão em ordem")
}