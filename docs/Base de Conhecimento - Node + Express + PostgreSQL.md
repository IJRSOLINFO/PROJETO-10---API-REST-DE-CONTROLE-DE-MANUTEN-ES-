# CAPÍTULO 1 — Ferramentas necessárias
## Objetivo

Antes de iniciar qualquer projeto Backend, precisamos instalar as ferramentas responsáveis por desenvolver, executar, armazenar os dados e testar nossa aplicação.

## Node.js
### O que é?

O Node.js é um ambiente de execução do JavaScript fora do navegador.

Normalmente o JavaScript roda apenas em páginas Web.

Com o Node conseguimos criar:

APIs
Sistemas Web
Servidores
Microsserviços
Automações

Sem utilizar um navegador.

### O que ele faz?

Ele interpreta nosso código JavaScript.

Por exemplo:

console.log("Olá Mundo")

Quem executa esse código é o Node.

### O que instalar?

Sempre utilize a versão:

LTS (Long Term Support)

Ela é a versão estável.

## npm

O npm já vem instalado junto com o Node.

### O que significa?
Node Package Manager

É o gerenciador de pacotes do Node.

Ele instala bibliotecas.

Exemplo:

npm install express

## PostgreSQL
### O que é?

É um Banco de Dados Relacional.

Sua função é armazenar informações.

Exemplo:

Funcionários

Clientes

Produtos

Manutenções

Embarcações

## pgAdmin

É apenas uma interface gráfica para administrar o PostgreSQL.

Ele facilita:

criar banco
criar tabela
executar SQL
visualizar dados

## VS Code

É o editor onde desenvolveremos o projeto.

## Extensões
### ESLint

Analisa seu código.

Aponta erros.

Sugere melhorias.

### Prettier

Organiza automaticamente a formatação.

Por exemplo:

Antes

if(true){console.log("teste")}

Depois

if (true) {
    console.log("teste");
}

### Thunder Client

Serve para testar APIs.

Substitui o Postman.

### Error Lens

Mostra os erros diretamente na linha do código.

### DotENV

Ajuda a visualizar arquivos .env.

### PostgreSQL

Permite acessar o banco diretamente pelo VSCode.

# CAPÍTULO 2 — Criando o Projeto
## Criando a pasta
Comando: mkdir api-manutencoes

Cria a pasta do projeto.

## Entrando na pasta
Comando: cd api-manutencoes

## Inicializando o Node
Comando: npm init -y
### O que esse comando faz?
- Cria automaticamente o arquivo

package.json

Esse arquivo é considerado a identidade do projeto.

Ele contém:

nome
versão
scripts
dependências
autor

# CAPÍTULO 3 — Bibliotecas
## Express
### O que é?

É um Framework.

Sua função é facilitar a criação de APIs.

Sem Express:

Teríamos que programar praticamente tudo.

Com Express:

Grande parte já vem pronta.

Instalação:

Comando: npm install express

## pg

É o driver que permite o Node conversar com o PostgreSQL.

Sem ele:

Node não consegue acessar o banco.

## dotenv

Permite ler o arquivo

 .env

Nele ficam informações sensíveis como:

usuário
senha
porta
banco

## nodemon

Durante o desenvolvimento ele reinicia automaticamente o servidor sempre que você salva um arquivo.

Sem ele:

Precisamos parar e iniciar o servidor toda vez.

# CAPÍTULO 4 — Estrutura do Projeto

Tomando como base o projeto que você mostrou na imagem, eu explicaria cada pasta assim:

## PROJETO

### src/

Contém todo o código da aplicação.

### config/

Arquivos de configuração.

Exemplo:

database.js

Responsável por conectar ao PostgreSQL.

### modules/

Onde ficam os módulos do sistema.

Exemplo:

funcionarios/

clientes/

produtos/

manutencoes/

Cada módulo possui suas próprias pastas.

### controllers/

Recebem as requisições do usuário.

Validam informações.

Chamam o Model.

Retornam a resposta.

Nunca acessam o banco diretamente.

### models/

São responsáveis pelas consultas SQL.

INSERT

SELECT

UPDATE

DELETE

Toda comunicação com o banco ocorre aqui.

### routes/

Define quais URLs existem.

Exemplo:

GET /manutencoes/listar

Quando alguém acessa essa rota, ela chama um método do Controller.

### utils/

Funções auxiliares reutilizadas em vários pontos do projeto.

# CAPÍTULO 5 — ARQUIVOS INICIAIS
## Objetivo

Conhecer os arquivos responsáveis pelo funcionamento da aplicação.

Mesmo uma API simples possui arquivos que possuem funções específicas.

### index.js

É o ponto de entrada da aplicação.

É o primeiro arquivo executado quando iniciamos o projeto.

Responsabilidades
iniciar o servidor
carregar o Express
configurar middlewares
carregar as rotas
iniciar a aplicação

Pense nele como a porta principal da aplicação.

### package.json

É a identidade do projeto.

Nele ficam registradas informações como:

Nome
Versão
Autor
Dependências
Scripts
Licença

Sem esse arquivo o Node praticamente não reconhece o projeto.

### .gitignore

Lista tudo que o Git não deve enviar para o GitHub.

Exemplo:

- node_modules
- .env
- arquivos temporários

### .env

Armazena informações confidenciais.

Exemplo:

senha do banco
usuário
porta
chave JWT

Nunca deve ser enviado ao GitHub.

### .env.example

Mostra quais variáveis existem no projeto.

Não contém informações reais.

Serve para que outro desenvolvedor consiga configurar rapidamente o ambiente.

### README.md

É o cartão de visitas do projeto.

Nele normalmente encontramos:

objetivo
tecnologias utilizadas
instalação
execução
autor

Todo projeto profissional possui README.

# CAPÍTULO 6 — package.json
## O que é?

É o arquivo de configuração do Node.

Sempre que executamos

npm init -y

ele é criado.

## Estrutura
### name

Nome do projeto.

### version

Versão atual.

Utiliza Versionamento Semântico.

Exemplo

1.0.0

### description

Descrição do projeto.

### author

Autor.

### license

Tipo de licença.

### scripts

São comandos personalizados.

Exemplo:

npm start

npm run dev

### dependencies

Bibliotecas utilizadas pela aplicação.

### devDependencies

Bibliotecas utilizadas apenas durante o desenvolvimento.

# CAPÍTULO 7 — Express
## O que é?

Express é um Framework para Node.js.

Seu objetivo é facilitar a criação de APIs.

## Sem Express

Teríamos que controlar manualmente:

servidor
rotas
respostas HTTP
tratamento das requisições

## Com Express

Grande parte disso já está pronta.

## Responsabilidades
criar servidor
receber requisições
enviar respostas
organizar rotas
utilizar middlewares

## Fluxo 
Cliente

↓

Express

↓

Route

↓

Controller

Conceitos importantes
Request

Tudo que chega do cliente.

Response

Tudo que retorna para o cliente.

Middleware

Executa algo antes da requisição chegar ao Controller.







# 1. Criar projeto
mkdir projeto-api
cd projeto-api

# 2. Inicializar Node
npm init -y

# 3. Instalar dependências principais
npm install express pg dotenv

# 4. Instalar dependência de desenvolvimento
npm install --save-dev nodemon

# 5. Criar estrutura padrão
src/
  config/
  modules/
  utils/

# 6. Criar .env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=meubanco
DB_USER=postgres
DB_PASSWORD=senha

# 7. Configurar scripts
npm run dev
npm start

# 8. Inicializar Git
git init
Checklist antes de começar a codar
•	Node.js instalado.
•	PostgreSQL instalado e funcionando.
•	Banco criado.
•	Estrutura de pastas criada.
•	.env preenchido.
•	database.js criado.
•	Rotas planejadas.
•	Thunder Client instalado para testes.
•	Git inicializado.