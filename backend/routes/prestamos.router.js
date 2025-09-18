import express from 'express';
import PrestamosServices from '../services/prestamos.services.js';
import validatorHandler from '../middlewares/validator.handler.js';
import { querySchema, paramsSchema } from '../schema/prestamos.schema.js';
// prestamos/

const router = express.Router();
const services = new PrestamosServices();

/*
GET para obtener información no permite body 

POST para crear un nuevo recurso

PUT para actualizar un recurso existente, reemplazando todo su contenido

PATCH para actualizar parcialmente un recurso existente

DELETE para eliminar un recurso existente
*/

router.get('/all/:id',validatorHandler(querySchema,'query'), validatorHandler(paramsSchema,'params'), async (req, res) => {
    const {id} = req.params;
    const {nombre} = req.query; // Ejemplo de query string


    console.log('ID recibido:', id);
    console.log('Nombre recibido:', nombre);

   const prestamos = await services.findAll();

   res.json({
         message: 'Lista de préstamos',
         prestamos,
         id,
         nombre
   });

 }
);




export default router;