import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import {db} from './config/db.js'
// import productRoutes from './routes/products.routes.js';
// import authRoutes from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// app.use('/api/products', productRoutes);
// app.use('/auth', authRoutes);

// Middleware de ruta no encontrada
app.get('/', (req, res) => {
  const message = `Servidor corriendo en puerto ${PORT}`;
  res.status(200).json({status_code: 200, message: message});
});

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, (req, res) => {
  const message = `Servidor corriendo en puerto ${PORT}`;
  console.log(message);
});
