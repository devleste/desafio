const html = (
  <div>
     <header className="header">
      <div className="container">
        <nav className="headerTitulo">
          <img src="ASSETS/IMG/leste.png" alt="logoleste" />
        </nav>
      </div>
    </header>

    <section className="introducao">
      <div className="conatainer">
        <h1>Leste Contact</h1>
      </div>
    </section>

    <section className="pesquisa">
      <div className="container">
        <input placeholder="Buscar contato"></input>
        <button>Filtrar</button>
        <button><img src="ASSETS/IMG/lupa.png" alt="lupa" /></button>
      </div>
    </section>

    <section className="funcao grid-4-15">
      <div className="container">
        <ul>
          <li><button><img src="ASSETS/IMG/adicionar1.png" alt="adicionar" /></button></li>
          <li><button><img src="ASSETS/IMG/excluir 2.png" alt="excluir" /></button></li>
          <li><button>Expandir</button></li>
          <li><button>Resumo</button></li>
        </ul>
      </div>
    </section>

    <section className="lista">
      <div className="borda container">
        <ul>
          <li>Nome</li>
          <li>Sobrenome</li>
          <li>Email</li>
          <li>Sexo</li>
          <li>Idioma</li>
          <li>Avatar</li>
        </ul>
      </div>
    </section>

    <footer>
      <div className="copy">
        <div className="container">
          <p className="grid-16">Leste Telecon 2021 - todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  </div>
);

const wrapper = document.querySelector("#wrapper");

ReactDOM.render(
  html,wrapper
)