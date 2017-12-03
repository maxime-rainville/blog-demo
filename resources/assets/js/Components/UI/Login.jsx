import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    Login: {
        display: 'flex'
    },
});

const Login = ({user, onLogin, onLogout, classes, onValidate}) => {
    let avatar
    let button
    if (user) {
        if (user.details.picture) {
            avatar = <Avatar alt={user.details.name} src={user.details.picture} />
        } else {
            avatar = <AccountCircle />
        }
        button = <Button onClick={onLogout}>Logout</Button>
    } else {
        button = <Button onClick={onLogin}>Login</Button>
    }

    return (
    <div className={classes.Login}>
        {avatar}
        {user && (<span>{user.name}</span>)}
        {button}
        <Button onClick={onValidate}>Validate</Button>
    </div>
)}

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

export default withStyles(styles)(Login);
