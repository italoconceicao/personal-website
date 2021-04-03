function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    if (hora > 0 && hora < 12) {
        msg.innerHTML = `Bom dia! <br/> Agora são ${hora} horas`
        img.src = "fotomanha.png"
        document.body.style.backgroundColor = "#cfbc8b"
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Bom tarde! <br/> Agora são ${hora} horas`
        img.src = "fototarde.png"
        document.body.style.backgroundColor = "#b9846f"
    } else {
        msg.innerHTML = `Bom noite! <br/> Agora são ${hora} horas`
        img.src = "fotonoite.png"
        document.body.style.backgroundColor = "#515154"
    }
}

