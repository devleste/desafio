# Visão Geral
Este projeto é uma aplicação React que exibe uma lista de contatos. Os usuários podem filtrar e buscar por contatos, editar suas informações e realizar análises estatísticas dos dados. O projeto também inclui a capacidade de excluir contatos, mas está protegido por um diálogo de confirmação para evitar exclusões acidentais.

![ezgif com-video-to-gif](https://github.com/LucasJnoub/desafio/assets/122225478/7d284a6b-b4d2-4674-b2fb-7d6b23184baa)

## O projeto pode ser testando online através do link:
[Desafio Leste](https://leste-desafio-tecnico.vercel.app/)

## Pré-requisitos
Antes de executar o projeto, certifique-se de ter o seguinte:

- Node.js e npm instalados em sua máquina.

## Configuração

1. Clone o repositório em sua máquina local.

2. Abra um terminal e navegue até o diretório do projeto.

3. Instale as dependências necessárias executando:

   ```bash
   npm install
   ```

   **Observação:** Mockaroo oferece um número limitado de solicitações gratuitas por dia, então você pode querer usar um arquivo JSON (`api.json`) para testar se exceder o limite de solicitações da API.

4. Inicie o servidor de desenvolvimento executando:

   ```bash
   npm run dev
   ```

5. Abra seu navegador da web e acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## Uso

- **Lista de Contatos:** A página principal exibe uma lista de contatos. Você pode filtrar os contatos com base em vários critérios, como nome, gênero, idioma, idade e ano de nascimento.

- **Editar Contato:** Para editar as informações de um contato, clique no botão de edição (ícone de lápis) no cartão do contato. Você pode modificar os detalhes do contato e salvar as alterações.

- **Criar Contato:** Para criar um novo contato, clique no botão "Criar". Preencha os detalhes e clique em "Criar".

- **Excluir Contato:** Para excluir um contato, clique no botão de exclusão (ícone de lixeira) no cartão do contato. Um diálogo de confirmação aparecerá. Escolha "Sim" para excluir ou "Não" para cancelar.

- **Estatísticas:** Clique no botão "Estatísticas" para ver estatísticas gerais sobre a lista de contatos, como o número total de usuários, idiomas únicos, gêneros únicos e o número de homens e mulheres.

## Componentes

- `ListComponent`: O principal componente que exibe a lista de contatos, lida com a filtragem de dados e fornece opções para editar, criar e excluir contatos. Ele busca dados de uma API e usa estado e propriedades para gerenciar o comportamento da aplicação.

- `EditComponent`: Um componente modal para editar ou criar um contato. Permite que os usuários insiram ou modifiquem informações de contato.

- `DialogComponent`: Um componente de diálogo para confirmar a exclusão de contatos. Ele evita exclusões acidentais, solicitando confirmação antes de excluir um contato.

- `StatisticsComponent`: Um componente modal para exibir informações estatísticas sobre a lista de contatos.

- `FilterSelect`: Um componente reutilizável para criar menus suspensos de filtro e filtrar contatos com base em vários critérios.

## Autor

Este projeto foi criado por Lucas Oliveira Jnoub.

**Observação sobre o Limite de Requisições da API**

A API fornecida pelo Mockaroo tem um limite de 200 solicitações por dia. Caso você atinja esse limite durante a avaliação, você pode contornar essa limitação da seguinte forma:

1. Comente o bloco `try...catch` na função `getData` do `ListComponent`:

   ```javascript
   // try {
   //   const response = await fetch(apiEndPoint);
   //   if (response.ok) {
   //     const jsonResponse = await response.json();
   //     setData(jsonResponse);
   //   }
   // } catch (error) {
   //   console.error('Erro ao buscar dados: ' + error);
   // }
   ```

2. Descomente o método `setData(jsonData)` que recebe dados de um arquivo JSON que simula o recebimento de dados de uma API REST:

   ```javascript
   setData(jsonData);
   ```

Isso permitirá que você continue a avaliação usando os dados do arquivo JSON em vez de fazer solicitações à API Mockaroo.
