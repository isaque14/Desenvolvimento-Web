
var height = 0
var width = 0
var vidas = 1 
var time = 10

var criaMosquitoTempo = 1500

var level = window.location.search
level = level.replace('?', '')

if (level === 'normal'){
    criaMosquitoTempo = 1500
}
else if (level === 'dificil'){
    criaMosquitoTempo = 1000
}
else if (level === 'veterano'){
    criaMosquitoTempo = 750
}

function ajustaPalcoJogo() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(height, width)
}

ajustaPalcoJogo()

var cronometro = setInterval(function(){
    
    time -= 1
    
    if (time < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'winner.html'
    }
    else{
    document.getElementById('cronometro').innerHTML = time
        }
    }, 1000)


function positionRandomic(){

    // Remover mosquito caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if (vidas > 3 ){window.location.href = 'game_over.html'}
        else{
        document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
        vidas++
        }
    }

    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //Criar elemento HTML
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.id = 'mosquito'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.onclick = function(){
        this.remove()
        }

    // Atribui o elemento HTML ao Body
    document.body.appendChild(mosquito)
    console.log(randomSide())
}

// Tamanho aleatório do mosquito
function randomSize(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2: 
            return 'mosquito3'
    }
}

function randomSide(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'sideA'

        case 1:
            return 'sideB'
    }
}