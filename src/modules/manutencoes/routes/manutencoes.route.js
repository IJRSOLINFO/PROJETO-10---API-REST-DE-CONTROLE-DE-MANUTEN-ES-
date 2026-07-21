import express from "express";
import ManutencoesController from "../controllers/manutencoes.controller.js";

const router = express.Router();

router.post("/cadastrar", ManutencoesController.cadastrar);
router.post("/listar", ManutencoesController.listarTodos);
router.post("/buscar/:codigo", ManutencoesController.buscarPorCodigo);
router.post("/atualizar/:codigo", ManutencoesController.atualizarTotal);
router.post("/atualizar-parcial/:codigo", ManutencoesController.atualizarParcial);
router.post("/deletar/:codigo", ManutencoesController.deletarPorCodigo);
router.post("/deletar-todos", ManutencoesController.deletarTodos);

export default router;
