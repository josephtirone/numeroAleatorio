function verficaValorValido(chute){
    const numero = +chute;

    if(chuteInvalido(numero)){
        if (chuteInvalido(numero)) {
            if (chute.toUpperCase() === "GAME OVER") {
    
                document.body.innerHTML =
                    `
                    <h2>Game Over!!!</h2>
                    <h3>Pressione o botão para jogar novamente</h3>
                    <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                    `
                    document.body.style.backgroundColor = "black";
            } else {
    
                elementoChute.innerHTML += '<div>Valor Inválido</div>';
            }
        }
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if((numeroMaiorOuMenor(numero))){
        elementoChute.innerHTML +=`<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    } else if(numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é menor 
                <i class="fa-solid fa-angles-down"></i>
            </div>
        `
    } else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior 
                <i class="fa-solid fa-angles-up"></i>
            </div>
        `
    }




}
function chuteInvalido(numero) {
    return Number.isNaN(numero);

    
}

function numeroMaiorOuMenor(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
