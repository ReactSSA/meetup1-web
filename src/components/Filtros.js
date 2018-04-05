import React from 'react';

const Filtros = props => (
    <div className="filtros">
        <select className="filtros__categorias" onChange={e => props.filtrarPorCategoria(e.target.value)}>
            <option value="">Todas</option>
            {['Medicina', 'Odontologia', 'Enfermagem'].map((categoria, index) => (
                <option key={index} value={categoria.toLowerCase()}>{categoria}</option>
            ))}
        </select>

        <div className="filtros__ordenacao">
            <button onClick={props.ordenarPorNome}>Nome</button>
            <button onClick={props.ordenarPorPreco}>Preço</button>
        </div>
    </div>
);

export default Filtros;