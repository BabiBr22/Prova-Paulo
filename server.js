const express = require('express');
const app = express();
const cervejaRoutes = require('./routes/cervejaRoutes');

app.use(express.json());

// Usando as rotas
app.use('/api', cervejaRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
