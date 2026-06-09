const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente - Semana 6');
});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});

