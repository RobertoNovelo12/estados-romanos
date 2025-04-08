function romanToInt(s) {
    const romanMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (i + 1 < s.length && romanMap[s[i]] < romanMap[s[i + 1]]) {
            total -= romanMap[s[i]];
        } else {
            total += romanMap[s[i]];
        }
    }
    return total;
}

function validarRomanos() {
    const romanInput = document.getElementById("romanInput").value.toUpperCase();
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");
    const pasosDiv = document.getElementById("pasos");
    const rutaEstadosP = document.getElementById("rutaEstados");

    errorMessage.style.display = "none";
    successMessage.style.display = "none";
    pasosDiv.style.display = "none";

    if (!romanInput) {
        errorMessage.textContent = "Por favor ingresa un número romano.";
        errorMessage.style.display = "block";
        return;
    }

    if (!/^[IVXLCDM]+$/.test(romanInput)) {
        errorMessage.textContent = "Solo se permiten los caracteres I, V, X, L, C, D, M.";
        errorMessage.style.display = "block";
        return;
    }

    // Verificación de reglas romanas comunes
    if (/(IIII|VV|XXXX|LL|CCCC|DD|MMMM|IL|IC|ID|IM|VX|VL|VC|VD|VM|XD|XM|LC|LD|LM|DM)/.test(romanInput)) {
        errorMessage.textContent = "Número romano inválido: Secuencias incorrectas como 'IIII', 'VV', etc. no están permitidas.";
        errorMessage.style.display = "block";
        return;
    }

    const transiciones = {
        'q0': { 'I': 'q1', 'V': 'q2', 'X': 'q3', 'L': 'q4', 'C': 'q5' },
        'q1': { 'I': 'q1', 'V': 'q2', 'X': 'q3' },
        'q2': { 'I': 'q1', 'X': 'q3' },
        'q3': { 'I': 'q1', 'V': 'q2', 'X': 'q3', 'L': 'q4', 'C': 'q5' },
        'q4': { 'I': 'q1', 'V': 'q2', 'X': 'q3' },
        'q5': { 'I': 'q1', 'X': 'q3' },
        'q6': { 'I': 'q1', 'V': 'q2', 'X': 'q3' },
        'q7': { 'I': 'q1', 'V': 'q2', 'X': 'q3' },
        'q8': { 'I': 'q1', 'V': 'q2', 'X': 'q3' },
        'q9': {}
    };



    const estadosAceptacion = new Set(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9']);

    let pasosDetallados = `Estado inicial: q0\n`;
    let estadoActual = 'q0';

    for (let i = 0; i < romanInput.length; i++) {
        const simbolo = romanInput[i];
        const estadoSiguiente = transiciones[estadoActual]?.[simbolo];

        if (!estadoSiguiente) {
            errorMessage.textContent = `Número romano inválido: ${romanInput}. Error en la transición en el estado ${estadoActual} con el símbolo ${simbolo}.`;
            errorMessage.style.display = "block";
            return;
        }

        pasosDetallados += `Transición: ${estadoActual} -> ${estadoSiguiente} (Símbolo: ${simbolo})\n`;
        estadoActual = estadoSiguiente;
    }

    if (estadosAceptacion.has(estadoActual)) {
        const valor = romanToInt(romanInput);
        successMessage.textContent = `Número romano válido: ${romanInput} = ${valor}`;
        successMessage.style.display = "block";
        rutaEstadosP.textContent = pasosDetallados;
        pasosDiv.style.display = "block";
    } else {
        errorMessage.textContent = `Número romano inválido: ${romanInput}. No termina en un estado de aceptación (${estadoActual}).`;
        errorMessage.style.display = "block";
    }
}