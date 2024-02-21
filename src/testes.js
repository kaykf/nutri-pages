const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')

function contaIMC(){
    const calAltura = altura.value ** 2
    const conta = peso.value / calAltura
    return resultado.value = conta
}

document.getElementById('calculo').addEventListener('click', function(){
    contaIMC()
})