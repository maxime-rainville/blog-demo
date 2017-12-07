import auth0 from 'auth0-js';
import { userLogin, userLogout } from '../actions';

export default class Auth {

    constructor(store, history) {
        this.auth0 = new auth0.WebAuth(window.auth0_client);

        this.init = this.init.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);

        this.store = store;
        this.history = history;
    }

    init() {
        const user = localStorage.getItem('user');
        if (user) {

            this.store.dispatch(userLogin(
                localStorage.getItem('access_token'),
                localStorage.getItem('id_token'),
                localStorage.getItem('expires_at'),
                JSON.parse(user)
            ));
        } else {
            this.store.dispatch(userLogout());
        }
    }
    //
    // setHistory(history) {
    //     this.history = history;
    // }

    handleAuthentication(location) {
        if (!/access_token|id_token|error/.test(location.hash)) {
            console.error('handleAuthentication shouldn\'t be call without proper location parameter');
            this.history.replace('/');
            return;
        }

        this.auth0.parseHash((err, authResult) => {
            console.dir(authResult);
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                this.history.replace('/');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        console.dir(authResult);

        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user', JSON.stringify(authResult.idTokenPayload));

        this.store.dispatch(userLogin(
            authResult.accessToken,
            authResult.idToken,
            expiresAt,
            authResult.idTokenPayload
        ));

        // navigate to the home route
        this.history.replace('/');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user');

        this.store.dispatch(userLogout());
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }


    login() {
        this.auth0.authorize();
    }
}
