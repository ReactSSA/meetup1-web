import React, { Component } from 'react';
import Header from './Header';
import Filtros from './Filtros';
import Listagem from './Listagem';

class App extends Component {
  state = {
    produtos : [],
    lista_produtos : []
  }

  constructor(props) {
    super(props);

    fetch('http://demo6669321.mockable.io/livros')
      .then(resposta => resposta.json().then(({ data }) => this.setState({ produtos: data, lista_produtos: data })))
      .catch(error => console.log(error));
  }

  filtrarPorCategoria = categoria => {
    const { produtos } = this.state;
    const porCategoria = (categoria) ? produtos.filter(item => item.categoria === categoria) : produtos;
    
    this.setState({ lista_produtos : porCategoria });
  }

  ordenarPorNome = () => {
    const { lista_produtos } = this.state;
    const porNome = lista_produtos.sort((atual, proximo) => {
      if (atual.titulo > proximo.titulo) return 1;
      if (atual.titulo < proximo.titulo) return -1;
      return 0;
    });

    this.setState({ lista_produtos: porNome });
  }

  ordenarPorPreco = () => {
    const { lista_produtos } = this.state;
    const porPreco = lista_produtos.sort((atual, proximo) => atual.preco - proximo.preco);

    this.setState({ lista_produtos: porPreco });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <section className="content">
          <Filtros
            ordenarPorNome={this.ordenarPorNome}
            ordenarPorPreco={this.ordenarPorPreco}
            filtrarPorCategoria={this.filtrarPorCategoria}
          />
          <Listagem lista={this.state.lista_produtos} />
        </section>
      </div>
    );
  }
}

export default App;
