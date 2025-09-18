import Joi from 'joi';



const nombre = Joi.string().min(3).max(30);
const id = Joi.number().integer().positive().min(1);


const querySchema = Joi.object({
  nombre: nombre.required()
});

const paramsSchema = Joi.object({
  id: id.required()
});



export {querySchema, paramsSchema};