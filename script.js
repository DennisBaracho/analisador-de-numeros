var fNum = document.getElementById('txtnumero')
var resultado = document.getElementById('resultado')
var selBanco = document.getElementById('selbanco')
var numeros = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inBanco(n, b) {
    if (b.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(fNum.value) && !inBanco(fNum.value, numeros))
    {
     numeros.push(Number(fNum.value))
     let item = document.createElement('option')
     item.text = "Valor " + fNum.value + " adicionado."
     selBanco.appendChild(item)   
     resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já presente na lista.')
    }
    fNum.value = ''
    fNum.focus()
}

function finalizar(){
    if (numeros.length == 0){
        window.alert('Adicione valores!')
    } else {
        let total = numeros.length
        let soma = 0
        let maior = numeros[0]
        let menor = numeros[0]
        for(let pos in numeros){
            soma += numeros[pos]
            if (numeros[pos] > maior)
                maior = numeros[pos]
            if (numeros[pos] < menor)
                menor = numeros[pos]
        }
        media = soma / total 
        resultado.innerHTML = ''
        resultado.innerHTML += '<p>Ao todo, temos ' + total + ' números cadastrados.</p>'
        resultado.innerHTML += '<p>O maior número informado foi '  + maior + '.</p>'
        resultado.innerHTML += '<p>O menor número informado foi '  + menor + '.</p>'
        resultado.innerHTML += '<p>A média dos números digitados foi '  + media + '.</p>'
        resultado.innerHTML += '<p>A soma dos números digitados foi ' + soma + '.</p>'
    }
}