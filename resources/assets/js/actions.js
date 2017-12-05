// import fetch from 'cross-fetch'

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

export const editingSave = () => {
    return (dispatch, getState) => {
        const state = getState();

        const myHeaders = {};
        if (state.user) {
            myHeaders['Authorization'] = `Bearer ${state.user.id_token}`;
        }

        const form = new FormData();
        form.append('title', state.editing.title);
        form.append('content', state.editing.content);

        console.dir(state.editing.content)
        dispatch(editingSaving())

        const myInit = {
            method: 'POST',
            headers: myHeaders,
            body: form
        };

        return fetch(`/api/posts`, myInit)
            .then(response => response.json())
            .then(json => console.dir(json))
    }
}

export const editingSaving = () => ({
    type: 'EDITING_SAVING',
})

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

export const editingCancel = () => ({
    type: 'EDITING_CANCEL',
})

export const editingTitleChange = (value) => ({
    type: 'EDITING_TITLE_CHANGE',
    value
})

export const editingContentChange = (value) => ({
    type: 'EDITING_CONTENT_CHANGE',
    value
})
