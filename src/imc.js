const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')

function contaIMC(){
    const calAltura = altura.value ** 2
    const conta = peso.value / calAltura
    if(conta <= 18.4){
        console.log("Magro")
        return resultado.value = 'Magreza'
    }else if(conta >= 18.5, conta <=24.9){
        console.log("Normal")
        resultado.style.backgroundColor='rgb(32, 212, 8)'
        resultado.style.color='black'
        return resultado.value = 'Normal'
    }else if(conta >= 25 && conta <= 29.9){
        resultado.style.backgroundColor='yellow'
        resultado.style.color='black'
        return resultado.value = 'Sobrepeso (Obesidade nível 1)'
    }else if (conta >= 30 && conta <=39.9){
        resultado.style.color='orange'
        return resultado.value = 'Obesidade (Obesidade nível 2)'
    }else if(conta >=40){
        resultado.style.color='red'
        return resultado.value = 'Obesidade Grave (Obesidade nível 3)'
    }else{
        alert("Inválido")
        return resultado.value = 'Coloque um valor válido'
    }
}

document.getElementById('calculo').addEventListener('click', function(){
    contaIMC()
})

