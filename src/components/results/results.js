import "./results.css";
import Genetic from "../../../public/favicon.png";
import {BloodResult, RHResult, DaltonismResult, HemofilicResult, AlbinismResult} from '../../testConditions';
import { closeResults } from "../../provider";

export function Results() {

    return (
        <body className="overLay">
            <div className="container">
                <header>
                    <img src={Genetic} alt="parte de um DNA"/>
                    <h2>Aqui está o seu resultado</h2>
                </header>

                <div>
                    <strong>TIPO SANGUÍNEO:</strong>
                    <p>{BloodResult}</p>

                    <strong>RH:</strong>
                    <p>{RHResult}</p>

                    <strong>DALTÔNICO?:</strong>
                    <p>{DaltonismResult}</p>

                    <strong>HEMOFÍLICO?</strong>
                    <p>{HemofilicResult}</p>

                    <strong>ALBINO?</strong>
                    <p>{AlbinismResult}</p>
                </div>

                <footer>
                    <img src="" alt="print/shotscreen"/>
                    <p>TIRE UM PRINT</p>
                </footer>

                <button onClick={closeResults()}>
                    <img src="" alt="Fechar modal"/>
                </button>
            </div>
        </body>
    );
}