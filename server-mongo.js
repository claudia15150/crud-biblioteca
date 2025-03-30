const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

// Pegar URL se la base de datos de MongoDB
const url = '';
const dbName = 'biblioteca';
let db;

MongoClient.connect(url)
  .then(client => {
    db = client.db(dbName);
    console.log('Conectado a MongoDB');
  })
  .catch(err => {
    console.error('Error de conexión:', err);
  });


app.get('/api/libros', async (req, res) => {
  try {
    const libros = await db.collection('libros').find().toArray();
    res.json(libros);
  } catch (err) {
    console.error('Error al obtener los libros:', err);
    res.status(500).json({ error: 'No se pudieron obtener los libros' });
  }
});

app.post('/api/libros', async (req, res) => {
  try {
    const { titulo, autor, anio } = req.body;
    const nuevoLibro = { titulo, autor, anio };
    const result = await db.collection('libros').insertOne(nuevoLibro);
    res.json(result.ops[0]);
  } catch (err) {    
    console.error('Error al agregar el libro:', err);
    res.status(500).json({ error: 'No se pudo agregar el libro' });
  }
});

app.put('/api/libros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, autor, anio } = req.body;

    const result = await db.collection('libros').updateOne(
      { _id: new ObjectId(id) },
      { $set: { titulo, autor, anio } }
    );

    if (result.modifiedCount === 0) {
      res.status(404).json({ error: 'No se encontró el libro para actualizar' });
    } else {
      res.json({ message: 'Libro actualizado' });
    }
  } catch (err) {
    console.error('Error al actualizar el libro:', err);
    res.status(500).json({ error: 'No se pudo actualizar el libro' });
  }
});

app.delete('/api/libros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.collection('libros').deleteOne({ _id: new ObjectId(id) });  // Cambiar a new ObjectId
    
    if (result.deletedCount === 0) {
      res.status(404).json({ error: 'No se encontró el libro para eliminar' });
    } else {
      res.json({ message: 'Libro eliminado' });
    }
  } catch (err) {
    console.error('Error al eliminar el libro:', err);
    res.status(500).json({ error: 'No se pudo eliminar el libro' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
