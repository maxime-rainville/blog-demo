import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Login from './Container/Login';
import Grid from 'material-ui/Grid';


const styles = theme => ({
  root: {
    width: '100%',
    minHeight: '100%'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  grid: {
      height: '100%'
  }
});

function Root(props) {
  const { classes, children, onLogin, onLogout } = props;
  return (
<div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
                <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
                Title
            </Typography>
            <Login onLogin={onLogin} onLogout={onLogout} />
        </Toolbar>
    </AppBar>

    <Grid container justify="center" className={classes.grid}>
        {children}
    </Grid>

</div>
  );
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
  onLogin: PropTypes.func,
  onLogout: PropTypes.func
};

export default withStyles(styles)(Root);
