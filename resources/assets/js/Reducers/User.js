const user = (state = false, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                access_token: action.access_token,
                id_token: action.id_token,
                expires_at: action.expires_at,
                details: action.details,
                isAdmin: action.isAdmin
            };
        case 'USER_LOGOUT':
            return false;
        case 'USER_VALIDATE':
            return Object.assign({}, state, {isValid: action.isValid});
        default:
            return state;
    }
}

export default user
