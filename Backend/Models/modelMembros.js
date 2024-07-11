import { Sequelize } from "sequelize";
import db from "../config/database.js"

const Membro = db.define('membro',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING(100)
    },
    email: {
        type: Sequelize.STRING(100)
    },
    telefone: {
        type: Sequelize.STRING(100)
    },
    endereco: {
        type: Sequelize.STRING(100)
    },
    dataDeNascimento: {
        type: Sequelize.DATE
    },
    CPF: {
        type: Sequelize.STRING(100)
    },
    CEP: {
        type: Sequelize.STRING(100)

    },
});

export default Membro
