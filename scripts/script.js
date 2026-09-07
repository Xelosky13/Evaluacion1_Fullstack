function inyectarFooter(){
    document.getElementById("footer").innerHTML = '<div class="contenedor"><div class="caluga"><div class="caluguita"><h3>Sobre Nosotros</h3><p>Tenemos las fragancias más deseadas del mundo árabe y de la perfumería de diseñador.Nuestra selección exclusiva fusiona elegancia, intensidad y distinción en cada nota.</p></div></div><div class="caluga"><div class="caluguita"><h3>Categorias</h3><ul><li><a href="#">Perfumes para Mujer</a></li><li><a href="#">Perfumes para Hombre</a></li><li><a href="#">Perfumes en Oferta</a></li></ul></div></div><div class="caluga"><div class="caluguita"><h3>Contacto e Informacion</h3><p><strong>Telefono: </strong>(+56) 9 1234 5678<br><strong>Email: </strong>perfumes.bergen@gmail.com<br><strong>Instagram: </strong> <a href="https://www.instagram.com/bergenperfumes_chile?igsi=c2RhZWs4Mnk4cnhm" class="insta">@bergenperfumes_chile</a></p></div></div><div class="caluga"><div class="caluguita"><h3>Subscribete</h3><p>Recibe ofertas exclusivas y novedades directamente en tu correo</p><form class="formulario"><input type="email" placeholder="Tu correo electrónico" required><button type="submit">Suscribirse</button></form></div></div></div>';
}

function inyectarHeader(){
    document.getElementById("header").innerHTML = '<div class="contenedor"><div class="logo"><a href="/index.html"><img src="../imagenes/LogoPeque.jpg" alt="Logo de la empresa"></a></div><nav class="menu"><ul class="menu-izq"><li><a href="/index.html">Inicio</a></li><li><a href="/paginas/catalogo.html">Catálogo</a></li></ul><ul class="menu-der"><li><a href="/paginas/login.html">Iniciar Sesión</a></li><li><a href="/paginas/carrito.html">Carrito</a></li></ul></nav></div>';
}


inyectarHeader();
inyectarFooter();