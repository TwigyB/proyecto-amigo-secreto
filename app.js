let amigos = []; // Lista de amigos ingresados
let amigosRestantes = []; // Lista de amigos aún no sorteados

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); 

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        return;
    }

    amigos.push(nombre);
    amigosRestantes.push(nombre); // Agregar también a la lista de no sorteados
    actualizarLista();
    input.value = '';
}

// Función para actualizar la lista en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo sin repetir hasta que todos sean seleccionados
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }

    if (amigosRestantes.length === 0) {
        alert('Todos los amigos ya han sido sorteados. Reiniciando la lista...');
        amigosRestantes = [...amigos]; // Reiniciar la lista de sorteos
    }

    const indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const amigoSecreto = amigosRestantes.splice(indiceAleatorio, 1)[0]; // Extraer el amigo de la lista

    // Mostrar el resultado en pantalla
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = `<li>🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉</li>`;
}
