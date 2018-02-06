import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';

import App from './App';
// import './scss/main.scss';
import reducers from './page/reducers'
import web3Service from './services/web3';
import IntlWrapper from './component/IntlWrapper';
require('./polyfill');

let store = createStore(
    reducers,
    applyMiddleware(thunk)
);

web3Service.setup(store);

ReactDOM.render(
    <Provider store={store}>
        <IntlWrapper>
            <App/>
        </IntlWrapper>
    </Provider>,
    document.getElementById('root')
);


window.addEventListener('load', () => {
    web3Service.initAccountCheck();
});