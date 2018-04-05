import React from 'react';

import reactssa from '../images/reactssa.png';

const Loading = () => (
    <div className="loading">
        <img src={reactssa} className="loading__logo" alt="logo" />
        <p>Carregando...</p>
    </div>
);

export default Loading;