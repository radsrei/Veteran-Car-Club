import { Sequelize } from "sequelize";
import db from "../config/database.js"


const Financeiro = db.define('financeiro',{
    movimento: {
        type : Sequelize.DECIMAL(10,2)
    },
    saldo: {
        type : Sequelize.DECIMAL(10,2)
    },
    descricao: {
        type: Sequelize.STRING(100)
    },
    data:  {
        type: Sequelize.DATE
    },
});

export default Financeiro