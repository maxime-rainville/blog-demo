import auth0 from 'auth0-js';
import { userLogin, userLogout } from '../actions';

export default class Auth {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'rainville.au.auth0.com',
            clientID: 'uIE6NhBJsPc23dGWmc5gbzzopVs9al6v',
            redirectUri: 'http://blog.rainville.local/auth0',
            audience: 'https://rainville.au.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.init = this.init.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    init(store) {
        const user = localStorage.getItem('user');
        if (user) {
            store.dispatch(userLogin(
                localStorage.getItem('authResult.accessToken'),
                localStorage.getItem('authResult.idToken'),
                localStorage.getItem('expiresAt'),
                user
            ));
        } else {
            store.dispatch(userLogout());
        }
    }

    setHistory(history) {
        this.history = history;
    }

    handleAuthentication(location, store) {
        if (!/access_token|id_token|error/.test(location.hash)) {
            console.error('handleAuthentication shouldn\'t be call without proper location parameter');
            this.history.replace('/home');
            return;
        }

        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult, store);
            } else if (err) {
                this.history.replace('/home');
                console.log(err);
            }
        });
    }

    setSession(authResult, store) {
        // Set the time that the access token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('user', authResult.idTokenPayload);

        console.dir(userLogin(
            authResult.accessToken,
            authResult.idToken,
            expiresAt,
            authResult.idTokenPayload
        ));

        store.dispatch(userLogin(
            authResult.accessToken,
            authResult.idToken,
            expiresAt,
            authResult.idTokenPayload
        ));


        // navigate to the home route
        this.history.replace('/home');
    }

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.setItem('user', false);
        // navigate to the home route
        this.history.replace('/');
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
