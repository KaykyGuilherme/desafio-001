const formALL = {
    nome: document.querySelector("#nome"),
    peso: document.querySelector("#peso"),
    altura: document.querySelector("#altura"),
    btn: document.querySelector("form button")
}

const res = document.querySelector(".res")

formALL.btn.addEventListener('click', (e) =>{
    e.preventDefault()

    calcular()
})

const calcular = () =>{
    const nome__js = formALL.nome.value
    const peso__js = formALL.peso.value
    const altura__js = formALL.altura.value

    const imc = peso__js / (altura__js * altura__js)

    mostrarIMC(imc, nome__js, peso__js, altura__js)
}

const mostrarIMC = (imc, nome, peso, altura) => {
    calcularIMC(imc);
    res.innerHTML = `
    <h2> Olá, ${nome} </h2>

    <p> 
        Seu peso: ${peso} <br>
        Sua altura: ${altura} <br>
        Seu imc: ${imc.toFixed(2)} <br>
        Você esta em: ${res__user}
    </p>
    `
}

let res__user;
const calcularIMC = (imc) => {
    console.log(imc)
    if(imc < 18.5){
        res__user =  "abaixo do peso";
    }else if(imc < 25.9){
        res__user = "peso normal;"
    }else if(imc < 29.9){
        res__user = "sobrepeso"
    }else if(imc < 34.9){
        res__user = "obesidade 1"
    }else{
        res__user = "obesidade 2 e 3"
    }

}