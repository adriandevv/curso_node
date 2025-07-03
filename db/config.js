import sequelize from 'sequelize';
import setupModels from './models/index.js';
import dotenv from 'dotenv';

dotenv.config();

// Obtener variables de entorno para la conexión
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;


const Sequelize = new sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
host: DB_HOST,
port: DB_PORT,
dialect: 'mysql', // o 'postgres', 'sqlite', etc. según tu base de datos
logging: false, // Desactiva los logs de SQL
});



setupModels(Sequelize);

export {Sequelize};