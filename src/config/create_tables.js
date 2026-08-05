import conexao from "./database.js";

async function criarTabela() {
  try {
    const query = `
        CREATE TABLE if not exists manutencao (
            codigo serial4 NOT NULL,
            item varchar(100) NOT NULL,
            data_manutencao date NOT NULL,
            descricao text NULL,
            status varchar(20) NOT NULL,
            CONSTRAINT manutencao_pkey PRIMARY KEY (codigo)
        );

        CREATE TABLE if not exists admins (
            id serial4 NOT NULL,
            nome varchar(100) NOT NULL,
            email varchar(150) NOT NULL,
            senha varchar(255) NOT NULL,
            ativo bool DEFAULT true NOT NULL,
            criado_em timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
            CONSTRAINT admins_email_key UNIQUE (email),
            CONSTRAINT admins_pkey PRIMARY KEY (id)
);
`;
    await conexao.query(query);
    console.log("Tabelas criadas com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabelas:", error.message);
  }
}

export default criarTabela;