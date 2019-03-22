import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './components/App';

export const Routes = () => ( <Switch><Route exact path = "/" component = { App } ></Route></Switch>);

export default Routes;