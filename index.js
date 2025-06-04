import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerapi from './routes/index.js';


dotenv.config();

/* 
esto es un ejemplo de un servidor básico en Node.js usando Express y CORS.
Puedes usar este código como punto de partida para crear tu propia API.
*/

const app = express();

const PORT = process.env.PORT || 3000;

/*
const corsOptions = {
  origin: '*', // Permite todas las solicitudes de origen
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
  allowedHeaders: 'Content-Type, Authorization', // Encabezados permitidos
};

*/


app.use(cors());

app.use(express.json());

routerapi(app);

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API!' });
}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});