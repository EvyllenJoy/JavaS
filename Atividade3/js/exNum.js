const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNumero.value)
 
    const anterior = num - 1
    const posterior = num + 1

    resp1.innerText = `Vizinhos: ${anterior} e ${posterior}`
    e.preventDefault()
})