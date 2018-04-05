import React from 'react';
import Item from './Item';

const Listagem = props => (
    <ul className="listagem">
        {props.lista.map((item, index) => (
            <Item key={index} {...item} />
        ))}
    </ul>
);

export default Listagem;