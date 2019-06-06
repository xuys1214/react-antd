import React from 'react';
import ReactDom from 'react-dom';
import Hello from './components/Hello';

import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu';
import getRouter from './router';
import { Provider } from 'react-redux';
import store from './redux/store';

import '../mock/mock';

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Menu />
            {getRouter()}
        </Router>
    </Provider>,
    document.getElementById('app')
)