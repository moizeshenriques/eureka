import React from 'react';
import '../form/form.css';
import Voltar from '../form/back.svg';
import Aviso from '../form/warning.svg';
import '../future-you/future-you.css';
import '../../Routes';

export default class FutureYou extends React.Component {
    render() {
        return (
            <body id="page-fy">
                <div id="container">

                    <header className="page-header">
                        <div className="top-bar-container">
                            <a href="/form/modulos" to="/form/modulos">
                                <img src={Voltar} alt="Botão de Voltar" />
                            </a>

                            <p><a href="/" to="/">εύrekα</a></p>
                        </div>
                        <div className="header-content">
                            <strong>Descubra como seria um embrião com seu DNA</strong>

                            <div className="primeiro-passo">
                                <p>Preencha todas as informações e receba o seu resultado.</p>
                            </div>
                        </div>
                    </header>

                    <main>
                        <form action="" id="create-class">
                            <fieldset>
                                <legend>Seus dados</legend>

                                <label>Masculino</label>
                                <div className="input-block">
                                    <label for="">Tipo sanguíneo</label>
                                    <select>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option selected value="AB">AB</option>
                                        <option value="O">O</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Fator RH</label>
                                    <select>
                                        <option value="positivo">Positivo</option>
                                        <option value="negativo">Negativo</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Daltonismo</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portador</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Hemofilia</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portador</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Albinismo</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portador</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>

                                <label>Feminino</label>

                                <div className="input-block">
                                    <label for="">Tipo sanguíneo</label>
                                    <select>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option selected value="AB">AB</option>
                                        <option value="O">O</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Fator RH</label>
                                    <select>
                                        <option value="positivo">Positivo</option>
                                        <option value="negativo">Negativo</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Daltonismo</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portadora</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Hemofilia</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portadora</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Albinismo</label>
                                    <select>
                                        <option value="no">Não</option>
                                        <option value="nob">Não, mas portadora</option>
                                        <option value="yes">Sim</option>
                                    </select>
                                </div>
                            </fieldset>
                        </form>

                        <footer>
                            <p>
                                <img src={Aviso} alt="Aviso importante" />
                                Importante! <br /> Preencha todos os dados
                            </p>

                            <button type="submit" form="create-class">Future You</button>
                        </footer>
                    </main>
                </div>
            </body>
        );
    }
}