const pedidoCliente = []

const tortas = [{ 
   nombre: 'Cheesecake frutos rojos', 
   precio: 500 
}, 
{ 
   nombre: 'Chocotorta', 
   precio: 400 
}, { 
   nombre: 'Pastafrola', 
   precio: 350 
}, { 
   nombre: 'Bizcochuelo de naranja', 
   precio: 300 
} 
] 

const bebidas = [{ 
nombre: 'Capucchino', 
precio: 450, 
}, { 
nombre: 'Latte', 
precio: 450 
}] 

let hora = 15; 

let bienvenido = alert('Bienvenido a Nuestra Tienda') 

let nombreCliente = prompt('Ingresa tu nombre por favor =D...!') 


if (hora >= 8 && hora <= 12) { 
alert('Buenos dias..!,' + ' ' + nombreCliente + '¿' + 'Cual va a ser tu pedido?') 
} else { 
alert('Buenas tardes,' + ' ' + nombreCliente + '¿' + 'Que vas a llevar?') 
} 


function generarPedido(){ 
tortas.forEach((torta)=>{ 
   let pedidoTorta = prompt("Deseas agregar " + torta.nombre + " al pedido? Su precio es " + torta.precio) 
   if (pedidoTorta.toLowerCase() === "si"){ 
      pedidoCliente.push(torta) 
   }
}) 
bebidas.forEach((bebida)=>{ 
   let pedidoBebida = prompt("Deseas agregar " + bebida.nombre + " al pedido? Su precio es " + bebida.precio) 
   if (pedidoBebida.toLowerCase() === "si"){ 
      pedidoCliente.push(bebida) 
   }
}) 
}

generarPedido()

console.log(pedidoCliente)

const costoTotal = pedidoCliente.map((item) => item.precio).reduce((acc, value) => acc + value ,0);

console.log(costoTotal);