import React from 'react';
import Voltar from '../form/back.svg';
import '../../Routes';

export default props => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <a href="/form/modulos" to="/form/modulos">
                    <img src={Voltar} alt="Botão de Voltar" />
                </a>

                <p><a href="/" to="/">εύrekα</a></p>
            </div>
        </header>
    )
}