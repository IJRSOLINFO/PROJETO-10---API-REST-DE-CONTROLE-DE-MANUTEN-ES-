import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const { Pool, Client } = pg;

const conexao = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
//os valores passados
// 
try {
  await conexao.query('SELECT NOW()');
  console.log('Conexão com o banco de dados estabelecida com sucesso.');
} catch (error) {
  console.error({'mensagem': 'Erro ao conectar com o banco de dados:', 'erro': error.message}); 
}

export default conexao;