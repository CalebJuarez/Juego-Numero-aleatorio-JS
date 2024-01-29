let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);
asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 20`);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario);
    if(intentos>=5){
        asignarTextoElemento('p','Superaste el numero maximo de intentos');
        console.log('Superaste el numero maximo de intentos');
        document.getElementById('reiniciar').removeAttribute('disabled');     
        return;
    }

    while(intentos<5){
        intentos++;
    if (numeroDeUsuario === numeroSecreto) {
        if(intentos==1){
            console.log('Acertaste el número secreto que es: '+numeroSecreto+' en un intento.');
            asignarTextoElemento('p','Acertaste el número secreto que es: '+numeroSecreto+' en un intento.');
            document.getElementById('reiniciar').removeAttribute('disabled');        
        }else{
            console.log('Acertaste el número secreto que es: '+numeroSecreto+' en '+intentos+' intentos.');
            asignarTextoElemento('p','Acertaste el número secreto que es: '+numeroSecreto+' en '+intentos+' intentos.');
            document.getElementById('reiniciar').removeAttribute('disabled');  

        }
        
    }else{
         if(numeroDeUsuario<numeroSecreto){
        if(intentos==1){
            console.log('El numero indicado es menor que el numero secreto llevas un intento.');
            asignarTextoElemento('p','El numero indicado es menor que el numero secreto llevas un intento.');
        
        }else{
            console.log('El numero indicado es menor que el numero secreto llevas '+intentos+' intentos.');
            asignarTextoElemento('p','El numero indicado es menor que el numero secreto llevas '+intentos+' intentos.');

        }
       
    } else{
        if(intentos==1){
            console.log('El numero indicado es mayor que el numero secreto llevas un intento.');
            asignarTextoElemento('p','El numero indicado es mayor que el numero secreto llevas un intento.');
        
        }else{
            console.log('El numero indicado es mayor que el numero secreto llevas '+intentos+' intentos.');
            asignarTextoElemento('p','El numero indicado es mayor que el numero secreto llevas '+intentos+' intentos.');

        }

                
    }

    limpiarCaja();
}

return;
}

}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*20)+1;
}
function limpiarCaja(){
    let ValorCaja= document.querySelector('#valorUsuario');
    ValorCaja.value='';
}

function reiniciarJuego(){
    limpiarCaja();
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    asignarTextoElemento('p','El juego se a reiciniado indica un numero del 1-20.');
    intentos =0;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
