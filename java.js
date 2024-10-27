function submitForm() {
    // Obtener valores
    const text = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    
    
    const checkboxes = document.querySelectorAll('input[name="options"]:checked');
    let checkboxValues = [];
    checkboxes.forEach((checkbox) => {
        checkboxValues.push(checkbox.value);
    });

    const radio = document.querySelector('input[name="radioOption"]:checked');
    const radioValue = radio ? radio.value : '';

    const datetime = document.getElementById('datetime').value;
    const color = document.getElementById('color').value;
    const range = document.getElementById('range').value;

    // Validación de datos
    if (!text) return alert('El campo de texto está vacío.');
    if (!email) return alert('El campo de email está vacío.');
    if (checkboxValues.length === 0) return alert('Debe seleccionar al menos una opción en los checkboxes.');
    if (!radioValue) return alert('Debe seleccionar una opción de radio.');
    if (!datetime) return alert('Debe seleccionar una fecha y hora.');
    if (!color) return alert('Debe seleccionar un color.');
    if (!range) return alert('Debe seleccionar un valor de rango.');

    // Agregar datos a tabla
    const table = document.getElementById('TablaDeDatos').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = text;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = checkboxValues.join(', ');
    newRow.insertCell(3).textContent = radioValue;
    newRow.insertCell(4).textContent = datetime;
    newRow.insertCell(5).textContent = color;
    newRow.insertCell(6).textContent = range;

    // Limpiar el formulario
    document.getElementById('Formulario').reset();
}
