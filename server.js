import routeEventos from './Backend/Routes/routeEventos.js'
import routeFinanceiro  from './Backend/Routes/routeFinanceiro.js'
import routeMembros from './Backend/Routes/routeMembros.js'
import routeVeiculos from './Backend/Routes/routeVeiculos.js'

import express from "express"   
import cors from "cors"
import db from "./Backend/config/database.js"

import Eventos from './Backend/Models/modelEventos.js'
import Finaceiro from './Backend/Models/modelFinanceiro.js'
import Membro from './Backend/Models/modelMembros.js'
import Veiculos from './Backend/Models/modelVeiculos.js'

const app = express();
app.use(express.json());
app.use(cors());

try {
    await db.authenticate()
    console.log("Conexão com o MySQL estabelecida!")
} catch (error) {
    console.log("Conexão com o MySQL NÃO estabelecida!", error)
}

 Membro.associate = (models) => {
    Veiculos.hasMany(models.Veiculos, 
        { foreignKey: 'id', as: 'veiculos'})

    Membro.hasMany(models.Membro, 
        { foreignKey: 'id', as: 'membro'})    
} 



app.use('/api/veiculos', routeVeiculos);
app.use('/api/eventos', routeEventos);
app.use('/api/financeiro', routeFinanceiro);
app.use('/api/membros', routeMembros);

Membro.belongsTo(Veiculos, { foreignKey: 'id', as: 'veiculos'})

//  const PORT = process.env.PORT || 5000;
//  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(5000, () => console.log("servidor em execução em http://localhost:5000"))