import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

const styles = theme => ({
  button: {
    bottom: theme.spacing.unit*3,
    right: theme.spacing.unit*3,
    position: 'fixed',
  },
});

const CreatePostButton = ({onClick, show, classes}) => (
    <div>
        {show && (<Button fab color="primary" aria-label="add" className={classes.button} onClick={onClick}>
            <AddIcon />
        </Button>)}
    </div>
);


export default withStyles(styles)(CreatePostButton);
