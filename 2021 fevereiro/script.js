let index = document.querySelector('div#index')

const menu = {
    show(){     //abrir menu projetos
        index.classList.add('show')
    },
    hide() { //esconder menu projetos
        setTimeout( function () {     //setTimeout( function () adiciona um temporizador que executa uma única vez
        index.classList.remove('show')
      }, 600 );
    }
}

// TESTAR FUNÇÃO COM IF PARA MOSTRAR E ESCONDER O MENU: https://bit.ly/38FCUZM