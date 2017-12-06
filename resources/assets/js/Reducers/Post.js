const post = (state = {loading:false, posts: [], fullpost: false}, action) => {
    switch (action.type) {
        case 'POST_FETCHING':
            return Object.assign({}, state, {loading: true});
        case 'POST_RECEIVE':
            return Object.assign({}, state, {loading: false, posts: action.posts});
        case 'POST_FETCHING_FULL':
            return Object.assign({}, state, {loading: true, fullpost: false });
        case 'POST_RECEIVE_FULL':
            return Object.assign({}, state, {loading: false, fullpost: action.post });
        default:
            return state;
    }
}

export default post
