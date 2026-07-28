import express from "express";
import AdminController from "../controller/admin.controller.js";
import AutenticacaoMiddleware from "../../../middleware/autenticacao.middleware.js";

const routerAdmin = express.Router();
//rotas publicas:
routerAdmin.post("/cadastrar", AdminController.cadastrar);
routerAdmin.post("/login", AdminController.login);
//rota privada:
routerAdmin.get(
  "/perfil/:email",
  AutenticacaoMiddleware.autenticar,
  AdminController.perfil,
);

export default routerAdmin;
