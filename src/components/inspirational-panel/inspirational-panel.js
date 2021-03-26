import React from 'react';
import Voltar from '../form/back.svg';
import Heart from '../landing-page/blue-heart.png';

import '../form/form.css';
import './inspirational-panel.css';

export default class PainelInspiracao extends React.Component {
    render() {
        return (
            <body id="page-pi">
                <div id="container">
                    <header className="page-header">
                        <div className="top-bar-container">
                            <a href="/form/modulos" to="/form/modulos">
                                <img src={Voltar} alt="Botão de Voltar" />
                            </a>

                            <p><a href="/" to="/">εύrekα</a></p>
                        </div>
                        <div className="header-content">
                            <strong>Este é o nosso Painel Inspiração</strong>

                            <div className="header-phrase">
                                <p>
                                    Veja como o estudo da genética inspira nossos usuários
                                    <img src={Heart} alt="Coração Azul" width="4%" />.
                                </p>
                            </div>
                        </div>
                    </header>


                    <main id="box-content">
                        <div className="comment-container">
                            <div className="comment-header">
                                <h3>Moizés Henriques <span>18 anos</span></h3>

                                <p>Informática 2018.1, Matutino, IFRN Pau dos Ferros</p>
                            </div>
                            <div className="comment-content">
                                <p>A genética permite me conhecer mais por dentro de quem realmente sou.</p>
                                <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                            </div>
                        </div>
                        <div className="comment-container">
                            <div className="comment-header">
                                <h3>Karla Julyana <span>18 anos</span></h3>

                                <p>Informática 2018.1, Matutino, IFRN Pau dos Ferros</p>
                            </div>
                            <div className="comment-content">
                                <p>A genética permite me conhecer mais por dentro de quem realmente sou.</p>
                                <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                            </div>
                        </div>
                        <div className="comment-container">
                            <div className="comment-header">
                                <h3>Antônio Cleudo <span>18 anos</span></h3>

                                <p>Informática 2018.1, Matutino, IFRN Pau dos Ferros</p>
                            </div>
                            <div className="comment-content">
                                <p>A genética permite me conhecer mais por dentro de quem realmente sou.</p>
                                <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                            </div>
                        </div>
                        <div className="comment-container">
                            <div className="comment-header">
                                <h3>Raiane Monte <span>18 anos</span></h3>

                                <p>Informática 2018.1, Matutino, IFRN Pau dos Ferros</p>
                            </div>
                            <div className="comment-content">
                                <p>A genética permite me conhecer mais por dentro de quem realmente sou.</p>
                                <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                            </div>
                        </div>
                    </main>
                </div>

            </body>
        );
    }
}