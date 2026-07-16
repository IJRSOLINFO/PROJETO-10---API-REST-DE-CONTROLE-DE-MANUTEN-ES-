
PROJETO 10 -  — API REST DE CONTROLE DE MANUTENÇÕES/
│
├── docs/
│   ├── conventions.md
│   └── gitflow.md
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── modules/
│   │   └── manutencoes/
│   │       ├── controllers/
│   │       │   └── manutencoes.controller.js
│   │       ├── models/
│   │       │   └── manutencoes.model.js
│   │       └── routes/
│   │           └── manutencoes.route.js
│   │
│   ├── utils/
│   │   ├── utils.js
│   │   └── index.js
│   │
│   └── index.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md

Sequência correta para desenvolver (sem escrever código ainda)


### Etapa 1 — Preparar o projeto
•	Criar a pasta do projeto.
•	Executar npm init -y.
•	Instalar express, pg e dotenv.
•	Criar o arquivo .gitignore.
•	Criar o arquivo .env.

### Etapa 2 — Montar a estrutura de pastas
•	src/config
•	src/modules/manutencoes/controllers
•	src/modules/manutencoes/models
•	src/modules/manutencoes/routes
•	src/utils

Etapa 3 — Criar os arquivos vazios
•	database.js
•	index.js
•	manutencoes.controller.js
•	manutencoes.model.js
•	manutencoes.route.js

Etapa 4 — Banco de dados
Segundo o PDF, a tabela deve se chamar manutencao e possuir os campos:
Campo	Tipo
codigo	VARCHAR(20)
item	VARCHAR(100)
data_manutencao	DATE
descricao	VARCHAR(255)
status	VARCHAR(30)
Isso está definido na atividade. Não precisa criar o SQL agora, apenas planejar.

Etapa 5 — Fluxo MVC (o mais importante para a prova)
Cliente → Route → Controller → Model → PostgreSQL

Etapa 6 — Ordem para implementar o CRUD
Implemente nesta ordem:
•	POST /manutencoes/cadastrar → mais fácil para testar a conexão.
•	GET /manutencoes/listar → confirma se os dados entram no banco.
•	GET /manutencoes/listar/:codigo → aprende parâmetros de rota.
•	PUT /manutencoes/editar/total/:codigo → atualização completa.
•	PATCH /manutencoes/editar/parcial/:codigo → atualização parcial.
•	DELETE /manutencoes/excluir/:codigo → exclusão individual.
•	DELETE /manutencoes/excluir/todos → exclusão geral.

