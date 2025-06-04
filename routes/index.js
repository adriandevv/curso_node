import express from 'express';
import usuariosRouter from './usuarios.router.js';


const routerapi =(app)=>{
const router = express.Router();

app.use('/api/v1', router);

router.use('/usuarios', usuariosRouter);

router.get('/products', (req, res) => {
  res.status(200).json({ message: 'List of products' });       
});


};
export default routerapi;