import express from 'express';
import Player from '../models/Player.js';

const router = express.Router();

router.post('/save', async (req, res) => {
    try {
        const { userId, username, coins, level } = req.body;
        
        const updatedPlayer = await Player.findOneAndUpdate(
            { userId: userId },
            { username: username, coins: coins, level: level },
            { new: true, upsert: true }
        );
        
        res.status(200).json({ message: 'Datos guardados', player: updatedPlayer });
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar la peticion de guardado' });
    }
});

router.get('/load/:userId', async (req, res) => {
    try {
        const player = await Player.findOne({ userId: req.params.userId });
        
        if (player) {
            res.status(200).json(player);
        } else {
            res.status(404).json({ message: 'Registro de jugador no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al procesar la peticion de carga' });
    }
});

export default router;