const apiUrl = 'http://localhost:8080/api/libros';

async function obtenerLibros() {
  const respuesta = await fetch(apiUrl);
  const libros = await respuesta.json();
  const listaLibros = document.getElementById('libros-lista');
  listaLibros.innerHTML = '';

  libros.forEach(libro => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${libro.titulo} - ${libro.autor} (${libro.anio})</span>
      <button class="editar" onclick="editarLibro('${libro._id || libro.id}')">Editar</button>
      <button class="eliminar" onclick="eliminarLibro('${libro._id || libro.id}')">Eliminar</button>
    `;
    listaLibros.appendChild(li);
  });
}

document.getElementById('agregar').addEventListener('click', async () => {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const anio = document.getElementById('anio').value;

  const nuevoLibro = { titulo, autor, anio };

  await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevoLibro),
  });

  obtenerLibros();
  document.getElementById('titulo').value = '';
  document.getElementById('autor').value = '';
  document.getElementById('anio').value = '';
});

async function eliminarLibro(id) {
  await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
  });

  obtenerLibros();
}

async function editarLibro(id) {
  const nuevoTitulo = prompt('Nuevo título:');
  const nuevoAutor = prompt('Nuevo autor:');
  const nuevoAnio = prompt('Nuevo año:');

  const libroActualizado = { titulo: nuevoTitulo, autor: nuevoAutor, anio: nuevoAnio };

  await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(libroActualizado),
  });

  obtenerLibros();
}

obtenerLibros();
