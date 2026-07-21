import conexao from "../../../config/database.js";

class ManutencaoModel {
  static async cadastrar(codigo, item, data_manutencao, descricao, status) {
    const dados = [codigo, item, data_manutencao, descricao, status];

    const query = `INSERT INTO manutencao (codigo, item, data_manutencao, descricao, status) VALUES ($1, $2, $3, $5) RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];
  }

  static async listarTodos() {
    const query = `SELECT * FROM manutencao`;
    const resultado = await conexao.query(query);
    return resultado.rows;
  }

  static async buscarPorCodigo() {
    const dados = [codigo];
    const query = `SELECT * FROM manutencao WHERE codigo = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async atualizarTotal(
    codigo,
    item,
    data_manutencao,
    descricao,
    status,
  ) {
    const manutencao = await ManutencaoModel.buscarPorCodigo(codigo);
    if (manutencao.length === 0) {
      return null;
    }
    const dados = [
      novoItem,
      novoDataManutencao,
      novoDescricao,
      novoStatus,
      codigo,
    ];
    const query = `UPDATE manutencao SET item = $2, data_manutencao = $3, descricao = $4, status = $5 WHERE codigo = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async atualizarParcial(
    codigo,
    item,
    data_manutencao,
    descricao,
    status,
  ) {
    const manutencao = await ManutencaoModel.buscarPorCodigo(codigo);
    if (manutencao.length === 0) {
      return null;
    }
    const dados = [
      novoItem,
      novoDataManutencao,
      novoDescricao,
      novoStatus,
      codigo,
    ];
    const query = `UPDATE manutencao SET item = coalesce ($2,item), data_manutencao = coalesce ($3,data_manutencao), descricao = coalesce ($4,descricao) status = coalesce ($5,status) WHERE codigo = $1 RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async deletarPorCodigo(requisicao, resposta) {
    try {
      const codigo = requisicao.params.codigo;
      const manutencao = await ManutencaoModel.buscarPorCodigo(codigo);
      if (!manutencao) {
        return resposta
          .status(404)
          .json({ mensagem: "Funcionário não encontrado." });
      }
      ManutencaoModel.deletarPorCodigo(codigo);
      resposta
        .status(200)
        .json({ mensagem: "Funcionário deletado com sucesso." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao deletar funcionário.",
        erro: error.message,
      });
    }
  }

static async deletarTodos(requisição, resposta) {
    try {
      await ManutencaoModel.deletarTodos();
      resposta
        .status(200)
        .json({ mensagem: "Todos os funcionários foram deletados." });
    } catch (error) {
      resposta.status(500).json({
        mensagem: "Erro ao deletar funcionários.",
        erro: error.message,
      });
    }
  }

}
export default ManutencaoModel;
