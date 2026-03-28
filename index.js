import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/connection.js';
import playerRoutes from './routes/playerRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/favicon.ico', (req, res) => res.status(204).end());
app.get('/favicon.png', (req, res) => res.status(204).end());

app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error interno de conexion a la base de datos' });
    }
});

app.use('/api/players', playerRoutes);

export default app;