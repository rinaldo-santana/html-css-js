
var botaoCalcular = document.getElementById('botaoCalcular');
var peso = document.getElementById('peso');
var altura = document.getElementById('altura');
var resultado = document.getElementById('resultado');  

calcularIMC = (peso, altura) => { return peso / (altura * altura) };

onCalculaImc = () => { 
    var imc = Math.round( calcularIMC(peso.value, altura.value) * 100 ) / 100;
    resultado.innerHTML = imc; 
};

altura.addEventListener('keypress', function (event){
   event.keyCode === 13 ? onCalculaImc() : function(){} ; 
});

botaoCalcular.addEventListener('click', function (event) {
    onCalculaImc();
});
