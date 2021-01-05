import React from 'react';
import LandingPage from './components/landing-page/landing-page';
import Form from './components/form/formulario';
import Modulos from './components/modulos/modulos';
import PageOne from './components/study-pages/pages/page-one';

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
        </Switch>
    );
}