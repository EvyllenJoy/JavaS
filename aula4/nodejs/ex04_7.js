const prompt = require("prompt-sync")()

const pessoas = Number(prompt("N° de pessoas: "))
const peixes = Number(prompt("N° de peixes: "))
let pagar

if (peixes <= pessoas) {
    pegar = pessoas * 20
} else {
    pagar = (pessoas * 20) + (pessoas - peixes) * 12
}
console.log (`Pagar R$: ${pagar.toFixed(2)}`)