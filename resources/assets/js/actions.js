export const userLogin = (access_token, id_token, expires_at, details) => {
    return {
        type: 'USER_LOGIN',
        access_token: access_token,
        id_token: id_token,
        expires_at: expires_at,
        details: details
    }
}

export const userLogout = () => {
    return {
        type: 'USER_LOGOUT'
    }
}
