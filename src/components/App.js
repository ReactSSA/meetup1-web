import React, { Component } from 'react';
import Header from './Header';
import Filters from './Filters';
import List from './List';
import Loading from './Loading';

let booksRaw = [];

class App extends Component {
  state = {
    books : null
  }

  componentDidMount() {
    fetch('http://demo6669321.mockable.io/livros').then(resposta => resposta.json().then(({ data }) => {
      booksRaw = data;
      this.setState({ books : booksRaw })
    }));
  }

  filtrarPorCategoria = categoria => {
    const porCategoria = (categoria) ? booksRaw.filter(item => item.categoria === categoria) : booksRaw;
    
    this.setState({ books : porCategoria });
  }

  ordenarPorNome = () => {
    const { books } = this.state;
    const porNome = books.sort((atual, proximo) => {
      if (atual.titulo > proximo.titulo) return 1;
      if (atual.titulo < proximo.titulo) return -1;
      return 0;
    });

    this.setState({ books: porNome });
  }

  ordenarPorPreco = () => {
    const { books } = this.state;
    const porPreco = books.sort((atual, proximo) => atual.preco - proximo.preco);

    this.setState({ books: porPreco });
  }

  render() {
    const { books } = this.state;

    if(books === null) {
      return <Loading />
    }

    return (
      <div className="App">
        <Header />
        <section className="content">
          <Filters
            ordenarPorNome={this.ordenarPorNome}
            ordenarPorPreco={this.ordenarPorPreco}
            filtrarPorCategoria={this.filtrarPorCategoria}
          />
          <List list={this.state.books} />
        </section>
      </div>
    );
  }
}

export default App;
