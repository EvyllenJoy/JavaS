const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nota1 = Number(frm.in1nota.value)
    const nota2 = Number(frm.in2nota.value)
 
    const media = (nota1+nota2)/2

    resp1.innerText = `Média: ${media}`
    e.preventDefault()
})