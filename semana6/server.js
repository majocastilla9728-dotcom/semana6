const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente - Semana 6');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

const express = require('express');
const app = express();

// Para poder leer datos en formato JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente - Semana 6');
});

// Ruta de registro
app.post('/registro', (req, res) => {
  const datos = req.body;
  res.json({
    estado: "Usuario registrado",
    datos: datos
  });
});

// Ruta de incidencia
app.post('/incidencia', (req, res) => {
  const reporte = req.body;
  res.json({
    estado: "Incidencia reportada",
    reporte: reporte
  });
});

// Servidor escuchando en puerto 3000
app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

