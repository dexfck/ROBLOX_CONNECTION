import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./database/connection.js"
import playerRoutes from "./routes/playerRoutes.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/players", playerRoutes)

app.listen(PORT, () => {
    console.log(`Servidor activo escuchando en el puerto ${PORT}`)
})
