const user = (state = false, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                access_token: action.access_token,
                id_token: action.id_token,
                expires_at: action.expires_at,
                user: action.user
            };
        case 'USER_LOGOUT':
            return false;
        default:
            return state;
    }
}

export default user
