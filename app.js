let images = ["images/ajolote.png","images/alacran.png","images/araña.png","images/bandera.png","images/barril.png","images/bandolon.png","images/bota.png","images/botella.png","images/buscardor.png","images/calavera.png","images/camaron.png","images/campana.png","images/cantarito.png","images/catrin.png","images/cazo.png","images/chalupa.png","images/concha.png","images/corazon.png","images/corona.png","images/cotorro.png","images/dama.png","images/el arpa.png","images/elote.png","images/emoji.png","images/escalera.png","images/estrella.png","images/gallo.png","images/garza.png","images/gorro.png","images/guacamole.png","images/la-maceta.png","images/la-mano.png","images/la-palma.png","images/la-pera.png","images/la-rana.png","images/la-rosa.png","images/la-sandia.png","images/la-sirena.png","images/las-jaras.png","images/luna.png","images/melon.png","images/mundo.png","images/musico.png","images/nopal.png","images/pajaro.png","images/paraguas.png","images/pescado.png","images/pino.png","images/sol.png","images/tambor.png","images/venado.png","images/violoncello.png","images/xoloitzcuintle.png","images/arbol.png"]


// Función para seleccionar la tarjeta
let card1 = null

function imagenAleatoria () {
   let aleatoria = Math.floor(Math.random() * images.length);
  console.log(aleatoria)
  let baraja = document.getElementById('imagenAleatoria');
  baraja.src= images[aleatoria]
//   Evitar números repetidos (cartas)
//
//       }
//   }
}
let btnBaraja = document.getElementById('boton-img');
btnBaraja.addEventListener('click', imagenAleatoria);

// Desactivar tableros

let switch1 = document.getElementById('flexSwitchCheckDefault1');

function desactivarTableros (numTablero) {
    console.log(numTablero)

    if (numTablero == 1) {
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 2) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 3) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('flexSwitchCheckDefault1').style.display = 'none';

}
}

let switch2 = document.getElementById('flexSwitchCheckDefault2');

function desactivarTableros (numTablero) {
    console.log(numTablero)

    if (numTablero == 1) {
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 2) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 3) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('flexSwitchCheckDefault2').style.display = 'none';

}
}

let switch3 = document.getElementById('flexSwitchCheckDefault3');

function desactivarTableros (numTablero) {
    console.log(numTablero)

    if (numTablero == 1) {
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 2) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero3').style.display = 'none';
} else if (numTablero == 3) {
    document.getElementById('tablero1').style.display = 'none';
    document.getElementById('tablero2').style.display = 'none';
    document.getElementById('flexSwitchCheckDefault3').style.display = 'none';

}
}


//  Seleccionar las cartas del tablero

let cartasClic = 0;
let carta1= null;
let resultado1 = null;
let carta2 = null;
let resultado2 = null;
let carta3 = null;
let resultado3 = null;
let carta4 = null;
let resultado4 = null;
let carta5 = null;
let resultado5 = null;
let carta6 = null;
let resultado6 = null;
let carta7 = null;
let resultado7 = null;
let carta8 = null;
let resultado8 = null;
let carta9 = null;
let resultado9 = null;
let carta10 = null;
let resultado10 = null;
let carta11 = null;
let resultado11 = null;
let carta12 = null;
let resultado12 = null;
let carta13 = null;
let resultado13 = null;
let carta14 = null;
let resultado14 = null;
let carta15 = null;
let resultado15 = null;
let carta16 = null;
let resultado16 = null;


function tacharCarta(id) {
    cartasClic++;
    console.log(cartasClic);
    if(cartasClic == 1) {
        carta1 = document.getElementById(id);
        resultado1 = cartasClic[id]
        carta1.disabled = true; 
    } else if(cartasClic == 2){
        carta2 = document.getElementById(id);
        resultado2 =cartasClic[id];
        carta2.disabled = true;
    } else if(cartasClic == 3){
        carta3 = document.getElementById(id);
        resultado3 =cartasClic[id];
        carta3.disabled = true;
    } else if(cartasClic == 4){
        carta4 = document.getElementById(id);
        resultado4 =cartasClic[id];
        carta4.disabled = true;
    } else if(cartasClic == 5){
        carta5 = document.getElementById(id);
        resultado5 =cartasClic[id];
        carta5.disabled = true;
    } else if(cartasClic == 6){
        carta6 = document.getElementById(id);
        resultado6 =cartasClic[id];
        carta6.disabled = true;
    } else if(cartasClic == 7){
        carta7 = document.getElementById(id);
        resultado7 =cartasClic[id];
        carta7.disabled = true;
    } else if(cartasClic == 8){
        carta8 = document.getElementById(id);
        resultado8 =cartasClic[id];
        carta8.disabled = true;
    } else if(cartasClic == 9){
        carta9 = document.getElementById(id);
        resultado9 =cartasClic[id];
        carta9.disabled = true;
    } else if(cartasClic == 10){
        carta10 = document.getElementById(id);
        resultado10 =cartasClic[id];
        carta10.disabled = true;
    } else if(cartasClic == 11){
        carta11 = document.getElementById(id);
        resultado11 =cartasClic[id];
        carta11.disabled = true;
    } else if(cartasClic == 12){
        carta12 = document.getElementById(id);
        resultado12 =cartasClic[id];
        carta12.disabled = true;
    } else if(cartasClic == 13){
        carta13 = document.getElementById(id);
        resultado13 =cartasClic[id];
        carta13.disabled = true;
    } else if(cartasClic == 14){
        carta14 = document.getElementById(id);
        resultado14 =cartasClic[id];
        carta14.disabled = true;
    } else if(cartasClic == 15){
        carta15 = document.getElementById(id);
        resultado15 =cartasClic[id];
        carta15.disabled = true;
    } else if(cartasClic == 16){
        carta16 = document.getElementById(id);
        resultado16 =cartasClic[id];
        carta16.disabled = true; 
    }
}
