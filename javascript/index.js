
let bienvenido = alert('Bienvenido a Nuestra Tienda')

let nombreDeCliente = prompt ('Nombre')

while (nombreDeCliente === (isNan(nombreDeCliente))) {
    nombreDeCliente = prompt ('Ingrese su nombre sin espacios ni numeros');
}

let apellidoDeCliente = prompt('Apellido')

while (apellidoDeCliente === (isNan(apellidoDeCliente))) {
    apellidoDeCliente = prompt ('Ingrese su apellido sin espacios ni numeros');
}

let cliente = (nombreDeCliente + ' ' + apellidoDeCliente)

alert( 'Welcome: ' + cliente )

let porcionDeTorta = prompt( cliente  + ' ' + '¿Cuantas porciones va a llevar?');

while (porcionDeTorta <= 0) {
    porcionDeTorta = prompt('¿Cuantas porciones va a llevar? :' + " " + cliente );
}

if (porcionDeTorta == 1) {
    alert ( cliente + '' + 'el monto es $200');
} else if( porcionDeTorta == 2){
    alert( cliente + ' ' + 'el monto es $360 ya que tienes un 10% de descuento');
}else if(porcionDeTorta == 3){
    alert( cliente + ' ' + 'el monto es $510 ya que tienes un 15% de descuento');
} else if(porcionDeTorta == 4){
    alert( cliente + ' ' + 'el monto es $640 ya que tienes un 20% de descuento');
}

alert('Gracias por tu compra :' + " " + cliente) 