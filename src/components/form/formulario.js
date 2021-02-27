import React from 'react';
import '../../Routes';

import Aviso from './warning.svg';
import Voltar from './back.svg';

import './form.css';

export default class Formulario extends React.Component {
    render() {
        return (
            <body id="page-forms">
                <title>Eureka | Cadastrar-se</title>
                <div id="container">
                    <header className="page-header">
                        <div className="top-bar-container">
                            <a href="/" to="/">
                                <img src={Voltar} alt="Botão de Voltar" />
                            </a>

                            <p><a href="/" to="/">εύrekα</a></p>
                        </div>
                        <div className="header-content">
                            <strong>Que incrível que você quer aprender.</strong>

                            <div className="primeiro-passo">
                                <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
                            </div>

                            <div className="observacao">
                                <p>Se você já se cadastrou não precisa mais responder o questionário.
                                    <a href="/form/modulos" to="/form/modulos"> Clique Aqui!</a>
                                </p>
                            </div>
                        </div>
                    </header>

                    <main>
                        <form action="" id="create-class">
                            <fieldset>
                                <legend>Seus dados</legend>

                                <div className="input-block">
                                    <label for="name">Nome completo</label>
                                    <input type="text" name="name" id="name" required />
                                </div>

                                <div className="input-block">
                                    <label for="year">Em qual ano escolar você se encontra? <small>Se não estuda mais, coloque sua área de formação.</small></label>
                                    <input type="text" name="year" id="year" required />
                                </div>

                                <div className="input-block">
                                    <label for="age">Informe sua idade <small>Ex.: 18</small></label>
                                    <input type="number" name="age" id="age" required />
                                </div>

                                <div className="textarea-block">
                                    <label for="question">O que você mais gosta em genética?</label>
                                    <textarea name="question" id="question" required></textarea>
                                </div>
                            </fieldset>
                        </form>

                        <footer>
                            <p>
                                <img src={Aviso} alt="Aviso importante" />
                                Importante! <br /> Preencha todos os dados
                            </p>

                            <button type="submit" form="create-class">Salvar Cadastro</button>
                        </footer>
                    </main>
                </div>
            </body>
        );

    }

}