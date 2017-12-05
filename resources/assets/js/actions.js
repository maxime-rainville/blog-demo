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
            method: 'POST',
            headers: myHeaders,
            mode: 'cors'
        };

        console.dir(myInit);

        return fetch(`/api/posts`, myInit)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(subreddit, json)))
    }
}

export const fetchPosts = () => {
    return (dispatch, getState) => {
        // dispatch(requestPosts(subreddit))
        return fetch(`/api/posts`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)))
    }
}

export const loadingPosts = () => {
    return {
        type: 'POST_LOADING',
    }
}

export const receivePosts = (posts) => {
    return {
        type: 'POST_RECEIVE',
        posts
    }
}

export const editingNewPost = () => ({
    type: 'EDITING_NEW_POST',
})
