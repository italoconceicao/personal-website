
    function somar() {
        var n1 = document.getElementById('number1')
        var n2 = document.getElementById('number2')
        var soma = document.getElementById('resultado') 
         number1 = Number(n1.value)
        var number2 = Number(n2.value)
        var resultado = number1 + number2

    soma.innerText = `A soma de ${number1} e ${number2} é igual a ${resultado}.`

}

    function clickDown() {
        var botao = document.getElementById('somar')
        botao.style.borderStyle = 'inset'
}

    function clickUp () {
        var botao = document.getElementById('somar')
        botao.style.borderStyle = 'outset'
}
