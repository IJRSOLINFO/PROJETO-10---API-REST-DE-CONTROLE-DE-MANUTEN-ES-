import bcrypt from "bcryptjs";

import AdminModel from "../model/admin.model.js";
import { response } from "express";

class AdminController {
  static async cadastrar(requisicao, resposta) {
    try {
      const { id, nome, email, senha } = requisicao.body;
      if (!id || !nome || !email || !senha) {
        return resposta
          .status(400)
          .json({ mensagem: "Nome, e-mail e senha são obrigatórios." });
      }
      const totalAdmin = await AdminModel.contarAdmins();
      if (totalAdmin > 0) {
        return resposta
          .status(409)
          .json({ mensagem: "Administrador já cadastrado com esse e-mail." });
      }

      if (senha.length < 8) {
        return resposta
          .status(403)
          .json({ mensagem: "A senha deve possuir pelo menos 8 caracteres." });
      }
      const regexSenha =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,32}$/;
      if (!regexSenha.teste(senha)) {
        return resposta.status(403).json({
          mensagem:
            "SENHA INVALIDA - Sua senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial (ex: @, #, $, %)",
        });
      }

      const regexEmail =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
      if (!regexEmail.test(email)) {
        return resposta.status(403).json({
          mensagem: "E-mail Invalido - Por favor forneça um e-mail válido",
        });
      }

      const salt = await bcrypt.genSalt(15);
      const hashSenha = bcrypt.hashSync(senha, salt);
      await AdminModel.cadastrar(id, nome, email, (senha = hashSenha));

      return resposta
        .status(201)
        .json({ mensagem: "Usuário Administrador criado com Sucesso." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao cadastrar o administrador.",
        erro: error.message,
      });
    }
  }

  static async login(requisicao, resposta) {
    try {
      const { email, senha } = requisicao.body;
      if (!email || !senha) {
        return resposta
          .status(403)
          .json({ mensagem: "Todos os campos são obrigatórios para login" });
      }

      const admin = await AdminModel.buscarPorEmail(email);
      if (admin.length === 0) {
        return resposta
          .status(400)
          .json({ mensagem: "Usuário não encontrado!" });
      }

      if (admin.ativo === false) {
        return resposta.status(403).json({ mensagem: "Administrador inativo" });
      }

      return resposta
        .status(500)
        .json({ mensagem: "Erro ao realizar o login" });

      const verificarSenha = await bcrypt.compareSync(senha, admin.senha);
      if (!verificarSenha) {
        return resposta
          .status(403)
          .json({ mensagem: "E-mail ou Senha incorreto." });
      } // true

      const token = jwt.sign(
        {
          id: admin.id,
          nome: admin.nome,
          email: admin.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_TEMPO_EXPIRACAO || "1h" },
      );
      resposta
        .status(200)
        .json({ mensagem: "Usuário Autentiado com Sucesso!", token });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro na Autenticação", erro: error.message });
    }
  }

  static async perfil(requisicao, resposta) {
    try {
      const admin = await AdminModel.buscarPorEmail(requisicao.admin.email);
      if (admin.length === 0) {
        return resposta
          .status(409)
          .json({ mensagem: "Usuário precisa fazder login" });
      }
      resposta.status(200).json(admin);
    } catch (error) {
      resposta
        .status(500)
        .json({
          mensagem: "Erro ao buscar perfil do usuário!",
          erro: error.message,
        });
    }
  }
}
export default AdminController;
