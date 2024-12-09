const prompt = requere("prompt-sync")()
const valor = prompt("Valor da conta R$: ")
const numParcela = Number(prompt("N° de parcelas: "))
const valorParcelas = (valor/numParcela)
const valorFinal = valorParcelas + (valor % numParcela)

for (let i = 1; i <= numParcela; i++){
    console.log(`${i}° parcela: R$ ${valorParcelas.toFixed(2)}`)
}
console.log(`${numParcela}° parcela: R$ ${valorFinal.toFixed(2)}`)