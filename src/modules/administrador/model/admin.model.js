import conexao from "../../../config/database.js";

class AdminModel {
  static async cadastrar(id, nome, email, senha) {
    const dados = [id, nome, email, senha];
    const query = `INSERT INTO admins (id, nome, email, senha) VALUES ($1, $2, $3, $4) RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async contarAdmins() {
    const query = `SELECT COUNT(*) from admins`;
    const resultado = await conexao.query(query);
    return Number(resultado.rows);
  }

  static async buscarPorEmail(email) {
    const dados = [email];
    const query = `SELECT * from admins WHERE email = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }
}

export default AdminModel;
