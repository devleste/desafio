## Projeto Leste Contacts

Projeto criado para projeto seletivo de **Desenvolvedor Frontend JR** para a
Leste.

### Tecnologias Utilizadas
Para a criação do projeto foram feitas as seguintes tecnologias:
* Vite
* Typescript
* React
* TailwindCSS

Com bibliotecas do React para adicionar novas funcionalidades, sendo as
principais:
* React Router
* React Hook Form
* localforage
* zustand
* lodash
* recharts

### Paleta e Tipografia
O design base foi feito com base no [rebranding da Leste](https://waltermattos.com/projetos/leste)
pelo designer Walter Mattos.

A fonte escolhida foi a [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans), e
as cores utilizadas foram as seguintes:
- #055542
- #01423A
- #002018
- #009273
- #64F6D7
- #F2F2F2

A aparência final do projeto seguiu um tema claro com uma paleta simplificada:
![image](https://github.com/pedro-augusto-santana/leste-contacts/assets/48259258/ed57d67e-8614-47b9-8d0f-17628ebd2680)


### Rodando localmente
Para rodar o projeto localmente é necessário ter algum gerenciador de pacotes do NPM instalado, seja
ele o `yarn`, `npm`, `pnpm` ou qualquer outro de sua preferência. Eu utilizei o `pnpm`.

Primeiro é necessário instalar as dependências:
```shell
# Utilizando yarn: yarn add
# Utilizando npm: npm install
pnpm install
```

Após isso, na pasta `mock/` existe um arquivo chamado `data.json`,
utilizando o `json-server` (que pode ser instalado com `pnpm i -g json-server`),
é possível rodar um "mock" da API requerida, isso é feito para que não haja limitações
no número de chamadas para a API real.
Para rodar essa API utilize:
```shell
json-server data.json --watch -H 0.0.0.0 -p 3456
```
Após isso, a API estará rodando no port `3456`.

A para iniciar a aplicação em si, utilize o comando:
```shell
# Utilizando yarn: yarn run dev
# Utilizando npm: npm run dev
pnpm run dev
```
O projeto então estará rodando no port `3312`, disponível em <http://localhost:3312>

### Instância
Há uma instância do aplicativo disponível em: <https://leste-contacts.vercel.app/>
