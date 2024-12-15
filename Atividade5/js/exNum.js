const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNum.value)

    if (num % 2 == 0){
        resp.innerText = `Esse número é par `
    }else{
        resp.innerText = `Esse número é ímpar`
    }

    
    e.preventDefault()
})
