import React from 'react';
import '../form/form.css';
import './modulos.css';
import Voltar from '../form/back.svg';
import Gregor from '../modulos/gregor-mendel.jpg';
import '../../Routes';

export default class Modulos extends React.Component {
    render() {
        return (
            <body id="page-modules">
                <div id="container">
                    <header className="page-header">
                        <div className="top-bar-container">
                            <a href="/form" to="/form">
                                <img src={Voltar} alt="Botão de Voltar" />
                            </a>

                            <p><a href="/" to="/">εύrekα</a></p>
                        </div>
                    </header>

                    <div id="pi-container">
                        <p><a href="/">Vá para o nosso Painel Inspiração</a></p>
                    </div>

                    <main id="box-content">
                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <a href="/form/modulos/page-one" to="/form/modulos/page-one">O QUE É GENÉTICA</a>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>
                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>


                        </div>

                        <div class="modulo-content">
                            <div>
                                <img src={Gregor} alt="Gregor Mendel, pai da genética" width="15%" />
                            </div>
                            <div>
                                <h3>O que é genética</h3>
                                <p>Nesse módulo vamos retratar como surgiu a genética, seus conceitos fundamentais e figuras importantes nos primeiros estudos.</p>
                            </div>
                        </div>
                    </main>

                    <div id="button-box">
                        <button to="/form/modulos/future-you" class="button">Faça nosso teste FUTURE YOU</button>
                    </div>

                </div>
            </body>
        );
    }
}