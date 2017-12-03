import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    Auth0Callback: {
        heigth: '100%',
        marginTop: theme.spacing.unit * 3,
    },
});

const Auth0Callback = ({classes}) => (
    <div className={classes.Auth0Callback}>
        <CircularProgress size={100} />
    </div>
)

Auth0Callback.defaultProps = {

}

Auth0Callback.propTypes = {

}

export default withStyles(styles)(Auth0Callback);
