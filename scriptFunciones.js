function agregarTarea() {
    let tarea = document.getElementById("nuevaTarea").value;
    if (tarea === "") {
        alert("Por favor, ingrese una tarea.");
        return;
    }

    let lista = document.getElementById("listaTareas");

    // Crear el elemento de la lista con su checkbox
    let nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `
        <input type="checkbox" onclick="completarTarea(this)">
        <span>${tarea}</span>
    `;

    lista.appendChild(nuevaTarea);
    document.getElementById("nuevaTarea").value = ""; // Limpiar el campo de texto
}

function completarTarea(checkbox) {
    let tarea = checkbox.nextSibling;
    if (checkbox.checked) {
        tarea.style.textDecoration = "line-through";
    } else {
        tarea.style.textDecoration = "none";
    }
}

function borrarLista() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
}
