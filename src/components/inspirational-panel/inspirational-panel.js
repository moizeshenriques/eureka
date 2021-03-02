import React from 'react';
import Voltar from '../form/back.svg';

import '../form/form.css';

export default class PainelInspiracao extends React.Component {
    render() {
        return (
            <body>
                
                
                <header className="page-header">
                        <div className="top-bar-container">
                            <a href="/" to="/">
                                <img src={Voltar} alt="Botão de Voltar" />
                            </a>

                            <p><a href="/" to="/">εύrekα</a></p>
                        </div>
                        <div className="header-content">
                            <strong>Este é o nosso Painel Inspiração</strong>

                            <div className="primeiro-passo">
                                <p>Veja como o estudo da genética inspira nossos usuários</p>
                            </div>
                        </div>
                    </header>


                <main id="box-content">
                    <div>
                        <div>
                            <h3>Moizés Henriques <span>18 anos</span></h3>
                            
                            <p>3º ano de Informática, Matutino, IFRN Pau dos Ferros</p>
                        </div>
                        <div>
                            <p>A genética permite me conhecer mais por dentro de quem realmente sou</p>
                            <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Karla Julyana <span>18 anos</span></h3>
                            
                            <p>3º ano de Informática, Matutino, IFRN Pau dos Ferros</p>
                        </div>
                        <div>
                            <p>A genética permite me conhecer mais por dentro de quem realmente sou</p>
                            <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Antônio Cleudo <span>18 anos</span></h3>
                            
                            <p>3º ano de Informática, Matutino, IFRN Pau dos Ferros</p>
                        </div>
                        <div>
                            <p>A genética permite me conhecer mais por dentro de quem realmente sou</p>
                            <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3>Raiane Monte <span>17 anos</span></h3>
                            
                            <p>3º ano de Informática, Matutino, IFRN Pau dos Ferros</p>
                        </div>
                        <div>
                            <p>A genética permite me conhecer mais por dentro de quem realmente sou</p>
                            <p>É um traço da minha ancestralidade e das futuras gerações que podem emergir. Meu DNA carrega lutas e resistência.</p>
                        </div>
                    </div>
                </main>
            </body>
        );
    }
}