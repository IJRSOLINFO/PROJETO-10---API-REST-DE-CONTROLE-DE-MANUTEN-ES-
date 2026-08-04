import conexao from "../../../config/database.js";

class AdminModel {
  static async cadastrar( nome, email, senha) {
    const dados = [ nome, email, senha];
    const query = `INSERT INTO admins ( nome, email, senha) VALUES ($1, $2, $3) RETURNING *`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows;
  }

  static async contarAdmins() {
    const query = `SELECT COUNT(*) from admins`;
    const resultado = await conexao.query(query);
    return Number(resultado.rows[0].count);
  }

  static async buscarPorEmail(email) {
    const dados = [email];
    const query = `SELECT * from admins WHERE email = $1`;
    const resultado = await conexao.query(query, dados);
    return resultado.rows[0];  
  }
}

export default AdminModel;
