var fNum = document.getElementById('txtnumero')
var resultado = document.getElementById('resultado')
var selBanco = document.getElementById('selbanco')
var numeros = []
var soma = 0
var media = 0


function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else {
        return false
    }
}

function inBanco(n, b) {
    for (var i in b) {
        if (Number(n) == b[i]) {
            return true
        }
        else {
            return false
        }
    }
}

function adicionar() {
    if (inBanco(fNum.value, numeros) || !isNumero(fNum.value)) {
        alert('Digite um número válido e que não esteja na lista!')
    }
    else {
        var numAdd = Number(fNum.value)
        numeros.push(numAdd)
        soma += numAdd
        var opt = document.createElement('option')
        opt.text = ('Valor ' + numAdd + ' foi adicionado.')
        selBanco.appendChild(opt)
        fNum.value = ''
        fNum.focus()
        numeros.sort()
        numeros.reverse()
    }
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Digite números antes de finalizar!')
    }
    else {
        resultado.innerHTML = ''
        resultado.innerHTML = ('Ao todo, temos ' + numeros.length + ' números cadastrados. <br> O maior valor informado foi ' + numeros[0] + '.')
        numeros.sort()
        resultado.innerHTML += ('<br> O menor valor informado foi ' + numeros[0] + '. <br> Somando todos os valores, temos ' + soma + '. <br> A média de todos os valores é ' + (soma / numeros.length) + '.')
    }
}