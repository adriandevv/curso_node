import { Sequelize } from "../db/config.js";


const models = Sequelize.models;

class PrestamosServices {
    constructor(){
    }

    async findAll(){
        try {
            const prestamos = await models.Prestamos.findAll();
            return prestamos;
        } catch (error) {
            console.log('Error al obtener los préstamos:', error);
        }
    }
}




export default PrestamosServices;