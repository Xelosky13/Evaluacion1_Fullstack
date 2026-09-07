function inyectarFooter(){
    document.getElementById("footer").innerHTML = '<div class="contenedor"><div class="caluga"><div class="caluguita"><h3>Sobre Nosotros</h3><p>Tenemos las fragancias más deseadas del mundo árabe y de la perfumería de diseñador.Nuestra selección exclusiva fusiona elegancia, intensidad y distinción en cada nota.</p></div></div><div class="caluga"><div class="caluguita"><h3>Categorias</h3><ul><li><a href="#">Perfumes para Mujer</a></li><li><a href="#">Perfumes para Hombre</a></li><li><a href="#">Perfumes en Oferta</a></li></ul></div></div><div class="caluga"><div class="caluguita"><h3>Contacto e Informacion</h3><p><strong>Telefono: </strong>(+56) 9 1234 5678<br><strong>Email: </strong>perfumes.bergen@gmail.com<br><strong>Instagram: </strong> <a href="https://www.instagram.com/bergenperfumes_chile?igsi=c2RhZWs4Mnk4cnhm" class="insta">@bergenperfumes_chile</a></p></div></div><div class="caluga"><div class="caluguita"><h3>Subscribete</h3><p>Recibe ofertas exclusivas y novedades directamente en tu correo</p><form class="formulario"><input type="email" placeholder="Tu correo electrónico" required><button type="submit">Suscribirse</button></form></div></div></div>';
}

function inyectarHeader(){
    document.getElementById("header").innerHTML = '<div class="contenedor"><div class="logo"><a href="/index.html"><img src="../imagenes/LogoPeque.jpg" alt="Logo de la empresa"></a></div><nav class="menu"><ul class="menu-izq"><li><a href="/index.html">Inicio</a></li><li><a href="/paginas/catalogo.html">Catálogo</a></li></ul><ul class="menu-der"><li><a href="/paginas/login.html">Iniciar Sesión</a></li><li><a href="/paginas/carrito.html">Carrito</a></li></ul></nav></div>';
}

function validarRegistro(event) {
    event.preventDefault();
    var rut = document.getElementById("rut").value.trim();
    var nombre = document.getElementById("nombre").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var clave = document.getElementById("clave").value;
    var clave2 = document.getElementById("clave2").value;
    var direccion = document.getElementById("direccion").value.trim();

    if (run.indexOf(".") !== -1 || run.indexOf("-") !== -1) {
        alert("Error: El RUN debe ingresarse sin puntos ni guion (Ej: 19011022K).");
        return false;
    }
    if (run.length < 7 || run.length > 9) {
        alert("Error: El RUN debe tener entre 7 y 9 caracteres.");
        return false;
    }
    if (nombre.length > 50 && nombre.length < 2) {
        alert("Error: El nombre debe tener entre 2 y 50 caracter.");
        return false;
    }

    if (apellidos.length > 100 && apellidos.length < 2) {
        alert("Error: Los apellidos deben tener entre 2 y 100 caracteres");
        return false;
    }

    if (correo.length > 100) {
        alert("Error: El correo electrónico no puede superar los 100 caracteres.");
        return false;
    }

    if (correo.indexOf("@") === -1) {
    alert("Error: Formato de correo invalido");
    return false;
    }

    var dominioValido = false;
    if (correo.endsWith(".cl") || correo.endsWith(".com")) {
        dominioValido = true;
    }

    if (!dominioValido) {
        alert("Error: Formato de correo invalido");
        return false;
    }

    if (clave.length !== 8 || clave == clave.toLowerCase() || clave == clave.toUpperCase()) {
        alert("Error: La contraseña debe tener 8 caracteres incluyendo mayusculas y minusculas")
    }

    if (clave !== clave2) {
    alert("Error: Las contraseñas ingresadas no coinciden.");
    return false;
    }

    if (direccion.length > 100) {
        alert("Error: La dirección no puede superar los 100 caracteres.");
        return false;
    }

    alert("¡Usuario registrado con éxito!\n\nBienvenida/o: " + nombre + " " + apellidos);
    document.getElementById("formulario-registro").reset();
    return true;
}

inyectarHeader();
inyectarFooter();