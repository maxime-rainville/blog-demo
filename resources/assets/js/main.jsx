import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'


import reducers from './Reducers';
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

import Auth0Callback from './Components/UI/Auth0Callback';
import Auth from './Libraries/Auth'
const auth = new Auth(store);

import Root from './Components/Root';

auth.init();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root onLogin={auth.login} onLogout={auth.logout}>

                <Route path="/auth0" render={({location, history}) => {
                    auth.setHistory(history);
                    auth.handleAuthentication(location);
                    return (<Auth0Callback />);
                }} />

            </Root>
        </Router>
    </Provider>
    , document.getElementById('root')
);
