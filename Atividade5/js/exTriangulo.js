const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const a = Number(frm.inLado1.value)
    const b = Number(frm.inLado2.value)
    const c = Number(frm.inLado3.value)

    if (a + b < c && a + c < b && b + c < a){
        resp.innerText = `Esses lados não podem se tornar um triângulo`
    }else{
        if (a == b && a == c){
            resp.innerText = `Triângulo Equilátero`
        }else if (a == b || a == c || b == c){
            resp.innerText = `Triângulo Isósceles`
        }else{
            resp.innerText = `Triângulo Escaleno`
        }
    }

    
    e.preventDefault()
})