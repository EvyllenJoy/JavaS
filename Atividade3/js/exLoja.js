const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
 
    const aVista = preco - (preco * 0.1)
    const parcelado = preco / 3

    resp1.innerText = `Preço à Vista R$: ${aVista}`
    resp2.innerText = `Ou 3x de R$: ${parcelado}`
    e.preventDefault()
})