import express from 'express';
import usuariosRouter from './usuarios.router.js';
import prestamosRouter from './prestamos.router.js';


const routerapi =(app)=>{
const router = express.Router();

app.use('/api/v1', router);

router.use('/usuarios', usuariosRouter);

router.use('/prestamos',prestamosRouter);


};
export default routerapi;