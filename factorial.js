document.getElementById("factorialForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    
    const numero = parseInt(document.getElementById("numero").value);
    let resultado;

    if (numero < 0) {
        resultado = "El factorial no está definido para números negativos.";
    } else {
        resultado = `El factorial de ${numero} es: ${calcularFactorial(numero)}`;
    }

    document.getElementById("resultadoFactorial").textContent = resultado;
});

function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}
