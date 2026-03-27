import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true },
    coins: { type: Number, default: 0 },
    level: { type: Number, default: 1 }
});

const Player = mongoose.model('Player', playerSchema);

export default Player;