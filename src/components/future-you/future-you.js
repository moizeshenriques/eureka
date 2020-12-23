import React from 'react';
import Header from '../header/header';
import '../form/form.css';
import Aviso from '../form/warning.svg';

export default props => {
    return (
        <body id="page-forms">
            <div id="container">

                <Header title="Descubra como seria um
        embrião com seu DNA" subtitle="Preencha todas as informações e receba o seu resultado." />
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
    )
}