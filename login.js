document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener los valores del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verificar las credenciales
    if (username === "profeUCH" && password === "profeuch2024") {
        window.location.href = "dashboard_profe.html";
    } else if (username === "alumnoUCH" && password === "alumnouch2024") {
        window.location.href = "dashboard_alumno.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
