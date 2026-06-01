# Sistema de Oficina Mecânica

---

# Sobre o projeto

Este projeto foi desenvolvido para a disciplina de Engenharia de Requisitos.

O sistema tem como objetivo auxiliar oficinas mecânicas no gerenciamento de clientes, ordens de serviço e informações dos veículos atendidos.

A aplicação foi construída utilizando HTML, CSS e JavaScript, com organização modular das telas e versionamento realizado através do GitHub.

---

# O que o sistema faz

* Login com autenticação por matrícula e senha
* Perfis diferentes para cada usuário
* Dashboard principal do sistema
* Cadastro de clientes
* Visualização de clientes cadastrados
* Cadastro de ordens de serviço
* Visualização de ordens cadastradas
* Tela de detalhes da ordem
* Upload de foto do veículo
* Recuperação de senha
* Armazenamento local de dados utilizando LocalStorage

---

# Funcionalidades

## Sistema de Login

O sistema possui autenticação de usuários através de matrícula e senha, permitindo acesso apenas para usuários cadastrados.

## Perfil de Usuário

Cada usuário possui informações próprias, como:

* Nome
* Matrícula
* E-mail
* Tipo de perfil

## Clientes

O sistema permite cadastrar clientes com:

* Nome
* Placa
* Modelo
* Telefone

Além disso, os clientes cadastrados podem ser visualizados em uma tabela organizada.

## Ordens de Serviço

É possível:

* Cadastrar ordens
* Definir status
* Adicionar descrição do problema
* Anexar foto do veículo
* Visualizar detalhes completos da ordem

## Recuperação de Senha

A aplicação possui tela de recuperação com validação de entrada.

---

# Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* LocalStorage
* Git
* GitHub
* Visual Studio Code

---

# Estrutura do projeto

O projeto está organizado da seguinte forma:

* docs: documentação do projeto
* src: código-fonte do sistema
* tests: testes realizados no sistema
* infra: arquivos auxiliares e configuração

---

# Persistência de dados

Atualmente o sistema utiliza LocalStorage para armazenar informações localmente no navegador.

Os dados permanecem salvos no computador utilizado mesmo após fechar o navegador.

---

# Segurança aplicada

O sistema possui:

* Validação de campos obrigatórios
* Controle de autenticação
* Controle de navegação
* Validação de entrada de dados

Em futuras versões poderão ser implementados:

* Banco de dados
* Backend
* Criptografia de senha
* Proteção contra SQL Injection
* Proteção contra XSS

---

# Testes realizados

Foram realizados:

* Testes funcionais
* Testes de validação
* Testes de navegação
* Testes de usabilidade

---

# Autor

Rhwan Torres
