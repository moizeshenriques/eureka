import React from 'react';

import Aviso from './warning.svg';

import './form.css';
import Header from './header/header';

export default class Formulario extends React.Component {
    render() {
        return (
            <body id="page-forms">
                <div id="container">
                    <Header title="Que incrível que você quer aprender" subtitle="O primeiro passo, é preencher esse formulário de inscrição." obs="OBS: se você já preencheu, não precisa preencher novamente. "/>

                    

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

                            <button type="submit" form="create-class">Salvar cadastro</button>
                        </footer>
                    </main>
                </div>
            </body>
        );

    }

}