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

## Conceitos importantes

### Request

Tudo que chega do cliente.

### vResponse

Tudo que retorna para o cliente.

### Middleware

Executa algo antes da requisição chegar ao Controller.

# CAPÍTULO 8 — PostgreSQL

## O que é?

É um Sistema Gerenciador de Banco de Dados Relacional.

Seu trabalho é armazenar informações.

## Banco

Um banco pode possuir várias tabelas.

Exemplo

Empresa

↓

Funcionários

Produtos

Clientes

Manutenções

## Tabela

Organiza os dados.

Cada linha representa um registro.

Cada coluna representa um campo.

## Registro

É uma linha da tabela.

## Campo

É uma coluna.

Exemplo

nome

email

telefone

## Chave Primária

Identifica um registro de forma única.

Nunca pode repetir.

## SQL

É a linguagem utilizada para conversar com o banco.

Principais comandos

SELECT
INSERT
UPDATE
DELETE

# CAPÍTULO 9 — Variáveis de Ambiente

## O que são?

São informações que não devem ficar escritas diretamente no código.

## Exemplos:

Senha
Usuário
Porta
Host
Banco

## Por que utilizar?

Segurança.

Se a senha estiver no código, qualquer pessoa poderá vê-la.

## Como funciona?

A aplicação lê as informações do arquivo

.env

# CAPÍTULO 10 — Arquitetura MVC

## MVC significa

Model

View

Controller

## No Backend normalmente utilizamos apenas

Model

Controller

Routes

## Model

Responsável pelo banco.

Nunca conversa com o usuário.

## Controller

Recebe as requisições.

Valida informações.

Chama o Model.

## Routes

Define quais URLs existem.

## Fluxo

Cliente

↓

Route

↓

Controller

↓

Model

↓

Banco

# CAPÍTULO 11 — Fluxo da Requisição

Quando um cliente acessa

GET /clientes

acontece:

Cliente

↓

Express

↓

Route

↓

Controller

↓

Model

↓

Banco

↓

Model

↓

Controller

↓

JSON

↓

Cliente

Cada camada possui apenas uma responsabilidade.

# CAPÍTULO 12 — CRUD

## CRUD significa

Create

Read

Update

Delete

## Create

Cria registros.

Método HTTP

POST

## Read

Consulta registros.

Método HTTP

GET

## Update

Atualiza registros.

Pode utilizar

PUT

ou

PATCH
PUT

Atualiza todos os campos.

PATCH

Atualiza apenas alguns campos.

## Delete

Remove registros.

Método

DELETE

# CAPÍTULO 13 — Rotas

## O que são?

São os endereços da API.

Exemplo

GET

/clientes

## Estrutura

Uma rota possui

método HTTP
URL
Controller

## Métodos

GET

Consulta.

POST

Cadastro.

PUT

Atualização completa.

PATCH

Atualização parcial.

DELETE

Exclusão.

# CAPÍTULO 14 — Testes

Antes de entregar uma API devemos testar tudo.

Ferramentas

Thunder Client
Postman
Insomnia

## O que testar?

Cadastro

Consulta

Atualização

Exclusão

## Verificar

Código HTTP

Mensagem

JSON

Erros

Banco

# CAPÍTULO 15 — Git e GitHub

## Git

Sistema de Controle de Versão.

Permite acompanhar todas as alterações do projeto.

## GitHub

Hospeda projetos Git.

Permite compartilhar código.

## Fluxo básico

git init

↓

git add

↓

git commit

↓

git push

## Commit

Representa uma versão do projeto.

Sempre utilize mensagens claras.

Exemplo

Criação da conexão com PostgreSQL

Implementação do CRUD

Correção da rota GET

# CAPÍTULO 16 — Checklist

Antes da entrega

☐ Projeto inicia

☐ Express funcionando

☐ Banco conectado

☐ CRUD completo

☐ Todas as rotas testadas

☐ SQL criado

☐ README atualizado

☐ .env ignorado

☐ node_modules ignorado

☐ GitHub atualizado


# CAPÍTULO 17 — Ciclo de Vida de uma API

Uma API passa sempre pelo mesmo ciclo.

Cliente

↓

Requisição HTTP

↓

Express

↓

Route

↓

Controller

↓

Model

↓

PostgreSQL

↓

Model

↓

Controller

↓

Express

↓

Resposta HTTP

↓

Cliente

Cada requisição percorre exatamente esse caminho.

## Responsabilidade de cada camada
Camada	Responsabilidade
Cliente	Enviar a requisição
Express	Receber a requisição
Route	Direcionar para o Controller
Controller	Processar a regra de negócio
Model	Acessar o banco de dados
PostgreSQL	Armazenar e recuperar os dados
Response	Retornar a resposta ao cliente

# CAPÍTULO 18 — Glossário
## TERMO	                        SIGNIFICADO
API	                          Interface de comunicação entre sistemas
REST	                        Padrão arquitetural para APIs
Endpoint	                    Endereço de uma rota da API
HTTP	                        Protocolo de comunicação entre cliente e servidor
JSON	                        Formato utilizado para troca de informações
Node.js	                      Ambiente de execução JavaScript
Express	                      Framework para criação de APIs
Framework	                    Conjunto de ferramentas que fornece uma estrutura para desenvolver aplicações
Biblioteca (Library)	        Coleção de funções reutilizáveis que você utiliza quando precisa
npm	                          Gerenciador de pacotes do Node.js
Dependência	                  Biblioteca instalada no projeto
PostgreSQL	                  Sistema Gerenciador de Banco de Dados Relacional (SGBD)
SQL	                          Linguagem utilizada para manipular bancos de dados relacionais
MVC	                          Arquitetura que separa responsabilidades em Model, View e Controller
Model	                        Camada responsável pelo acesso aos dados
Controller	                  Camada responsável pela lógica da aplicação e pelo tratamento das requisições
Route	                        Camada responsável por mapear URLs e métodos HTTP para os Controllers
Middleware	                  Função executada antes de a requisição chegar ao Controller
CRUD	                        Operações básicas de Criar, Ler, Atualizar e Excluir dados
Request	                      Requisição enviada pelo cliente
Response	                    Resposta enviada pelo servidor
Endpoint	                    Combinação de um método HTTP com uma rota específica
.env	                        Arquivo que armazena variáveis de ambiente e informações sensíveis
package.json	                Arquivo que descreve e configura o projeto Node.js
node_modules	                Pasta onde ficam todas as dependências instaladas
Git	                          Sistema de controle de versão
GitHub	                      Plataforma para hospedagem e colaboração em repositórios Git

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
• Node.js instalado.
• PostgreSQL instalado e funcionando.
• Banco criado.
• Estrutura de pastas criada.
• .env preenchido.
• database.js criado.
• Rotas planejadas.
• Thunder Client instalado para testes.
• Git inicializado.
