document.addEventListener("DOMContentLoaded", function() {
    var cursosList = document.getElementById("cursos-list");
    var descripcionCurso = document.getElementById("descripcion-curso");

    cursosList.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            var curso = event.target.getAttribute("data-curso");
            mostrarDescripcion(curso);
        }
    });

    function mostrarDescripcion(curso) {
        var descripcion = obtenerDescripcion(curso);
        descripcionCurso.textContent = "Descripción del curso: " + descripcion;
    }

    function obtenerDescripcion(curso) {
        switch (curso) {
            case "Desarrollo Web":
                return "Curso centrado en el desarrollo de aplicaciones web.";
            case "Ingenieria de Software":
                return "Curso que aborda los principios y prácticas de la ingeniería de software.";
            case "Programacion I":
                return "Curso introductorio a la programación.";
            default:
                return "Descripción no disponible.";
        }
    }
});
