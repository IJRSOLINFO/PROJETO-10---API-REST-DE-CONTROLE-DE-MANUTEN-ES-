import express from "express";
import ManutencoesController from "../controllers/manutencoes.controller.js";
import AutenticacaoMiddleware from "../../../middleware/autenticacao.middleware.js";

const router = express.Router();

router.post("/cadastrar", AutenticacaoMiddleware.autenticar, ManutencoesController.cadastrar);
router.post("/listar", AutenticacaoMiddleware.autenticar, ManutencoesController.listarTodos);
router.post("/buscar/:codigo", AutenticacaoMiddleware.autenticar, ManutencoesController.buscarPorCodigo);
router.post("/atualizar/:codigo", AutenticacaoMiddleware.autenticar, ManutencoesController.atualizarTotal);
router.post("/atualizar-parcial/:codigo", AutenticacaoMiddleware.autenticar, ManutencoesController.atualizarParcial);
router.post("/deletar/:codigo", AutenticacaoMiddleware.autenticar, ManutencoesController.deletarPorCodigo);
router.post("/deletar-todos", AutenticacaoMiddleware.autenticar, ManutencoesController.deletarTodos);

export default router;