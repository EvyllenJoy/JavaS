const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const numCliente = Number(frm.inCliente.value)
    const valor = Number(frm.inValor.value)
 
    const valorCliente = valor / numCliente

    resp1.innerText = `Valor por Cliente R$: ${valorCliente}`
    e.preventDefault()
})