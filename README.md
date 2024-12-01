
# VagaCerta

VagaCerta é um aplicativo mobile desenvolvido em **React Native** que permite aos usuários buscar e gerenciar vagas de emprego. Este projeto utiliza **Expo** para facilitar o desenvolvimento e a execução em dispositivos móveis.

## 📌 Funcionalidades

- Cadastro e login de usuários.
- Busca e exibição de vagas de emprego disponíveis.
- Contato direto com a empresa via WhatsApp.
- Atualização dos dados do perfil do usuário.
- Logout para encerrar a sessão do usuário.

## 🛠️ Tecnologias Utilizadas

- **React Native**
- **Expo**
- **TypeScript**
- **Styled Components**
- **Axios**
- **Node.js** (API Backend)
- **SQLite** (Banco de Dados)
- **AsyncStorage** (Armazenamento local)

## ⚙️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Git](https://git-scm.com/)

## 🚀 Configuração do Projeto

### 1. Clone o repositório do frontend:

```bash
git clone https://github.com/gustavolima15/app-vagacerta.git
```

### 2. Clone o repositório do backend:

```bash
git clone https://github.com/gustavolima15/api-vagacerta.git
```

### 3. Configuração do frontend

1. Acesse a pasta do projeto:

   ```bash
   cd app-vagacerta
   ```

2. Certifique-se de estar na branch `develop`:

   ```bash
   git checkout develop
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

   > **Nota:** Apesar do projeto conter um arquivo `yarn.lock`, você pode usar `npm` para gerenciar as dependências.

4. Certifique-se de que o backend esteja rodando e configurado para aceitar requisições no endereço `10.0.2.2`. **Este endereço é usado para emuladores Android no Expo**.

### 4. Configuração do backend

1. Acesse a pasta do projeto do backend:

   ```bash
   cd api-vagacerta
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env` (consulte o repositório do backend para mais detalhes).

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. Certifique-se de que o servidor backend esteja disponível no endereço `10.0.2.2` e porta configurada no backend.

## ▶️ Como Executar o Frontend

1. Inicie o projeto Expo:

   ```bash
   npm start
   ```

2. Leia o QR Code no terminal com o aplicativo **Expo Go** (disponível para Android e iOS).

3. O projeto será carregado no dispositivo ou emulador.

> **Nota:** Certifique-se de que o backend está acessível no endereço `10.0.2.2`.

## 🗂️ Estrutura do Projeto

A estrutura básica do projeto é a seguinte:

```
src/
├── assets/         # Imagens e ícones
├── components/     # Componentes reutilizáveis
├── contexts/       # Context API (ex. AuthContext)
├── screens/        # Telas da aplicação (Login, Profile, etc.)
├── services/       # Configurações de API
├── styles/         # Estilos globais e temáticos
├── theme/          # Tema do projeto (cores, fontes, etc.)
└── utils/          # Utilidades e tipos compartilhados
```

