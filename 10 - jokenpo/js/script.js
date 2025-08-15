
let escolha = 'nada'
let computador = ['pedra', 'papel', 'tesoura']

let pontosj = 0
let pontosm = 0


document.querySelector('#pedra').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal') 
})

document.querySelector('#pedra').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '') 
})

document.querySelector('#papel').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal') 
})

document.querySelector('#papel').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '') 
})

document.querySelector('#tesoura').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal') 
})

document.querySelector('#tesoura').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '') 
})


document.querySelector('#pedra').addEventListener('click', (tag) =>{
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)'
    escolha = 'pedra'
    console.log(' jogador escolher ' + escolha)
})

document.querySelector('#papel').addEventListener('click', (tag) =>{
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)'
    escolha = 'papel'
    console.log(' jogador escolher ' + escolha)
})

document.querySelector('#tesoura').addEventListener('click', (tag) =>{
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    tag.currentTarget.style.filter = 'brightness(50%)'
    escolha = 'tesoura'
    console.log(' jogador escolher ' + escolha)
})

function gerarNumero(){
    return Math.floor(Math.random() * 3)
}

document.querySelector('button').addEventListener('click', () => {
    let aleatorio = gerarNumero()
    console.log('O computador escolheu ' + computador[aleatorio])

    let obj2 = document.querySelector(`#${computador[aleatorio]}-pc`)
    obj2.style.filter = 'brightness(100%)'
    obj2.setAttribute('class', 'a-jello-horizontal')


    if(escolha === computador[aleatorio]){
        document.querySelector('body').style.backgroundColor = 'yellow'
        console.log(' Empate ')
    } else if (escolha === 'pedra' && computador[aleatorio] === 'tesoura'){
        document.querySelector('body').style.backgroundColor = 'lightgreen'
        document.querySelector('#area2').style.backgroundColor = 'lightgreen'
        pontosj ++
        console.log(' Você Venceu ' + pontosj) 
    } else if (escolha === 'tesoura' && computador[aleatorio] === 'papel'){
        document.querySelector('body').style.backgroundColor = 'lightgreen'
        document.querySelector('#area2').style.backgroundColor = 'lightgreen'
        pontosj ++
        console.log(' Você Venceu ' + pontosj)
    } else if (escolha === 'papel' && computador[aleatorio] === 'pedra'){
        document.querySelector('body').style.backgroundColor = 'lightgreen'
        document.querySelector('#area2').style.backgroundColor = 'lightgreen'
        pontosj ++
        console.log(' Você Venceu ' + pontosj)
    } else if (escolha === 'nada'){
        document.querySelector('#pedra-pc').style.filter = 'brightness(0%)'
        document.querySelector('#papel-pc').style.filter = 'brightness(0%)'
        document.querySelector('#tesoura-pc').style.filter = 'brightness(0%)'
        document.querySelector('#pedra-pc').setAttribute('class', '')
        document.querySelector('#papel-pc').setAttribute('class', '')
        document.querySelector('#tesoura-pc').setAttribute('class', '')
    } else {
        document.querySelector('body').style.backgroundColor = 'red'
        document.querySelector('#area1').style.backgroundColor = 'red'
        pontosm ++
        console.log (' Perdeu... ' + pontosm) 
    }
    
    document.querySelector('#pontos-jogador').textContent = pontosj;
    document.querySelector('#pontos-maquina').textContent = pontosm;
    
    setTimeout(() => {
        document.querySelector('#pedra').style.filter = 'brightness(100%)'
        document.querySelector('#papel').style.filter = 'brightness(100%)'
        document.querySelector('#tesoura').style.filter = 'brightness(100%)'
        document.querySelector('#pedra-pc').style.filter = 'brightness(0%)'
        document.querySelector('#papel-pc').style.filter = 'brightness(0%)'
        document.querySelector('#tesoura-pc').style.filter = 'brightness(0%)'
        document.querySelector('body').style.backgroundColor = 'black'
        document.querySelector('#area1').style.backgroundColor = 'lightgrey'
        document.querySelector('#area2').style.backgroundColor = 'lightgrey'
        
        document.querySelector('#pedra').setAttribute('class', '')
        document.querySelector('#papel').setAttribute('class', '')
        document.querySelector('#tesoura').setAttribute('class', '')
        document.querySelector('#pedra-pc').setAttribute('class', '')
        document.querySelector('#papel-pc').setAttribute('class', '')
        document.querySelector('#tesoura-pc').setAttribute('class', '')
    
        escolha = 'nada'
    }, 1900)
})
