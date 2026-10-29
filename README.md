# 💰 Costs — Gerenciador de Projetos com React

O **Costs** é uma aplicação web desenvolvida com React.js durante meus estudos em desenvolvimento Front-end.

O projeto tem como objetivo permitir que o usuário gerencie projetos, defina orçamentos e organize os serviços relacionados a cada projeto, acompanhando os custos e os valores disponíveis.

Durante o desenvolvimento, pude colocar em prática conceitos importantes do React, compreender melhor a organização de uma aplicação web e trabalhar com requisições HTTP utilizando uma API simulada.

## 🚀 Funcionalidades

- ✅ Criação de projetos com nome, orçamento e categoria.
- ✅ Listagem dos projetos cadastrados.
- ✅ Edição de informações dos projetos.
- ✅ Exclusão de projetos.
- ✅ Adição e remoção de serviços.
- ✅ Controle dos custos dos serviços e do orçamento disponível.
- ✅ Navegação entre páginas utilizando React Router.
- ✅ Comunicação com uma API simulada utilizando JSON Server.

## 🛠️ Tecnologias utilizadas

<div align="center">

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="55" title="React" alt="React" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="55" title="JavaScript" alt="JavaScript" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="55" title="HTML5" alt="HTML5" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="55" title="CSS3" alt="CSS3" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="55" title="Node.js" alt="Node.js" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" width="55" title="npm" alt="npm" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" width="55" title="React Router" alt="React Router" />

</div>

### 📚 Aplicação de cada tecnologia

- **React.js:** criação dos componentes e interfaces dinâmicas.
- **JavaScript:** implementação das funcionalidades e lógica da aplicação.
- **HTML5 e CSS3:** estruturação e estilização das páginas.
- **CSS Modules:** organização dos estilos por componente.
- **React Router DOM:** navegação entre páginas.
- **JSON Server:** simulação de uma API REST.
- **Fetch API:** comunicação com a API por requisições HTTP.
- **Node.js e npm:** ambiente de desenvolvimento e gerenciamento de dependências.

## 📚 O que aprendi e pratiquei

### 1. Componentização com React

Aprendi a dividir a aplicação em componentes menores e reutilizáveis, facilitando a organização, manutenção e compreensão do código.

Pratiquei a criação de componentes como:

- Navbar e Footer;
- Formulários;
- Botões personalizados;
- Campos de entrada e seleção;
- Cards para apresentação dos projetos;
- Componentes de gerenciamento de serviços.

### 2. Props, State e Hooks

Pratiquei a passagem de informações entre componentes utilizando `props` e o gerenciamento de estados com Hooks do React.

Esse aprendizado me ajudou a compreender melhor como os dados são atualizados e apresentados dinamicamente na interface.

### 3. React Router

Utilizei o React Router DOM para criar uma aplicação com diferentes páginas, permitindo navegar sem precisar recarregar completamente o navegador.

### 4. Formulários e eventos

Desenvolvi formulários para cadastrar e editar projetos, trabalhando com:

- Captura dos valores digitados;
- Eventos `onChange` e `onSubmit`;
- Atualização dos estados;
- Componentes de seleção;
- Envio dos dados para a API.

### 5. Consumo de API com Fetch

Uma das partes mais importantes do meu aprendizado foi compreender a comunicação entre o Front-end e uma API.

Pratiquei requisições HTTP para realizar operações como:

| Método | Finalidade                                |
| ------ | ----------------------------------------- |
| GET    | Consultar projetos, serviços e categorias |
| POST   | Cadastrar novos projetos                  |
| PATCH  | Atualizar informações dos projetos        |
| DELETE | Excluir projetos                          |

Também tive contato com o formato JSON e o tratamento de respostas das requisições.

### 6. JSON Server

Utilizei o JSON Server para simular uma API REST local, permitindo armazenar e consultar informações dos projetos.

Essa experiência me ajudou a entender melhor a comunicação entre a interface e uma fonte de dados, além de servir como introdução ao funcionamento de aplicações que utilizam Back-end.

### 7. Organização e estilização

Pratiquei o uso de CSS Modules, separando os estilos de cada componente e melhorando a organização dos arquivos.

Também desenvolvi minha compreensão sobre a estrutura de pastas, importações e reutilização de código no React.

## 🎯 Desafios durante o desenvolvimento

Durante a construção do Costs, enfrentei alguns desafios que contribuíram para meu aprendizado:

- Entender a comunicação entre componentes utilizando props.
- Trabalhar com estados e atualização de informações.
- Configurar a API local e realizar requisições corretamente.
- Corrigir problemas relacionados aos endpoints e às requisições HTTP.
- Implementar a adição e remoção de serviços.
- Organizar os componentes e os arquivos CSS.

Resolver esses problemas foi importante para desenvolver minha lógica de programação e ganhar mais familiaridade com o React.

## 💻 Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/Leonard010/Costs.git
```

**2. Acesse a pasta do projeto:**

```bash
cd Costs
```

**3. Instale as dependências:**

```bash
npm install
```

**4. Inicie a API simulada:**

```bash
npx json-server --watch db.json --port 5000
```

**5. Em outro terminal, inicie a aplicação:**

```bash
npm start
```

> Os comandos de inicialização podem variar conforme a configuração do projeto. A API local utiliza a porta 5000.

## 📈 Considerações finais

O desenvolvimento do Costs foi uma etapa importante da minha evolução nos estudos de React e JavaScript.

Por meio desse projeto, consegui sair um pouco da teoria e compreender melhor como componentes, formulários, rotas e requisições HTTP funcionam juntos em uma aplicação.

Além de aprimorar meus conhecimentos em Front-end, o projeto despertou ainda mais meu interesse pela integração entre Front-end e Back-end.

Meu objetivo é continuar desenvolvendo projetos práticos, aprofundar meus conhecimentos e evoluir profissionalmente na área de desenvolvimento de software, com foco em me tornar um **Desenvolvedor Full Stack**.

## 👨‍💻 Desenvolvedor

**Leonardo Sotilo**

🎓 Estudante de Análise e Desenvolvimento de Sistemas — 4º semestre | Facens

💻 Em busca de oportunidade na área de desenvolvimento de software.

- [GitHub](https://github.com/Leonard010)
- [LinkedIn](https://www.linkedin.com/in/leonardo-sotilo-7969b6302/)
- [Portfólio](https://leonardo-sotilo.vercel.app/)

---

📌 _Projeto desenvolvido para fins educacionais durante meus estudos de React.js._
