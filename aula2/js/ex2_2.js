const frm = document.querySelector("form")
const respTitulo = document.querySelector("h3")
const respDuracao = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60)
    const minutos = duracao % 60

    respTitulo.innerText = titulo
    respDuracao.innerText = `${horas} hora(s) e ${minutos} minuto(s)`
    e.preventDefault()
})