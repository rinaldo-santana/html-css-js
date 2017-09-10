
var botaoCalcular = document.getElementById('botaoCalcular');

botaoCalcular.addEventListener('click', () => {
    
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var resultado = document.getElementById('resultado');    

    calculaIMC = (peso, altura) => { return peso / (altura * altura) };

    resultado.innerHTML =  Math.round( calculaIMC(peso, altura) * 100 ) / 100; 
});





