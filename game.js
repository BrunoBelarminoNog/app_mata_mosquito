//Gerar a dimensão da tela automaticamente, deixando o palco do jogo dinamico caso o usuario a redimensione:
var altura, largura

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

//posição randomica do mosquito:

function posicaoRandomica() {
    
    var posicaoX = Math.floor(Math.random() * largura) - 90 //largura
    var posicaoY = Math.floor(Math.random() * altura) - 90  //altura

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento html da imagem do mosquito:
    var mosquito = document.createElement('img')
    mosquito.src = './img/mosca.png'
    mosquito.className = tamanhoAleatorio() //a cada reposicionamento do mosquita, há também a chamada da função pertinente ao tamanho da imagem do mesmo
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

    
}
posicaoRandomica()

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