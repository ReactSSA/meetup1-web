import React from 'react';

const Item = props => (
    <li className="item">
        <div className="item__image">
            <img src={props.image} alt={props.titulo} />
        </div> 
        <h1 className="item__titulo">{props.titulo}</h1>
        {props.autores.map((autor, key) => (
            <p key={key} className="item__autor">{autor}</p>
        ))}
        <p className="item__preco">Por R$ {props.preco}</p>
    </li>
);

export default Item;