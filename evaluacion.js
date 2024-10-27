document.getElementById("calificacionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    let resultado = "";

    if (calificacion < 0 || calificacion > 10) {
        resultado = "Error: La calificación debe estar entre 0 y 10.";
    } else if (calificacion < 6) {
        resultado = "NA";
    } else if (calificacion < 7.5) {
        resultado = "S";
    } else if (calificacion < 9) {
        resultado = "B";
    } else if (calificacion < 10) {
        resultado = "MB";
    } else {
        resultado = "LAP";
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
});
