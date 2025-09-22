const nombres = [];

function agregarNombre(nombre) {
    if (nombre) {
        nombres.push(nombre);
        alert(`Nombre "${nombre}" agregado correctamente.`);
    } else {
        alert("No ingresaste un nombre válido.");
    }
}

function mostrarNombres() {
    if (nombres.length === 0) {
        alert("La lista está vacía.");
    } else {
        alert("Lista de nombres:\n" + nombres.join("\n"));
    }
}

let opcion;
do {
    opcion = prompt(
        "Elige una opción:\n1. Agregar nombre\n2. Ver lista\n3. Salir"
    );

    switch (opcion) {
        case "1":
            const nuevoNombre = prompt("Ingresa un nombre:");
            agregarNombre(nuevoNombre);
            break;
        case "2":
            mostrarNombres();
            break;
        case "3":
            alert("¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Intenta de nuevo.");
    }
} while (opcion !== "3");