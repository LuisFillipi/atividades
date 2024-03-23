
const sorteado = Math.floor(Math.random() * 100) +1;
console.log(sorteado)
const tentativas = 6

const inNumero = document.getElementById('inNumero')

const btnApostar = document.getElementById('btnApostar')
const btnJogarNovamente = document.getElementById('btnJogar')

const outErros = document.getElementById('outErros')
const outChances = document.getElementById('outChances')

const outDicas = document.getElementById('outDicas')

const apostarNumero = () => {
    const numero = Number(inNumero.value)
    if (numero === 0 || isNaN(numero)){
        alert("numero invalido");
        return;
    }
    if (numero === sorteado) {
        alert('hello word!');
        btnApostar.disabled = true
        outDicas.textContent = 'parabens!! voce acertou!'
    }else{
    alert("Errou")
    }
    inNumero.value = ''
}
btnApostar.addEventListener('click', apostarNumero);
   
const jogarDeNovo = () => {
        window.location.reload()
    }

btnJogarNovamente.addEventListener("click", jogarDeNovo)