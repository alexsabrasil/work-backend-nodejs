const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ mensagem: 'Bem-vindo ao backend Node.js!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
