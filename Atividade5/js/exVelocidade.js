const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const estrada = Number(frm.inEstrada.value)
    const condutor = Number(frm.inCondutor.value)

    const multa20 = estrada + (estrada*0.2) 

    if (condutor <= estrada){
        resp.innerText = `Sem Multa`
    }else if (multa20 >= condutor){
        resp.innerText = `Multa Leve`
    }else{
        resp.innerText = `Multa Grave`
    }

    
    e.preventDefault()
})