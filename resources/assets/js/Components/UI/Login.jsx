import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';

const Login = ({user, onLogin}) => (
    <div>
        {user ? (<AccountCircle />) : <Button color="contrast" onClick={onLogin}>Login</Button>}
    </div>
)

Login.defaultProps = {
    user: false
}

Login.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
    ]),
    onLogin: PropTypes.func
}

export default Login;
