import { Component } from 'react';
import './landing-page.css';
import Heart from "../landing-page/blue-heart.png";
import Sublogo from "../landing-page/genetic-scientists.jpg";

export default class LandingPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="logo">
                    <h1>εύrekα</h1>

                    <div className="recepcao">
                        <h2>Sua plataforma online de estudos sobre genética.</h2>
                        <p>Explore o que há de melhor em você!</p>
                    </div>
                </div>

                <div id="main-content">
                    <img src={Sublogo} alt="Cientistas Genéticos fazendo estudo" width="95%" />
                </div>

                <div className="main-frase">
                    <p>Deixe que a Genética inspire você e te  informe de tudo.</p>
                    <img src={Heart} alt="Coração Azul" width="5%" />
                </div>

                <div id="button-container">
                    <button className="button-content">
                        <text className="button-text">Vamos Estudar</text>
                    </button>
                </div>
            </div>
        );
    }
}