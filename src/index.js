import express from "express";
import dotenv from "dotenv";
import router from "./modules/manutencoes/routes/manutencoes.route.js";
import e from "express";

dotenv.config();
const PORTA = process.env.PORTA || 3000;
const app = express();
app.use(express.json());
app.use(router);
app.use(express.json());

app.get("/", (requisicao, resposta) => {
  try {
    resposta
      .status(200)
      .json({
        mensagem: "API de Manutenção funcionando com Sucesso",
        status: "OK",
        data: new Date().toLocaleString("pt-BR", {
          timeZone: "America/Recife",
        }),
      });
  } catch (error) {
    resposta
      .status(500)
      .json({
        mensagem: "Erro ao Verificar a saúde da API",
        erro: error.message,
      });
  }
});
