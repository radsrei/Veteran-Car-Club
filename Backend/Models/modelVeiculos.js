import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Veiculo = db.define('veiculo',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    marca: {
        type: Sequelize.STRING(100)
    },
    modelo: {
        type: Sequelize.STRING(100)
    },
    ano: {
        type: Sequelize.INTEGER
    },
    placa: {
        type: Sequelize.STRING(100)
    },
    placaPreta: {
        type : Sequelize.BOOLEAN    
    },
    cor: {
        type: Sequelize.STRING(100)
    },
    quilometragem: {
        type: Sequelize.INTEGER
    },
    membro_id: {
        type: Sequelize.INTEGER,
        ref: 'Membro'
    }
});

export default Veiculo