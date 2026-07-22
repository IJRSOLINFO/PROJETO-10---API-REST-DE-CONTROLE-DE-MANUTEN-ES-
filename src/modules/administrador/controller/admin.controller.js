import bcrypt from "bcryptjs";


import AdminModel from "../model/admin.model.js";

class AdminController {
    static async cadastrar (requisicao, resposta) {
        try {
            const { id, nome, email, senha } = requisicao.body;
            if (!id || !nome || !email || !senha) {
                return resposta.status(400).json({mensagem: "Nome, e-mail e senha são obrigatórios."});
            }
            const totalAdmin = await AdminModel.contarAdmins()
            if (totalAdmin > 0) {
                return resposta.status(409).json({mensagem: "Administrador já cadastrado com esse e-mail."})
            }

            if (senha.length < 8) { 
                return resposta.status(403).json({ mensagem: "A senha deve possuir pelo menos 8 caracteres." }); 
            }
            const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,32}$/
            if (!regex.teste(senha)) {
                return resposta.status(403).json({mensagem: "SENHA INVALIDA - Sua senha deve conter pelo menos: 1 letra maiúscula, 1 letra minúscula, 1 número, 1 caractere especial (ex: @, #, $, %)"});
            }
            const salt = await bcrypt.genSalt(15);
            const hashSenha = bcrypt.hashSync(senha, salt);
            const admin = await AdminModel.cadastrar(id, nome, email, senha=hashSenha)

            return resposta.status(201).json({mensagem: "Usuário Administrador criado com Sucesso."})


        } catch (error) {
            resposta.status(500).json({mensagem: "Erro ao cadastrar o administrador.", erro: error.message})
        }
    }
    export default AdminController