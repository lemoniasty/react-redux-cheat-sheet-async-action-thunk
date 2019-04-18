// Step 1
//  Import basic dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// Step 5
//  Importing middleware - also in import {applyMiddleware} from 'redux'.
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Step 6
//  Applying middleware as a second argument of createStore function.
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
);