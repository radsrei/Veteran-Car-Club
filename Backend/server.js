import routeEventos from './Routes/routeEventos.js'
import routeFinanceiro  from './Routes/routeFinanceiro.js'
import routeMembros from './Routes/routeMembros.js'
import routeVeiculos from './Routes/routeVeiculos.js'

import express from "express"   
import cors from "cors"
import db from "./config/database.js"


const app = express();
app.use(bodyParser.json());
app.use(cors());

try {
    await db.authenticate()
    console.log("Conexão com o MySQL estabelecida!")
} catch (error) {
    console.log("Conexão com o MySQL NÃO estabelecida!", error)
}




app.use('/api/veiculos', routeVeiculos);
app.use('/api/eventos', routeEventos);
app.use('/api/financeiro', routeFinanceiro);
app.use('/api/membros', routeMembros);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
