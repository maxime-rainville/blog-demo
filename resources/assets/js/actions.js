import fetch from 'cross-fetch'

export const userLogin = (access_token, id_token, expires_at, details) => {
    return {
        type: 'USER_LOGIN',
        access_token: access_token,
        id_token: id_token,
        expires_at: expires_at,
        details: details,
        isAdmin: details.role === 'ADMIN'
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}

export const userValidate = () => {
    return (dispatch, getState) => {
        // dispatch(requestPosts(subreddit))

        const state = getState();

        const myHeaders = {};
        if (state.user) {
            console.log('adding header');
            myHeaders['Authorization'] = `Bearer ${state.user.id_token}`;
        }

        const myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors'
        };

        console.dir(myInit);

        return fetch(`/api/user`, myInit)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
  }
}
