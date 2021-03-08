function evenOrOdd (n) {
    n = prompt("Digite o número que deseja descobrir se é par ou ímpar: ")
    if (parseInt(n) % 2 === 0) {
        document.getElementsByTagName("h2")[0].innerHTML = "Este número é par! </br></br> Deseja tentar outro número?";
        document.getElementsByTagName("h2")[0].style.fontSize = "40px";
        document.getElementById("buttons").style.marginTop = "15px";
        document.getElementById("yesButton").style.cursor = "pointer";
    }
    else {
        document.getElementsByTagName("h2")[0].innerHTML = "Este número é ímpar </br></br> Deseja tentar outro número?";
        document.getElementsByTagName("h2")[0].style.fontSize = "40px";
        document.getElementById("buttons").style.marginTop = "15px";
    }
}