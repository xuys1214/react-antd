import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Counter from './pages/redux/counter'
import User from './pages/user/index';


const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/counter" component={Counter} />
        <Route path="/user" component={User} />
    </Switch>
)

export default getRouter;