const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inChinchilas.value)
    const ano = Number(frm.inAno.value)
    let conta = 0

    while (ano > num){
        if(ano ){

        }
        conta += (num*3)   
        resp.innerText = `${1}° ano: ${conta} Chinchilas`
        break
    }
})