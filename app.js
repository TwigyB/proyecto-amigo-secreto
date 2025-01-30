// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Eliminar espacios en blanco antes y después

    // Validación: Si el campo está vacío, mostrar alerta
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
    actualizarLista();

    // Limpiar el campo de entrada
    input.value = '';
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar lista antes de actualizar

    // Recorrer el array y mostrar cada amigo en la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }
}

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultado
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>🎉 ¡El amigo secreto`;
