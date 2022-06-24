const titulo = document.getElementById('titulo');

const mostrarProductosT = document.getElementById('mostrarProductosT');

const mostrarProductosB = document.getElementById('mostrarProductosB');

const div = document.querySelector('.div');

let cart = [];

console.log(cart)


function generarPedidoT(){ 
tortas.forEach((torta)=>{ 
   let card = document.createElement("div");
   mostrarProductosT.append(card);

   let img = document.createElement("img");
   img.setAttribute("src", torta.img);

   let nombre = document.createElement("h3");
   nombre.textContent = (torta.nombre);

   let precio = document.createElement("p");
   precio.textContent = (torta.precio);

   let boton = document.createElement("button");
   boton.textContent = "Agregar al carrito";

   card.append(img, nombre, precio, boton);

   boton.addEventListener("click", function () {
                cart.push(torta)
                alert("Agregaste " + torta.nombre + " al carrito")
                div.innerHTML = ``
                showCart()
   }) 
  }
)}

generarPedidoT()

function generarPedidoB(){
  bebidas.forEach((bebida)=>{ 
   let card = document.createElement("div");
   mostrarProductosB.append(card);

   let img = document.createElement("img");
   img.setAttribute("src", bebida.img);

   let nombre = document.createElement("h3");
   nombre.textContent = (bebida.nombre);

   let precio = document.createElement("p");
   precio.textContent = (bebida.precio);

   let boton = document.createElement("button");
   boton.textContent = "Agregar a carrito";

   card.append(img, nombre, precio, boton);

   boton.addEventListener("click", function () {
    cart.push(bebida)
    alert("Agregaste " + bebida.nombre + " al carrito")
    div.innerHTML = ``
    showCart()
      }) 
    })
}

generarPedidoB();

const mostrarCart = document.getElementById('mostrarCard');
const Cart = document.getElementById('Cart');
const listaC = document.getElementById('listaC');
const botonC = document.getElementById('MostrarCarrito');

let alertCard = document.createElement('h6');
alertCard.setAttribute('class','alerta');

if(!cart.length){
  alertCard.textContent = ('El carrito esta vacio');
  div.append(alertCard);
}


function showCart() {
  alertCard.remove()

  cart.forEach((element) => {
      const divCart = document.createElement('li')
      divCart.innerHTML += ` 
      <img src="${element.img}">
      <h3>${element.nombre}</h3>
      <h3>${element.precio}</h3>
      <button class="eliminar" data-id=${element.id}>deshacer</button>`

      
      div.appendChild(divCart)
  })
}

let eliminarItem = document.querySelector(".eliminar");

const total = cart.map((item) => (item.precio)).reduce((acc, value) => acc + value, 0);

console.log(total);

let precioTotal = document.createElement('h3');
precioTotal.textContent = ('Total a pagar:' + ' ' + '$' + ' ' + total);


let vaciar = document.createElement('button');
vaciar.textContent = ('Vaciar');
div.append(vaciar);

vaciar.onclick = () => {
  cart = [];
  div.innerHTML = ``;

}

botonC.onclick = () => {
  div.innerHTML= ``;
  showCart()
}

function Terminar() {
  class Cliente {
      constructor(nombre, telefono, mail) {
          this.nombre = nombre;
          this.telefono = telefono;
          this.mail = mail;
      }
  }
  let nombre = document.getElementById("nombre")
  let direccion = document.getElementById("telefono")
  let mail = document.getElementById("email")
  let compraCliente = new Cliente(nombre.value, telefono.value, mail.value)
  console.log(compraCliente)
  console.log(cart)
}

let terminarPedido = document.getElementById("terminarPedido")

terminarPedido.onclick = (e) => {
  e.preventDefault()
  Terminar()
}