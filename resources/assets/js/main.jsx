import React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import Root from './Components/Root';
import reducers from './Reducers';

import Auth0Callback from './Components/UI/Auth0Callback';
import Auth from './Libraries/Auth'
const auth = new Auth();

const store = createStore(reducers);

auth.init(store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Root onLogin={auth.login}>

                <Route path="/auth0" render={({location, history}) => {
                    auth.setHistory(history);
                    auth.handleAuthentication(location, store);
                    return (<Auth0Callback />);
                }} />

            </Root>
        </Router>
    </Provider>
    , document.getElementById('root')
);
