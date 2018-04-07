import React from 'react';
import ListItem from './ListItem';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.books = [];
        this.state = {
            books: []
        };
    }

    componentDidMount() {
        fetch('http://demo6669321.mockable.io/livros').then(r => r.json()).then(({ data }) => {
            this.books = data;
            this.setState({ books: data });
        });
    }

    filtrarPorCategoria = e => {
        const categoria = e.target.value;
        const filtrado = (!categoria) ? this.books : this.books.filter(i => i.categoria === categoria);
        this.setState({ books: filtrado });
    }

    render() {
        const { books } = this.state;

        return (
            <div className="App">
                <select className="filters__categories" onChange={this.filtrarPorCategoria}>
                    <option value="">Todas</option>
                    <option value="enfermagem">Enfermagem</option>
                    <option value="odontologia">Odontologia</option>
                    <option value="medicina">Medicina</option>
                </select>
                <ul className="list">
                    { books.map((item, index) => <ListItem key={index} {...item} />) }
                </ul>
            </div>
        )
    }
}
