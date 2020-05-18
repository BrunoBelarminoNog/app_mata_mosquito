//Gerar a dimensão da tela automaticamente, deixando o palco do jogo dinamico caso o usuario a redimensione:
var altura, largura

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}
ajustaTamanhoPalcoJogo()

//posição randomica do mosquito:
var posicaoX = Math.floor(Math.random() * largura) - 90 //largura
var posicaoY = Math.floor(Math.random() * altura) - 90  //altura

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//criar o elemento html da imagem do mosquito:
var mosquito = document.createElement('img')
mosquito.src = './img/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)