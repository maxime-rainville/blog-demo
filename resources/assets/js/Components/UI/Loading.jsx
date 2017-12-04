import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'material-ui/Progress';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    Loading: {
        heigth: '100%',
        marginTop: theme.spacing.unit * 3,
    },
});

const Loading = ({classes}) => (
    <div className={classes.Loading}>
        <CircularProgress size={100} />
    </div>
)

export default withStyles(styles)(Loading);
