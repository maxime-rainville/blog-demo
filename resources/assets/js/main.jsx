// Get React dependencies
import React from 'react';
import * as ReactDOM from 'react-dom';

// Get Redux Depednecies
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import reducers from './Reducers';
import {fetchPosts, fetchPostFull} from './actions';

// Get the routing dependencies
import { Route } from 'react-router'
import { ConnectedRouter as Router, routerMiddleware, push } from 'react-router-redux'
import { history } from './history'

// Get our Auth Dependencies
import Auth from './Libraries/Auth'

// Get our own Components
import Loading from './Components/UI/Loading';
import PostList from './Components/Container/PostList';
import FullPost from './Components/Container/FullPost';
import Root from './Components/Root';

// Initialise our routing
const middleware = routerMiddleware(history)

const store = createStore(
    reducers,
    applyMiddleware(middleware, thunkMiddleware)
)

// Initialise our Auth library
const auth = new Auth(store, history);
auth.init();

// Fetch our Posts
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Root onLogin={auth.login} onLogout={auth.logout}>

                <Route exact path="/" render={() => {
                    store.dispatch(fetchPosts());
                    return <PostList />
                }} />
                <Route exact path="/:id" render={({match: {params: {id}}}) => {
                    store.dispatch(fetchPostFull(id));
                    return (<FullPost post={{title: 'hello', content:'<p>hello</p>'}} />);
                }} />
                <Route path="/auth0" render={({location}) => {
                    auth.handleAuthentication(location);
                    return (<Loading />);
                }} />

            </Root>
        </Router>
    </Provider>
    , document.getElementById('root')
);
