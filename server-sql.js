const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'biblioteca'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión:', err.stack);
    return;
  }
  console.log('Conectado a MySQL');
});

app.get('/api/libros', (req, res) => {
  const query = 'SELECT * FROM libros';
  db.query(query, (err, result) => {
    if (err) {
      console.error('Error al obtener los libros:', err);
      res.status(500).json({ error: 'No se pudieron obtener los libros' });
    } else {
      res.json(result);
    }
  });
});

app.post('/api/libros', (req, res) => {
  const { titulo, autor, anio } = req.body;
  const query = 'INSERT INTO libros (titulo, autor, anio) VALUES (?, ?, ?)';
  db.query(query, [titulo, autor, anio], (err, result) => {
    if (err) {
      console.error('Error al agregar el libro:', err);
      res.status(500).json({ error: 'No se pudo agregar el libro' });
    } else {
      res.json({ id: result.insertId, titulo, autor, anio });
    }
  });
});

app.put('/api/libros/:id', (req, res) => {
  const { id } = req.params;
  const { titulo, autor, anio } = req.body;
  const query = 'UPDATE libros SET titulo = ?, autor = ?, anio = ? WHERE id = ?';
  db.query(query, [titulo, autor, anio, id], (err, result) => {
    if (err) {
      console.error('Error al actualizar el libro:', err);
      res.status(500).json({ error: 'No se pudo actualizar el libro' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'No se encontró el libro para actualizar' });
    } else {
      res.json({ message: 'Libro actualizado' });
    }
  });
});

app.delete('/api/libros/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM libros WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Error al eliminar el libro:', err);
      res.status(500).json({ error: 'No se pudo eliminar el libro' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'No se encontró el libro para eliminar' });
    } else {
      res.json({ message: 'Libro eliminado' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
