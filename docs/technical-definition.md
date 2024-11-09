# Definição Técnica

## Tabela de Documentação <!-- omit in toc -->

- [Definição Técnica](#definição-técnica)
  - [Propósito](#propósito)
  - [Escopo](#escopo)
  - [Stack Única](#stack-única)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Convenção de Código](#convenção-de-código)
  - [Clean Code](#clean-code)
  - [Recomendações](#recomendações)

---

## Propósito

Este documento tem como objetivo especificar os requisitos e regras necessárias para o desenvolvimento de um sistema de filmes e séries baseado no IMDb.

## Escopo

Desenvolver um sistema que permita aos usuários e administradores cadastrarem filmes e efetuar votações.

## Stack Única

Javascript é uma linguagem de programação de alto nível, utilizada principalmente para aplicações e desenvolvimento web. Quando utilizada juntamente com HTML e CSS, torna possível a criação de páginas poderosas, com interface dinâmica e amigável, além de possuir alta performance. Foi criada para funcionar do lado dos navegadores (do usuário), mas devido ao seu poder e dinamismo, passou-se a utilizá-la também do lado dos servidores, com a ajuda do Node.js. Com isso, além de ser utilizada para criação de páginas web, Javascript pode ser utilizada também no backend e no mobile, criando sistemas inteiros ou micro-serviços para outras aplicações.

## Frontend

- **React**: é uma das mais populares bibliotecas Javascript para criação de interfaces de usuário. Desenvolvida pelo Facebook, com documentação e ampla disseminação, é usada por grandes empresas como Airbnb e eBay.
- **Next.js**: é um framework para React, desenvolvido pela Vercel, que torna a aplicação React mais performática. Possui suporte ao Typescript, roteamento automático, Hot Code Reloading, otimização de imagens, entre outros recursos.

- **Typescript**: é um superset para Javascript, que adiciona tipagem estática e orientação a objetos, trazendo mais segurança e padronização ao desenvolvimento.

- **Design de código - Atomic Design**: uma metodologia que auxilia na criação de Design Systems, permitindo consistência e escalabilidade.

- **Tailwind CSS**: uma biblioteca de componentes pré-prontos que facilita o desenvolvimento da interface de usuário.

## Backend

- **Nest.js**: um framework robusto para criação de aplicações em Node.js, que utiliza TypeScript e facilita a colaboração em projetos complexos.

- **TypeORM**: um ORM que permite controle de versão do banco de dados via migrations. Neste projeto, é utilizado para se conectar ao PostgreSQL.

- **Jest**: um framework de testes unitários e de integração, muito utilizado para testes com Javascript e Typescript.

## Convenção de Código

O objetivo é fornecer diretrizes para a formatação e escrita de código em Javascript/Node, estabelecendo um padrão de consistência e qualidade.

- **ESLint**: uma ferramenta de linting para identificar erros e manter o código limpo e consistente. Neste projeto, segue o guia de estilo do Airbnb.

- **Prettier**: uma ferramenta de formatação automática de código, eliminando debates sobre estilo.

- **Husky**: permite integrar ganchos do Git, como execução de testes automatizados antes de commits.

- **Lint-staged**: executa linters em arquivos específicos no momento do commit, economizando tempo.

- **Commitlint**: ajuda a manter a consistência nas mensagens de commit, seguindo um formato específico.

- **Commitizen**: fornece uma interface interativa para criação de mensagens de commit padronizadas.

- **Standard Version**: automatiza o versionamento de projetos e a criação de notas de lançamento (changelogs) com base nas convenções de commit.

- **Versionamento Semântico (SemVer)**: padroniza números de versão, comunicando a natureza e o impacto das mudanças.

- **SOLID**: princípios de design para facilitar a manutenção, escalabilidade e testabilidade do software.

## Clean Code

Práticas para facilitar a leitura e manutenção do código:

- **Nomes claros e objetivos** para variáveis, classes, métodos e funções.
- **Regra do escoteiro**: deixe o código mais limpo do que encontrou.
- **Código como uma história**: mantenha funções pequenas e simples.
- **Não repita a si mesmo (DRY)**.
- **Comente somente o necessário** para evitar problemas de desatualização.
- **Tratamento de erros**: garanta que o código trate erros adequadamente.
- **Testes limpos**: os testes devem ser executáveis por qualquer pessoa da equipe.

## Recomendações

- Evitar o uso de bibliotecas de terceiros.
- Utilizar um idioma único: todo o código deve estar em inglês.
- Criar componentes agnósticos.

---

Anterior: [Benchmarking](benchmarking.md)

Próximo: [Principal](../README.md)
