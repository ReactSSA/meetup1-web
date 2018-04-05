import React from 'react';
import ListItem from './ListItem';

const List = props => (
    <ul className="list">
        { props.list.map((item, index) => <ListItem key={index} {...item} />) }
    </ul>
);

export default List;