import express from "express";
import dotenv from "dotenv";
import comidaRoute from "./src/routes/bruxoRoute.js"

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send(`🚀 Servidor funcionando...`);
});

app.use('/', comidaRoute);

app.listen(serverPort, () => {
  console.log(`🚀 Servidor rodando na porta ${serverPort}`);
});