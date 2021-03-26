import React from 'react';
import LandingPage from './components/landing-page/landing-page';
import Form from './components/form/formulario';
import Modulos from './components/modulos/modulos';
import PageOne from './components/study-pages/pages/page-one';
import FutureYou from './components/future-you/future-you';
import PainelInspiracao from './components/inspirational-panel/inspirational-panel';

import { Route, Switch } from 'react-router-dom';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/form" >
                <Form />
            </Route>
            <Route exact path="/form/modulos">
                <Modulos />
            </Route>
            <Route exact path="/form/modulos/page-one">
                <PageOne />
            </Route>
            <Route exact path="/form/modulos/future-you">
                <FutureYou />
            </Route>
            <Route exact path="/form/modulos/inspirational-panel">
                <PainelInspiracao />
            </Route>
        </Switch>
    );
}