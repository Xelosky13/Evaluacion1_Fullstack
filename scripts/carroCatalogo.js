let cart = [];

// Elementos del DOM
const cartItems = document.querySelector("#items-carrito");
const cartCount = document.querySelector("#total-items");
const cartTotal = document.querySelector("#total-esmeraldas");
const clearCartButton = document.querySelector("#btn-vaciar");
const addButtons = document.querySelectorAll(".btn-agregar");

// Agregar producto al carrito
function addToCart(id, name, price) {
    const existingProduct = cart.find(function(item) {
        return item.id === id;
    });

    if (existingProduct) {
        if (existingProduct.quantity >= 64) {
            alert("¡Inventario lleno para este objeto!");
            return;
        }
        existingProduct.quantity += 1;
    } else {
        const product = { id, name, price, quantity: 1 };
        cart.push(product);
    }
    renderCart();
}

// Renderizar carrito actualizado
function renderCart() {
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>El carrito está vacío.</p>";
    } else {
        cart.forEach(function(product) {
            const item = document.createElement("div");
            // Usamos comillas invertidas (backticks) para inyectar HTML de múltiples líneas
            item.innerHTML = `
                <p><strong>${product.name}</strong></p>
                <p>
                    <button onclick="disminuirCantidad('${product.id}')" style="width:30px">-</button>
                    <span> ${product.quantity} / 64 </span>
                    <button onclick="aumentarCantidad('${product.id}')" style="width:30px">+</button>
                </p>
                <p>Subtotal: ${product.quantity * product.price} Esm.</p>
                <button onclick="eliminarProducto('${product.id}')" style="background-color: lightcoral; width: auto;">Eliminar</button>
                <hr style="margin-top: 10px;">
            `;
            cartItems.appendChild(item);
        });
    }

    cartCount.textContent = calculateTotalQuantity();
    cartTotal.textContent = calculateTotalPrice();
}

// Aumentar cantidad desde el carrito
function aumentarCantidad(id) {
    const product = cart.find(function(item) {
        return item.id === id;
    });

    if (product) {
        if (product.quantity >= 64) {
            alert("¡Inventario lleno para este objeto!");
            return;
        }
        product.quantity += 1;
        renderCart(); // Redibujamos para actualizar los números
    }
}

// Disminuir cantidad desde el carrito
function disminuirCantidad(id) {
    const product = cart.find(function(item) {
        return item.id === id;
    });

    if (product) {
        if (product.quantity > 1) {
            product.quantity -= 1;
            renderCart();
        } else {
            // Si la cantidad llega a 0, lo eliminamos directamente
            eliminarProducto(id);
        }
    }
}

// Eliminar un producto por completo
function eliminarProducto(id) {
    // filter() crea un nuevo arreglo con todos los productos EXCEPTO el que coincida con el id
    cart = cart.filter(function(item) {
        return item.id !== id;
    });
    renderCart();
}

// Calcular Totales
function calculateTotalQuantity() {
    let total = 0;
    cart.forEach(function(product) {
        total += product.quantity;
    });
    return total;
}

function calculateTotalPrice() {
    let total = 0;
    cart.forEach(function(product) {
        total += product.price * product.quantity;
    });
    return total;
}

// Eventos Botones Agregar
addButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const productElement = button.closest(".producto");
        const id = productElement.dataset.id;
        const name = productElement.dataset.name;
        const price = Number(productElement.dataset.price);

        addToCart(id, name, price);
    });
});

// Evento Vaciar Carrito
clearCartButton.addEventListener("click", function() {
    cart = [];
    renderCart();
});

// FUNCIÓN PARA LA VISTA DE DETALLE (Usando LocalStorage)
function guardarDetalle(enlace) {
    const productElement = enlace.closest(".producto");
    
    // Extraemos la información visual actual
    const nombre = productElement.querySelector(".titulo-producto").innerText;
    const imagenSrc = productElement.querySelector(".imagen-productos").src;
    
    // Guardamos en la memoria del navegador
    localStorage.setItem("detalleNombre", nombre);
    localStorage.setItem("detalleImagen", imagenSrc);
}

// Si estamos en la página de detalles, cargamos los datos
document.addEventListener("DOMContentLoaded", function() {
    const tituloDetalle = document.querySelector(".cuadro-detalle h2");
    const imagenDetalle = document.querySelector(".imagen-detalle");
    
    if (tituloDetalle && imagenDetalle) {
        tituloDetalle.innerText = localStorage.getItem("detalleNombre");
        imagenDetalle.src = localStorage.getItem("detalleImagen");
    }
});

// Mostrar estado inicial
renderCart();