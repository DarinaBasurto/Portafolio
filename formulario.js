document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const nacimiento = document.getElementById("nacimiento").value;
    const color = document.getElementById("color").value;

    const resultado = `
        Nombre: ${nombre}<br>
        Correo: ${correo}<br>
        Edad: ${edad}<br>
        Género: ${genero}<br>
        Fecha de nacimiento: ${nacimiento}<br>
        Color favorito: ${color}
    `;

    document.getElementById("resultadoFormulario").innerHTML = resultado;
});
