# 📚 Proffy - Plataforma de Estudos Online

<div align="center">
  <img src="https://img.shields.io/badge/React-16.13.1-blue" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-3.9.7-blue" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-Express-green" alt="Node.js">
  <img src="https://img.shields.io/badge/Database-SQLite-orange" alt="SQLite">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</div>

## 📖 Sobre o Projeto

O **Proffy** é uma plataforma web que conecta professores e alunos de forma prática e eficiente. Inspirado na semana Nacional de Educação (6 de agosto), o projeto permite que professores se cadastrem para dar aulas e que alunos encontrem os professores ideais para suas necessidades de aprendizado.

### ✨ Funcionalidades Principais

- 👨‍🏫 **Cadastro de Professores**: Professores podem se registrar com suas informações pessoais, matérias que ensinam, horários disponíveis e valor da hora/aula
- 🔍 **Busca de Aulas**: Alunos podem filtrar professores por matéria, dia da semana e horário
- 📱 **Contato via WhatsApp**: Conexão direta entre alunos e professores através do WhatsApp
- 📊 **Contador de Conexões**: Acompanhamento do total de conexões realizadas na plataforma
- 📅 **Agendamento Flexível**: Sistema de horários personalizáveis para cada professor

## 🚀 Tecnologias Utilizadas

### Frontend (Web)
- **React** 16.13.1 - Biblioteca para construção da interface
- **TypeScript** 3.7.2 - Superset do JavaScript com tipagem estática
- **React Router DOM** 5.2.0 - Roteamento da aplicação
- **CSS3** - Estilização customizada

### Backend (Server)
- **Node.js** - Runtime JavaScript
- **Express** 4.17.1 - Framework web para Node.js
- **TypeScript** 3.9.7 - Tipagem estática
- **Knex.js** 0.21.4 - Query builder para SQL
- **SQLite3** 5.0.0 - Banco de dados relacional
- **CORS** 2.8.5 - Middleware para requisições cross-origin

### Ferramentas de Desenvolvimento
- **ts-node-dev** - Execução e hot reload para TypeScript
- **React Scripts** - Ferramentas de build do Create React App

## 📁 Estrutura do Projeto

```
proffy/
├── server/                 # Backend da aplicação
│   ├── src/
│   │   ├── controllers/    # Controladores das rotas
│   │   │   ├── ClassesController.ts
│   │   │   └── ConnectionsController.ts
│   │   ├── database/       # Configuração e migrações do banco
│   │   │   ├── connection.ts
│   │   │   ├── database.sqlite
│   │   │   └── migrations/
│   │   │       ├── 00_create_users.ts
│   │   │       ├── 01_create_classes.ts
│   │   │       ├── 02_create_class_schedule.ts
│   │   │       └── 03_create_connection.ts
│   │   ├── utils/          # Funções utilitárias
│   │   ├── routes.ts       # Definição das rotas
│   │   └── server.ts       # Configuração do servidor
│   ├── knexfile.ts         # Configuração do Knex
│   └── package.json
└── web/                    # Frontend da aplicação
    ├── src/
    │   ├── components/     # Componentes reutilizáveis
    │   │   ├── PageHeader/
    │   │   └── TeacherItem/
    │   ├── pages/          # Páginas da aplicação
    │   │   ├── Landing/    # Página inicial
    │   │   ├── TeacherForm/ # Formulário de cadastro
    │   │   └── TeacherList/ # Lista de professores
    │   ├── assets/         # Recursos estáticos
    │   ├── App.tsx         # Componente principal
    │   └── routes.tsx      # Roteamento
    └── package.json
```

## 🗄️ Estrutura do Banco de Dados

### Tabelas

#### `users`
- `id` (INTEGER, PRIMARY KEY)
- `name` (STRING, NOT NULL) - Nome do professor
- `avatar` (STRING, NOT NULL) - URL da foto do professor
- `whatsapp` (STRING, NOT NULL) - Número do WhatsApp
- `bio` (STRING, NOT NULL) - Biografia do professor

#### `classes`
- `id` (INTEGER, PRIMARY KEY)
- `subject` (STRING, NOT NULL) - Matéria ensinada
- `cost` (DECIMAL, NOT NULL) - Valor da hora/aula
- `user_id` (INTEGER, FOREIGN KEY) - Referência ao professor

#### `class_schedule`
- `id` (INTEGER, PRIMARY KEY)
- `week_day` (INTEGER, NOT NULL) - Dia da semana (0-6)
- `from` (INTEGER, NOT NULL) - Horário de início (em minutos)
- `to` (INTEGER, NOT NULL) - Horário de fim (em minutos)
- `class_id` (INTEGER, FOREIGN KEY) - Referência à aula

#### `connections`
- `id` (INTEGER, PRIMARY KEY)
- `user_id` (INTEGER, FOREIGN KEY) - Referência ao professor
- `created_at` (DATETIME, DEFAULT NOW) - Data da conexão

## 🛣️ Rotas da API

### Classes (Aulas)

#### `POST /classes`
Cria uma nova aula com professor e horários.

**Body:**
```json
{
  "name": "João Silva",
  "avatar": "https://example.com/avatar.jpg",
  "whatsapp": "11999999999",
  "bio": "Professor de matemática com 10 anos de experiência",
  "subject": "Matemática",
  "cost": 50,
  "schedule": [
    {
      "week_day": 1,
      "from": "08:00",
      "to": "12:00"
    }
  ]
}
```

#### `GET /classes`
Lista aulas filtradas por matéria, dia da semana e horário.

**Query Parameters:**
- `subject` (string) - Matéria desejada
- `week_day` (number) - Dia da semana (0-6)
- `time` (string) - Horário no formato "HH:MM"

**Exemplo:** `/classes?subject=Matemática&week_day=1&time=10:00`

### Connections (Conexões)

#### `POST /connections`
Registra uma nova conexão entre aluno e professor.

**Body:**
```json
{
  "user_id": 1
}
```

#### `GET /connections`
Retorna o total de conexões realizadas.

**Response:**
```json
{
  "total": 150
}
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 12 ou superior)
- Yarn ou NPM

### Instalação

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd proffy
```

2. **Instale as dependências do servidor**
```bash
cd server
yarn install
# ou
npm install
```

3. **Instale as dependências do frontend**
```bash
cd ../web
yarn install
# ou
npm install
```

4. **Configure o banco de dados**
```bash
cd ../server
yarn knex:migrate
# ou
npm run knex:migrate
```

### Execução

1. **Inicie o servidor backend**
```bash
cd server
yarn start
# ou
npm start
```
O servidor estará rodando em `http://localhost:3333`

2. **Inicie o frontend (em outro terminal)**
```bash
cd web
yarn start
# ou
npm start
```
A aplicação estará disponível em `http://localhost:3000`

## 🎨 Páginas da Aplicação

### 🏠 Landing Page
- Página inicial com apresentação da plataforma
- Botões para "Estudar" e "Dar aulas"
- Contador de conexões realizadas

### 👨‍🏫 Cadastro de Professor (TeacherForm)
- Formulário para professores se cadastrarem
- Campos: dados pessoais, matéria, custo e horários disponíveis

### 🔍 Lista de Professores (TeacherList)
- Busca de professores por filtros
- Exibição dos professores disponíveis
- Botão para contato via WhatsApp

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 💡 Ideias para Contribuição
- Implementar autenticação de usuários
- Adicionar sistema de avaliações
- Criar versão mobile com React Native
- Implementar chat em tempo real
- Adicionar sistema de pagamentos
- Melhorar a responsividade
- Adicionar testes automatizados

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ durante a Next Level Week da Rocketseat.

---

<div align="center">
  <p>⭐ Se este projeto te ajudou, deixe uma estrela!</p>
</div>