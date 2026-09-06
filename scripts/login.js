let formulario = document.getElementById("form-login");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;
    
    let errorCorreo = document.getElementById("error-correo");
    let errorPassword = document.getElementById("error-password");

    let todoBien = true;

    if (correo == "") {
        errorCorreo.textContent = "Falta ingresar tu correo.";
        errorCorreo.style.display = "block"; 
        todoBien = false; 
    } else {
        errorCorreo.style.display = "none"; 
    }

    if (password == "") {
        errorPassword.textContent = "Falta ingresar tu contraseña.";
        errorPassword.style.display = "block";
        todoBien = false;
    } else {
        errorPassword.style.display = "none";
    }

    if (todoBien == true) {
        if(correo == "admin@admin.cl" && password == "admin"){
            alert("¡Inicio de sesión exitoso como administrador!");
            window.location.href = "admin.html"
        } else {
            alert("¡Inicio de sesión exitoso como cliente!");
            window.location.href = "catalogo.html";
        }
    }
});