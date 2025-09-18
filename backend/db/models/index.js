import { Prestamos, PrestamoSchema } from "./prestamos.model.js";



function setupModels(sequelize){
    Prestamos.init(PrestamoSchema,Prestamos.config(sequelize));



    Prestamos.associate(sequelize.models);


}


export default setupModels;