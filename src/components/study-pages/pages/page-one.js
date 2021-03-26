import React from 'react';
import Header from '../header/header';
import Gregor from '../../modulos/gregor-mendel.jpg';
import '../../form/form.css';
import '../css/page-one.css';

export default class PageOne extends React.Component {
    render() {
        return (
            <body id="page-one">
                <div id="container">
                    <Header />

                    <div id="information-container">
                        <div class="image-top">
                            <img src={Gregor} alt="Gregor Mendel, pai da genética" width="50%" />
                        </div>
                        <div class="curiosity">
                            <h1>O que é genética</h1>
                            <p class="vs">Você sabia?</p>
                            <p class="text-top">
                                Gregor Johann Mendel foi um biólogo, botânico, monge agostiniano e meteorologista austríaco. 
                                Em 1865, formula e apresenta em dois encontros da Sociedade de História Natural de Brno as leis 
                                da hereditariedade, hoje chamadas Leis de Mendel, que regem a transmissão dos caracteres 
                                hereditários, sendo hoje conhecido como “Pai da Genética”.
                            </p>
                        </div>
                    </div>

                    <div id="content-box">
                        <p>
                            A genética é a parte da ciência que estuda a hereditariedade, a estrutura e função dos genes e a 
                            variação dos seres vivos. É através da genética que buscamos compreender os mecanismos e leis de 
                            transmissão das características através das gerações.
                        </p>

                        <p>
                            Os primeiros estudos da genética na ciência moderna iniciaram-se com o monge austríaco Gregor Mendel,
                             na década de 1860. Realizando cruzamentos entre linhagens de ervilhas, ele observou a existência de 
                             “fatores” distintos que eram transmitidos dos genitores para a prole. Os padrões de herança observados
                              por Mendel correspondem aos padrões de distribuição dos cromossomos nos gametas no processo da meiose.
                               Mais tarde, com o aprofundamento das pesquisas, os “fatores” foram chamados de genes.
                        </p>
                    </div>

                    <div id="button-container">
                        <button class="button">Vamos Prosseguir</button>
                    </div>
                </div>
            </body>
        );
    }
}