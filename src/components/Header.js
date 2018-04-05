import React from 'react';

import reactssa from '../images/reactssa.png';
import sanar from '../images/sanar.jpg';

const Header = () => (
    <header className="header">
        <div className="header__container">
            <a href="https://www.editorasanar.com.br/talentos">
                <img src={sanar} className="header__logo" alt="logo" />
            </a>
            <a href="http://react.salvador.br">
                <img src={reactssa} className="header__logo" alt="logo" />
            </a>
        </div>
    </header>
);

export default Header;