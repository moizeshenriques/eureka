import React from 'react';

export default props => {

    return (
        <body id="page-forms">
            <div id="container">
                <header className="page-header">
                    <div className="top-bar-container">
                        <a href="/">
                            <img src="" alt="" />
                        </a>

                    
                    </div>

                    <div className="header-content">
                        <strong>Que incrível que você quer aprender</strong>
                        <p>O primeiro passo, é preencher esse formulário de inscrição.</p>
                        <p>OBS: se você já preencheu, não precisa preencher novamente. <a href="/">Clique aqui!</a></p>
                    </div>


                </header>

                <main>
                    <form action="" id="create-class">
                        <fieldset>
                            <legend>Seus dados</legend>

                            <div className="input-block">
                                <label for="name">Nome completo</label>
                                <input name="name" id="name" required />
                            </div>

                            <div className="input-block">
                                <label for="year">Em qual ano escolar você se encontra? <small>Se não estuda mais, coloque "não estudo".</small></label>
                                <input name="year" id="year" required />
                            </div>

                            <div className="input-block">
                                <label for="age">Informe sua idade <small>Ex.: 18 anos</small></label>
                                <input name="age" id="age" type="number" required />
                            </div>

                            <div className="textarea-block">
                                <label for="question">O que você mais gosta em genética?</label>
                                <textarea name="question" id="question" required></textarea>
                            </div>
                        </fieldset>
                    </form>

                    <footer>
                        <p>
                            <img src="" alt="Aviso importante" />
                            Importante! <br /> Preencha todos os dados
                        </p>
                        <button type="submit" form="create-class">Salvar cadastro</button>
                    </footer>
                </main>
            </div>
        </body>
    )
}