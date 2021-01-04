import React from 'react';
import Home from '../landing-page/landing-page';
import Voltar from '../form/back.svg';

export default props => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <a href={Home}>
                    <img src={Voltar} alt="Botão de Voltar" />
                </a>

                <p><a href={Home}>εύrekα</a></p>
            </div>
        </header>
    )
}