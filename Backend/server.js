import routeEventos from './Routes/routeEventos.js'
import routeFinanceiro  from './Routes/routeFinanceiro.js'
import routeMembros from './Routes/routeMembros.js'
import routeVeiculos from './Routes/routeVeiculos.js'

import express from "express"   
import cors from "cors"
import db from "./config/database.js"

import Eventos from './Models/modelEventos.js'
import Finaceiro from './Models/modelFinanceiro.js'
import Membro from './Models/modelMembros.js'
import Veiculos from './Models/modelVeiculos.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

try {
    await db.authenticate()
    console.log("Conexão com o MySQL estabelecida!")
} catch (error) {
    console.log("Conexão com o MySQL NÃO estabelecida!", error)
}

 Membro.associate = (models) => {
    Veiculos.hasMany(models.Veiculos, 
        { foreignKey: 'matr_professor', as: 'professores'})

    Curso.hasMany(models.Turma, 
        { foreignKey: 'id_turma', as: 'turmas'})    
} 



app.use('/api/veiculos', routeVeiculos);
app.use('/api/eventos', routeEventos);
app.use('/api/financeiro', routeFinanceiro);
app.use('/api/membros', routeMembros);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
