# Instalação e Execução

## Tabela de Documentação<!-- omit in toc -->

- [Desenvolvimento local](#desenvolvimento-local)
- [Links](#links)

## Desenvolvimento local

1. Clone o repositório

   ```bash
   git clone --depth 1 https://github.com/rabelorp/backend-rdmovies rd-movies
   ```

1. Vá até a pasta, e copie `env-example-relational` como `.env`.

   ```bash
   cd rd-movies/
   cp env-example-relational .env
   ```

1. Mude `DATABASE_HOST=postgres` para `DATABASE_HOST=localhost`

   Mude `MAIL_HOST=maildev` para `MAIL_HOST=localhost`

1. Rode o container da aplicação:

   ```bash
   docker compose -f docker-compose-dev.yaml up -d --build
   ```

1. Instale as dependências

   ```bash
   npm install
   ```

1. Rode as migrations

   ```bash
   npm run migration:run
   ```

1. Rode a aplicação em modo desenvolvedor

   ```bash
   npm run start:dev
   ```

1. Acesse via <http://localhost:9000>

---

## Links

- Swagger (API docs): <http://localhost:9000/api/docs>
- Adminer (client for DB): <http://localhost:8080>
- Maildev: <http://localhost:1080>

---

Anterior: [Funcionalidades](introduction.md)

Próximo: [Arquitetura Hexagonal](architecture.md)
