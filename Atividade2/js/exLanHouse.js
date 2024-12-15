const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)
 
    const tempoUso = Math.ceil(tempo/15)
    const valorUso = tempoUso*valor

    resp1.innerText = `Valor a Pagar R$: ${valorUso}`
    e.preventDefault()
})
