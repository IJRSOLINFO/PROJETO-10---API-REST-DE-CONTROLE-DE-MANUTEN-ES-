import ManutencaoModel from "../models/manutencoes.model.js";

class ManutencoesController {
  static async cadastrar(requesicao, resposta) {
    try {
      const { codigo, item, data_manutencao, descricao, status } =
        requesição.body;
      if (!codigo || !item || !data_manutencao || !descricao || !status) {
        return resposta
          .status(400)
          .json({ message: "Todos os campos são obrigatórios." });
        await ManutencaoModel.cadastrar({
          codigo,
          item,
          data_manutencao,
          descricao,
          status,
        });
        return resposta
          .status(201)
          .json({ message: "Manutenção cadastrada com sucesso." });
      }
    } catch (error) {
      resoposta.status(500).json({
        message: "Erro ao cadastrar manutenção.",
        error: error.message,
      });
    }
  }

  static async listarTodos(requesicao, resposta) {
    try {
      const manutencoes = await ManutencaoModel.listarTodos();
      if (manutencoes.length === 0) {
        return resposta
          .status(404)
          .json({ message: "Nenhuma manutenção encontrada." });
      }
      return resposta.status(200).json(manutencoes);
    } catch (error) {
      resposta
        .status(500)
        .json({ message: "Erro ao listar manutenções.", error: error.message });
    }
  }

  static async buscarPorCodigo(requesicao, resposta) {
    try {
      const codigo = requisicao.params.codigo;
      const manutencao = await ManutencaoModel.buscarPorCodigo(codigo);
      if (!manutencao) {
        return resposta
          .status(404)
          .json({ message: "Manutenção não encontrada." });
      }
      return resposta.status(200).json(manutencoes);
    } catch (error) {
      resposta
        .status(500)
        .json({ message: "Erro ao buscar manutenção.", error: error.message });
    }
  }

  static async atualizarTotal(requesicao, resposta) {
    try {
      const codigo = requesicao.params.codigo;
      const { item, data_manutencao, descricao, status } = requesicao.body;
      if (!codigo || !item || !data_manutencao || !descricao || !status) {
        return resposta
          .status(400)
          .json({ message: "Todos os campos são obrigatórios." });
        const manutencao = await ManutencaoModel.atualizarTotal(
          codigo,
          item,
          data_manutencao,
          descricao,
          status,
        );
        resposta.status(200).json({ manutencao });
      }
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao atualizar manutenção",
        erro: error.message,
      });
    }
  }

  static async atualizarParcial(requesicao, resoposta) {
    try {
      const codigo = requesicao.params.codigo;
      const { item, data_manutencao, descricao, status } = requesicao.body;
      const manutencao = await ManutencaoModel.atualizarParcial(
        codigo,
        item,
        data_manutencao,
        descricao,
        status,
      );
      resoposta.status(200).json({ manutencao });
    } catch (error) {
      resposta.status(500).json({ mensagem: "Erro ao atualizar Manutenção" });
    }
  }

  static async deletarTodos(requesicao, resposta) {
    try {
      await ManutencaoModel.deletarTodos();
      resposta
        .status(200)
        .json({ mensagem: "Todos os funcionárioas foram deletados" });
    } catch (error) {
      resposta
        .status(500)
        .json({ mensagem: "Erro ao deletar manutenção", erro: error.message });
    }
  }

  static async deletarPorCodigo(requesicao, resposta) {
    try {
      const codigo = requesicao.params.codigo;
      const manutencao = await ManutencaoModel.buscarPorCodigo(codigo);
      if (!manutencao) {
        return resposta
          .status(404)
          .json({ mensagem: "Manutenção não encontrada." });
      }
      ManutencaoModel.deletarPorCodigo(codigo);
      resposta
        .status(200)
        .json({ mensagem: "Manutenção deletada com sucesso" });
    } catch (error) {
      resposta.status(500).json({ mensagem: "Erro ao deletar manutenção" });
    }
  }

}
export default ManutencoesController