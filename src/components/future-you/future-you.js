import React from 'react';
import '../form/form.css';
import Voltar from '../form/back.svg';
import Aviso from '../form/warning.svg';
import '../future-you/future-you.css';
import '../../Routes';
import Test from '../../testConsitions';
import Results from '../results/results';

export default class FutureYou extends React.Component {
    function = result(
        <Results/>
    );

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
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option selected value="4">AB</option>
                                        <option value="3">O</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Fator RH</label>
                                    <select>
                                        <option value="1">Positivo</option>
                                        <option value="2">Negativo</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Daltonismo</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Hemofilia</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Albinismo</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>

                                <label>Feminino</label>

                                <div className="input-block">
                                    <label for="">Tipo sanguíneo</label>
                                    <select>
                                        <option value="1">A</option>
                                        <option value="2">B</option>
                                        <option selected value="4">AB</option>
                                        <option value="3">O</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Fator RH</label>
                                    <select>
                                        <option value="1">Positivo</option>
                                        <option value="1">Negativo</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Daltonismo</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="3">Não, mas portadora</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Hemofilia</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="3">Não, mas portadora</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>

                                <div className="input-block">
                                    <label for="">Albinismo</label>
                                    <select>
                                        <option value="1">Não</option>
                                        <option value="3">Não, mas portadora</option>
                                        <option value="2">Sim</option>
                                    </select>
                                </div>
                            </fieldset>
                        </form>

                        <footer>
                            <p>
                                <img src={Aviso} alt="Aviso importante" />
                                Importante! <br /> Preencha todos os dados
                            </p>

                            <button
                            type="submit" 
                            form="create-class"
                            onClick={result()}
                            >
                                Future You
                            </button>
                        </footer>
                    </main>
                </div>
            </body>
        );
    }
}