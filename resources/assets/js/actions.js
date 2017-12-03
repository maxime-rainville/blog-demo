export const userLogin = (access_token, id_token, expires_at, user) => {
    return {
        type: 'USER_LOGIN',
        access_token: access_token,
        id_token: id_token,
        expires_at: expires_at,
        user: user
    }
}

export const userLogout = (access_token, id_token, expires_at, user) => {
    return {
        type: 'USER_LOGOUT'
    }
}
