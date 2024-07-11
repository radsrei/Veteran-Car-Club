import { Sequelize } from "sequelize";

const db = new Sequelize('veteran_car', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'

})
export default db