
var nave;

function cuenta(){
	
	var telefono = prompt("ingresa su telefono");



	nave = new CuentaBancaria(telefono);
	nave.mostrarDatos();
}
function validar(){

}

function CuentaBancaria (telefono) {




  this.telefono = parseInt(telefono);

 


	this.mostrarDatos = function () {
		var msg = 'Ha creado un numero de telefono  , cuenta con  0 llamadas';

	    msg = msg + 'El telefono es' + this.telefono;



   
	    alert(msg);

		return msg;
	};








}



var contador=0;
function incrementar() {
if(contador==10)
alert('Maximo permitido de llamadas');
else {
document.caca.muchacaca.value= contador++;
}
}
function decrementar() {
if(contador==0)
alert('Minimo permitido alcanzado: 0');
else {
document.caca.muchacaca.value= contador--;}
}







  
  
  







/*  Se está pensando en el diseño de un juego que incluye la nave espacial Enterprise. En el juego, esta nave tiene un nivel de potencia de 0 a 100, y 
un nivel de coraza de 0 a 20. La Enterprise puede encontrarse con una pila atómica, en cuyo caso su potencia aumenta en 25. encontrarse con un escudo,
 en cuyo caso su nivel de coraza aumenta en 10. recibir un ataque, en este caso se especi�can los puntos de fuerza del ataque recibido. La Enterprise 
 �para� el ataque con la coraza, y si la coraza no alcanza, el resto se descuenta de la potencia. P.ej. si la Enterprise con 80 de potencia y 12 de 
 coraza recibe un ataque de 20 puntos de fuerza, puede parar solamente 12 con la coraza, los otros 8 se descuentan de la potencia. La nave debe quedar 
 con 72 de potencia y 0 de coraza. Si la Enterprise no tiene nada de coraza al momento de recibir el ataque, entonces todos los puntos de fuerza del ataque
  se descuentan de la potencia. La potencia y la coraza tienen que mantenerse en los rangos indicados, p.ej. si la Enterprise tien 16 puntos de coraza y se
   encuentra con un escudo, entonces queda en 20 puntos de coraza, no en 26. Tampoco puede quedar negativa la potencia, a lo sumo queda en 0. La Enterprise
    nace con 50 de potencia y 5 de coraza. Implementar este metodo constructor de la Enterprise, que tiene que entender los siguientes mensajes: 
    12.1 potencia() 
    12.2 coraza() 12.3 encontrarPilaAtomica() 12.4 encontrarEscudo() 12.5 recibirAtaque(puntos)
P.ej. sobre un REPL recién lanzado, después de esta secuencia enterprise.encontrarPilaAtomica() enterprise.recibirAtaque(14) enterprise.encontrarEscudo() 
la potencia de la Enterprise debe ser 66, y su coraza debe ser 10.
 */