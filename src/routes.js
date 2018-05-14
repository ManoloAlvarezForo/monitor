import React from 'react';
import { Route, Switch } from 'react-router-dom'
import App from './App';

//Containers
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import Error404Page from './containers/Error404Page';

const Routes = () => {
    return (
        <App>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={LoginPage} />
                <Route component={Error404Page} />
            </Switch>
        </App>
    )
}

export default Routes;
