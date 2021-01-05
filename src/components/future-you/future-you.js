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
                            <a href="/forms/modules" to="/form/modules">
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

                                <div className="input-block">
                                    <label for="name">XXXXXXXXXXX</label>
                                    <input type="text" name="name" id="name" required />
                                </div>

                                <div className="input-block">
                                    <label for="year">XXXXXXXXX</label>
                                    <input type="text" name="year" id="year" required />
                                </div>

                                <div className="input-block">
                                    <label for="age">XXXXXXXXX</label>
                                    <input type="number" name="age" id="age" required />
                                </div>

                                <div className="input-block">
                                    <label for="age">XXXXXXXXX</label>
                                    <input type="number" name="age" id="age" required />
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