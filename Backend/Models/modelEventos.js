import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Evento = db.define('evento',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    local: {
        type: Sequelize.STRING(100)
    },
    endereco: {
        type: Sequelize.STRING(100)
    },
    data: {
        type: Sequelize.DATE
    },
    convidado: {
        type : Sequelize.BOOLEAN    
    },
    edicao:{
        type: Sequelize.STRING(100)
    },
});

export default Evento