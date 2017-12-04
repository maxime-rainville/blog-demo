const post = (state = {loading:false, posts: []}, action) => {
    switch (action.type) {
        case 'POST_FETCHING':
            return Object.assign({}, state, {loading: true});
        case 'POST_RECEIVE':
            return {loading: false, posts: action.posts};
        default:
            return state;
    }
}

export default post
