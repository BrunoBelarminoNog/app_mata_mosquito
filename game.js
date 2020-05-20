//Gerar a dimensão da tela automaticamente, deixando o palco do jogo dinamico caso o usuario a redimensione:
var altura, largura
var vidas= 1
var tempo= 10

var criaMosquitoTempo = 1500

var nivel = window.location.search //.search atributo que recupera apenas a querystring da URL
nivel = nivel.replace('?', '') // retira o ? da querystring recuperada

if (nivel === 'normal'){
    criaMosquitoTempo = 1500
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 1000
} else if (nivel === 'hardcore') {
    criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

//cronometro e mensagem de vitoria:

document.getElementById('cronometro').innerHTML = tempo

var cronometro = setInterval(function () {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href= 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo }
}, 1000)

//posição randomica do mosquito:

function posicaoRandomica() {
    
    //remover o mosquito anterior (caso exista) no clique, ou diminuir as vidas ate o game over
    if (document.getElementById('mosquito')) {
    document.getElementById('mosquito').remove()

        if (vidas > 3) { 
            window.location.href = 'fim_jogo.html'
        } else {
        document.getElementById('v' + vidas).src = './img/coracao_vazio.png'
        vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 //largura
    var posicaoY = Math.floor(Math.random() * altura) - 90  //altura

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML da imagem do mosquito:
    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //a cada reposicionamento do mosquito, há também a chamada da função pertinente ao tamanho da imagem do mesmo e do lado aleatorio
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove() //this => operador que faz referencia ao proprio operador HTML que executa a função
    }

    document.body.appendChild(mosquito) //appendChild = cria um elemento filho no body, nesse caso ele chama uma variável mosquito, que correponde uma tag img com os atributos incluidos acima.

    
}

var criaMosquito = setInterval(function () { posicaoRandomica() }, criaMosquitoTempo) //intervalo de tempo que o mosquito é reiniciado em outra posição


//tamanho randomico do tamanho do mosquito:
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3) //adc na var classe a possibilidade de gerar randomicamente um resultado == 0, 1 e 2, e dessa forma manipular três tamanhos diferentes do mosquito
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }       

}
//função que gira horizontalmente a imagem de forma aleatoria
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)
    switch (classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}