function somar() {    
  document.getElementById('resultado').setAttribute('value', Number(document.getElementById('valor1').value) + Number(document.getElementById('valor2').value))
}

function subtrair() {
  document.getElementById('resultado').setAttribute('value', Number(document.getElementById('valor1').value) - Number(document.getElementById('valor2').value))
}

function multiplicar() {
  document.getElementById('resultado').setAttribute('value', Number(document.getElementById('valor1').value) * Number(document.getElementById('valor2').value))
}

function dividir() {
  document.getElementById('resultado').setAttribute('value', Number(document.getElementById('valor1').value) / Number(document.getElementById('valor2').value))
}

document.getElementById('somar').setAttribute('onclick', 'somar()')
document.getElementById('subtrair').setAttribute('onclick', 'subtrair()')
document.getElementById('multiplicar').setAttribute('onclick','multiplicar()')
document.getElementById('dividir').setAttribute('onclick', 'dividir()')

