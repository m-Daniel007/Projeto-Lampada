const turnOn = document.querySelector('#ligar')
const turnOff = document.querySelector('#desligar')
const imgs = document.querySelector('#imagem')

function isBroken(){
    return imgs.src.indexOf('quebrada') > -1
}

function ligarLamp(){

    if(!isBroken()){
        imgs.src = './imagens/ligada.jpg'
    }
   
   
}
imgs.addEventListener('click', ligarLamp)


function desligarLamp(){

    if(!isBroken()){
    imgs.src = './imagens/desligada.jpg'
    }
}
imgs.addEventListener('click', desligarLamp)


function Broken(){

    imgs.src = './imagens/quebrada.jpg'
    
}
imgs.addEventListener('dblclick', Broken)
imgs.addEventListener('mousover', ligarLamp)
imgs.addEventListener('mouseout', desligarLamp)

function escreverTexto(el){
    const textoArray = el.innerText.split('');
    el.innerText =''
    console.log(textoArray)
   textoArray.forEach((letra, i) => {
       setTimeout(()=> el.innerText += letra, 180 * i)
    });
   
}

const titulo = document.querySelector('h1')

escreverTexto(titulo)