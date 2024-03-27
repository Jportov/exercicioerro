
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    let numeroMaximo = document.getElementById('numero-maximo').value;
    numeroMaximo = parseInt(numeroMaximo); 
    
    let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
    numeroAleatorio = Math.floor(numeroAleatorio);
    alert(numeroAleatorio);
    
    document.getElementById('resultado-valor').innerHTML=numeroAleatorio;
    
        
    })
})
