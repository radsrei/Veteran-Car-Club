const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Veteran', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const routeEventos = require('./Routes/routeEventos.js');
const routeFinanceiro  = require('./Routes/routeFinanceiro.js');
const routeMembros = require('./Routes/routeMembros.js');
const routeVeiculos = require('./Routes/routeVeiculos.js');

app.use('/api/veiculos', routeVeiculos);
app.use('/api/eventos', routeEventos);
app.use('/api/financeiro', routeFinanceiro);
app.use('/api/membros', routeMembros);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
