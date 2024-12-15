const frm = document.querySelector("form")
const resp1 = document.querySelector("outDivisor")
const resp2 = document.querySelector("outPerfeito")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNum.value)

    for (let i = 1; i <= num; i++){
        if (i % 2 == 1){   
            fruta += estrela
        }else{
            fruta += estrela
        }
    }
    resp.innerText = fruta
})