import { Sequelize } from "sequelize";

const db = new Sequelize('catatandb', 'root', '', {
    host: '35.202.212.232',
    dialect: 'mysql'
});

export default db;