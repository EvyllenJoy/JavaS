const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const valorPromocao = (0.5 * preco)
    const valorTotal = (2*preco) + valorPromocao

    resp1.innerText = `${produto} - Promoção: Leve 3 por R$ ${valorTotal}`
    resp2.innerText = `O 3° produto custa apenas R$: ${valorPromocao}`
    e.preventDefault()
})