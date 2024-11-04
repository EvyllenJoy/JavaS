const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed
    const preco = Number(frm.inPreco)

    const valor = Math.floor(preco)

    resp1.innerText = `Promoção de ${medicamento}`
    resp2.innerText = `Leve 2 por apenas R$: ${valor}`
    e.preventDefault()
})