import React from 'react';

const Filters = props => (
    <div className="filters">
        <select className="filters__categories" onChange={e => props.filtrarPorCategoria(e.target.value)}>
            <option value="">Todas</option>
            {['Medicina', 'Odontologia', 'Enfermagem'].map((categoria, index) => (
                <option key={index} value={categoria.toLowerCase()}>{categoria}</option>
            ))}
        </select>

        <div className="filters__order">
            <button onClick={props.ordenarPorNome}>Nome</button>
            <button onClick={props.ordenarPorPreco}>Preço</button>
        </div>
    </div>
);

export default Filters;